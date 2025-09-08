import useOnScreen from './hooks/useOnScreen';

const AnimatedSection = ({ children, animationClass, delay = '0.3s' }) => {
  // Use the custom hook to get the ref and visibility state
  const [ref, isVisible] = useOnScreen();

  // Conditionally apply the Animate.css classes
  const classes = `animate__animated animate__${animationClass}`;

  return (
    <div
      ref={ref}
      key={isVisible ? 'visible' : 'hidden'}
      className={isVisible ? classes : 'opacity-0'}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
