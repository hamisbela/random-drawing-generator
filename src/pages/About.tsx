import React from 'react';
import { Palette, Heart, Users, Sparkles } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Learn more about our mission to inspire artists worldwide
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Palette className="w-8 h-8 text-indigo-600" />
            <h2 className="text-xl font-semibold">Our Mission</h2>
          </div>
          <p className="text-gray-600">
            We're dedicated to making art inspiration accessible to everyone. Our drawing generators help artists overcome creative blocks and discover new artistic possibilities.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-indigo-600" />
            <h2 className="text-xl font-semibold">Our Values</h2>
          </div>
          <p className="text-gray-600">
            We believe in the power of creativity to transform lives. Our platform is built on the principles of accessibility, innovation, and community support.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-indigo-600" />
            <h2 className="text-xl font-semibold">Our Community</h2>
          </div>
          <p className="text-gray-600">
            Join thousands of artists who use our platform daily to find inspiration, share their work, and connect with fellow creators.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-indigo-600" />
            <h2 className="text-xl font-semibold">Our Future</h2>
          </div>
          <p className="text-gray-600">
            We're constantly innovating and expanding our platform to provide better tools and resources for artists worldwide.
          </p>
        </div>
      </div>

      <section className="prose prose-indigo max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
        <p>
          Founded by a team of artists and developers, our platform emerged from a shared vision to make art more accessible and enjoyable for everyone. We understand the challenges artists face when seeking inspiration, and we've built our tools to address these needs directly.
        </p>
        <p>
          Today, we're proud to serve a global community of artists, from beginners to professionals, all united by their passion for creativity and artistic expression.
        </p>
      </section>
    </div>
  );
}