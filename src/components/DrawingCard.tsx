import React from 'react';
import { ExternalLink, Shuffle } from 'lucide-react';
import type { Drawing } from '../data/drawings';

interface DrawingCardProps {
  drawing: Drawing;
  onGenerate: () => void;
}

export function DrawingCard({ drawing, onGenerate }: DrawingCardProps) {
  if (!drawing) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{drawing.name}</h2>
        <p className="text-gray-600 mb-4">{drawing.description}</p>
        <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
          <button
            onClick={onGenerate}
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Shuffle size={20} />
            Generate New Drawing
          </button>
          <a
            href={drawing.moreDrawings}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <ExternalLink size={20} />
            More Like This
          </a>
        </div>
      </div>
      <div className="relative" style={{ paddingBottom: '120%' }}>
        <img
          src={drawing.imageUrl}
          alt={drawing.name}
          className="absolute inset-0 w-full h-full object-contain bg-gray-50"
          loading="lazy"
        />
      </div>
    </div>
  );
}