import { Code, Palette, Layers, FileCode, Figma } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    {
      name: "HTML",
      level: 95,
      icon: <Code className="h-6 w-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "CSS",
      level: 90,
      icon: <Palette className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Tailwind CSS",
      level: 88,
      icon: <Layers className="h-6 w-6" />,
      color: "from-teal-500 to-blue-500"
    },
    {
      name: "JS",
      level: 85,
      icon: <FileCode className="h-6 w-6" />,
      color: "from-yellow-500 to-blue-500"
    },
    {
      name: "React",
      level: 85,
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Figma",
      level: 92,
      icon: <Figma className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and design capabilities.
          </p>
        </div>

        {/* skills list */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: isInView ? `${skill.level}%` : "0%"
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
