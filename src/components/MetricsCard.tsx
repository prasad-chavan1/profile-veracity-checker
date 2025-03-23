
import { cn } from "@/lib/utils";
import { LabelChip } from "./LabelChip";

export type MetricData = {
  title: string;
  value: string | number;
  description: string;
  status: "neutral" | "success" | "warning" | "danger";
};

type MetricsCardProps = {
  metric: MetricData;
  className?: string;
};

export const MetricsCard = ({ metric, className }: MetricsCardProps) => {
  const { title, value, description, status } = metric;
  
  return (
    <div className={cn(
      "glass-card p-5 flex flex-col justify-between animate-slide-up",
      className
    )}>
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <LabelChip 
          label={status === "neutral" ? "Neutral" : 
                status === "success" ? "Good" : 
                status === "warning" ? "Suspicious" : "Concerning"} 
          type={status} 
        />
      </div>
      <div className="mt-2">
        <p className="text-2xl font-semibold">{value}</p>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};
