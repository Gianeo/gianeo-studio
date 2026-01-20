"use client";

import { memo, useEffect, useMemo, useRef, type ReactNode } from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/media/LazyImage";
import { GridItem, WorkExperience } from "./data";
import { m, useInView, useReducedMotion, useMotionValue, useSpring, useTransform } from "motion/react";
import { getBlindClipPath, getStaggerRange, springPresets, staggerPresets } from "@/system/motion-presets";

const highlightSlots = [
  { span: "md:col-span-4" },
  { span: "md:col-span-8 md:row-span-2" },
  { span: "md:col-span-4" },
  { span: "md:col-span-8 md:row-span-2" },
  { span: "md:col-span-4" },
  { span: "md:col-span-4" },
  { span: "md:col-span-6 md:row-span-2" },
  { span: "md:col-span-6 md:row-span-2" },
];

const placeholderCaption =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";

const ExternalLinkButton = memo(({
  url,
  company
}: {
  url: string;
  company: string;
}) => (
  <Button asChild size="lg" variant="accent" className="btn">
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

ExternalLinkButton.displayName = "ExternalLinkButton";

const GridGallery = memo(({ gridItems, experienceId, companyName }: {
  gridItems: GridItem[];
  experienceId: string;
  companyName: string;
}) => {
  if (gridItems.length === 0) return null;

  const reduceMotion = useReducedMotion();
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const galleryInView = useInView(galleryRef, {
    amount: "some",
    margin: "0px 0px -10% 0px",
    once: true,
  });
  const revealBase = useMotionValue(0);
  const revealProgress = useSpring(revealBase, springPresets.calm);
  useEffect(() => {
    if (reduceMotion || galleryInView) {
      revealBase.set(1);
    }
  }, [galleryInView, reduceMotion, revealBase]);

  const BlindItem = ({
    children,
    index,
    total,
  }: {
    children: ReactNode;
    index: number;
    total: number;
  }) => {
    const [start, end] = getStaggerRange(index, total, staggerPresets.blinds);
    const reveal = useTransform(revealProgress, [start, end], [0, 1]);
    const clipPath = useTransform(
      reveal,
      (value) => getBlindClipPath(value)
    );

    return (
      <m.div
        className="overflow-hidden rounded-none bg-neutral-lighter dark:bg-neutral-darker"
        style={
          reduceMotion
            ? { aspectRatio: "4 / 3" }
            : { aspectRatio: "4 / 3", clipPath, willChange: "clip-path" }
        }
      >
        {children}
      </m.div>
    );
  };

  const orderedItems = [...gridItems].sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
  const totalSlots = orderedItems.length;

  return (
    <div ref={galleryRef} role="region" aria-label={`${companyName} project gallery`} className="space-y-2">
      <div className="sr-only">
        <h4>Project Gallery for {companyName}</h4>
        <p>Visual examples and key metrics from work completed at {companyName}</p>
      </div>
      <div className="grid md:grid-cols-12 w-full h-full gap-12 md:gap-24">
        {orderedItems.map((item, idx) => {
          const slot = highlightSlots[idx % highlightSlots.length];
          const captionText = item.type === "text" ? item.content || "" : placeholderCaption;
          return (
            <div key={`${experienceId}-${item.id ?? idx}`} className={slot.span}>
              <div className="flex flex-col gap-4 pb-0">
                <BlindItem index={idx} total={totalSlots}>
                  {item.type === "image" && item.src ? (
                    <LazyImage
                      image={{ src: item.src, alt: item.alt || `Work sample showcasing ${experienceId}` }}
                      className="h-full w-full"
                      containerClassName="h-full w-full"
                      overlayClassName="from-primary/10 to-accent/10"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={88}
                    />
                  ) : (
                    <div className="h-full w-full bg-neutral-lighter dark:bg-neutral-darker" aria-hidden="true" />
                  )}
                </BlindItem>
                {captionText && (
                  <p className="body-sm text-muted max-w-sm px-6 md:px-0">
                    {captionText}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

GridGallery.displayName = "GridGallery";

export const WorkExperienceEntry2 = memo(({
  experience,
  index,
  total,
}: {
  experience: WorkExperience;
  index: number;
  total: number;
}) => {
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
    ).filter((skill, skillIndex, self) => self.indexOf(skill) === skillIndex)
  }), [experience]);

  const CompanyInfo = memo(() => (
    <aside className="md:col-start-2 md:col-span-10 xl:col-span-2 px-6 md:px-0 xl:px-6">
      <div className="xl:sticky top-24">
        <time
          className="body-sm mb-2 block"
          dateTime={`${experience.startDate}/${experience.endDate}`}
          aria-label={`Employment period: ${experience.duration}`}
        >
          {experience.duration}
        </time>
        <h3 className="heading-sm text-primary leading-none mb-1">
          {experience.company}
        </h3>
        <p className="body-sm font-mono sr-only">
          Role: {experience.role}
        </p>
      </div>
    </aside>
  ));

  CompanyInfo.displayName = "CompanyInfo";

  const ContentSection = memo(() => (
    <div className="md:col-span-12 xl:col-span-4 xl:-mt-25 relative">
      <div className="hidden xl:block heading-base leading-4 text-muted/75 pb-8">
        {index + 1}/{total}
      </div>
      <div className="hidden xl:block size-10 bg-decoration absolute top-3 right-0" />
      <article className="space-y-4 pt-8 xl:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-12 xl:gap-16 px-6 md:px-0">
          <header className="md:row-start-1 md:col-start-2 md:col-span-10 xl:col-start-1 xl:col-span-7 space-y-8 pb-8 xl:pb-0">
            <h3
              className="heading-display text-primary max-w-4xl xl:-mt-1.5"
              id={`work-${experience.id}`}
            >
              {experience.title}
            </h3>
            {experience.buttonUrl && (
              <div className="xl:pt-4">
                <ExternalLinkButton
                  url={experience.buttonUrl}
                  company={experience.company}
                />
              </div>
            )}
          </header>
          <div
            className="md:row-start-2 xl:row-start-1 md:col-start-2 md:col-span-10 xl:col-start-8 xl:col-span-4"
            aria-describedby={`work-${experience.id}`}
          >
            {experience.description.split('\n').map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className={`body-base ${paragraphIndex > 0 ? 'mt-4' : ''}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        {/* <section aria-labelledby={`responsibilities-${experience.id}`} className="grid grid-cols-10">
          <div className="hidden row-start-2 col-start-1 col-span-12">
            <ul
              className="space-y-1.5 grid grid-cols-12 pt-16 gap-6 md:gap-16"
              role="list"
              aria-label={`Key achievements and responsibilities at ${experience.company}`}
            >
              {experience.keyResponsibilities.map((responsibility, responsibilityIndex) => (
                <li
                  key={responsibilityIndex}
                  className="col-span-2 flex items-start gap-3 body-sm text-muted px-4 relative"
                  role="listitem"
                >
                  <span>{responsibility}</span>
                  <div className="absolute top-1 -left-4 size-4 bg-neutral-darker rounded-full"></div>
                </li>
              ))}
            </ul>
          </div>
        </section> */}
      </article>
    </div>
  ));

  ContentSection.displayName = "ContentSection";

  return (
    <article
      className="grid grid-cols-1 md:grid-cols-12 pb-32 xl:pb-24"
      aria-labelledby={`work-${experience.id}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workExperienceStructuredData),
        }}
      />

      <CompanyInfo />

      <div className="xl:col-start-3 md:col-span-12 xl:col-span-10 space-y-10 md:space-y-20">
        <ContentSection />

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

WorkExperienceEntry2.displayName = "WorkExperienceEntry2";
