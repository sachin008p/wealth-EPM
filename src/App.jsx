import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { LogIn } from "lucide-react";

const Home = lazy(() => import("./components/home/Home"));
const Contact = lazy(() => import("./components/contact/Contact"));
const About = lazy(() => import("./components/about/About"));
const WealthCreation = lazy(() => import("./components/solutions/WealthCreation"));
const WealthProtection = lazy(() => import("./components/solutions/WealthProtection"));
const PortfolioConsultant = lazy(() => import("./components/solutions/PortfolioConsultant"));
const WealthManagement = lazy(() => import("./components/solutions/WealthManagement"));
const SeminarWebinar = lazy(() => import("./components/financial/SeminarWebinar"));
const EntrepreneurialInitiative = lazy(() => import("./components/entrepreneurial/EntrepreneurialInitiative"));
const LoginPage = lazy(() => import("./components/login/LoginPage"));
const PageLoader = () => (
  <div className="route-loader" aria-label="Loading page">
    <span></span>
  </div>
);

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions/wealth-creation" element={<WealthCreation />} />
          <Route path="/solutions/wealth-protection" element={<WealthProtection />} />
          <Route path="/solutions/portfolio-consultant" element={<PortfolioConsultant />} />
          <Route path="/solutions/wealth-management" element={<WealthManagement />} />
          <Route path="/financialliteracy/seminar-webinar" element={<SeminarWebinar />} />
          <Route path="/entrepreneurial-initiative" element={<EntrepreneurialInitiative />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
