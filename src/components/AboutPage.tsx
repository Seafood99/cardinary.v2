import React from "react";
import { motion } from "framer-motion";
import { Users, Star } from "lucide-react";

const AboutPage: React.FC = () => (
  <section className="flex flex-col items-center justify-center min-h-[70vh] w-full px-4 py-12 bg-gradient-to-br from-purple-900/30 to-pink-900/10">
    <motion.div
      className="bg-gradient-to-br from-purple-800/60 to-pink-700/40 rounded-3xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <Star className="w-8 h-8 text-pink-400 animate-spin-slow" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About</h1>
      </div>
      <p className="text-gray-200 text-lg mb-6 text-center">
        Cardinary Store adalah toko digital yang menyediakan koleksi K-Pop, Yu-Gi-Oh!, dan berbagai merchandise menarik lainnya. Kami berkomitmen memberikan produk terbaik untuk para kolektor dan penggemar.
      </p>
      <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center mt-6">
        <motion.div
          className="flex flex-col items-center bg-white/10 rounded-xl p-4 w-full md:w-1/2"
          whileHover={{ scale: 1.05 }}
        >
          <Users className="w-8 h-8 text-purple-300 mb-2" />
          <h2 className="text-xl font-bold text-pink-300 mb-1">Tim Kami</h2>
          <p className="text-gray-300 text-sm text-center">Kami terdiri dari kolektor, penggemar K-Pop, dan duelist yang passionate, siap membantu Anda menemukan koleksi impian.</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center bg-white/10 rounded-xl p-4 w-full md:w-1/2"
          whileHover={{ scale: 1.05 }}
        >
          <Star className="w-8 h-8 text-yellow-300 mb-2 animate-pulse" />
          <h2 className="text-xl font-bold text-purple-300 mb-1">Visi & Misi</h2>
          <p className="text-gray-300 text-sm text-center">Menjadi toko digital koleksi terbaik di Indonesia, menghubungkan penggemar dengan produk original, aman, dan terpercaya.</p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default AboutPage; 