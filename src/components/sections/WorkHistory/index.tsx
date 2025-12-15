"use client";

import { useMemo, memo } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  TrendUpIcon,
  TrendDownIcon,
  GlobeIcon,
} from "@phosphor-icons/react";
import { ExternalLinkIcon } from "lucide-react";

// Import the updated data structure
import { workHistoryData, WorkExperience, GridItem } from "./data";
import { Button } from "@/components/ui/button";
import { SectionBanner } from "@/components/primitives/SectionBanner";
import { GalleryGrid } from "@/components/media/GalleryGrid";

interface WorkHistoryProps {
  experiences?: WorkExperience[];
}

// Memoized text container component
const TextContainer = memo(({
  content,
  className = ""
}: {
  content: string;
  className?: string;
}) => {
  const lines = content.split('\n').filter(line => line.trim());

  return (
    <div 
      className={`rounded-lg w-full bg-neutral-100 flex items-center body-base text-neutral-600 aspect-4/3 p-4 ${className}`}
      role="text"
      aria-label={`Key metrics: ${lines.join(', ')}`}
    >
      <div className="font-mono text-left max-w-sm mx-auto">
        <div className="space-y-1">
          {lines.map((line, index) => (
            <div
              key={index}
              className="body-base font-normal">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

TextContainer.displayName = 'TextContainer';

// Memoized achievement value renderer
const AchievementValue = memo(({ value }: { value: string }) => {
  switch (value) {
    case "Significant":
      return <TrendUpIcon size={24} className="text-primary" aria-label="Significant improvement" />;
    case "Reduced":
      return <TrendDownIcon size={24} className="text-primary" aria-label="Reduced metrics" />;
    case "International":
      return <GlobeIcon size={24} className="text-primary" aria-label="International scope" />;
    default:
      return <span className="heading-base text-primary">{value}</span>;
  }
});

AchievementValue.displayName = 'AchievementValue';

// Memoized external link button component
const ExternalLinkButton = memo(({
  url,
  company
}: {
  url: string;
  company: string;
}) => (
  <Button asChild size="lg" variant="primary" className="btn">
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${company} website (opens in new tab)`}
    >
      <ExternalLinkIcon size={16} aria-hidden="true" />
      Visit {company}
    </Link>
  </Button>
));

ExternalLinkButton.displayName = 'ExternalLinkButton';

// Memoized grid gallery component
const GridGallery = memo(({ gridItems, experienceId, companyName }: {
  gridItems: GridItem[];
  experienceId: string;
  companyName: string;
}) => {
  if (gridItems.length === 0) return null;

  const images = gridItems
    .filter((item) => item.type === "image" && item.src)
    .map((item, idx) => ({
      id: `${experienceId}-${item.id ?? idx}`,
      src: item.src as string,
      alt: item.alt || `Work sample showcasing ${experienceId}`,
    }));

  const textItems = gridItems.filter((item) => item.type === "text");

  return (
    <div role="region" aria-label={`${companyName} project gallery`} className="space-y-2">
      <div className="sr-only">
        <h4>Project Gallery for {companyName}</h4>
        <p>Visual examples and key metrics from work completed at {companyName}</p>
      </div>

      <GalleryGrid images={images} layout="highlight" className="w-full" />

      {textItems.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {textItems.map((item, idx) => (
            <TextContainer
              key={`${experienceId}-text-${idx}`}
              content={item.content || ""}
              className="w-full"
            />
          ))}
        </div>
      )}
    </div>
  );
});

GridGallery.displayName = 'GridGallery';

// Memoized work experience entry component
const WorkExperienceEntry = memo(({
  experience,
  isFirst = false
}: {
  experience: WorkExperience;
  isFirst?: boolean;
}) => {
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
    "skills": experience.keyResponsibilities.map(resp =>
      resp.includes('design') ? 'Design Leadership' :
        resp.includes('team') ? 'Team Management' :
          resp.includes('system') ? 'Design Systems' :
            'Product Strategy'
    ).filter((skill, index, self) => self.indexOf(skill) === index)
  }), [experience]);

  // Memoized company info section
  const CompanyInfo = memo(() => (
    <aside className="col-span-12 lg:col-span-2">
      <div className="sticky top-24 px-6 lg:px-12">
        <time 
          className="body-sm mb-2 block"
          dateTime={`${experience.startDate}/${experience.endDate}`}
          aria-label={`Employment period: ${experience.duration}`}
        >
          {experience.duration}
        </time>
        <h3 className="heading-sm leading-none mb-1">
          {experience.company}
        </h3>
        <p className="body-sm font-mono sr-only">
          Role: {experience.role}
        </p>
      </div>
    </aside>
  ));

  CompanyInfo.displayName = 'CompanyInfo';

  // Memoized content section
  const ContentSection = memo(() => (
    <div className="col-span-12 lg:col-span-4">
      <article className="space-y-6 md:space-y-10">
        {/* Work experience header */}
        <header className="space-y-8">
          <h3 
            className="heading-display max-w-xl lg:-mt-1.5"
            id={`work-${experience.id}`}
          >
            {experience.title}
          </h3>
        </header>

        {/* Key Responsibilities */}
        <section aria-labelledby={`responsibilities-${experience.id}`} className="flex gap-16">

          <div 
            className="body-base prose-optimized max-w-lg"
            aria-describedby={`work-${experience.id}`}
          >
            {experience.description.split('\n').map((paragraph, index) => (
              <p key={index} className={index > 0 ? 'mt-4' : ''}>
                {paragraph}
              </p>
            ))}
          </div>

          <h4 id={`responsibilities-${experience.id}`} className="sr-only">
            Key Responsibilities at {experience.company}
          </h4>

          <div className="max-w-2xl space-y-8">
            <ul 
              className="space-y-1.5 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
              role="list"
              aria-label={`Key achievements and responsibilities at ${experience.company}`}
            >
              {experience.keyResponsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 body-base"
                  role="listitem"
                >
                  <span 
                    className="size-2 rounded-full mt-1 shrink-0" 
                    aria-hidden="true"
                  />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>

            {/* External Link Button */}
            {experience.buttonUrl && (
              <div className="pt-4">
                <ExternalLinkButton
                  url={experience.buttonUrl}
                  company={experience.company}
                />
              </div>
            )}
          </div>
        </section>
      </article>
    </div>
  ));

  ContentSection.displayName = 'ContentSection';

  return (
    <article
      className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 xl:gap-8"
      aria-labelledby={`work-${experience.id}`}
    >
      {/* Structured data for this work experience */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workExperienceStructuredData),
        }}
      />

      <CompanyInfo />
      <div className="col-span-12 lg:col-span-10 px-6 lg:px-0 space-y-10 md:space-y-14">
        <ContentSection />

        {/* Project Gallery */}
        {experience.gridItems && experience.gridItems.length > 0 && (
          <GridGallery
            gridItems={experience.gridItems}
            experienceId={experience.id}
            companyName={experience.company}
          />
        )}
      </div>
    </article>
  );
});

WorkExperienceEntry.displayName = 'WorkExperienceEntry';

export default function WorkHistory({
  experiences = workHistoryData,
}: WorkHistoryProps) {
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

  return (
    <section className="min-h-screen">
      {/* Overall work history structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workHistoryStructuredData),
        }}
      />

      <SectionBanner icon={<ArrowRightIcon size={16} aria-hidden="true" />} label="Work History" />

      {/* Work Experience Entries */}
      <div
        className="py-6 sm:py-8 space-y-16 sm:space-y-24 lg:space-y-32 xl:space-y-48"
        role="main"
        aria-label="Professional work experience and portfolio"
      >
        <div className="sr-only">
          <h2>Professional Work Experience</h2>
          <p>Detailed overview of {memoizedExperiences.length} professional positions spanning {new Date().getFullYear() - 1999}+ years of design and leadership experience.</p>
        </div>

        {memoizedExperiences.map((experience, index) => (
          <WorkExperienceEntry
            key={experience.id}
            experience={experience}
            isFirst={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
