import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import speedreader from "../assets/Projects/speedreader.png"

const projects = [
  {
    id: 1,
    title: "SpeedReader",
    description: "SpeedReader is a recreational speed-reading experiment that displays text one word at a time, keeping your focus locked on a single point. It’s a minimalist attempt to explore how presentation style affects reading speed, comprehension, and attention. Built mostly for fun and curiosity, it plays with the idea that changing how words appear can change how fast your brain consumes them.",
    image: speedreader,
    tags: ["HTML", "CSS", "JavaScript"],
    links: { github: "https://github.com/mbsurya19122004/speedReader", demo: "https://mbsurya19122004.github.io/speedReader/index.html" },
  },
  
];

export function Projects() {
  return (
    <div className="pt-20 pb-20">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-12 border-b border-white/10 pb-4"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            <div className="aspect-video w-full overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs rounded-md bg-white/5 text-cyan-200 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a href={project.links.github} target="_blank" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Github size={16} />
                  Code
                </a>
                <a href={project.links.demo} target="_blank" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
