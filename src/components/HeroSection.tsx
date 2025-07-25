import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onViewWork: () => void;
}

const HeroSection = ({ onViewWork }: HeroSectionProps) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const roles = ['Front-End Developer', 'UI/UX Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/30 rounded-full blur-3xl animate-bounce delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Profile photo */}
        <div className="flex justify-center mb-6 md:mb-10 animate-scale-in">
          <div className="relative">
            {/* Animated rings around photo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-ping"></div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 animate-pulse"></div>

            {/* Main photo container */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 border-4 border-background">
              <img
                src="/kaviFinalPhoto.jpg"
                alt="Kavitha - Front-End Developer & UI/UX Designer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10"></div>

              {/* Floating elements around photo */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold animate-bounce delay-300 text-xs md:text-base">
                ✨
              </div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-6 h-6 md:w-10 md:h-10 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center text-white font-bold animate-bounce delay-700 text-xs md:text-sm">
                💻
              </div>
              <div className="absolute top-1/4 -left-4 md:-left-6 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold animate-bounce delay-1000 text-xs">
                🎨
              </div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="animate-fade-in px-4">
          <h1 className="text-5xl font-bold text-slate-800 dark:text-white">
            Hi, I'm <span className="gradient-text">Kavitha</span>
            <span className="wave-emoji inline-block ml-2 md:ml-3">👋</span>
          </h1>

          {/* Animated Role Text */}
          <div className="text-lg md:text-2xl lg:text-4xl text-center mt-6 mb-6 min-h-[2rem]">
            <span className="mr-2">I'm a</span>
            <span
              className={`bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-bold transition-all duration-500 ${
                isTyping ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              {roles[currentRole]}
            </span>
            <span className="text-primary ml-1 animate-pulse">|</span>
          </div>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, intuitive digital experiences through clean code and thoughtful design.
            Let’s bring your ideas to life!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={onViewWork}
              className="bg-gradient-to-r from-primary to-accent hover:from-[#5B21B6] hover:to-[#2563EB] text-primary-foreground px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-105 w-full sm:w-auto"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="/Resume KavithaS.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 md:h-8 md:w-8 text-muted-foreground" />
      </div>

      {/* Wave emoji animation */}
      <style>{`
        .wave-emoji {
          animation: wave 2s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
