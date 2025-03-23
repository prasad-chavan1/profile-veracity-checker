
import { cn } from "@/lib/utils";

type LoadingStateProps = {
  className?: string;
};

export const LoadingState = ({ className }: LoadingStateProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center w-full py-8", className)}>
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-t-2 border-blue-500 animate-spin-slow"></div>
        <div className="absolute inset-1 rounded-full border-t-2 border-blue-400 animate-spin-slow" style={{ animationDuration: '1.5s' }}></div>
        <div className="absolute inset-2 rounded-full border-t-2 border-blue-300 animate-spin-slow" style={{ animationDuration: '1.8s' }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-subtle"></div>
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-blue-600 animate-pulse-subtle">Analyzing profile...</p>
    </div>
  );
};
