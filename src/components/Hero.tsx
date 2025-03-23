
import { cn } from "@/lib/utils";

type HeroProps = {
  className?: string;
};

export const Hero = ({ className }: HeroProps) => {
  return (
    <div className={cn("w-full max-w-4xl mx-auto text-center px-4 animate-fade-in", className)}>
      <div className="space-y-2 mb-8">
        <LabelChip label="INSTAGRAM AUTHENTICITY" className="mx-auto" />
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-gray-900">
          Profile Veracity
        </h1>
        <p className="max-w-[42rem] mx-auto mt-4 text-muted-foreground text-lg">
          Detect fake Instagram profiles with precision. Our tool analyzes activity patterns, 
          follower ratios, and engagement metrics to determine authenticity.
        </p>
      </div>
    </div>
  );
};

import { LabelChip } from "./LabelChip";
