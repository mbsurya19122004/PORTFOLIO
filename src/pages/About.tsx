import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import image from "../assets/anime.jpg"

export function About() {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "Tailwind CSS", "Linux", "Git"
  ];

  const experiences = [
                { role: "OpenSource Contributor", company: "Gnome Foundation", period: "2025 - Present" }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/3"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <ImageWithFallback
                src={image}
                alt="Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-2/3"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-cyan-400">Me</span>
          </h1>
          
          <div className="prose prose-invert max-w-none text-gray-300 mb-12">
            <p className="text-lg leading-relaxed mb-6">
              I'm a passionate software developer with a knack for building elegant solutions to complex problems. 
              With over 5 years of experience in full-stack development, I've had the privilege of working with 
              startups and established companies to bring their digital visions to life.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or hiking in the mountains. I believe in continuous learning and the power of community in tech.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-cyan-200 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
            <div className="space-y-8">
              {experiences.map((job, index) => (
                <div key={index} className="flex justify-between items-center group">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{job.company}</h3>
                    <p className="text-gray-400">{job.role}</p>
                  </div>
                  <span className="text-sm text-gray-500 font-mono">{job.period}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
