import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-navy-900 hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-navy-900 mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-navy-900 mb-3">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including contact information, business details, and communication preferences. We also automatically collect certain information about your device when you use our website.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy-900 mb-3">2. Use of Information</h2>
              <p>We use the information we collect to provide and improve our services, communicate with you, and comply with legal obligations. This includes processing your requests, sending updates about our services, and analyzing website usage.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy-900 mb-3">3. Information Sharing</h2>
              <p>We do not sell your personal information. We may share your information with service providers who assist in our operations, or when required by law or to protect our rights.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy-900 mb-3">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy-900 mb-3">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your information.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy-900 mb-3">6. Cookies</h2>
              <p>We use cookies and similar technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy-900 mb-3">7. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our practices, please contact us at privacy@quantamines.africa.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
