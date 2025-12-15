"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionBannerProps {
  icon?: ReactNode;
  label: string;
  className?: string;
  sticky?: boolean;
}

export function SectionBanner({ icon, label, className, sticky = true }: SectionBannerProps) {
  return (
    <header
      className={cn(
        "z-50 glass border-b border-border/50 mb-8",
        sticky && "sticky top-0",
        !sticky && "relative",
        className
      )}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-2 px-6 lg:px-12 py-4 flex items-center gap-4 body-label text-muted-foreground">
          {icon}
          {label}
        </div>
        <div className="col-span-10 bg-muted/10"></div>
      </div>
    </header>
  );
}
