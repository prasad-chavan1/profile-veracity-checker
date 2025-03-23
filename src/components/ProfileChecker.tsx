
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoadingState } from "./LoadingState";
import { ResultsDisplay } from "./ResultsDisplay";
import { ProfileData } from "./InstagramProfileCard";
import { MetricData } from "./MetricsCard";
import { analyzeProfile } from "@/utils/profileAnalysis";
import { useToast } from "@/components/ui/use-toast";

type ProfileCheckerProps = {
  className?: string;
};

export const ProfileChecker = ({ className }: ProfileCheckerProps) => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{ profile: ProfileData; metrics: MetricData[] } | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      toast({
        title: "Username required",
        description: "Please enter an Instagram username to analyze",
        variant: "destructive",
      });
      return;
    }
    
    // Reset and start loading
    setResults(null);
    setIsLoading(true);
    
    try {
      const data = await analyzeProfile(username);
      setResults(data);
    } catch (error) {
      toast({
        title: "Analysis failed",
        description: "Unable to analyze this profile. Please try again.",
        variant: "destructive",
      });
      console.error("Profile analysis error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setUsername("");
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-8 animate-slide-up">
        <div className="glass-card p-6 space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">
              Instagram Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                @
              </div>
              <Input
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="glass-input pl-8"
                disabled={isLoading}
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Analyzing..." : "Analyze Profile"}
          </Button>
        </div>
      </form>

      {isLoading && <LoadingState />}
      
      {results && (
        <div className="space-y-6">
          <ResultsDisplay profileData={results.profile} metrics={results.metrics} />
          
          <div className="flex justify-center mt-8">
            <Button 
              variant="outline" 
              onClick={handleReset}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all"
            >
              Analyze Another Profile
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
