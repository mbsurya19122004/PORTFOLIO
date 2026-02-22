import { motion } from "motion/react";
import { ArrowRight, Code, Database, Globe, ChevronDown } from "lucide-react";
import { Link } from "react-router";

export function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center min-h-[80vh] gap-8 relative z-10 py-32"
    >
      <motion.div variants={itemVariants} className="text-cyan-400 font-mono text-lg md:text-xl tracking-wider">
        OpenSource Contributor | Full-Stack Developer | Django & React
      </motion.div>
      
      
      <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white max-w-4xl">
        
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
          Build. Break. Learn.
        </span>
        <br />
        {" "}M B  SURYANARYANAN
      </motion.h1>

      <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
        I like breaking things down to understand how they work, then rebuilding them better. Most of my projects start as curiosity and turn into experiments in automation, interfaces, and systems. I care about elegant logic, practical tools, and learning by building.
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-4 pt-4">
        <Link to="/projects" className="group flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95">
          View Projects
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link to="/contact" className="px-8 py-4 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-medium rounded-full transition-all">
          Contact Me
        </Link>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/5 h-[90%]">
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-cyan-500/30 transition-colors">
          <Globe className="w-10 h-10 text-cyan-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
          <p className="text-gray-400 text-sm">Crafting responsive and performant web applications with modern frameworks.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-purple-500/30 transition-colors">
          <Database className="w-10 h-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Backend Systems</h3>
          <p className="text-gray-400 text-sm">Designing robust APIs and database schemas for scalable solutions.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-blue-500/30 transition-colors">
          <Code className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">UI/UX Implementation</h3>
          <p className="text-gray-400 text-sm">Translating complex designs into pixel-perfect, interactive interfaces.</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </motion.div>
  );
}
