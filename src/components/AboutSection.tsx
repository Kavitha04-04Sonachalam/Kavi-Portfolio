import { Code, Palette, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-dark-background">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-dark-muted-foreground leading-relaxed">
              Hi, I’m Kavitha — a final-year Computer Science student with a strong passion for frontend development and UI/UX design. I enjoy turning creative ideas into user-friendly digital experiences using tools like React, Tailwind CSS, and Figma. I’m constantly learning and exploring new technologies to sharpen my skills.
            </p>
            <p className="text-lg text-slate-600 dark:text-dark-muted-foreground leading-relaxed">
              My goal is to build clean, accessible, and responsive web interfaces while collaborating on real-world projects. I'm excited to grow in the tech field and contribute to innovative digital solutions.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {/* Clean Code */}
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-blue-100 dark:from-dark-muted dark:to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8 text-violet-600 dark:text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-white">Clean Code</h3>
              </div>

              {/* Creative Design */}
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-blue-100 dark:from-dark-muted dark:to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="h-8 w-8 text-violet-600 dark:text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-white">Creative Design</h3>
              </div>

              {/* User Focused */}
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-blue-100 dark:from-dark-muted dark:to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-violet-600 dark:text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-white">User-Focused</h3>
              </div>
            </div>
          </div>

          {/* Emoji Graphic */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-violet-100 to-blue-100 dark:from-dark-muted dark:to-slate-800 rounded-2xl flex items-center justify-center">
              <img 
                src="/dev.jpg"
                alt="Profile" 
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-violet-600 to-blue-600 rounded-full opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

