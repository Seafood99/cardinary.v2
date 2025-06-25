// src/App.tsx
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";
import { products } from "./data/product";
import "./App.css";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 w-full">
      <Header />
      <Hero />
      <Analytics />

      {/* New Releases Section */}
      <section id="new-releases" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
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
            >
              View All
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto">
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
                  K-POP ALBUMS
                </h3>
                <p className="text-pink-200 mb-6">
                  Latest releases from your favorite K-pop artists
                </p>
                <a
                  href="https://www.ktown4u.com/"
                  className="inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    EXPLORE K-POP
                  </motion.button>
                </a>
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
                <a
                  href="https://www.tokopedia.com/search?st=product&q=yugioh" // ganti dengan link tujuan Anda
                  className="inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    EXPLORE CARDS
                  </motion.button>
                </a>
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
      <Footer />
    </div>
  );
}

export default App;
