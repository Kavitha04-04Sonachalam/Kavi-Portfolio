import { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const InternshipSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const experiences = [
    
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "Python Full Stack Developer Intern",
      description: "Worked as a Python Full Stack Developer intern at Indinexz, contributing to the development of a School Parent Portal to enhance communication and management between schools and parents.",
      image: "/mmmmm.jpg",
      features: [
        "Developed and maintained features for the School Parent Portal",
        "Built responsive and user-friendly interfaces using React",
        "Designed and implemented backend APIs using Python (FastAPI/Django)",
        "Integrated frontend and backend for real-time data updates",
        "Implemented modules for attendance, marks, and fee management",
        "Worked with databases to manage student and school data efficiently",
        "Used Git and GitHub for version control and collaboration",
        "Collaborated with the team to deliver scalable and reliable solutions"
      ]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Python Full Stack Developer Intern",
      description: "Worked as a Python Full Stack Developer intern at Vyomanexgen, where I designed and developed scalable web applications, including a POS (Point of Sale) system, using modern technologies.",
      image: "/vyomanexgen.jpg",
      features: [
        "Built and developed a POS application with end-to-end functionality",
        "Designed responsive and user-friendly interfaces using React",
        "Developed backend APIs using Python (FastAPI/Django)",
        "Integrated frontend and backend for seamless data flow",
        "Worked with databases to manage transactions and records",
        "Used Git and GitHub for version control",
        "Collaborated with the team to deliver real-world project features"
      ]
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-white dark:bg-dark-background transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-dark-foreground mb-6">
            Internship Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-dark-muted-foreground max-w-2xl mx-auto">
            Real-world projects where I developed full-stack solutions and AI-driven applications.
          </p>
        </div>

        <div className="relative">
          <Card className="overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-dark-muted dark:to-dark-muted border-0 shadow-lg transition-colors duration-300">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative bg-white dark:bg-slate-900/50 flex items-center justify-center overflow-hidden h-64 md:h-[450px]">
                  <img
                    src={experiences[currentSlide].image}
                    alt={experiences[currentSlide].title}
                    className="w-[85%] h-[85%] object-contain transition-all duration-500 hover:scale-105 rounded-2xl drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/5 to-transparent pointer-events-none"></div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full flex items-center justify-center text-white mr-4">
                      {experiences[currentSlide].icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-dark-foreground">
                      {experiences[currentSlide].title}
                    </h3>
                  </div>

                  <p className="text-lg text-slate-600 dark:text-dark-muted-foreground mb-6 leading-relaxed">
                    {experiences[currentSlide].description}
                  </p>

                  <div className="space-y-3">
                    {experiences[currentSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mr-3"></div>
                        <span className="text-slate-600 dark:text-dark-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="sm"
              className="rounded-full border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2 items-center">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600'
                      : 'bg-slate-300 dark:bg-dark-muted hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="sm"
              className="rounded-full border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
