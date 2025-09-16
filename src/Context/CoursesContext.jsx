import { createContext, useContext, useEffect, useState } from "react";

const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
    // Load from localStorage (or default to empty)
    const [savedCourses, setSavedCourses] = useState(() => {
        const stored = localStorage.getItem("savedCourses");
        return stored ? JSON.parse(stored) : [];
    });

    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });

    // 🔄 Sync to localStorage whenever savedCourses changes
    useEffect(() => {
        localStorage.setItem("savedCourses", JSON.stringify(savedCourses));
    }, [savedCourses]);

    // 🔄 Sync to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // ✅ Toggle save/remove course
    const toggleSaveCourse = (course) => {
        setSavedCourses((prev) =>
            prev.some((c) => c.id === course.id)
                ? prev.filter((c) => c.id !== course.id)
                : [...prev, { ...course }]
        );
    };

    // ✅ Add to cart (with quantity support)
    const addToCart = (course) => {
        setCart((prev) => {
            const existing = prev.find((c) => c.id === course.id);
            if (existing) {
                return prev.map((c) =>
                    c.id === course.id ? { ...c, quantity: c.quantity + 1 } : c
                );
            }
            return [...prev, { ...course, quantity: 1 }];
        });
    };

    // ✅ Remove course from cart
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((c) => c.id !== id));
    };

    // ✅ Update quantity (never below 1)
    const updateQuantity = (id, delta) => {
        setCart((prev) =>
            prev.map((c) =>
                c.id === id ? { ...c, quantity: Math.max(1, c.quantity + delta) } : c
            )
        );
    };

    return (
        <CoursesContext.Provider
            value={{
                savedCourses,
                toggleSaveCourse,
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
            }}
        >
            {children}
        </CoursesContext.Provider>
    );
};

export const useCourses = () => useContext(CoursesContext);
