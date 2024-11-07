import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { RandomDrawingGenerator } from './pages/RandomDrawingGenerator';
import { AIDrawingGenerator } from './pages/AIDrawingGenerator';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<RandomDrawingGenerator />} />
          <Route path="/ai-drawing-generator" element={<AIDrawingGenerator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;