import { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const InternshipSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const experiences = [
    
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "IBM Frontend Development Internship",
      description: "Completed a virtual  hands-on internship focused on frontend development using modern web technologies, building responsive and interactive user interfaces.",
      image: "/IBM.jpg",
      features: [
        "Developed responsive web applications using React.js and Tailwind CSS",
        "Implemented interactive UI components and reusable modules",
        "Collaborated on real-world projects following Agile methodology",
        "Learned best practices in frontend development and version control with Git"
      ]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "CodeAlpha Frontend Internship",
      description: "Worked as a frontend development intern, where I designed and developed responsive web interfaces using HTML, CSS, JavaScript, and React.",
      image: "/fei.jpg",
      features: [
        "Built responsive designs with React",
        "Developed reusable UI components",
        "Gained experience with Git and GitHub",
        "Collaborated with a remote team"
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
            Real-world projects where I applied UI/UX design principles to create meaningful digital experiences.
          </p>
        </div>

        <div className="relative">
          <Card className="overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-dark-muted dark:to-dark-muted border-0 shadow-lg transition-colors duration-300">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={experiences[currentSlide].image}
                    alt={experiences[currentSlide].title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-blue-600/20"></div>
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
