import React from 'react';
import { Palette } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Random Drawing Generator' },
  { path: '/ai-drawing-generator', label: 'AI Drawing Generator' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Palette className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Free Random Drawing Generators</span>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-indigo-600'
                      : 'text-gray-500 hover:text-gray-900'
                  } px-3 py-2 text-sm font-medium`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow py-12 px-4">
        {children}
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center space-x-6 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-500 hover:text-gray-900 mb-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Drawing Tools. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}