import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Lightbulb, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import InternshipSection from '@/components/InternshipSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';
import MobileNav from '@/components/MobileNav';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-black dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-foreground">Kavi</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('experience')} className="text-muted-foreground hover:text-primary transition-colors">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="text-muted-foreground hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors">Contact</button>
            </div>

            {/* Mobile Navigation and Theme Toggle */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <MobileNav onNavigate={scrollToSection} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection onViewWork={() => scrollToSection('projects')} />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Internship Experience */}
      <InternshipSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 Kavi. Crafted with passion and code.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
