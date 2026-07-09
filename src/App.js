import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Quality from "./components/Quality";
import Machines from "./components/Machines";
import Customers from "./components/Customers";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Seo from "./components/Seo";
import { siteConfig } from "./seo/seoConfig";

import './App.css';

function App() {
  const [theme, setTheme] = useState("dark");
  const [scrollProgress, setScrollProgress] = useState(0);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.organization.name,
    image: siteConfig.organization.logo,
    url: siteConfig.organization.url,
    telephone: siteConfig.organization.telephone,
    email: siteConfig.organization.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.organization.address.streetAddress,
      addressLocality: siteConfig.organization.address.addressLocality,
      addressRegion: siteConfig.organization.address.addressRegion,
      postalCode: siteConfig.organization.address.postalCode,
      addressCountry: siteConfig.organization.address.addressCountry
    },
    description: siteConfig.description,
    areaServed: ['India', 'Tamil Nadu', 'Hosur', 'Krishnagiri'],
    priceRange: '₹₹'
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`app-shell ${theme}`}>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <Seo page="home" canonical="https://www.maya-industries.com/" schema={localBusinessSchema}>
        <div className="page-shell">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Hero />
          <About />
          <Quality />
          <Machines />
          <Customers />
          <Gallery />
          <Contact />
          <Footer />
        </div>
      </Seo>
    </div>
  );
}

export default App;
