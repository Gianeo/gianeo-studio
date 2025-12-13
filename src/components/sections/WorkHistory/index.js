"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo, memo } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRightIcon, TrendUpIcon, TrendDownIcon, GlobeIcon, } from "@phosphor-icons/react";
import { ExternalLinkIcon } from "lucide-react";
// Import the updated data structure
import { workHistoryData } from "./data";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/media/LazyImage";
import { SectionBanner } from "@/components/primitives/SectionBanner";
// Memoized optimized image component
const OptimizedImageContainer = memo(({ item, experienceId, className = "", priority = false }) => {
    const [hasError, setHasError] = useState(false);
    // Lazy loading with intersection observer (for text blocks too)
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        skip: priority,
        rootMargin: '50px',
    });
    if (hasError)
        return null;
    const shouldLoad = priority || inView;
    if (item.type === 'image' && item.src) {
        return (_jsx("figure", { ref: ref, className: `relative overflow-hidden rounded-lg ${className}`, role: "img", "aria-label": item.alt || `Work sample from ${experienceId}`, children: shouldLoad && (_jsx(LazyImage, { image: { src: item.src, alt: item.alt || `Work sample showcasing ${experienceId} project deliverables` }, containerClassName: "h-full w-full", overlayClassName: "from-primary/10 to-accent/10", priority: priority, quality: 85, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" })) }));
    }
    return null;
});
OptimizedImageContainer.displayName = 'OptimizedImageContainer';
// Memoized text container component
const TextContainer = memo(({ content, className = "" }) => {
    const lines = content.split('\n').filter(line => line.trim());
    return (_jsx("div", { className: `rounded-lg w-full bg-neutral-100 flex items-center text-xs text-neutral-600 aspect-[4/3] p-4 ${className}`, role: "text", "aria-label": `Key metrics: ${lines.join(', ')}`, children: _jsx("div", { className: "font-mono text-left max-w-sm mx-auto", children: _jsx("div", { className: "space-y-1", children: lines.map((line, index) => (_jsx("div", { className: "text-xs font-normal", children: line }, index))) }) }) }));
});
TextContainer.displayName = 'TextContainer';
// Memoized achievement value renderer
const AchievementValue = memo(({ value }) => {
    switch (value) {
        case "Significant":
            return _jsx(TrendUpIcon, { size: 24, className: "text-primary", "aria-label": "Significant improvement" });
        case "Reduced":
            return _jsx(TrendDownIcon, { size: 24, className: "text-primary", "aria-label": "Reduced metrics" });
        case "International":
            return _jsx(GlobeIcon, { size: 24, className: "text-primary", "aria-label": "International scope" });
        default:
            return _jsx("span", { className: "text-2xl font-heading font-medium text-primary", children: value });
    }
});
AchievementValue.displayName = 'AchievementValue';
// Memoized external link button component
const ExternalLinkButton = memo(({ url, company }) => (_jsx(Button, { asChild: true, size: "lg", variant: "primary", className: "btn", children: _jsxs(Link, { href: url, target: "_blank", rel: "noopener noreferrer", "aria-label": `Visit ${company} website (opens in new tab)`, children: [_jsx(ExternalLinkIcon, { size: 16, "aria-hidden": "true" }), "Visit ", company] }) })));
ExternalLinkButton.displayName = 'ExternalLinkButton';
// Memoized grid gallery component
const GridGallery = memo(({ gridItems, experienceId, companyName, priority = false }) => {
    if (gridItems.length === 0)
        return null;
    return (_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1", role: "region", "aria-label": `${companyName} project gallery`, children: [_jsxs("div", { className: "sr-only", children: [_jsxs("h4", { children: ["Project Gallery for ", companyName] }), _jsxs("p", { children: ["Visual examples and key metrics from work completed at ", companyName] })] }), gridItems.map((item, index) => (_jsx("div", { className: "w-full aspect-[4/3] group", children: item.type === 'image' ? (_jsx(OptimizedImageContainer, { item: item, experienceId: experienceId, className: "w-full h-full", priority: priority && index === 0 })) : (_jsx(TextContainer, { content: item.content || '', className: "w-full h-full" })) }, `${experienceId}-${item.id}`)))] }));
});
GridGallery.displayName = 'GridGallery';
// Memoized work experience entry component
const WorkExperienceEntry = memo(({ experience, isFirst = false }) => {
    // Generate structured data for this work experience
    const workExperienceStructuredData = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "WorkExperience",
        "identifier": experience.id,
        "name": `${experience.role} at ${experience.company}`,
        "description": experience.description,
        "startDate": experience.startDate,
        "endDate": experience.endDate === 'current' ? new Date().toISOString().split('T')[0] : experience.endDate,
        "employer": {
            "@type": "Organization",
            "name": experience.company,
            "url": experience.buttonUrl || `https://${experience.company.toLowerCase().replace(/\s+/g, '')}.com`
        },
        "jobTitle": experience.role,
        "workLocation": experience.location || "London, UK",
        "responsibilities": experience.keyResponsibilities,
        "skills": experience.keyResponsibilities.map(resp => resp.includes('design') ? 'Design Leadership' :
            resp.includes('team') ? 'Team Management' :
                resp.includes('system') ? 'Design Systems' :
                    'Product Strategy').filter((skill, index, self) => self.indexOf(skill) === index)
    }), [experience]);
    // Memoized company info section
    const CompanyInfo = memo(() => (_jsx("aside", { className: "col-span-12 lg:col-span-2", children: _jsxs("div", { className: "sticky top-24 px-6 lg:px-12", children: [_jsx("time", { className: "text-xs font-mono text-muted-foreground mb-2 block", dateTime: `${experience.startDate}/${experience.endDate}`, "aria-label": `Employment period: ${experience.duration}`, children: experience.duration }), _jsx("h3", { className: "font-copy font-semibold text-xl lg:text-base xl:text-xl tracking-normal leading-none mb-1", children: experience.company }), _jsxs("p", { className: "text-sm text-muted-foreground font-mono sr-only", children: ["Role: ", experience.role] })] }) })));
    CompanyInfo.displayName = 'CompanyInfo';
    // Memoized content section
    const ContentSection = memo(() => (_jsx("div", { className: "col-span-12 lg:col-span-4", children: _jsxs("article", { className: "space-y-6 md:space-y-10", children: [_jsxs("header", { className: "space-y-8", children: [_jsx("h3", { className: "font-heading font-bold text-5xl heading-normal leading-13 max-w-lg lg:-mt-1.5", id: `work-${experience.id}`, children: experience.title }), _jsx("div", { className: "font-copy text-muted-foreground text-base prose-optimized max-w-lg", "aria-describedby": `work-${experience.id}`, children: experience.description.split('\n').map((paragraph, index) => (_jsx("p", { className: index > 0 ? 'mt-4' : '', children: paragraph }, index))) })] }), _jsxs("section", { "aria-labelledby": `responsibilities-${experience.id}`, children: [_jsxs("h4", { id: `responsibilities-${experience.id}`, className: "sr-only", children: ["Key Responsibilities at ", experience.company] }), _jsx("div", { className: "max-w-2xl", children: _jsx("ul", { className: "space-y-1.5 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8", role: "list", "aria-label": `Key achievements and responsibilities at ${experience.company}`, children: experience.keyResponsibilities.map((responsibility, index) => (_jsxs("li", { className: "flex items-start gap-3 text-xs font-copy text-muted-foreground", role: "listitem", children: [_jsx("span", { className: "size-2 rounded-full bg-primary mt-1 flex-shrink-0", "aria-hidden": "true" }), _jsx("span", { children: responsibility })] }, index))) }) })] }), experience.buttonUrl && (_jsx("div", { className: "pt-4", children: _jsx(ExternalLinkButton, { url: experience.buttonUrl, company: experience.company }) }))] }) })));
    ContentSection.displayName = 'ContentSection';
    return (_jsxs("article", { className: "grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 xl:gap-8", "aria-labelledby": `work-${experience.id}`, children: [_jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
                    __html: JSON.stringify(workExperienceStructuredData),
                } }), _jsx(CompanyInfo, {}), _jsxs("div", { className: "col-span-12 lg:col-span-10 px-6 lg:px-0 space-y-10 md:space-y-14", children: [_jsx(ContentSection, {}), experience.gridItems && experience.gridItems.length > 0 && (_jsx(GridGallery, { gridItems: experience.gridItems, experienceId: experience.id, companyName: experience.company, priority: isFirst }))] })] }));
});
WorkExperienceEntry.displayName = 'WorkExperienceEntry';
export default function WorkHistory({ experiences = workHistoryData, }) {
    // Generate overall work history structured data
    const workHistoryStructuredData = useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Gianni Favaretto",
        "hasOccupation": experiences.map(exp => ({
            "@type": "Occupation",
            "name": exp.role,
            "occupationLocation": exp.location || "London, UK",
            "employer": {
                "@type": "Organization",
                "name": exp.company
            },
            "startDate": exp.startDate,
            "endDate": exp.endDate === 'current' ? new Date().toISOString().split('T')[0] : exp.endDate
        })),
        "workExample": experiences.map(exp => ({
            "@type": "CreativeWork",
            "name": exp.title,
            "description": exp.description,
            "creator": "Gianni Favaretto",
            "dateCreated": exp.startDate,
            "industry": exp.company.includes('Bank') ? 'Financial Services' :
                exp.company.includes('Ocado') ? 'E-commerce' :
                    exp.company.includes('Chargebee') ? 'SaaS' : 'Technology'
        }))
    }), [experiences]);
    // Memoize experiences to prevent unnecessary recalculations
    const memoizedExperiences = useMemo(() => experiences, [experiences]);
    return (_jsxs("section", { className: "min-h-screen bg-background text-foreground", children: [_jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
                    __html: JSON.stringify(workHistoryStructuredData),
                } }), _jsx(SectionBanner, { icon: _jsx(ArrowRightIcon, { size: 16, "aria-hidden": "true" }), label: "Work History" }), _jsxs("div", { className: "py-6 sm:py-8 space-y-16 sm:space-y-24 lg:space-y-32 xl:space-y-48", role: "main", "aria-label": "Professional work experience and portfolio", children: [_jsxs("div", { className: "sr-only", children: [_jsx("h2", { children: "Professional Work Experience" }), _jsxs("p", { children: ["Detailed overview of ", memoizedExperiences.length, " professional positions spanning ", new Date().getFullYear() - 1999, "+ years of design and leadership experience."] })] }), memoizedExperiences.map((experience, index) => (_jsx(WorkExperienceEntry, { experience: experience, isFirst: index === 0 }, experience.id)))] })] }));
}
