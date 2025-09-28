export default function About({ sectionId = "about", className = "" }) {
  const interests = [
    { icon: "💻", title: "Coding", description: "Building web applications and solving problems with code" },
    { icon: "🔧", title: "Electronics", description: "Experimenting with Arduino and hardware projects" },
    { icon: "📸", title: "Photography", description: "Capturing moments and telling stories through images" },
    { icon: "🎮", title: "Gaming", description: "Creating interactive experiences and game development" },
    { icon: "📚", title: "Learning", description: "Always exploring new technologies and concepts" },
    { icon: "🏃", title: "Sports", description: "Staying active and documenting athletic moments" }
  ];

  const achievements = [
    { year: "2024", title: "High School Valedictorian", description: "Top academic performance in graduating class" },
    { year: "2024", title: "Math Competition Winner", description: "First place in regional calculus competition" },
    { year: "2023", title: "Photography Award", description: "Best student photographer of the year" },
    { year: "2023", title: "Coding Bootcamp", description: "Completed intensive web development program" }
  ];

  return (
    <section id={sectionId} className={`relative overflow-hidden py-16 px-4 max-w-6xl mx-auto ${className}`}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" data-parallax-speed="0.08">
        <div className="absolute -bottom-24 -left-16 w-[28rem] h-[28rem] rounded-full bg-purple-500/18 blur-3xl" />
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-200">About Me</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A passionate high school student on a journey to become a computer engineer, 
          combining technical skills with creative vision.
        </p>
      </div>

      {/* Main Story */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a high school student from Indonesia with a deep passion for computer engineering, 
              coding, and creative problem-solving. My journey began when I discovered the magic of 
              turning ideas into reality through code.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I enjoy building interactive math games, experimenting with Arduino electronics, 
              and documenting student life through photography. My goal is to merge technology 
              with creativity and storytelling, preparing for a future in computer engineering.
            </p>
          </div>
        </div>
        
        {/* Visual Element */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700/30">
            <div className="text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h4 className="text-xl font-semibold text-white mb-2">Future Computer Engineer</h4>
              <p className="text-gray-300 text-sm">
                Currently in high school, preparing for university studies in Computer Engineering
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interests & Hobbies */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center text-blue-200 mb-12">What I Love</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {interests.map((interest, index) => (
            <div 
              key={interest.title}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {interest.icon}
              </div>
              <h4 className="font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {interest.title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center text-blue-200 mb-12">Key Achievements</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-lg">{achievement.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photography Section */}
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Through My Lens</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Photography helps me develop an eye for detail and composition - skills that translate 
              well to UI/UX design and creating intuitive user experiences. I capture moments that 
              tell stories, from sports events to candid student life.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700/50 h-24 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                📸 Student Life
              </div>
              <div className="bg-gray-700/50 h-24 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                🏆 Sports Events
              </div>
              <div className="bg-gray-700/50 h-24 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                🎓 School Events
              </div>
              <div className="bg-gray-700/50 h-24 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                🌅 Nature Shots
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">📷</div>
            <h4 className="text-xl font-semibold text-white mb-2">Visual Storyteller</h4>
            <p className="text-gray-300 text-sm">
              Combining technical precision with creative vision
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}