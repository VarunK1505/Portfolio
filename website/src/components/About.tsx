'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Target, Award, Zap } from 'lucide-react';
import Card from './ui/Card';
import ProgressBar from './ui/ProgressBar';

const stats = [
  { label: 'CGPA', value: '9.1', icon: Award, color: 'primary' },
  { label: 'Years Experience', value: '2+', icon: Brain, color: 'secondary' },
  { label: 'AI Projects', value: '20+', icon: Target, color: 'accent' },
  { label: 'Average Model Accuracy', value: '95%+', icon: Zap, color: 'primary' },
];

const skills = [
  { name: 'Machine Learning', level: 90 },
  { name: 'Computer Vision', level: 95 },
  { name: 'Natural Language Processing', level: 85 },
  { name: 'Deep Learning', level: 90 },
  { name: 'Python Development', level: 75 },
  { name: 'AI Research', level: 90 },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-[#00d4ff]">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            AI Engineer with proven expertise in computer vision, NLP, and deep learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full">
              <h3 className="text-2xl font-bold mb-6 text-[#00d4ff]">
                Professional Summary
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m an AI Engineer with a passion for building intelligent solutions that drive innovation. 
                  With over 2 years of experience in machine learning and artificial intelligence, I specialize 
                  in computer vision, natural language processing, and deep learning.
                </p>
                <p>
                  Currently working as an AI Engineer at Sphere Soft Solutions, where I lead a team of 10 interns 
                  and 5 international specialists. I&apos;ve successfully delivered projects that achieved 40% reduction 
                  in insurance claim processing time and 20% improvement in vehicle damage detection accuracy.
                </p>
                <p>
                  My expertise spans across multiple domains including multi-agent AI systems, RAG chatbots, 
                  real-time surveillance systems, and predictive analytics. I&apos;m passionate about pushing the 
                  boundaries of what&apos;s possible with AI and making technology more accessible.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Right Content - Stats and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="text-center hover:border-[#00ff88]">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#00d4ff]" />
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <Card>
              <h3 className="text-xl font-bold mb-6 text-[#00ff88]">
                Core Competencies
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <ProgressBar
                      value={skill.level}
                      label={skill.name}
                      color={index % 2 === 0 ? 'primary' : 'secondary'}
                    />
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <Card className="text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-[#00d4ff] mb-2">
                  Research Focus
                </h4>
                <p className="text-gray-400">
                  Published IEEE research on gastrointestinal tract image segmentation with 99.17% accuracy
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#00ff88] mb-2">
                  Leadership
                </h4>
                <p className="text-gray-400">
                  Vice President of Data Science Club, organized hackathons with 500+ participants
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#ff6b35] mb-2">
                  Innovation
                </h4>
                <p className="text-gray-400">
                  Developed AI solutions that improved accuracy from 67% to 93% in farmland analysis
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
