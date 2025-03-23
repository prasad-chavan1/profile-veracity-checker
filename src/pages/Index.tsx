
import { Hero } from "@/components/Hero";
import { ProfileChecker } from "@/components/ProfileChecker";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col py-12 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto max-w-5xl space-y-12 pb-20">
        <Hero />
        <ProfileChecker />
      </div>
    </div>
  );
};

export default Index;
