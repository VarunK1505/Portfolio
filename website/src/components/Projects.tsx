'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Github, 
  FileText, 
  Award,
  TrendingUp,
  Brain,
  Eye,
  MessageSquare,
  BarChart3,
  Play,
  Car
} from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';

// Define the link type with optional isVideo property
type ProjectLink = {
  label: string;
  href: string;
  icon: (props: { className?: string; size?: number }) => JSX.Element;
  isVideo?: boolean;
};

const projects = [
  {
    title: 'Gastrointestinal Tract Image Segmentation',
    description: 'IEEE published research on advanced deep learning techniques for medical image segmentation with state-of-the-art accuracy.',
    image: '/api/placeholder/400/250',
    category: 'Research',
    icon: Brain,
    color: 'primary',
    metrics: [
      { label: 'Accuracy', value: '99.17%', icon: TrendingUp },
      { label: 'IoU Score', value: '0.95', icon: Award },
      { label: 'Dataset', value: 'Kvasir-seg', icon: FileText },
    ],
    technologies: ['Deep Learning', 'Computer Vision', 'Medical AI', 'TensorFlow', 'Python'],
    links: [
      { label: 'IEEE Paper', href: 'https://ieeexplore.ieee.org/abstract/document/10601740', icon: FileText },
    ] as ProjectLink[],
    featured: true
  },
  {
    title: 'Yard Tracking System',
    description: 'Advanced computer vision system for real-time vehicle tracking and monitoring in industrial yards with automated analytics.',
    image: '/api/placeholder/400/250',
    category: 'Computer Vision',
    icon: Car,
    color: 'secondary',
    metrics: [
      { label: 'Tracking Accuracy', value: '96.8%', icon: TrendingUp },
      { label: 'Real-time Processing', value: '30 FPS', icon: Award },
      { label: 'Vehicle Types', value: '15+', icon: TrendingUp },
    ],
    technologies: ['Computer Vision', 'YOLO', 'OpenCV', 'Real-time Tracking', 'Python'],
    links: [
      { label: 'Video Demo', href: '#', icon: Play, isVideo: true },
    ] as ProjectLink[],
    featured: true
  },
  {
    title: 'Efficient Market Predictions Using AI',
    description: 'Advanced stock prediction system combining regression analysis with NLP sentiment analysis for improved market forecasting.',
    image: '/api/placeholder/400/250',
    category: 'Finance AI',
    icon: BarChart3,
    color: 'accent',
    metrics: [
      { label: 'R² Score', value: '0.997', icon: TrendingUp },
      { label: 'Improvement', value: '0.976 → 0.997', icon: Award },
      { label: 'Accuracy', value: '94.2%', icon: TrendingUp },
    ],
    technologies: ['Machine Learning', 'NLP', 'Regression Analysis', 'Sentiment Analysis', 'Python'],
    links: [] as ProjectLink[],
    featured: false
  },
  {
    title: 'AI-based Team Builder',
    description: 'Personality analysis and team optimization system that analyzes individual traits to create high-performing teams.',
    image: '/api/placeholder/400/250',
    category: 'HR Tech',
    icon: Brain,
    color: 'primary',
    metrics: [
      { label: 'Users Analyzed', value: '500+', icon: TrendingUp },
      { label: 'Published', value: 'IEEE Xplore', icon: Award },
      { label: 'Accuracy', value: '91.3%', icon: TrendingUp },
    ],
    technologies: ['Machine Learning', 'Personality Analysis', 'Team Optimization', 'Python', 'Scikit-Learn'],
    links: [
      { label: 'IEEE Paper', href: 'https://ieeexplore.ieee.org/document/10480783', icon: FileText },
      { label: 'GitHub', href: 'https://github.com/VarunK1505/PERSONA-Framework-to-Boost-Team-Effectiveness-through-AI-based-Personality-Skill-Based-Assessment', icon: Github },
    ] as ProjectLink[],
    featured: false
  },
  {
    title: 'Cognitisements: Smart Marketing Platform',
    description: 'AI-powered marketing platform that analyzes market trends and provides actionable insights for entrepreneurs.',
    image: '/api/placeholder/400/250',
    category: 'Marketing AI',
    icon: MessageSquare,
    color: 'secondary',
    metrics: [
      { label: 'Forecasting Accuracy', value: '92.6%', icon: TrendingUp },
      { label: 'Market Coverage', value: '15+ Industries', icon: Award },
      { label: 'Response Time', value: '< 2s', icon: TrendingUp },
    ],
    technologies: ['NLP', 'Predictive Modeling', 'Market Analysis', 'Python', 'TensorFlow'],
    links: [
      { label: 'GitHub', href: 'https://github.com/VarunK1505/Cognitisements', icon: Github },
    ] as ProjectLink[],
    featured: false
  },
  {
    title: 'Real-time Vehicle Damage Detection',
    description: 'Computer vision system for automated vehicle damage assessment with insurance claim processing integration.',
    image: '/api/placeholder/400/250',
    category: 'Computer Vision',
    icon: Eye,
    color: 'accent',
    metrics: [
      { label: 'Accuracy Improvement', value: '20%', icon: TrendingUp },
      { label: 'Processing Time', value: '40% Reduction', icon: Award },
      { label: 'Claims Processed', value: '10K+ Daily', icon: TrendingUp },
    ],
    technologies: ['Computer Vision', 'YOLO', 'OpenCV', 'Insurance Tech', 'Python'],
    links: [] as ProjectLink[],
    featured: false
  },
  {
    title: 'Multi-agent AI Surveillance System',
    description: 'Intelligent surveillance system with real-time threat detection and automated alert generation for security applications.',
    image: '/api/placeholder/400/250',
    category: 'Security AI',
    icon: Brain,
    color: 'primary',
    metrics: [
      { label: 'Detection Accuracy', value: '80%+', icon: TrendingUp },
      { label: 'Real-time Processing', value: 'Yes', icon: Award },
      { label: 'Alert Generation', value: 'Automated', icon: TrendingUp },
    ],
    technologies: ['Multi-agent Systems', 'Computer Vision', 'Real-time Processing', 'Security AI', 'Python'],
    links: [] as ProjectLink[],
    featured: false
  }
];

export default function Projects() {
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

  const handleVideoClick = () => {
    // Open the video file in a new tab/window
    window.open('/yardtracking.mp4', '_blank');
  };

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-[#00d4ff]">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative AI solutions that demonstrate expertise across multiple domains
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#00ff88]">
            Research & Industry Impact
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => {
              const colors = getColorClasses(project.color);
              
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className={`h-full ${colors.border} hover:${colors.bg}`}>
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${colors.bg} ${colors.border} border`}>
                          <project.icon className={`w-5 h-5 ${colors.text}`} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{project.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${colors.badge}`}>
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <metric.icon className="w-4 h-4 text-[#00d4ff] mr-1" />
                            <span className="text-lg font-bold text-white">{metric.value}</span>
                          </div>
                          <span className="text-xs text-gray-400">{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded border border-[#404040]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex space-x-2">
                      {project.links.map((link, idx) => (
                        link.isVideo ? (
                          <Button
                            key={idx}
                            variant="outline"
                            size="sm"
                            onClick={handleVideoClick}
                            className="flex-1"
                          >
                            <link.icon className="w-4 h-4 mr-2" />
                            {link.label}
                          </Button>
                        ) : (
                          <Button
                            key={idx}
                            variant="outline"
                            size="sm"
                            href={link.href}
                            className="flex-1"
                          >
                            <link.icon className="w-4 h-4 mr-2" />
                            {link.label}
                          </Button>
                        )
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-[#ff6b35]">
            Additional Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => {
              const colors = getColorClasses(project.color);
              
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Card className={`h-full ${colors.border} hover:${colors.bg}`}>
                    {/* Project Header */}
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg ${colors.bg} ${colors.border} border`}>
                        <project.icon className={`w-4 h-4 ${colors.text}`} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">{project.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${colors.badge}`}>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Metric */}
                    <div className="mb-3">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="w-4 h-4 text-[#00d4ff] mr-1" />
                        <span className="text-lg font-bold text-white">
                          {project.metrics[0].value}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 text-center block">
                        {project.metrics[0].label}
                      </span>
                    </div>

                    {/* Technologies */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded border border-[#404040]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Links - Only show if links exist */}
                    {project.links.length > 0 && (
                      <div className="flex space-x-2">
                        {project.links.map((link, idx) => (
                          <Button
                            key={idx}
                            variant="outline"
                            size="sm"
                            href={link.href}
                            className="flex-1 text-xs"
                          >
                            <link.icon className="w-3 h-3 mr-1" />
                            {link.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-gray-300 mb-6">
              I&apos;m always excited to work on innovative AI projects. Let&apos;s discuss how we can build something amazing together.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Let&apos;s Connect
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
