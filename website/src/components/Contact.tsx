'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  CheckCircle,
  AlertCircle,
  FileText
} from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kamathvarun15@gmail.com',
    href: 'mailto:kamathvarun15@gmail.com',
    color: 'primary'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9769614617',
    href: 'tel:+919769614617',
    color: 'secondary'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mumbai, Maharashtra, India',
    href: '#',
    color: 'accent'
  }
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/VarunK1505',
    color: 'primary'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/varun-kamath-b29873198/',
    color: 'secondary'
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:kamathvarun15@gmail.com',
    color: 'accent'
  }
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          border: 'border-[#00d4ff]',
          bg: 'bg-[#00d4ff]/10',
          text: 'text-[#00d4ff]',
          hover: 'hover:bg-[#00d4ff]/20',
        };
      case 'secondary':
        return {
          border: 'border-[#00ff88]',
          bg: 'bg-[#00ff88]/10',
          text: 'text-[#00ff88]',
          hover: 'hover:bg-[#00ff88]/20',
        };
      case 'accent':
        return {
          border: 'border-[#ff6b35]',
          bg: 'bg-[#ff6b35]/10',
          text: 'text-[#ff6b35]',
          hover: 'hover:bg-[#ff6b35]/20',
        };
      default:
        return {
          border: 'border-[#00d4ff]',
          bg: 'bg-[#00d4ff]/10',
          text: 'text-[#00d4ff]',
          hover: 'hover:bg-[#00d4ff]/20',
        };
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-[#00d4ff]">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on your next AI project? Let&apos;s discuss how we can build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Card>
              <h3 className="text-2xl font-bold text-[#00d4ff] mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const colors = getColorClasses(info.color);
                  
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className={`flex items-center space-x-4 p-4 rounded-lg border ${colors.border} ${colors.hover} transition-all duration-300`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`p-3 rounded-lg ${colors.bg} ${colors.border} border`}>
                        <info.icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </Card>

            {/* Social Links */}
            <Card>
              <h3 className="text-2xl font-bold text-[#00ff88] mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => {
                  const colors = getColorClasses(social.color);
                  
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center p-4 rounded-lg border ${colors.border} ${colors.hover} transition-all duration-300`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className={`w-6 h-6 ${colors.text} mb-2`} />
                      <span className="text-sm text-gray-300">{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </Card>

            {/* Availability */}
            <Card className="border-[#00ff88]">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
                <h3 className="text-lg font-bold text-[#00ff88]">Available for Opportunities</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                I&apos;m currently open to new opportunities in AI/ML engineering, research collaborations, 
                and consulting projects. Let&apos;s discuss how we can work together to create innovative solutions.
              </p>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <h3 className="text-2xl font-bold text-[#ff6b35] mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#404040] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#404040] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#404040] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-colors duration-300"
                    placeholder="What&apos;s this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#404040] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* Form Status */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-[#00ff88]"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Message sent successfully!</span>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-[#ff6b35]"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">Failed to send message. Please try again.</span>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you&apos;re looking for an AI engineer to join your team, need consulting on a machine learning project, 
              or want to collaborate on research, I&apos;m excited to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="mailto:kamathvarun15@gmail.com"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me Directly
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="Portfolio/VarunFulltimeResume.pdf"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
