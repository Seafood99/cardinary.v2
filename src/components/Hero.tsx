import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {  Star } from 'lucide-react';

const heroImages = [
  {
    src: "/assets/twice.jpg",
    alt: "TWICE 2025 Seasons Greeting",
    title1: "TWICE - 2025",
    title2: "SEASONS GREETING",
    subtitle: "[COLLECTOR]",
    desc: "Exclusive K-pop Album available now. Limited quantities, collect before they're gone forever.",
    price: "$29.99",
    badge: "Limited Edition"
  },
  {
    src: "/assets/gfriend.jpg",
    alt: "GFRIEND 2025 Seasons of Memories",
    title1: "GFRIEND - 2025",
    title2: "SEASONS OF MEMORIES",
    subtitle: "[SPECIAL]",
    desc: "Special GFRIEND album for true buddies. Grab yours before it's sold out!",
    price: "$24.99",
    badge: "Special Edition"
  },
  {
    src: "/assets/dragoon.jpg",
    alt: "I:P Masquerena",
    title1: "I:P Masquerena",
    title2: "SECRET RARE ALT ART",
    subtitle: "[YUGIOH]",
    desc: "Highly sought-after Yugioh card for collectors. Secure yours before it's gone!",
    price: "$49.99",
    badge: "Yugioh Card"
  },
  {
    src: "/assets/albion.jpg",
    alt: "S:P Little Knight",
    title1: "S:P Little Knight",
    title2: "SUPER RARE",
    subtitle: "[YUGIOH]",
    desc: "Super Rare Yugioh card for duelists and collectors.",
    price: "$19.99",
    badge: "Yugioh Card"
  }
];

export default function Hero() {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };


  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-pink-900/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* ...existing background code... */}
      </div>

      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Featured Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8"
            >
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium text-purple-200">FEATURED COLLECTION</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl md:text-7xl font-black mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                {heroImages[imgIdx].title1}
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-300 bg-clip-text text-transparent">
                {heroImages[imgIdx].title2}
              </span>
              <br />
              <span className="text-white">
                {heroImages[imgIdx].subtitle}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 w-full"
            >
              {heroImages[imgIdx].desc}
            </motion.p>

            {/* Price */}
            <motion.div className="relative z-10">
              <span className="text-4xl font-bold text-white">{heroImages[imgIdx].price}</span>
              <span className="text-sm text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                {heroImages[imgIdx].badge}
              </span>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div className="relative z-10">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <img
                  src={heroImages[imgIdx].src}
                  alt={heroImages[imgIdx].alt}
                  className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] object-cover rounded-2xl shadow-2xl mx-auto"
                />
                {/* ...floating elements... */}
              </div>
            </motion.div>
            {/* ...background decorative elements... */}
          </motion.div>
        </div>
        {/* ...navigation dots, dst... */}
      </div>
    </section>
  );
}