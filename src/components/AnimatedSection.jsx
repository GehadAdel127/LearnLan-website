import useOnScreen from "./hooks/useOnScreen";

const AnimatedSection = ({ children, animationClass, delay = "0.1s", width }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`animate__animated ${isVisible ? `animate__${animationClass}` : ""}`}
      style={{ animationDelay: delay, width: width }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
