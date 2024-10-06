import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import './Parallax.scss';

const Parallax = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end start'],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="parallax" ref={ref}>
      <motion.h1 style={{ y: yText }}>What we do</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};
export default Parallax;
