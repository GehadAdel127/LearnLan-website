// src/pages/Checkout.jsx
import {
    Box,
    Button,
    Divider,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../Context/CoursesContext";
import AnimatedSection from "../components/AnimatedSection";

/* ---------- Helper validators ---------- */

// Luhn algorithm for card number validity
const luhnCheck = (num) => {
    const s = ("" + num).replace(/\D/g, "");
    let sum = 0;
    let shouldDouble = false;
    for (let i = s.length - 1; i >= 0; i--) {
        let digit = +s.charAt(i);
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0 && s.length >= 12 && s.length <= 19;
};

// expiry in MM/YY or MM/YYYY
const validateExpiry = (value) => {
    if (!value) return false;
    const v = value.replace(/\s/g, "");
    const parts = v.split("/");
    if (parts.length !== 2) return false;
    const mm = parseInt(parts[0], 10);
    let yy = parts[1].length === 2 ? `20${parts[1]}` : parts[1];
    const yyyy = parseInt(yy, 10);
    if (isNaN(mm) || isNaN(yyyy)) return false;
    if (mm < 1 || mm > 12) return false;
    const exp = new Date(yyyy, mm - 1, 1);
    // set to end of month
    exp.setMonth(exp.getMonth() + 1);
    exp.setDate(0);
    const now = new Date();
    return exp >= now;
};

const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateCVV = (cvv) => {
    return /^[0-9]{3,4}$/.test(cvv);
};

/* ---------- Component ---------- */

const Checkout = () => {
    const { cart, addOrder, clearCart } = useCourses() || {};
    const navigate = useNavigate();

    const total = (cart || []).reduce(
        (acc, item) => acc + Number(item.price) * item.quantity,
        0
    );

    // Form state
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const handleChange = (e) => {
        setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
        setErrors((s) => ({ ...s, [e.target.name]: null }));
    };

    const validateAll = () => {
        const err = {};

        if (!form.fullName.trim()) err.fullName = "Full name is required";
        if (!form.email.trim()) err.email = "Email is required";
        else if (!validateEmail(form.email)) err.email = "Invalid email address";

        if (!form.address.trim()) err.address = "Address is required";
        if (!form.city.trim()) err.city = "City is required";
        if (!form.zip.trim()) err.zip = "ZIP / Postal code is required";

        const digitsOnly = form.cardNumber.replace(/\s+/g, "");
        if (!digitsOnly) err.cardNumber = "Card number is required";
        else if (!/^\d+$/.test(digitsOnly)) err.cardNumber = "Card number must contain digits only";
        else if (!luhnCheck(digitsOnly)) err.cardNumber = "Invalid card number";

        if (!form.expiry.trim()) err.expiry = "Expiry is required";
        else if (!validateExpiry(form.expiry)) err.expiry = "Invalid or expired date (MM/YY)";

        if (!form.cvv.trim()) err.cvv = "CVV is required";
        else if (!validateCVV(form.cvv)) err.cvv = "CVV must be 3 or 4 digits";

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1) Validate
        if (!validateAll()) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        // 2) Simulate server-side verification (fake check)
        //    In a real app you'd send this data to a payment provider.
        setProcessing(true);

        try {
            // fake network delay
            await new Promise((res) => setTimeout(res, 1200));

            // Additional fake server-side "checks":
            // - reject if email uses disposable domain (example)
            const badDomain = /^(?:disposable|tempmail|mailinator)\./i;
            const domain = form.email.split("@")[1] || "";
            if (badDomain.test(domain)) {
                setErrors({ email: "Please use a real email address" });
                setProcessing(false);
                return;
            }

            // - attempt to "authorize" card: here we just accept Luhn + expiry + cvv checks already done.
            // If you want to simulate random declines uncomment:
            // if (Math.random() < 0.05) throw new Error('Card declined (simulated).');

            // 3) Build fake order and save it
            const order = {
                id: Date.now(),
                items: cart || [],
                total,
                billing: {
                    name: form.fullName,
                    email: form.email,
                    address: form.address,
                    city: form.city,
                    zip: form.zip,
                },
                payment: {
                    method: "card (simulated)",
                    last4: form.cardNumber.slice(-4),
                    expiry: form.expiry,
                },
                createdAt: new Date().toISOString(),
            };

            try {
                addOrder?.(order); // if your context supports it
            } catch (err) {
                console.warn("addOrder not available or failed", err);
            }

            // clear cart if available
            try {
                clearCart?.();
            } catch (err) {
                console.warn("clearCart not available or failed", err);
            }

            // 4) Navigate to success
            navigate("/order-success");
        } catch (err) {
            console.error("Payment simulation error", err);
            setErrors({ general: err.message || "Payment failed (simulated)" });
            setProcessing(false);
        }
    };

    return (
        <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
            <AnimatedSection animationClass="fadeInDown" delay="0.1s">
                <Typography variant="h4" gutterBottom>
                    Checkout
                </Typography>
            </AnimatedSection>

            <Paper sx={{ p: 3, mb: 3 }}>
                <form onSubmit={handleSubmit}>
                    <AnimatedSection animationClass="fadeInLeft" delay="0.2s">
                        <Typography variant="h6">Billing Information</Typography>
                        <TextField
                            name="fullName"
                            label="Full Name"
                            fullWidth
                            required
                            value={form.fullName}
                            onChange={handleChange}
                            error={!!errors.fullName}
                            helperText={errors.fullName}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            required
                            value={form.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            name="address"
                            label="Address"
                            fullWidth
                            required
                            value={form.address}
                            onChange={handleChange}
                            error={!!errors.address}
                            helperText={errors.address}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            name="city"
                            label="City"
                            fullWidth
                            required
                            value={form.city}
                            onChange={handleChange}
                            error={!!errors.city}
                            helperText={errors.city}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            name="zip"
                            label="ZIP / Postal Code"
                            fullWidth
                            required
                            value={form.zip}
                            onChange={handleChange}
                            error={!!errors.zip}
                            helperText={errors.zip}
                            sx={{ mt: 2 }}
                        />
                    </AnimatedSection>

                    <Divider sx={{ my: 2 }} />

                    <AnimatedSection animationClass="fadeInRight" delay="0.5s">
                        <Typography variant="h6">Payment Details (simulated)</Typography>
                        <TextField
                            name="cardNumber"
                            label="Card Number"
                            fullWidth
                            required
                            value={form.cardNumber}
                            onChange={handleChange}
                            error={!!errors.cardNumber}
                            helperText={errors.cardNumber || "Use a valid test card (e.g. 4242 4242 4242 4242)"}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            name="expiry"
                            label="Expiry (MM/YY)"
                            placeholder="MM/YY"
                            fullWidth
                            required
                            value={form.expiry}
                            onChange={handleChange}
                            error={!!errors.expiry}
                            helperText={errors.expiry}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            name="cvv"
                            label="CVV"
                            fullWidth
                            required
                            value={form.cvv}
                            onChange={handleChange}
                            error={!!errors.cvv}
                            helperText={errors.cvv}
                            sx={{ mt: 2 }}
                        />
                    </AnimatedSection>

                    <Divider sx={{ my: 2 }} />

                    <AnimatedSection animationClass="fadeInUp" delay="0.9s">
                        <Typography variant="h6">Order Summary</Typography>
                        {(cart || []).map((item) => (
                            <Typography key={item.id}>
                                {item.name} : {item.title} × {item.quantity} = $
                                {(Number(item.price) * item.quantity).toFixed(2)}
                            </Typography>
                        ))}
                        <Typography variant="h5" sx={{ mt: 2 }}>
                            Total: ${total.toFixed(2)}
                        </Typography>

                        {errors.general && (
                            <Typography color="error" sx={{ mt: 2 }}>
                                {errors.general}
                            </Typography>
                        )}

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3 }}
                            disabled={processing}
                        >
                            {processing ? "Processing…" : `Pay $${total.toFixed(2)}`}
                        </Button>
                    </AnimatedSection>
                </form>
            </Paper>
        </Box>
    );
};

export default Checkout;
