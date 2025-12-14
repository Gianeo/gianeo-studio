"use client";

import { memo } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";

export const HeaderSection = memo(() => (
  <header className="sticky top-0 z-50 glass border-b border-border/50">
    <div className="flex justify-between px-6 lg:px-12 py-4">
      <div 
        className="flex items-center justify-end gap-4 text-xs font-mono text-muted-foreground"
        role="banner"
        aria-label="Client section navigation"
      >
        <ArrowRightIcon size={16} aria-hidden="true" />
        <span>From 0-1 to Enterprises</span>
      </div>
    </div>
  </header>
));

HeaderSection.displayName = "HeaderSection";
