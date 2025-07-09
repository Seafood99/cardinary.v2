import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Product } from "../types";

interface ModalPreviewProps {
  product: Product;
  onClose: () => void;
}

const ModalPreview: React.FC<ModalPreviewProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-gradient-to-br from-purple-900/80 to-pink-900/80 rounded-2xl shadow-2xl p-6 max-w-lg w-full flex flex-col items-center"
          initial={{ scale: 0.9, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 40 }}
          transition={{ duration: 0.3 }}
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-3 text-white bg-black/30 rounded-full p-2 hover:bg-pink-500/40 transition"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-96 object-contain rounded-xl mb-4 bg-black/20"
          />
          <h2 className="text-2xl font-bold text-pink-300 mb-2 text-center">{product.name}</h2>
          <p className="text-gray-300 text-center mb-2 text-sm">{product.code} • {product.rarity}</p>
          <div className="text-white font-bold text-lg mb-2">${product.price}</div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-pink-500/20 text-pink-300 border border-pink-500/30 mb-2">
            {product.category.toUpperCase()}
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalPreview; 