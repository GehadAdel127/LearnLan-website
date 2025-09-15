import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext"; // hook from your AuthContext

const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
    const { user } = useAuth();
    const [savedCourses, setSavedCourses] = useState([]);
    const [cart, setCart] = useState([]);

    // Load from localStorage when user changes
    useEffect(() => {
        if (user?.userId) {
            const storedSaved = localStorage.getItem(`savedCourses_${user.userId}`);
            const storedCart = localStorage.getItem(`cart_${user.userId}`);

            setSavedCourses(storedSaved ? JSON.parse(storedSaved) : []);
            setCart(storedCart ? JSON.parse(storedCart) : []);
        } else {
            setSavedCourses([]);
            setCart([]);
        }
    }, [user?.userId]);

    // Persist savedCourses
    useEffect(() => {
        if (user?.userId) {
            localStorage.setItem(
                `savedCourses_${user.userId}`,
                JSON.stringify(savedCourses)
            );
        }
    }, [savedCourses, user?.userId]);

    // Persist cart
    useEffect(() => {
        if (user?.userId) {
            const storedSaved = localStorage.getItem(`savedCourses_${user.userId}`);
            const storedCart = localStorage.getItem(`cart_${user.userId}`);

            setSavedCourses(storedSaved ? JSON.parse(storedSaved) : []);
            setCart(storedCart ? JSON.parse(storedCart) : []);
        } else {
            setSavedCourses([]);
            setCart([]);
        }
    }, [user]);


    // Toggle save
    const toggleSaveCourse = (id) => {
        if (!user?.userId) return;
        setSavedCourses((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
        );
    };

    // Add to cart
    const addToCart = (id) => {
        if (!user?.userId) return;
        setCart((prev) => (prev.includes(id) ? prev : [...prev, id]));
    };

    const removeFromCart = (id) => {
        if (!user?.userId) return;
        setCart((prev) => prev.filter((c) => c !== id));
    };

    return (
        <CoursesContext.Provider
            value={{ savedCourses, toggleSaveCourse, cart, addToCart, removeFromCart }}
        >
            {children}
        </CoursesContext.Provider>
    );
};

export const useCourses = () => useContext(CoursesContext);
