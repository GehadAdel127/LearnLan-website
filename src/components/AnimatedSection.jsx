import { useEffect, useRef, useState } from "react";

const AnimatedSection = ({ children, animationClass = "fadeInUp", delay = "0s" }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // <- only trigger once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={isVisible ? `animate__animated animate__${animationClass}` : ""}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
