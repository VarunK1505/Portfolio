'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin,
  BookOpen,
  Trophy,
  FileText
} from 'lucide-react';
import Card from './ui/Card';

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    specialization: 'AI and Machine Learning',
    institution: 'Vellore Institute of Technology, Chennai',
    duration: 'Sep 2020 - Jul 2024',
    location: 'Chennai, India',
    cgpa: '9.1',
    icon: GraduationCap,
    color: 'primary',
    highlights: [
      'Specialized in AI and Machine Learning track',
      'Consistent academic excellence with 9.1 CGPA',
      'Active member of Data Science Club',
      'Completed multiple AI/ML research projects',
      'Participated in national-level hackathons'
    ]
  }
];

const certifications = [
  {
    title: 'Python for Data Science and Machine Learning',
    provider: 'Udemy',
    duration: '2023',
    icon: BookOpen,
    color: 'secondary',
    description: 'Comprehensive course covering Python fundamentals, data analysis, and machine learning algorithms',
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn']
  },
  {
    title: 'Building a Facial Recognition Application Using Python',
    provider: 'Guvi',
    duration: '2023',
    icon: BookOpen,
    color: 'accent',
    description: 'Hands-on project building facial recognition systems with computer vision techniques',
    skills: ['Computer Vision', 'OpenCV', 'Face Detection', 'Python', 'Machine Learning']
  },
  {
    title: 'Intro to Machine Learning',
    provider: 'Kaggle',
    duration: '2022',
    icon: BookOpen,
    color: 'primary',
    description: 'Foundational machine learning concepts and practical implementation techniques',
    skills: ['Machine Learning', 'Data Preprocessing', 'Model Evaluation', 'Feature Engineering']
  },
  {
    title: 'Deep Generative Modelling for Images',
    provider: 'VIT Chennai',
    duration: '2023',
    icon: BookOpen,
    color: 'secondary',
    description: 'Advanced course on generative models including GANs and VAEs for image generation',
    skills: ['Deep Learning', 'GANs', 'VAEs', 'Generative Models', 'TensorFlow', 'PyTorch']
  },
  {
    title: 'Programming Certifications',
    provider: 'IIT Bombay',
    duration: '2022-2023',
    icon: Trophy,
    color: 'accent',
    description: 'Multiple programming certifications from prestigious IIT Bombay',
    skills: ['Algorithm Design', 'Data Structures', 'Competitive Programming', 'Problem Solving']
  }
];

const achievements = [
  {
    title: 'IEEE Research Publication',
    description: 'Published research paper on gastrointestinal tract image segmentation',
    metric: '99.17% Accuracy',
    icon: FileText,
    color: 'primary'
  },
  {
    title: 'Hackathon Organizer',
    description: 'Organized hackathons with 500+ participants',
    metric: '500+ Participants',
    icon: Trophy,
    color: 'secondary'
  },
  {
    title: 'Vice President',
    description: 'Data Science Club, VIT Chennai',
    metric: '2 Years Leadership',
    icon: Award,
    color: 'accent'
  },
  {
    title: 'International Mentor',
    description: 'Capstone mentor for Deakin University, Australia',
    metric: 'Cross-cultural Impact',
    icon: GraduationCap,
    color: 'primary'
  }
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          border: 'border-[#00d4ff]',
          bg: 'bg-[#00d4ff]/10',
          text: 'text-[#00d4ff]',
          badge: 'bg-[#00d4ff]/20 text-[#00d4ff]',
        };
      case 'secondary':
        return {
          border: 'border-[#00ff88]',
          bg: 'bg-[#00ff88]/10',
          text: 'text-[#00ff88]',
          badge: 'bg-[#00ff88]/20 text-[#00ff88]',
        };
      case 'accent':
        return {
          border: 'border-[#ff6b35]',
          bg: 'bg-[#ff6b35]/10',
          text: 'text-[#ff6b35]',
          badge: 'bg-[#ff6b35]/20 text-[#ff6b35]',
        };
      default:
        return {
          border: 'border-[#00d4ff]',
          bg: 'bg-[#00d4ff]/10',
          text: 'text-[#00d4ff]',
          badge: 'bg-[#00d4ff]/20 text-[#00d4ff]',
        };
    }
  };

  return (
    <section id="education" className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="text-[#00d4ff]">Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Strong academic foundation with continuous learning and professional development
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#00ff88]">
            Academic Background
          </h3>
          {education.map((edu, index) => {
            const colors = getColorClasses(edu.color);
            
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`${colors.border} hover:${colors.bg}`}>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`p-3 rounded-lg ${colors.bg} ${colors.border} border`}>
                          <edu.icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                          <p className="text-[#00d4ff] font-semibold mb-2">{edu.specialization}</p>
                          <p className="text-lg text-gray-300">{edu.institution}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6 mb-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-[#00ff88]">Key Highlights:</h5>
                        <ul className="space-y-1">
                          {edu.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-start space-x-2">
                              <Award className="w-3 h-3 text-[#00d4ff] mt-1 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column - CGPA */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#00d4ff] mb-2">{edu.cgpa}</div>
                        <div className="text-sm text-gray-400">CGPA</div>
                        <div className="w-24 h-1 bg-[#2a2a2a] rounded-full mt-4">
                          <div 
                            className="h-full bg-gradient-to-r from-[#00d4ff] to-[#00ff88] rounded-full"
                            style={{ width: `${(parseFloat(edu.cgpa) / 10) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#ff6b35]">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const colors = getColorClasses(cert.color);
              
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className={`h-full ${colors.border} hover:${colors.bg}`}>
                    <div className="flex items-start space-x-3 mb-4">
                      <div className={`p-2 rounded-lg ${colors.bg} ${colors.border} border`}>
                        <cert.icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-bold text-white mb-1">{cert.title}</h4>
                        <p className="text-[#00d4ff] text-sm font-semibold">{cert.provider}</p>
                        <p className="text-xs text-gray-400">{cert.duration}</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    <div>
                      <h5 className="text-xs font-semibold text-gray-400 mb-2">Skills Gained:</h5>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded border border-[#404040]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-[#00d4ff]">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const colors = getColorClasses(achievement.color);
              
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Card className={`text-center h-full ${colors.border} hover:${colors.bg}`}>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                      <achievement.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                    <p className="text-sm text-gray-300 mb-3">{achievement.description}</p>
                    <div className={`text-lg font-bold ${colors.text}`}>{achievement.metric}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
