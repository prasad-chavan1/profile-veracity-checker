
import { ProfileData } from "@/components/InstagramProfileCard";
import { MetricData } from "@/components/MetricsCard";

// This is a mocked version - in a real app, this would connect to a backend API
export const analyzeProfile = (username: string): Promise<{
  profile: ProfileData;
  metrics: MetricData[];
}> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // For demo purposes, we're generating mock data based on the username
      // In a real app, this would be fetched from an API
      const hashCode = username.split('').reduce((acc, char) => {
        return acc + char.charCodeAt(0);
      }, 0);
      
      // Create deterministic but random-seeming values based on username
      const seed = hashCode / 1000;
      const rand = (min: number, max: number) => {
        const r = Math.sin(seed * (hashCode % 10)) * 10000;
        return Math.floor(((r - Math.floor(r)) * (max - min + 1)) + min);
      };
      
      // Generate follower count between 100 and 10000
      const followers = rand(100, 10000);
      // Generate following count that's somewhat related to followers
      const following = rand(50, followers * 1.5);
      // Generate post count
      const posts = rand(5, 100);
      
      // Calculate follower-to-following ratio
      const ratio = followers / (following || 1);
      
      // Determine if verified (rare, based on username length and characters)
      const isVerified = username.length > 5 && /[A-Z]/.test(username) && followers > 5000;
      
      // Generate engagement rate (percentage of followers who typically like posts)
      const engagementRate = rand(1, 15) / 100;
      
      // Generate account age in days (between 1 and 1825 days - 5 years)
      const accountAge = rand(1, 1825);
      
      // Generate a consistency score (how regularly they post)
      const postingConsistency = rand(1, 100) / 100;
      
      // Determine authenticity score based on various factors
      const authFactors = [
        // More followers than following is a good sign (max impact: 30%)
        Math.min(30, Math.max(0, (ratio > 1 ? 30 : ratio * 30))),
        
        // Verified accounts are likely real (max impact: 20%)
        isVerified ? 20 : 0,
        
        // Higher engagement rate is good (max impact: 15%)
        Math.min(15, engagementRate * 1000),
        
        // Older accounts are more likely real (max impact: 15%)
        Math.min(15, accountAge / 120),
        
        // More posts suggest real activity (max impact: 10%)
        Math.min(10, posts / 10),
        
        // Regular posting suggests real activity (max impact: 10%)
        Math.min(10, postingConsistency * 10)
      ];
      
      // Calculate final auth score out of 100
      const authScore = Math.min(100, Math.round(authFactors.reduce((a, b) => a + b, 0)));
      
      const profile: ProfileData = {
        username,
        fullName: username.charAt(0).toUpperCase() + username.slice(1).toLowerCase(),
        profilePicture: `https://i.pravatar.cc/150?u=${username}`,
        bio: `This is ${username}'s profile. ${isVerified ? 'Official account.' : ''}`,
        posts,
        followers,
        following,
        isVerified,
        isPrivate: rand(0, 10) > 7, // 30% chance of being private
        authScore
      };
      
      const metrics: MetricData[] = [
        {
          title: "Follower/Following Ratio",
          value: ratio.toFixed(2),
          description: ratio < 0.5 
            ? "Suspicious ratio: following many more than followers" 
            : ratio > 2 
              ? "Healthy ratio: more followers than following" 
              : "Average ratio",
          status: ratio < 0.5 ? "danger" : ratio < 1 ? "warning" : "success"
        },
        {
          title: "Engagement Rate",
          value: `${(engagementRate * 100).toFixed(2)}%`,
          description: engagementRate < 0.01 
            ? "Very low engagement, potential bot activity" 
            : engagementRate > 0.05 
              ? "Healthy engagement rate" 
              : "Average engagement",
          status: engagementRate < 0.01 ? "danger" : engagementRate < 0.03 ? "warning" : "success"
        },
        {
          title: "Account Age",
          value: `${accountAge} days`,
          description: accountAge < 30 
            ? "Recently created account" 
            : accountAge > 365 
              ? "Well-established account" 
              : "Developing account",
          status: accountAge < 30 ? "warning" : accountAge < 90 ? "neutral" : "success"
        },
        {
          title: "Posting Activity",
          value: `${posts} posts`,
          description: posts < 5 
            ? "Very few posts, limited activity" 
            : posts > 30 
              ? "Active posting history" 
              : "Moderate posting activity",
          status: posts < 5 ? "warning" : posts < 15 ? "neutral" : "success"
        },
        {
          title: "Profile Authenticity",
          value: `${authScore}/100`,
          description: authScore < 50 
            ? "Multiple suspicious patterns detected" 
            : authScore > 80 
              ? "Profile appears authentic" 
              : "Some suspicious indicators",
          status: authScore < 50 ? "danger" : authScore < 80 ? "warning" : "success"
        }
      ];
      
      resolve({ profile, metrics });
    }, 2000); // 2 second delay to simulate API call
  });
};
