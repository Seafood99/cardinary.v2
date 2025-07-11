// src/App.tsx
import React, { useState } from 'react';
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";
import { products } from "./data/product";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import KpopPage from './components/KpopPage';
import YugiohPage from './components/YugiohPage';
import ContactUsPage from './components/ContactUsPage';
import AboutPage from './components/AboutPage';
import ModalPreview from './components/ModalPreview';
import type { Product } from './types';

function App() {
  // Ambil 2 photocard (pc1, pc2), 2 yugioh (y5, y6), dan 2 kpop/special pertama
  const mainReleasesBase = [
    ...products.filter(p => p.id === 'pc1' || p.id === 'pc2' || p.id === 'y5' || p.id === 'y6'),
    ...products.filter(p => p.category === 'kpop' || p.category === 'special').filter(p => p.id !== 'pc1' && p.id !== 'pc2').slice(0, 2)
  ];
  const [showAllReleases, setShowAllReleases] = useState(false);
  const [preview, setPreview] = useState<Product | null>(null);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 w-full">
        <Header />
        <Routes>
          <Route path="/kpop" element={<KpopPage />} />
          <Route path="/yugioh" element={<YugiohPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={
            <>
              <Hero />
              <Analytics />

              {/* New Releases Section */}
              <section id="new-releases" className="py-20 px-4">
                <div className="mx-auto max-w-7xl">
                  <motion.div
                    className="flex justify-between items-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          NEW RELEASES
                        </span>
                      </h2>
                      <p className="text-gray-300 text-lg">
                        Latest additions to our collection
                      </p>
                    </div>
                    <motion.button
                      className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowAllReleases(v => !v)}
                    >
                      {showAllReleases ? 'Show Less' : 'View All'}
                    </motion.button>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {(showAllReleases ? mainReleasesBase : mainReleasesBase.slice(0, 4)).map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} onPreview={() => setPreview(product)} />
                    ))}
                  </div>
                </div>
                {preview && (
                  <ModalPreview product={preview} onClose={() => setPreview(null)} />
                )}
              </section>

              {/* Shop By Category Section */}
              <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="w-full mx-auto max-w-7xl">
                  <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        SHOP BY CATEGORY
                      </span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                      Discover your favorite collectibles
                    </p>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* K-Pop Category */}
                    <motion.div
                      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-500 cursor-pointer"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-4">
                          K-POP
                        </h3>
                        <p className="text-pink-200 mb-6">
                          Latest releases from your favorite K-pop artists
                        </p>
                        {/* Navigate to /kpop */}
                        <motion.button
                          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.location.href = '/kpop'}
                        >
                          EXPLORE K-POP
                        </motion.button>
                      </div>
                      <motion.div
                        className="absolute top-4 right-4 text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        💿
                      </motion.div>
                    </motion.div>

                    {/* Yu-Gi-Oh Category */}
                    <motion.div
                      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 cursor-pointer"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-4">
                          YU-GI-OH! CARDS
                        </h3>
                        <p className="text-blue-200 mb-6">
                          Rare and collectible trading cards for duelists
                        </p>
                        {/* Navigate to /yugioh */}
                        <motion.button
                          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.location.href = '/yugioh'}
                        >
                          EXPLORE CARDS
                        </motion.button>
                      </div>
                      <motion.div
                        className="absolute top-4 right-4 text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                        animate={{ rotate: [0, -5, 0, 5, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        🃏
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </section>

              <Newsletter />
            </>
          }/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
