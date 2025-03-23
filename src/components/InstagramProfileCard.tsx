
import { cn } from "@/lib/utils";
import { LabelChip } from "./LabelChip";

export type ProfileData = {
  username: string;
  fullName: string;
  profilePicture: string;
  bio: string;
  posts: number;
  followers: number;
  following: number;
  isVerified: boolean;
  isPrivate: boolean;
  authScore: number;
};

type InstagramProfileCardProps = {
  profile: ProfileData;
  className?: string;
};

export const InstagramProfileCard = ({ profile, className }: InstagramProfileCardProps) => {
  const { 
    username, 
    fullName, 
    profilePicture, 
    bio, 
    posts, 
    followers, 
    following, 
    isVerified, 
    isPrivate,
    authScore
  } = profile;
  
  const authStatus = 
    authScore >= 80 ? { label: "Likely Authentic", type: "success" as const } :
    authScore >= 50 ? { label: "Possibly Authentic", type: "warning" as const } :
    { label: "Likely Fake", type: "danger" as const };

  return (
    <div className={cn("glass-card overflow-hidden", className)}>
      <div className="relative h-20 bg-gradient-to-r from-blue-400 to-blue-600">
        <div className="absolute -bottom-12 left-4 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img 
            src={profilePicture} 
            alt={`${username}'s profile`} 
            className="w-full h-full object-cover"
            onLoad={(e) => e.currentTarget.classList.remove("img-loading")}
          />
        </div>
      </div>
      
      <div className="pt-14 px-4 pb-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              {fullName}
              {isVerified && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53-1.471-1.47a.75.75 0 10-1.06 1.062l2 2a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              )}
            </h2>
            <p className="text-gray-500">@{username}</p>
          </div>
          <LabelChip 
            label={authStatus.label}
            type={authStatus.type}
            className="mt-1"
          />
        </div>
        
        <p className="text-sm mb-4">{bio || "No bio available"}</p>
        
        <div className="flex space-x-4 text-sm border-t border-gray-100 pt-4">
          <div className="flex flex-col items-center">
            <span className="font-semibold">{posts.toLocaleString()}</span>
            <span className="text-gray-500">Posts</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">{followers.toLocaleString()}</span>
            <span className="text-gray-500">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">{following.toLocaleString()}</span>
            <span className="text-gray-500">Following</span>
          </div>
          {isPrivate && (
            <div className="flex items-center ml-auto">
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                Private
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
