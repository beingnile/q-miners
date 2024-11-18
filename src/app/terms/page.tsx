import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-navy-900 hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-navy-900 mb-6">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-navy-900 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the services provided by Quantum Mines & Minerals ("Company," "we," "us," or "our"), you agree to comply with and be bound by these Terms of Service.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy-900 mb-3">2. Services Description</h2>
              <p>Quantum Mines & Minerals provides mining and mineral extraction services, consulting, and related activities as described on our website and in our service agreements.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy-900 mb-3">3. Use of Services</h2>
              <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of our services complies with applicable laws and regulations.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy-900 mb-3">4. Intellectual Property</h2>
              <p>All content, trademarks, and intellectual property on our website and in our materials are owned by Quantum Mines & Minerals and protected by applicable laws.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy-900 mb-3">5. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Quantum Mines & Minerals shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy-900 mb-3">6. Modifications</h2>
              <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of any modifications.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-navy-900 mb-3">7. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
