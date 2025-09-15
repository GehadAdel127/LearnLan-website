import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

// Layout components
import Footer from "./components/Footer";
import Header from "./components/Header";

// Pages
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/CartPage";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import ForgetPassword from "./pages/ForgetPassword";
import HomePage from "./pages/HomePage";
import LessonDetails from "./pages/LessonDetails";
import Lessons from "./pages/Lessons";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

// Context & Helpers
import { AuthProvider } from "./Context/AuthContext";

// Animation
import "animate.css";
import ProtectedRoute from "./components/ProtectedRoutes";
import Checkout from "./pages/CheckOut";
import OrderSuccess from "./pages/OrderSuccess";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/profile";

  return (
    <AuthProvider>
      <div className="App">
        {!hideHeaderFooter && <Header />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/:name"
            element={
              <ProtectedRoute>
                <Lessons />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/:name/:lessonId"
            element={
              <ProtectedRoute>
                <LessonDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {!hideHeaderFooter && <Footer />}
      </div>
    </AuthProvider>
  );
}

export default App;
