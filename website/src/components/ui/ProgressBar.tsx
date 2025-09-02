'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  color?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export default function ProgressBar({
  value,
  label,
  color = 'primary',
  className = '',
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  
  const colors = {
    primary: 'bg-[#00d4ff]',
    secondary: 'bg-[#00ff88]',
    accent: 'bg-[#ff6b35]',
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [value]);
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-300">{label}</span>
          <span className="text-sm text-[#00d4ff] font-mono">{value}%</span>
        </div>
      )}
      <div className="w-full bg-[#2a2a2a] rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full ${colors[color]} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
