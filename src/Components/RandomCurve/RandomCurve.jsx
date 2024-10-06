import React from 'react';
import { motion } from 'framer-motion';
const RandomCurve = () => {
  const generateRandomCurves = () => {
    return {
      borderTopLeftRadius: `${Math.floor(Math.random() * 100)}%`,
      borderTopRightRadius: `${Math.floor(Math.random() * 100)}%`,
      borderBottomLeftRadius: `${Math.floor(Math.random() * 100)}%`,
      borderBottomRightRadius: `${Math.floor(Math.random() * 100)}%`,
    };
  };
  return (
    <motion.div
      style={{
        width: '300px',
        height: '300px',
        backgroundColor: '#3498db',
        margin: '50px',
      }}
      whileHover={generateRandomCurves()}
      transition={{ duration: 0.5 }}
    />
  );
};

export default RandomCurve;
