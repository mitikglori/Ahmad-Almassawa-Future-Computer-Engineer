import React from "react";

export default function About({ sectionId = "about", className = "" }) {
  return (
    <section id={sectionId} className={`relative overflow-hidden py-16 px-4 max-w-4xl mx-auto ${className}`}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" data-parallax-speed="0.08">
        <div className="absolute -bottom-24 -left-16 w-[28rem] h-[28rem] rounded-full bg-purple-500/18 blur-3xl" />
      </div>
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-200 text-center">About Me</h2>
      
      {/* Main content */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="space-y-4">
          <p className="text-gray-200 leading-relaxed">
            I'm a high school student from Indonesia passionate about computer engineering, coding, and creative problem solving. 
            I enjoy building math games, experimenting with electronics, and documenting student life through photography.
          </p>
          <p className="text-gray-200 leading-relaxed">
            My goal is to merge technology with creativity and storytelling, preparing for a future in computer engineering. 
            Photography helps me develop an eye for detail and composition - skills that translate well to UI/UX design and 
            creating intuitive user experiences.
          </p>
        </div>
        
        {/* Photo showcase */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-blue-100 mb-4">Through My Lens</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-700 h-32 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              [Student Life Photo]
            </div>
            <div className="bg-gray-700 h-32 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              [Event Photo]
            </div>
            <div className="bg-gray-700 h-32 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              [Sports Photo]
            </div>
            <div className="bg-gray-700 h-32 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              [Candid Photo]
            </div>
          </div>
          <p className="text-sm text-gray-400 italic">
            Capturing moments that tell stories - from sports events to candid student life
          </p>
        </div>
      </div>

      {/* Skills connection */}
      <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700/50">
        <h3 className="text-lg font-medium text-blue-100 mb-3">How Photography Complements My Engineering Journey</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
          <div>
            <span className="text-blue-200 font-medium">Attention to Detail</span>
            <p>Framing and composition translate to precise code and design</p>
          </div>
          <div>
            <span className="text-blue-200 font-medium">User Perspective</span>
            <p>Understanding what makes moments memorable helps create better UX</p>
          </div>
          <div>
            <span className="text-blue-200 font-medium">Creative Problem Solving</span>
            <p>Finding unique angles and solutions in both photography and coding</p>
          </div>
        </div>
      </div>
    </section>
  );
}