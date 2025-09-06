import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Movie App — Discover & Explore Movies",
      description: "A responsive React-based movie browsing application where users can search, explore, and view details of movies using an external API. Designed with an intuitive UI and seamless navigation, it provides a smooth experience for movie enthusiasts.",
      image: "/movie.jpg",
      tech: ["React.js", "Tailwind Css","HTML5", "JS"],
      github: "https://github.com/Kavitha04-04Sonachalam/React-App",
      demo: "https://react-app-phi-silk.vercel.app"
    },
    {
      title: "Hostel Management System — Efficient & Smart",
      description: "A comprehensive hostel management system built with React and Tailwind CSS. Administrators can manage tenants, track payments, monitor occupancy, and generate detailed reports & analytics. The system is designed with a clean, intuitive UI for seamless navigation and user experience.",
      image: "/h.jpg",
      tech: ["React.js", "JavaScript","HTML5","Tailwind CSS"],
      github: "https://github.com/Kavitha04-04Sonachalam/Hostel-Management",
      demo: "http://hostel-management-red-zeta.vercel.app"
    },
    {
      title: "Nike Shoe Landing Page — Modern E-Commerce UI",
      description: "A responsive and visually appealing landing page for Nike shoes, designed to showcase products, promotions, and features. Built with React and Tailwind CSS, the page emphasizes modern UI/UX design principles and smooth interactions. Perfect for demonstrating front-end design and e-commerce interface skills.",
      image: "/nike shoe.jpeg",
      tech: ["React.js","JavaScript","HTML5","Tailwind Css"],
      github: "https://github.com/Kavitha04-04Sonachalam/tailwind-prjct",
      demo: "http://tailwind-prjct.vercel.app/"
    },
    {
      title: "AI Resume & Career Guidance",
      description: "This project leverages Natural Language Processing (NLP) and machine learning to provide intelligent resume analysis and personalized career guidance. It evaluates resumes and recommends suitable career paths based on user skills and qualifications.",
      image: "/aiimg.jpg",
      tech: ["Python", "Scikit-learn", "NLTK", "Google Colab"],
      github: "https://github.com/Kavitha04-04Sonachalam/AI-Resume/tree/main",
      demo: "https://www.kaggle.com/code/kavithasonachalam/ai-resume-carrer-guidance/edit "
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in front-end development and UI/UX design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-white/10 backdrop-blur-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-violet-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-violet-100 to-blue-100 dark:from-violet-900 dark:to-blue-900 text-violet-700 dark:text-violet-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white transition-all duration-300 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-500 dark:hover:text-white"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
