import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/themecontext.jsx';
import PreLoader from './components/animations/preloader.jsx';
import Header from './components/layout/header.jsx';
import Hero from './components/sections/hero.jsx';
import About from './components/sections/About.jsx';
{/*
import Projects from './projects';
import Contact from './contact';
import Blog from './blog';
import Footer from './footer';*/}
import './App.css';

const Projects = () => <div className="min-h-screen text-center py-20 text-gray-500 dark:text-gray-300">Projects Section Coming Soon...</div>;
const Contact = () => <div className="min-h-screen text-center py-20 text-gray-500 dark:text-gray-300">Contact Section Coming Soon...</div>;
const Blog = () => <div className="min-h-screen text-center py-20 text-gray-500 dark:text-gray-300">Blog Section Coming Soon...</div>;
const Footer = () => <div className="py-6 text-center text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</div>;


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Smooth scroll functionality
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setCurrentSection(sectionId);
    }
  };

  // Track current section for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact', 'blog'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    if (!isLoading) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isLoading]);

  return (
    <ThemeProvider>
      <div className="App">
        {isLoading ? (
          <PreLoader onComplete={handleLoadingComplete} />
        ) : (
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header 
              currentSection={currentSection}
              onNavigate={scrollToSection}
            />
            
            <main className="relative">
              <section id="home">
                <Hero onNavigate={scrollToSection} />
              </section>
              
              <section id="about">
                <About />
              </section>
              
              <section id="projects">
                <Projects />
              </section>
              </main>
              
              <section id="contact">
                <Contact />
              </section>
              
              <section id="blog">
                <Blog />
              </section>
              
              <Footer />
            
            {/* Scroll to top button */}
            <button
              onClick={() => scrollToSection('home')}
              className={`fixed bottom-8 right-8 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all duration-300 z-40 ${
                currentSection === 'home' ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
              }`}
              aria-label="Scroll to top"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

