import React from 'react';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Get in touch with our team for support or feedback
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="text-gray-600">support@drawinggenerator.com</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-semibold">Live Chat</h3>
            </div>
            <p className="text-gray-600">Available Monday to Friday, 9am - 5pm EST</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-semibold">Phone</h3>
            </div>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-semibold">Location</h3>
            </div>
            <p className="text-gray-600">123 Art Street, Creative City, AC 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
}