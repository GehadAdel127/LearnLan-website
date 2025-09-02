import { useEffect, useRef, useState } from 'react';

// This custom hook detects when an element is visible on the screen.
const useOnScreen = () => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the DOM element exists
        if (!ref.current) return;

        // Create an IntersectionObserver to watch the element
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Set isVisible to true once the element enters the viewport
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Stop observing after the first intersection to prevent re-triggering
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: '-20px',
            }
        );

        observer.observe(ref.current);

        // Clean up the observer when the component unmounts
        return () => {
            if (observer.current) {
                observer.unobserve(observer.current);
            }
        };
    }, []);

    return [ref, isVisible];
};

export default useOnScreen;
