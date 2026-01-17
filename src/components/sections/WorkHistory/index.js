"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { workHistoryData } from "./data";
import { SectionHeader } from "@/components/primitives/SectionHeader";
import { WorkExperienceEntry2 } from "./WorkExperienceEntry2";
export default function WorkHistory({ experiences = workHistoryData, }) {
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
    const memoizedExperiences = useMemo(() => experiences, [experiences]);
    return (_jsxs("section", { className: "min-h-screen", children: [_jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
                    __html: JSON.stringify(workHistoryStructuredData),
                } }), _jsx(SectionHeader, { icon: _jsx(ArrowRightIcon, { size: 16, "aria-hidden": "true" }), label: "History", className: "mb-8 lg:mb-16" }), _jsxs("div", { className: "py-6 sm:py-24 space-y-16 sm:space-y-24 lg:space-y-32 xl:space-y-64", role: "main", "aria-label": "Professional work experience and portfolio", children: [_jsxs("div", { className: "sr-only", children: [_jsx("h2", { children: "Professional Work Experience" }), _jsxs("p", { children: ["Detailed overview of ", memoizedExperiences.length, " professional positions spanning ", new Date().getFullYear() - 1999, "+ years of design and leadership experience."] })] }), memoizedExperiences.map((experience, index) => (_jsx(WorkExperienceEntry2, { experience: experience, index: index, total: memoizedExperiences.length }, experience.id)))] })] }));
}
