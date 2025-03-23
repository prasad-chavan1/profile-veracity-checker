
import { Navbar } from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FAFAFA] to-[#F3F3F5]">
      <Navbar />
      
      <main className="flex-1 container mx-auto max-w-4xl py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#405DE6] via-[#5851DB] to-[#833AB4] bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: June 1, 2024
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Introduction</h2>
            <p className="text-gray-600 mb-4">
              At ProfileChecker, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our profile verification service.
            </p>
            <p className="text-gray-600">
              Please read this Privacy Policy carefully. By accessing and using our service, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
            </p>
          </section>
          
          <Separator className="my-6" />
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you voluntarily provide when using our profile verification tool:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Instagram usernames</li>
              <li>Profile metrics (followers, following, posts count)</li>
              <li>Profile characteristics (presence of profile picture, display name)</li>
              <li>Contact information (when you contact us)</li>
            </ul>
          </section>
          
          <Separator className="my-6" />
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Provide and maintain our service</li>
              <li>Analyze profile authenticity based on the metrics you provide</li>
              <li>Improve and optimize our verification algorithms</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Monitor the usage of our service</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
          </section>
          
          <Separator className="my-6" />
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Data Retention</h2>
            <p className="text-gray-600">
              We retain the information you provide only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
            </p>
          </section>
          
          <Separator className="my-6" />
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Security</h2>
            <p className="text-gray-600">
              We use appropriate administrative, technical, and physical safeguards to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no internet or email transmission is ever fully secure or error-free, so you should take special care in deciding what information you send to us.
            </p>
          </section>
          
          <Separator className="my-6" />
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </section>
          
          <Separator className="my-6" />
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>
          
          <Separator className="my-6" />
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-gray-700 font-medium">ProfileChecker</p>
              <p className="text-gray-600">123 Social Media Street</p>
              <p className="text-gray-600">New York, NY 10001</p>
              <p className="text-gray-600">Email: privacy@profilechecker.com</p>
            </div>
          </section>
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

export default PrivacyPolicy;
