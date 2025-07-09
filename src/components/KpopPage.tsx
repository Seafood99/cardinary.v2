// src/components/KpopPage.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "../data/product";
import ModalPreview from "./ModalPreview";
import type { Product } from "../types";

const KpopPage: React.FC = () => {
  const [filter, setFilter] = useState<'album' | 'photocard'>('album');
  const [preview, setPreview] = useState<Product | null>(null);
  // Filter sesuai tombol
  const displayedItems = products.filter(p =>
    filter === 'album' ? p.category === "kpop" : p.category === "photocard"
  );

  return (
    <section className="py-20 px-0 sm:px-6 lg:px-8 min-h-[70vh]">
      <motion.div
        className="flex flex-col items-center w-full mb-9"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            K-POP COLLECTION
          </span>
        </h2>
        <p className="text-gray-300 text-lg text-center mb-6">
          Temukan album & merchandise K-Pop terbaru
        </p>
        <div className="flex gap-4 mb-4">
          <button
            className={`px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 ${filter === 'album' ? 'ring-2 ring-pink-400' : ''}`}
            onClick={() => setFilter('album')}
          >
            Album
          </button>
          <button
            className={`px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 ${filter === 'photocard' ? 'ring-2 ring-pink-400' : ''}`}
            onClick={() => setFilter('photocard')}
          >
            Photocard
          </button>
        </div>
      </motion.div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayedItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ProductCard product={item} index={idx} onPreview={() => setPreview(item)} />
          </motion.div>
        ))}
      </div>
      {preview && (
        <ModalPreview product={preview} onClose={() => setPreview(null)} />
      )}
    </section>
  );
};

export default KpopPage;
