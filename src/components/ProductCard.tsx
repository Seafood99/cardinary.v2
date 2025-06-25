// src/components/ProductCard.tsx
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Background Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        initial={false}
      />

      {/* Limited Edition Badge */}
      {product.isLimited && (
        <motion.div
          className="absolute top-2 left-2 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold"
          initial={{ scale: 0, rotate: -12 }}
          animate={{ scale: 1, rotate: -12 }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 500 }}
        >
          LIMITED
        </motion.div>
      )}

      {/* Action Buttons */}
      <div className="absolute top-2 right-2 z-10 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <motion.button
          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart className="w-4 h-4 text-pink-400" />
        </motion.button>
        <motion.button
          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Eye className="w-4 h-4 text-blue-400" />
        </motion.button>
      </div>

      {/* Product Image */}
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick View Button */}
        <motion.button
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-8 group-hover:translate-y-0 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Quick View
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="relative z-10">
        <div className="mb-2">
          <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2 group-hover:text-purple-300 transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-gray-400 text-xs">
            {product.code} • {product.rarity}
          </p>
        </div>

        {/* Category Badge */}
        <div className="mb-3">
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
            product.category === 'kpop' 
              ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
              : product.category === 'yugioh'
              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
              : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
          }`}>
            {product.category.toUpperCase()}
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <motion.div
            className="text-white font-bold text-lg"
            whileHover={{ scale: 1.05 }}
          >
            ${product.price}
          </motion.div>
          
          <motion.button
            className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group/btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform duration-200" />
          </motion.button>
        </div>

        {/* Hover Effect Bottom Bar */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"
        />
      </div>
    </motion.div>
  );
}