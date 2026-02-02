import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  ChevronDown,
  Menu,
  X,
  Download,
  ArrowUpRight,
  Sparkles,
  Layout,
  Smartphone,
} from "lucide-react";
import resumePDF from "./assets/Lungani Xulu CV_02-02-2026.pdf";
import lungaImage from "./assets/Lunga01.jpeg";
import lungaImage2 from "./assets/me.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const projects = [
    {
      title: "RoadGuard",
      category: "Mobile Development",
      gradient: "linear-gradient(135deg, #6a0dad 0%, #5a0c9a 100%)",
      projectImage: "/RoadGuardPictures/Splash.jpeg",
      description:
        "Developed a mobile app to report and track road hazards in real time. Designed an intuitive interface for Android and iOS users.",
      tech: [
        "React Native",
        "Google Maps API",
        "Firebase",
        "Push Notifications",
      ],
      features: [
        "Real-time hazard reporting",
        "Interactive map interface",
        "Push notifications for nearby hazards",
        "Community-driven updates",
      ],
      liveDemo: "#",
      github: "#",
      color: "bg-purple-600", 
    },
  ];

  const skills = {
    core: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5", level: 95 },
      { name: "CSS3/SCSS", level: 90 },
      { name: "TypeScript", level: 85 },
    ],
    styling: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Styled Components", level: 85 },
      { name: "Responsive Design", level: 95 },
      { name: "CSS Animations", level: 85 },
      { name: "Material-UI", level: 80 },
    ],
    tools: [
      { name: "Git/GitHub", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Webpack/Vite", level: 80 },
      { name: "Jest/Testing", level: 80 },
      { name: "Chrome DevTools", level: 90 },
    ],
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Animated Cursor Follower */}
      <div
        className="fixed w-6 h-6 border-2 border-blue-500 rounded-full pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          opacity: 0.5,
        }}
      ></div>

      {/* Floating Elements Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-100 rounded-lg animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-purple-100 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-pink-100 rounded-lg animate-float-delayed"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div
              className={`text-2xl font-bold text-blue-600 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              {"Lungani Xulu"}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item, idx) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ),
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-7xl mx-auto z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-medium">
                <Sparkles size={16} />
                Available for new opportunities
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                Frontend
                <br />
                <span className="text-blue-600">Developer</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl font-light leading-relaxed">
                Crafting beautiful, responsive web experiences with React and
                modern CSS.
                <br />
                Turning designs into pixel-perfect reality.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  View My Work
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
                <button
                  className="px-8 py-4 border-2 border-gray-900 hover:bg-gray-900 hover:text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2"
                  onClick={() => {
                    // Method 1: Direct download
                    const link = document.createElement("a");
                    link.href = resumePDF;
                    link.download = "Lungani Xulu CV_02-02-2026.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download size={18} />
                  Download Resume
                </button>
              </div>
              <div className="flex gap-6">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/SolethuCodes",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/lungani-xulu-8254a1232/",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:lunganisolethu@gmail.com",
                    label: "Email",
                  },
                ].map((social, idx) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${idx * 100}ms` }}
                    aria-label={social.label}
                    target={social.label === "Email" ? "_self" : "_blank"} // Email opens in same tab
                    rel={
                      social.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    } // Security for external links
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-200 rounded-full animate-pulse delay-1000"></div>

                  {/* Image Frame */}
                  <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                    {/* Replace this with your actual image */}
                    <img
                      src={lungaImage}
                      alt="Lungani Xulu - Frontend Developer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay for styling - remove if not needed */}
                    <div className="absolute inset-0 bg-blue-600/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square bg-blue-100 rounded-3xl border-4 border-white shadow-xl overflow-hidden relative group">
                {/* Replace this entire inner div with your image */}
                <img
                  src={lungaImage2} // Use your imported image variable
                  alt="Lungani Xulu - About Me"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Optional: Add a subtle overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-500"></div>
              </div>
              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-200 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200 rounded-lg animate-float-delayed"></div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                About Me
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  I'm a passionate frontend developer with a keen eye for detail
                  and a love for creating beautiful, intuitive user interfaces.
                  I specialize in React and modern CSS frameworks, bringing
                  designs to life with pixel-perfect precision.
                </p>
                <p>
                  With a strong foundation in HTML, CSS, and JavaScript, I excel
                  at building responsive, accessible web applications that
                  provide exceptional user experiences across all devices. I'm
                  always exploring new technologies and design trends to stay at
                  the forefront of frontend development.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring design systems,
                  contributing to UI component libraries, or creating animations
                  that delight users and bring interfaces to life.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "UI/UX Focused",
                  "Detail-Oriented",
                  "Creative Problem Solver",
                  "Fast Learner",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-sm text-blue-700 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Tech Stack
            </h2>
            <p className="text-gray-600 text-lg">
              Technologies I use to craft beautiful user interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Core Frontend Skills */}
            <div className="group bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Code2 size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Core</h3>
              </div>
              <div className="space-y-4">
                {skills.core.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Styling & UI Skills */}
            <div className="group bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-100 rounded-xl">
                  <Palette size={24} className="text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Styling & UI
                </h3>
              </div>
              <div className="space-y-4">
                {skills.styling.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-indigo-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Workflow */}
            <div className="group bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-purple-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Layout size={24} className="text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Tools & Workflow
                </h3>
              </div>
              <div className="space-y-4">
                {skills.tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-purple-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-lg">
              A showcase of my best frontend work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="group bg-white border-2 border-gray-200 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
              >
                <div
                  className={`h-48 ${project.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2
                      size={64}
                      className="text-white/80 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-gray-600 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-300 group/btn"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                      <ArrowUpRight
                        size={16}
                        className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                      />
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 rounded-xl font-medium transition-all duration-300"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Let's Work Together
            </h2>
            <p className="text-gray-600 text-lg">
              Have a project in mind? I'd love to hear from you
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-colors text-gray-900 placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-colors text-gray-900 placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-colors text-gray-900 placeholder-gray-400"
                  placeholder="Project Opportunity"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 transition-colors text-gray-900 placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>

            <div className="mt-12 pt-8 border-t-2 border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <p className="text-gray-600 mb-2">Connect with me</p>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: "#", label: "GitHub" },
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      {
                        icon: Mail,
                        href: "mailto:your.email@example.com",
                        label: "Email",
                      },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="p-3 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-gray-600 mb-2">Email me directly</p>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t-2 border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Designed & Built by{" "}
              <span className="text-blue-600 font-semibold">Your Name</span>
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 All rights reserved. Made with React, Tailwind CSS, and ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
