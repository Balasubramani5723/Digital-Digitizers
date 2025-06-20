import { motion } from "framer-motion";
import firstBg from "../assets/first.jpg";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${firstBg})` }}
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-black text-center px-4"
    >
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-shadow-neutral-950"
      >
       <span className="text-emerald-500">NEXT-GEN DIGITAL </span> POWERHOUSE
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-lg md:text-xl mb-8 font-bold"
      >
      Transforming Businesses With Future-First Solutions.
      </motion.p>
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.1 }}
        className="bg-conic from-emerald-800 to-emerald-300 to-50% text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
      >
        Get Start
      </motion.a>
    </div>
  );
};

export default Home;
