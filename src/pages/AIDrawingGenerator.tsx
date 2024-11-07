import React, { useState, useCallback } from 'react';
import { drawings } from '../data/drawings';
import { DrawingCard } from '../components/DrawingCard';

function getRandomDrawing() {
  const randomIndex = Math.floor(Math.random() * drawings.length);
  return { drawing: drawings[randomIndex], index: randomIndex };
}

export function AIDrawingGenerator() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Drawing Generator</h1>
        <p className="text-lg text-gray-600">
          Experience the future of art with AI-powered drawing inspiration
        </p>
      </header>

      <DrawingCard drawing={currentDrawing} onGenerate={generateNewDrawing} />

      <section className="mt-16 prose prose-indigo max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Discover Our AI Drawing Generator
        </h2>
        <p>
          Welcome to our cutting-edge AI Drawing Generator, where artificial intelligence meets artistic creativity. Our advanced AI technology helps you discover unique drawing ideas and inspiration for your next masterpiece.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          How Our AI Drawing Generator Works
        </h3>
        <p>
          Our AI drawing generator leverages sophisticated algorithms to analyze and understand artistic patterns, providing you with intelligently curated drawing suggestions. The AI considers various factors such as style, complexity, and theme to deliver personalized drawing inspiration.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          Benefits of AI-Powered Drawing Generation
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Smart selection of drawing ideas based on AI analysis</li>
          <li>Continuous learning and improvement of suggestions</li>
          <li>Personalized drawing recommendations</li>
          <li>Integration of trending art styles and techniques</li>
          <li>Enhanced creativity through AI-assisted inspiration</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          Who Can Benefit from AI Drawing Generation?
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Digital artists exploring new creative directions</li>
          <li>Traditional artists seeking modern inspiration</li>
          <li>Art students learning about contemporary techniques</li>
          <li>Professional illustrators looking for fresh ideas</li>
          <li>Creative professionals in need of quick inspiration</li>
        </ul>
      </section>
    </div>
  );
}