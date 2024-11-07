import React, { useState, useCallback } from 'react';
import { drawings } from '../data/drawings';
import { DrawingCard } from '../components/DrawingCard';

function getRandomDrawing() {
  const randomIndex = Math.floor(Math.random() * drawings.length);
  return { drawing: drawings[randomIndex], index: randomIndex };
}

export function RandomDrawingGenerator() {
  const [{ drawing: currentDrawing, index: currentIndex }, setCurrentDrawing] = useState(getRandomDrawing());

  const generateNewDrawing = useCallback(() => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * drawings.length);
    } while (newIndex === currentIndex && drawings.length > 1);
    
    setCurrentDrawing({ 
      drawing: drawings[newIndex], 
      index: newIndex 
    });
  }, [currentIndex]);

  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Random Drawing Generator</h1>
        <p className="text-lg text-gray-600">
          Discover inspiring drawings to enhance your artistic journey
        </p>
      </header>

      <DrawingCard drawing={currentDrawing} onGenerate={generateNewDrawing} />

      <section className="mt-16 prose prose-indigo max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to Use Our Random Drawing Generator?
        </h2>
        <p>
          Welcome to our Random Drawing Generator, the perfect tool for artists, educators, and creative enthusiasts looking for inspiration. This innovative random drawing generator provides instant access to a diverse collection of drawing ideas and references.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          How Does Our Random Drawing Generator Work?
        </h3>
        <p>
          Our random drawing generator utilizes a carefully curated database of high-quality drawings, making it easy to discover new artistic inspiration. Simply click the "Generate New Drawing" button to receive a random drawing complete with descriptions and additional resources.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          Use Cases for the Random Drawing Generator
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Artists seeking daily drawing practice inspiration</li>
          <li>Art teachers planning drawing lessons and exercises</li>
          <li>Students looking to improve their drawing skills</li>
          <li>Parents searching for creative activities for children</li>
          <li>Art challenge participants needing random prompts</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          Benefits of Using a Random Drawing Generator
        </h3>
        <p>
          Our random drawing generator offers numerous advantages for artists and creative enthusiasts:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Instant access to diverse drawing inspiration</li>
          <li>Detailed descriptions to guide your drawing process</li>
          <li>Links to similar drawings for extended practice</li>
          <li>Perfect for both beginners and experienced artists</li>
          <li>Helps overcome creative blocks</li>
        </ul>
      </section>
    </div>
  );
}