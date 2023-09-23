import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


export const UseScroll = () => {
  const controls = useAnimation();

  const [element, view] = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (view) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  },[controls ,element, view])
  
  
  return [element, controls];
};
