// src/components/Footer.tsx
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-8">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CARDINARY
            </h3>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-end space-x-8 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {["Privacy Policy", "Terms of Service", "Shipping", "Contact"].map(
              (link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {link}
                </motion.a>
              )
            )}
          </motion.div>
        </div>

        {/* Developer Credit */}
        <motion.div
          className="text-center text-gray-500 text-xs mt-8 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Developed by{" "}
            <motion.a
              href="https://github.com/Seafood99"
              className="text-purple-400 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              Muhammad Dawan Amali
            </motion.a>{" "}
            • 22.61.0239 •{" "}
            <motion.a
              href="https://github.com/ianyudiardi"
              className="text-pink-400 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Muhammad Fabian Nurdi
            </motion.a>{" "}
            • 22.61.0233
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
