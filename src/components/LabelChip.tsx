
import { cn } from "@/lib/utils";

type ChipType = "neutral" | "success" | "warning" | "danger";

type LabelChipProps = {
  label: string;
  type?: ChipType;
  className?: string;
};

const chipStyles = {
  neutral: "bg-blue-50 text-blue-700 border-blue-100",
  success: "bg-green-50 text-green-700 border-green-100",
  warning: "bg-amber-50 text-amber-700 border-amber-100",
  danger: "bg-red-50 text-red-700 border-red-100",
};

export const LabelChip = ({ label, type = "neutral", className }: LabelChipProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border",
        chipStyles[type],
        className
      )}
    >
      {label}
    </span>
  );
};
