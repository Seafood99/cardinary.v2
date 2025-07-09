import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "../data/product";
import ModalPreview from "./ModalPreview";
import type { Product } from "../types";
import { Link } from "react-router-dom";

const YugiohPage: React.FC = () => {
  const [preview, setPreview] = useState<Product | null>(null);
  const yugiohItems = products.filter(p => p.category === "yugioh");

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
      <motion.div
        className="flex flex-col items-center w-full mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Yu-Gi-Oh!</h1>
        <p className="text-gray-300 text-lg max-w-2xl text-center">Temukan kartu dan koleksi Yu-Gi-Oh! terbaik untuk para duelist sejati di sini.</p>
      </motion.div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {yugiohItems.map((item, idx) => (
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

export default YugiohPage;
