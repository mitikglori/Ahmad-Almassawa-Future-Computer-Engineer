export default function Skills({ sectionId = "skills", className = "" }) {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "React", level: 85, icon: "⚛️" },
        { name: "HTML & CSS", level: 95, icon: "🌐" },
        { name: "Tailwind CSS", level: 80, icon: "🎨" },
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Python", level: 75, icon: "🐍" },
        { name: "Git & GitHub", level: 85, icon: "📦" },
        { name: "Node.js", level: 70, icon: "🟢" },
        { name: "MongoDB", level: 65, icon: "🍃" },
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 80, icon: "🎨" },
        { name: "VS Code", level: 90, icon: "💻" },
        { name: "Photoshop", level: 70, icon: "🖼️" },
        { name: "Arduino", level: 60, icon: "🔧" },
      ]
    }
  ];

  const getLevelColor = (level) => {
    if (level >= 80) return "bg-green-500";
    if (level >= 60) return "bg-blue-500";
    return "bg-yellow-500";
  };

  const getLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id={sectionId} className={`relative overflow-hidden max-w-6xl mx-auto py-12 px-6 ${className}`}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" data-parallax-speed="0.08">
        <div className="absolute -bottom-28 right-0 w-80 h-80 rounded-full bg-sky-500/18 blur-3xl" />
      </div>
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-blue-200">Technical Skills</h2>
        <p className="text-gray-300 text-lg">Technologies and tools I work with</p>
      </div>

      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-100 text-center mb-6">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skill.name}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400 font-medium">
                      {getLevelText(skill.level)}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Proficiency</span>
                      <span className="text-blue-300 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full progress-bar ${getLevelColor(skill.level)}`}
                        style={{ 
                          '--target-width': `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
          <h4 className="text-lg font-semibold text-blue-200 mb-3">Always Learning</h4>
          <p className="text-gray-300">
            I'm constantly exploring new technologies and improving my skills. 
            Currently diving deeper into system design and computer architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
