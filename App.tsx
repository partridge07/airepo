import React, { useEffect } from 'react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WhyMe from './pages/WhyMe';
import SuccessStories from './pages/SuccessStories';
import Contact from './pages/Contact';
import Login from './pages/Login';
import IceCursor from './components/IceCursor';

// Scroll to top component to handle route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (error) {
      // Ignore scroll errors in sandboxed environments
    }
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <MemoryRouter>
        <ScrollToTop />
        {/* <IceCursor /> */}
        <div className="flex flex-col min-h-screen relative overflow-hidden">
          {/* Global Background Elements */}
          <div className="fixed inset-0 -z-50 pointer-events-none">
              <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-[80px]"></div>
          </div>

          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-me" element={<WhyMe />} />
              <Route path="/stories" element={<SuccessStories />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </MemoryRouter>
    </AuthProvider>
  );
};

export default App;