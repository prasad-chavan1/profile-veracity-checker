
import { cn } from "@/lib/utils";
import { InstagramProfileCard, ProfileData } from "./InstagramProfileCard";
import { MetricsCard, MetricData } from "./MetricsCard";

type ResultsDisplayProps = {
  profileData: ProfileData;
  metrics: MetricData[];
  className?: string;
};

export const ResultsDisplay = ({ profileData, metrics, className }: ResultsDisplayProps) => {
  return (
    <div 
      className={cn(
        "w-full max-w-3xl mx-auto space-y-6 animate-fade-in", 
        className
      )}
    >
      <InstagramProfileCard profile={profileData} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <MetricsCard 
            key={metric.title} 
            metric={metric}
            className={cn({
              "opacity-0": true,
              "animate-[slide-up_0.4s_0.1s_forwards]": index === 0,
              "animate-[slide-up_0.4s_0.2s_forwards]": index === 1,
              "animate-[slide-up_0.4s_0.3s_forwards]": index === 2,
              "animate-[slide-up_0.4s_0.4s_forwards]": index === 3,
              "animate-[slide-up_0.4s_0.5s_forwards]": index === 4,
            })}
          />
        ))}
      </div>
    </div>
  );
};
