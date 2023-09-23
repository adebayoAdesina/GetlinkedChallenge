const ScrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    scale: 1.0,
    transition: {
      duration: 0.5,
    },
  },
};

const PageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.2,
    },
  },
};

const FooterAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
    x: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const FadeAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } },
};
const FadeSectionAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75 } },
};

const ScaleAnimation = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1.0,
    transition: { duration: 2, ease: "easeOut" },
  },
};
const ScaleSectionAnimation = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1.0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const AnimateLines = {
  hidden: { pathLength: 0, pathOffset: 1 },
  show: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const LeftSlideAnimation = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const RightSlideAnimation = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
export {
  ScrollReveal,
  PageAnimation,
  FadeAnimation,
  ScaleAnimation,
  AnimateLines,
  LeftSlideAnimation,
  RightSlideAnimation,
  ScaleSectionAnimation,
  FadeSectionAnimation,
  FooterAnimation,
};
