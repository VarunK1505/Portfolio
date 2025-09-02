'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Brain, 
  Eye, 
  MessageSquare, 
  Database, 
  Wrench,
  Cpu,
  Zap,
  GitBranch,
  Cloud,
  BarChart3
} from 'lucide-react';
import Card from './ui/Card';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'primary',
    skills: [
      { name: 'Python', level: 90, icon: Code },
      { name: 'JavaScript', level: 60, icon: Code },
      { name: 'SQL', level: 70, icon: Database },
    ]
  },
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    color: 'secondary',
    skills: [
      { name: 'TensorFlow', level: 90, icon: Brain },
      { name: 'PyTorch', level: 85, icon: Brain },
      { name: 'Keras', level: 85, icon: Brain },
      { name: 'Scikit-Learn', level: 90, icon: Brain },
      { name: 'YOLO', level: 90, icon: Eye },
      { name: 'Large Language Models', level: 85, icon: MessageSquare },
    ]
  },
  {
    title: 'Computer Vision',
    icon: Eye,
    color: 'accent',
    skills: [
      { name: 'OpenCV', level: 85, icon: Eye },
      { name: 'Ultralytics', level: 90, icon: Eye },
      { name: 'Image Segmentation', level: 90, icon: Eye },
      { name: 'Object Detection', level: 95, icon: Eye },
      { name: 'Facial Recognition', level: 85, icon: Eye },
    ]
  },
  {
    title: 'Natural Language Processing',
    icon: MessageSquare,
    color: 'primary',
    skills: [
      { name: 'RAG Systems', level: 90, icon: MessageSquare },
      { name: 'LLMs', level: 87, icon: MessageSquare },
      { name: 'Sentence-Transformers', level: 85, icon: MessageSquare },
      { name: 'RASA', level: 82, icon: MessageSquare },
      { name: 'GPT Integration', level: 85, icon: MessageSquare },
      { name: 'Sentiment Analysis', level: 86, icon: MessageSquare },
    ]
  },
  {
    title: 'Data Engineering',
    icon: Database,
    color: 'secondary',
    skills: [
      { name: 'Pandas', level: 95, icon: Database },
      { name: 'NumPy', level: 93, icon: Database },
      { name: 'Matplotlib', level: 88, icon: BarChart3 },
      { name: 'Seaborn', level: 85, icon: BarChart3 },
      { name: 'GeoPandas', level: 70, icon: Database },
    ]
  },
  {
    title: 'Development Tools',
    icon: Wrench,
    color: 'accent',
    skills: [
      { name: 'Git', level: 92, icon: GitBranch },
      { name: 'Selenium', level: 80, icon: Wrench },
      { name: 'BeautifulSoup', level: 85, icon: Wrench },
      { name: 'Label Studio', level: 75, icon: Wrench },
      { name: 'CVAT', level: 75, icon: Wrench },
    ]
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          border: 'border-[#00d4ff]',
          bg: 'bg-[#00d4ff]/10',
          text: 'text-[#00d4ff]',
          progress: 'bg-[#00d4ff]',
        };
      case 'secondary':
        return {
          border: 'border-[#00ff88]',
          bg: 'bg-[#00ff88]/10',
          text: 'text-[#00ff88]',
          progress: 'bg-[#00ff88]',
        };
      case 'accent':
        return {
          border: 'border-[#ff6b35]',
          bg: 'bg-[#ff6b35]/10',
          text: 'text-[#ff6b35]',
          progress: 'bg-[#ff6b35]',
        };
      default:
        return {
          border: 'border-[#00d4ff]',
          bg: 'bg-[#00d4ff]/10',
          text: 'text-[#00d4ff]',
          progress: 'bg-[#00d4ff]',
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-[#00d4ff]">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise across AI/ML technologies and development tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className={`h-full ${colors.border} hover:${colors.bg}`}>
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${colors.bg} ${colors.border} border`}>
                      <category.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className={`text-xl font-bold ml-4 ${colors.text}`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.4, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <skill.icon className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-300">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500 font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-[#2a2a2a] rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full ${colors.progress} rounded-full`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                              ease: "easeOut" 
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="text-center">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00d4ff] to-[#00ff88] rounded-full flex items-center justify-center mb-4">
                  <Cpu className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  AI/ML Frameworks
                </h4>
                <p className="text-gray-400 text-sm">
                  TensorFlow, PyTorch, Keras, Scikit-Learn
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ff88] to-[#ff6b35] rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Computer Vision
                </h4>
                <p className="text-gray-400 text-sm">
                  OpenCV, YOLO, Image Processing
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#ff6b35] to-[#00d4ff] rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  NLP & LLMs
                </h4>
                <p className="text-gray-400 text-sm">
                  RAG, GPT, Sentiment Analysis
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00d4ff] to-[#ff6b35] rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Performance
                </h4>
                <p className="text-gray-400 text-sm">
                  99%+ Model Accuracy Achieved
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
