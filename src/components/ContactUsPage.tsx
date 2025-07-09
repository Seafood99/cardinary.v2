import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";

const ContactUsPage: React.FC = () => (
  <section className="flex flex-col items-center justify-center min-h-[70vh] w-full px-4 py-12 bg-gradient-to-br from-purple-900/30 to-pink-900/10">
    <motion.div
      className="bg-gradient-to-br from-purple-800/60 to-pink-700/40 rounded-3xl shadow-xl p-8 max-w-lg w-full flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <Mail className="w-8 h-8 text-pink-400 animate-bounce" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Contact Us</h1>
      </div>
      <p className="text-gray-200 text-lg mb-6 text-center">
        Ada pertanyaan atau butuh bantuan? Hubungi kami melalui email di <a href="mailto:support@cardinary.com" className="text-pink-400 underline">support@cardinary.com</a> atau isi form di bawah ini.
      </p>
      <form className="w-full flex flex-col gap-4">
        <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
          <MessageCircle className="w-5 h-5 text-pink-300" />
          <input
            type="text"
            placeholder="Nama Anda"
            className="bg-transparent outline-none text-white flex-1 placeholder:text-gray-400"
          />
        </div>
        <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
          <Mail className="w-5 h-5 text-pink-300" />
          <input
            type="email"
            placeholder="Email Anda"
            className="bg-transparent outline-none text-white flex-1 placeholder:text-gray-400"
          />
        </div>
        <div className="flex items-start gap-2 bg-white/10 rounded-lg px-3 py-2">
          <MessageCircle className="w-5 h-5 text-pink-300 mt-1" />
          <textarea
            placeholder="Pesan Anda"
            className="bg-transparent outline-none text-white flex-1 placeholder:text-gray-400 resize-none min-h-[80px]"
          />
        </div>
        <motion.button
          type="submit"
          className="mt-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 flex items-center gap-2 justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Send className="w-5 h-5" />
          Kirim Pesan
        </motion.button>
      </form>
    </motion.div>
  </section>
);

export default ContactUsPage; 