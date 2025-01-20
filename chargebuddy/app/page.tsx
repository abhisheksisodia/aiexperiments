import Link from 'next/link';
import { ArrowRight, Battery, Shield, Clock } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Smart EV Charging Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Track, optimize, and save on your EV charging costs
            </p>
            <Link 
              href="/auth/register" 
              className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose ChargeBuddy?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                <Battery className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Tracking</h3>
              <p className="text-gray-600">
                Track all your charging sessions and analyze your energy consumption
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimal Timing</h3>
              <p className="text-gray-600">
                Get recommendations for the most cost-effective charging times
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your data is encrypted and securely stored with enterprise-grade security
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 