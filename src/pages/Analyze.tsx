
import { Navbar } from "@/components/Navbar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";
import { User, Check, X } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  followers: z.coerce.number().min(0, "Must be a positive number"),
  following: z.coerce.number().min(0, "Must be a positive number"),
  posts: z.coerce.number().min(0, "Must be a positive number"),
  hasProfilePicture: z.boolean().default(false),
  fullName: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof formSchema>;

const Analyze = () => {
  const [result, setResult] = useState<{
    isGenuine: boolean;
    score: number;
    reasons: string[];
  } | null>(null);
  
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      followers: 0,
      following: 0,
      posts: 0,
      hasProfilePicture: false,
      fullName: "",
    },
  });
  
  const analyzeProfile = (data: ProfileFormValues) => {
    const reasons: string[] = [];
    let score = 0;
    
    // Rule 1: Followers to Following ratio
    const followRatio = data.followers / (data.following || 1);
    if (followRatio >= 2) {
      score += 25;
      reasons.push("Healthy follower-to-following ratio");
    } else if (followRatio >= 0.5) {
      score += 15;
      reasons.push("Average follower-to-following ratio");
    } else {
      score += 5;
      reasons.push("Low follower-to-following ratio");
    }
    
    // Rule 2: Number of posts
    if (data.posts >= 15) {
      score += 20;
      reasons.push("Active posting history");
    } else if (data.posts >= 5) {
      score += 10;
      reasons.push("Some posting activity");
    } else {
      score += 0;
      reasons.push("Very few or no posts");
    }
    
    // Rule 3: Profile picture
    if (data.hasProfilePicture) {
      score += 20;
      reasons.push("Profile picture is present");
    } else {
      score += 0;
      reasons.push("No profile picture");
    }
    
    // Rule 4: Username and real name
    if (data.fullName && data.fullName.length > 2) {
      score += 15;
      reasons.push("Profile has a display name");
    } else {
      score += 0;
      reasons.push("No display name");
    }
    
    // Rule 5: Account age estimation based on posts
    if (data.posts >= 30) {
      score += 20;
      reasons.push("Likely an established account");
    } else if (data.posts >= 10) {
      score += 10;
      reasons.push("Possibly a newer account");
    } else {
      score += 0;
      reasons.push("May be a very new or inactive account");
    }
    
    const isGenuine = score >= 50;
    
    setResult({
      isGenuine,
      score,
      reasons,
    });
    
    toast({
      title: isGenuine ? "Profile appears genuine" : "Profile may be fake",
      description: `Authenticity score: ${score}/100`,
      variant: isGenuine ? "default" : "destructive",
    });
  };
  
  const onSubmit = (data: ProfileFormValues) => {
    analyzeProfile(data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FAFAFA] to-[#F3F3F5]">
      <Navbar />
      
      <main className="flex-1 container mx-auto max-w-4xl py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#405DE6] via-[#5851DB] to-[#833AB4] bg-clip-text text-transparent">
            Analyze Instagram Profile
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Enter a few details about the Instagram profile you want to check, and we'll help determine if it's likely genuine or fake.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            @
                          </div>
                          <Input placeholder="instagram_user" className="pl-8" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name (Display Name)</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="followers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Followers</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="following"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Following</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="posts"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Posts</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="hasProfilePicture"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <input
                          type="checkbox"
                          className="w-4 h-4 mt-1 rounded-sm border border-gray-300"
                          checked={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Has Profile Picture</FormLabel>
                        <p className="text-sm text-gray-500">
                          Does this account have a profile picture?
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#405DE6] to-[#5851DB] hover:from-[#5851DB] hover:to-[#833AB4]"
                >
                  Analyze Profile
                </Button>
              </form>
            </Form>
          </div>
          
          <div>
            {result ? (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
                <div className="text-center mb-6">
                  <div className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4",
                    result.isGenuine 
                      ? "bg-green-100 text-green-600" 
                      : "bg-red-100 text-red-600"
                  )}>
                    {result.isGenuine ? (
                      <Check className="w-10 h-10" />
                    ) : (
                      <X className="w-10 h-10" />
                    )}
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-1">
                    {result.isGenuine ? "Likely Authentic" : "Possibly Fake"}
                  </h2>
                  
                  <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
                    <div 
                      className={cn(
                        "absolute top-0 left-0 h-full",
                        result.isGenuine 
                          ? "bg-green-500" 
                          : "bg-red-500"
                      )}
                      style={{ width: `${result.score}%` }}
                    ></div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Authenticity Score: <span className="font-bold">{result.score}/100</span>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3 text-gray-800">Analysis Breakdown:</h3>
                  <ul className="space-y-2">
                    {result.reasons.map((reason, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <div className="min-w-4 mt-0.5">•</div>
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 border border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center h-full">
                <User className="w-16 h-16 text-gray-300 mb-4" />
                <p className="text-gray-500 text-center">
                  Enter profile information and click "Analyze Profile" to see results.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-50 py-8 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 ProfileChecker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Analyze;
