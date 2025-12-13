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
        "z-50 glass border-b border-border/50",
        sticky && "sticky top-0",
        !sticky && "relative",
        className
      )}
    >
      <div className="flex justify-between px-6 lg:px-12 py-4">
        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
          {icon}
          {label}
        </div>
      </div>
    </header>
  );
}
