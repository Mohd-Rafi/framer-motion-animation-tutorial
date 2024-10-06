import { Cross as Hamburger } from 'hamburger-react';
import { animate, delay, motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Sidebar.scss';
import { useState } from 'react';
const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const items = ['Homepage', 'Services', 'Portfolio', 'Contact'];
  const variants = {
    initial: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        duration: 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 40,
      },
    },
    animate: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        duration: 0.3,
        stiffness: 100,
        damping: 30,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={isOpen ? 'initial' : 'animate'}>
      <motion.div className="bg" variants={variants}>
        <div className="links">
          {items.map(item => (
            <AnchorLink href={`#${item}`}>{item}</AnchorLink>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.9 } }}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
