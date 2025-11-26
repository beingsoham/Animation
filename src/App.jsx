
import { motion } from 'framer-motion';

import './App.css';

const brandName = "Intraping";

// Animation variants for the container to orchestrate the sequence
const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.8, // Time between each child animation
      delayChildren: 0.5,   // Initial delay before starting
    }
  },
};

// Variants for the "Ideas" text block
const ideasVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 1, 1, 0], // Fade in, stay, fade out
    y: [20, 0, 0, 0],
    transition: {
      duration: 4,
      times: [0, 0.25, 0.9, 1], // Made fade-out quicker (last 10% of duration)
      ease: "easeInOut"
    }
  }
};

// Variants for the "Identity" text block
const identityVariants = {
  initial: { opacity: 0, filter: 'blur(8px)', scale: 0.9 },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 5 // Synchronized delay with the start of the first text's fade-out
    }
  },
};

// Variants for the brand name at the bottom
const brandVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut', delay: 6.5 } // Appear after 2nd text
  }
};

// Variants for the button
const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 6.5 } // Appear after 2nd text
  }
};

// New SVG Icon for the left logo (Paper Plane)
const PaperPlaneIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.99983 3.42857L20.9998 12L2.99983 20.5714L2.99983 14.2857L14.9998 12L2.99983 9.71429L2.99983 3.42857Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// New SVG Icon for the right logo (Chat Dots)
const ChatDotsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 12H7.01M12 12H12.01M17 12H17.01M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 8.09828 20.2841 6.68395 19.0547L3 21L4.94531 17.316C3.7159 15.9017 3 14.0325 3 12C3 7.02944 7.02944 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Variants for the floating logos
const logoVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (custom) => ({ // custom will be the float direction
    opacity: 1,
    y: [20, custom === 'up' ? 0 : 40], // Increased movement range
    transition: {
      // Fade-in transition
      opacity: { duration: 0.8, ease: 'easeOut', delay: 6.5 },
      y: {
        // Floating transition
        delay: 6.5, // Start floating after appearing
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  })
};

function App() {
  return (
    <main className="container v2">
      <div className="content-wrapper">
        <motion.div
          className="focus-container"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="identity-text-v2"
            variants={identityVariants}
          >
            <span className="not-text-v2">Not</span> Your Identity
          </motion.h2>

          <motion.h1
            className="ideas-text"
            variants={ideasVariants}
          >
            Your Ideas matter
          </motion.h1>

        </motion.div>

        <motion.div
          className="floating-logo left"
          variants={logoVariants}
          initial="initial"
          animate="animate"
          custom="up" // Custom prop to float upwards first
        >
          <PaperPlaneIcon />
        </motion.div>
        <motion.div
          className="floating-logo right"
          variants={logoVariants}
          initial="initial"
          animate="animate"
          custom="down" // Custom prop to float downwards first
        >
          <ChatDotsIcon />
        </motion.div>
        <motion.button
          className="dot-expand-button"
          variants={buttonVariants}
          initial="initial"
          animate="animate"
        >
          <span>lets get started</span>
        </motion.button>
      </div>

      <motion.div
        className="brand-name"
        variants={brandVariants}
        initial="initial"
        animate="animate"
      >
        {brandName}
      </motion.div>
    </main>
  );
}

export default App;
