import React, { useState, useEffect, useRef } from 'react'; 
import profilepic from '../../assets/profilepic.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = {
    frontend: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'JavaScript', level: 85, icon: '🟨' },
      { name: 'TypeScript', level: 80, icon: '🔷' },
      { name: 'HTML/CSS', level: 95, icon: '🎨' },
      { name: 'Tailwind CSS', level: 90, icon: '💨' },
      { name: 'Next.js', level: 75, icon: '▲' }
    ],
    backend: [
      { name: 'Node.js', level: 75, icon: '🟢' },
      { name: 'Express', level: 70, icon: '🚀' },
      { name: 'MongoDB', level: 65, icon: '🍃' },
      { name: 'PostgreSQL', level: 60, icon: '🐘' },
      { name: 'REST APIs', level: 80, icon: '🔌' },
      { name: 'GraphQL', level: 55, icon: '📡' }
    ],
    tools: [
      { name: 'Git', level: 85, icon: '📝' },
      { name: 'VS Code', level: 90, icon: '💻' },
      { name: 'Figma', level: 70, icon: '🎯' },
      { name: 'Docker', level: 60, icon: '🐳' },
      { name: 'AWS', level: 55, icon: '☁️' },
      { name: 'Webpack', level: 65, icon: '📦' }
    ]
  };

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Developing modern web applications using React and TypeScript. Built responsive UIs and improved performance by 40%.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Junior Developer',
      company: 'Startup Co.',
      period: '2022 - 2023',
      description: 'Worked on full-stack projects, collaborated with design team, and implemented new features for customer dashboard.',
      technologies: ['JavaScript', 'Node.js', 'MongoDB']
    },
    {
      title: 'Freelance Developer',
      company: 'Self-employed',
      period: '2021 - 2022',
      description: 'Built websites for small businesses, created custom WordPress themes, and provided technical consulting.',
      technologies: ['WordPress', 'PHP', 'CSS']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University Name',
      period: '2018 - 2022',
      description: 'Focused on software engineering, data structures, and web development. Graduated with honors.'
    },
    {
      degree: 'Full Stack Web Development',
      school: 'Coding Bootcamp',
      period: '2021',
      description: 'Intensive 6-month program covering modern web technologies and best practices.'
    }
  ];

  const SkillBar = ({ skill, index }) => (
    <div className={`mb-4 transition-all duration-700 delay-${index * 100} ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
    }`}>
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          <span>{skill.icon}</span>
          <span>{skill.name}</span>
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100 + 300}ms`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional web experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text & Image */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Profile Image */}
            <div className="mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 relative">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <img 
                      src={profilepic}
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Hi! I'm a passionate frontend developer with {new Date().getFullYear() - 2021}+ years of experience 
                creating beautiful, responsive web applications. I love turning complex problems into simple, 
                beautiful, and intuitive solutions.
              </p>
              <p>
                My journey started with curiosity about how websites work, and it has evolved into a passion 
                for creating seamless user experiences. I'm constantly learning new technologies and staying 
                up-to-date with the latest trends in web development.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through blog posts and community involvement.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-500">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-500">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 bg-white dark:bg-gray-700 rounded-lg p-1">
              {['skills', 'experience', 'education'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === 'skills' && (
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, categorySkills]) => (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 capitalize">
                        {category} Skills
                      </h3>
                      <div className="space-y-3">
                        {categorySkills.map((skill, index) => (
                          <SkillBar key={skill.name} skill={skill} index={index} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{job.title}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{job.period}</span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{job.company}</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border-l-4 border-purple-500">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{edu.degree}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                      </div>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">{edu.school}</p>
                      <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;