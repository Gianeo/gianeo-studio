"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import { SectionIntro } from "@/components/primitives/SectionIntro";
import { CardShell } from "@/components/primitives/CardShell";

const clients = [
  "Adobe",
  "Sainsbury's Argos",
  "Chargebee",
  "fetch",
  "FILA",
  "LOVABLE",
  "Novartis",
  "Ocado",
  "Sun",
  "ENI",
  "Thomson Reuters",
  "Zopa",
  "MassiveMusic",
  "Nova",
  "and many more",
];

export function Intro() {
  return (
    <section className="bg-background text-foreground py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 px-6 lg:px-0">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">
            <ArrowRightIcon size={16} />
            <span>From 0-1 to enterprises</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {clients.map((client) => (
              <CardShell
                key={client}
                className={clsx(
                  "h-28 sm:h-32 lg:h-36 flex items-center justify-center border-border/60 bg-muted/5",
                  "text-sm font-semibold text-muted-foreground"
                )}
                interactive={false}
              >
                <span className="text-sm font-semibold text-muted-foreground/90 text-center px-2 leading-tight">
                  {client}
                </span>
              </CardShell>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <p className="text-[11px] font-mono uppercase tracking-[0.5em] text-muted-foreground">Why me</p>
          <SectionIntro
            eyebrow={null}
            title="With intention, precision, and care."
            description={(
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  You&apos;ve got something in motion. A team pushing hard. A roadmap full of ambition. Some pieces clicking, others... not quite. It&apos;s not failure—it&apos;s friction. The kind that slows momentum, clouds decisions, and makes it harder to see the path ahead.
                </p>
                <p>
                  You&apos;re not looking for a silver bullet. You want clarity. Someone who can see the whole thing end-to-end—how it works, how it looks, how it feels to use—and shape it into something that moves with purpose.
                </p>
                <p className="text-foreground font-semibold">That&apos;s where I come in.</p>
                <p>
                  I bring design that runs deep: usability grounded in insight, visual direction with taste, and systems that scale without losing agility. It&apos;s clarity made practical—so decisions get easier, teams move together, and the product holds up as it grows.
                </p>
              </div>
            )}
            titleClassName="text-3xl md:text-4xl lg:text-4xl heading-tight"
            className="space-y-4"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
