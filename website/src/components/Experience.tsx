'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  TrendingUp, 
  Award,
  Building2,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import Card from './ui/Card';

const experiences = [
  {
    company: 'Sphere Soft Solutions',
    position: 'AI Engineer',
    duration: 'Jul 2024 - Present',
    location: 'Remote',
    type: 'Full-time',
    icon: Building2,
    color: 'primary',
    achievements: [
      'Developed multi-agent AI system for vehicle tracking with 40% reduction in insurance claim processing time',
      'Built full-stack RAG chatbot with LLaMA integration for customer support automation',
      'Created vehicle damage detection pipelines achieving 20% accuracy improvement',
      'Led team of 10 interns and 5 international specialists in AI project delivery',
      'Implemented real-time data processing systems handling 10,000+ requests daily'
    ],
    technologies: ['Python', 'TensorFlow', 'LLaMA', 'RAG', 'Computer Vision', 'Multi-agent Systems']
  },
  {
    company: 'Anyo App',
    position: 'AI Research Intern',
    duration: 'Mar 2023 - May 2023',
    location: 'Remote',
    type: 'Internship',
    icon: Briefcase,
    color: 'secondary',
    achievements: [
      'Developed mental health chatbot using RASA framework for user support',
      'Achieved 30% increase in user satisfaction through improved response accuracy',
      'Reduced operational costs by 20% through automated customer service',
      'Implemented sentiment analysis for real-time user mood detection',
      'Created comprehensive training dataset with 10,000+ conversation samples'
    ],
    technologies: ['RASA', 'Python', 'NLP', 'Sentiment Analysis', 'Machine Learning']
  },
  {
    company: 'Orgware Technologies',
    position: 'AI/ML Intern',
    duration: 'Nov 2022 - Feb 2023',
    location: 'Remote',
    type: 'Internship',
    icon: Building2,
    color: 'accent',
    achievements: [
      'Developed NLP system for military surveillance drones with 80%+ accuracy',
      'Implemented real-time alert generation system for threat detection',
      'Created automated data processing pipeline for surveillance footage analysis',
      'Optimized model performance resulting in 50% faster inference times',
      'Collaborated with defense team to ensure system reliability and security'
    ],
    technologies: ['Computer Vision', 'NLP', 'Real-time Processing', 'Surveillance Systems', 'Python']
  },
  {
    company: 'Farmwise AI',
    position: 'Machine Learning Intern',
    duration: 'Aug 2022 - Oct 2022',
    location: 'Remote',
    type: 'Internship',
    icon: Briefcase,
    color: 'primary',
    achievements: [
      'Developed polygon matching algorithms for farmland analysis and crop monitoring',
      'Improved accuracy from 67% to 93% in farmland boundary detection',
      'Created automated crop health assessment system using satellite imagery',
      'Implemented data visualization dashboard for agricultural insights',
      'Reduced manual analysis time by 75% through automation'
    ],
    technologies: ['Computer Vision', 'Satellite Imagery', 'Geospatial Analysis', 'Python', 'OpenCV']
  }
];

const leadership = [
  {
    role: 'Vice President',
    organization: 'Data Science Club, VIT Chennai',
    duration: '2022 - 2024',
    icon: Users,
    achievements: [
      'Organized hackathons with 500+ participants from across India',
      'Conducted technical workshops on AI/ML for 200+ students',
      'Mentored 50+ students in data science projects',
      'Established partnerships with industry leaders for internships'
    ]
  },
  {
    role: 'Capstone Mentor',
    organization: 'Deakin University, Australia',
    duration: '2023 - 2024',
    icon: GraduationCap,
    achievements: [
      'Mentored international students in AI/ML capstone projects',
      'Guided research on computer vision applications',
      'Facilitated cross-cultural collaboration in technical projects',
      'Provided expertise in deep learning model optimization'
    ]
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          border: 'border-[#00d4ff]',
          bg: 'bg-[#00d4ff]/10',
          text: 'text-[#00d4ff]',
          dot: 'bg-[#00d4ff]',
        };
      case 'secondary':
        return {
          border: 'border-[#00ff88]',
          bg: 'bg-[#00ff88]/10',
          text: 'text-[#00ff88]',
          dot: 'bg-[#00ff88]',
        };
      case 'accent':
        return {
          border: 'border-[#ff6b35]',
          bg: 'bg-[#ff6b35]/10',
          text: 'text-[#ff6b35]',
          dot: 'bg-[#ff6b35]',
        };
      default:
        return {
          border: 'border-[#00d4ff]',
          bg: 'bg-[#00d4ff]/10',
          text: 'text-[#00d4ff]',
          dot: 'bg-[#00d4ff]',
        };
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-[#00d4ff]">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building intelligent solutions across diverse industries with measurable impact
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d4ff] via-[#00ff88] to-[#ff6b35]"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={`${exp.company}-${exp.duration}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black border-4 border-[#00d4ff] rounded-full z-10"></div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className={`${colors.border} hover:${colors.bg}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${colors.bg} ${colors.border} border`}>
                            <exp.icon className={`w-5 h-5 ${colors.text}`} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                            <p className="text-[#00d4ff] font-semibold">{exp.company}</p>
                          </div>
                        </div>
                        <span className="text-xs bg-[#2a2a2a] text-gray-400 px-2 py-1 rounded">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-[#00ff88] mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-start space-x-2">
                              <TrendingUp className="w-3 h-3 text-[#00d4ff] mt-1 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#ff6b35] mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded border border-[#404040]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Leadership & <span className="text-[#00ff88]">Mentorship</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((role, index) => (
              <motion.div
                key={`${role.role}-${role.organization}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              >
                <Card className="h-full border-[#00ff88] hover:bg-[#00ff88]/10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]">
                      <role.icon className="w-6 h-6 text-[#00ff88]" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-white">{role.role}</h4>
                      <p className="text-[#00ff88] font-semibold">{role.organization}</p>
                      <p className="text-sm text-gray-400">{role.duration}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {role.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start space-x-2">
                        <Award className="w-3 h-3 text-[#00ff88] mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

