'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  hover = true, 
  glow = false 
}: CardProps) {
  const baseClasses = 'bg-[#111111] border border-[#2a2a2a] rounded-xl p-6 transition-all duration-300';
  const hoverClasses = hover ? 'hover:border-[#00d4ff] hover:shadow-lg hover:shadow-[#00d4ff]/10' : '';
  const glowClasses = glow ? 'animate-glow' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${glowClasses} ${className}`;
  
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
}

