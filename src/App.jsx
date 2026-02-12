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
  Laptop,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import resumePDF from "./assets/Lungani Xulu CV_02-02-2026.pdf";
import lungaImage from "./assets/me.jpg";
import lungaImage2 from "./assets/me_coding.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedProject, setExpandedProject] = useState(null);
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const handleProjectClick = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  // Modal functions
  const openModal = (project, imageUrl, index) => {
    setCurrentProject(project);
    setCurrentImage(imageUrl);
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
    setCurrentProject(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (currentProject) {
      const nextIndex = (currentImageIndex + 1) % currentProject.screenshots.length;
      setCurrentImage(currentProject.screenshots[nextIndex].url);
      setCurrentImageIndex(nextIndex);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (currentProject) {
      const prevIndex = (currentImageIndex - 1 + currentProject.screenshots.length) % currentProject.screenshots.length;
      setCurrentImage(currentProject.screenshots[prevIndex].url);
      setCurrentImageIndex(prevIndex);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextImage(e);
      } else if (e.key === 'ArrowLeft') {
        prevImage(e);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, currentImageIndex, currentProject]);

  // Enhanced email handler with pre-populated content
  const handleEmailClick = (e) => {
    e.preventDefault();

    // Pre-populated email content
    const email = "lunganisolethu@gmail.com";
    const subject = "Frontend Developer Opportunity - Lungani Xulu Portfolio";
    const body = `Dear Lungani,

I came across your portfolio and was impressed with your frontend development skills. 

I'm reaching out regarding [mention the opportunity - job position, freelance project, collaboration, etc.].

Best regards,
[Your Name]
[Your Company/Title]`;

    // Encode the subject and body for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Create mailto link with pre-populated content
    const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

    // Open the email client
    window.location.href = mailtoLink;
  };

  // Social links configuration
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SolethuCodes",
      label: "GitHub",
      isExternal: true,
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lungani-xulu-8254a1232/",
      label: "LinkedIn",
      isExternal: true,
    },
    {
      icon: Mail,
      href: "#",
      label: "Email",
      isExternal: false,
      onClick: handleEmailClick,
    },
  ];

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
      screenshots: [
        {
          url: "/RoadGuardPictures/Login.jpeg",
          caption: "Login Screen",
        },
        {
          url: "/RoadGuardPictures/Home.jpeg",
          caption: "Home Dashboard",
        },
        {
          url: "/RoadGuardPictures/Services.jpeg",
          caption: "Services Menu",
        },
        {
          url: "/RoadGuardPictures/OutOfGas.jpeg",
          caption: "Out of Gas Assistance",
        },
        {
          url: "/RoadGuardPictures/Payment.jpeg",
          caption: "Payment Processing",
        },
        {
          url: "/RoadGuardPictures/Tracking.jpeg",
          caption: "Real-time Tracking",
        },
        {
          url: "/RoadGuardPictures/ServiceComplete.jpeg",
          caption: "Service Completion",
        },
      ],
      github: "https://github.com/SolethuCodes/RoadGuard",
      color: "bg-purple-600",
      type: "mobile",
    },
    {
      title: "CampusBites",
      category: "Web Development",
      gradient: "linear-gradient(135deg, #008080 0%, #6a0dad 100%)",
      projectImage: "/CampusBitesPictures/Logo.png",
      description:
        "Built a responsive web app for students to browse meals, view restaurant specials, and place orders. Designed intuitive UI components to enhance usability across devices.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      features: [
        "Responsive meal browsing interface",
        "Real-time order tracking",
        "Restaurant specials and promotions",
        "Cross-device compatibility",
      ],
      screenshots: [
        {
          url: "/CampusBitesPictures/Landing.png",
          caption: "Landing Page",
        },
        {
          url: "/CampusBitesPictures/Dashboard.png",
          caption: "Dashboard",
        },
        {
          url: "/CampusBitesPictures/Business.png",
          caption: "Business Page",
        },
        {
          url: "/CampusBitesPictures/Vendors.png",
          caption: "Vendors",
        },
        {
          url: "/CampusBitesPictures/Advertisment.png",
          caption: "Advertisement",
        },
        {
          url: "/CampusBitesPictures/Restuarant.png",
          caption: "Restaurant View",
        },
      ],
      github: "https://github.com/SolethuCodes/CampusBites",
      color: "bg-gradient-to-r from-teal-600 to-purple-600",
      type: "web",
    },
    {
      title: "Forever",
      category: "E-commerce Platform",
      gradient: "linear-gradient(135deg, #111111 0%, #444444 100%)",
      projectImage: "/ForeverPictures/Logo.png",
      description:
        "A modern e-commerce platform focused on clean design, smooth shopping experience, and performance. Built to showcase products with intuitive navigation and secure checkout.",
      tech: [
        "React",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe",
        "UI/UX Design",
      ],
      features: [
        "Product browsing with categories and search",
        "Shopping cart and wishlist functionality",
        "Secure user authentication and checkout",
        "Order management and payment integration",
        "Responsive design for mobile and desktop",
      ],
      screenshots: [
        {
          url: "/ForeverPictures/Home.png",
          caption: "Homepage",
        },
        {
          url: "/ForeverPictures/Collections.png",
          caption: "Collections",
        },
        {
          url: "/ForeverPictures/Best.png",
          caption: "Best Sellers",
        },
        {
          url: "/ForeverPictures/Item.png",
          caption: "Product Details",
        },
      ],
      github: "https://github.com/SolethuCodes/E-Commerce-MERN-",
      color: "bg-gray-800",
      type: "web",
    },
  ];

  const skills = {
    core: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5", level: 95 },
      { name: "CSS3/SCSS", level: 90 },
      { name: "TypeScript", level: 30 },
    ],
    styling: [
      { name: "Tailwind CSS", level: 50 },
      { name: "Responsive Design", level: 95 },
    ],
    tools: [
      { name: "Git/GitHub", level: 85 },
      { name: "Figma", level: 60 },
      { name: "Webpack/Vite", level: 80 },
      { name: "Chrome DevTools", level: 70 },
    ],
  };

  // Helper function to get aspect ratio based on project type
  const getAspectRatio = (projectType) => {
    return projectType === "mobile" ? "aspect-[9/16]" : "aspect-[16/9]";
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes modalBgFadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(8px);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-modal-in {
          animation: modalSlideIn 0.3s ease-out;
        }

        .animate-modal-bg {
          animation: modalBgFadeIn 0.3s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideLeft 0.3s ease-out;
        }

        .animate-slide-right {
          animation: slideRight 0.3s ease-out;
        }
        
        .rotate-180 {
          transform: rotate(180deg);
        }
        
        .bg-teal-600 {
          background-color: #008080;
        }
        
        .bg-gradient-to-r.from-teal-600.to-purple-600 {
          background: linear-gradient(135deg, #008080 0%, #6a0dad 100%);
        }

        /* Custom scrollbar for modal */
        .modal-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .modal-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
          border-radius: 10px;
        }

        .modal-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(107, 114, 128, 0.5);
          border-radius: 10px;
        }

        .modal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.5);
        }

        /* Glass morphism effect */
        .glass-effect {
          background: rgba(17, 24, 39, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(75, 85, 99, 0.3);
        }

        .glass-effect-dark {
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>

      {/* Image Modal */}
      {modalOpen && currentProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-modal-bg"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div 
            className="relative max-w-7xl w-full h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-6 animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-3 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 glass-effect group"
              aria-label="Close modal"
            >
              <X size={24} className="text-gray-300 group-hover:text-white transition-colors" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-50 px-4 py-2 bg-gray-800/80 rounded-full glass-effect">
              <span className="text-sm text-gray-300">
                <span className="text-blue-400 font-semibold">{currentImageIndex + 1}</span> / {currentProject.screenshots.length}
              </span>
            </div>

            {/* Main Image Section */}
            <div className="relative w-full lg:w-3/4 h-[50vh] lg:h-[80vh] flex items-center justify-center">
              {/* Navigation Arrows */}
              {currentProject.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 lg:-left-6 z-40 p-3 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 glass-effect group"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} className="text-gray-300 group-hover:text-white transition-colors" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 lg:-right-6 z-40 p-3 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110 glass-effect group"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} className="text-gray-300 group-hover:text-white transition-colors" />
                  </button>
                </>
              )}

              {/* Image Container */}
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <div 
                  className="relative max-w-full max-h-full rounded-xl overflow-hidden shadow-2xl"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <img
                    src={currentImage}
                    alt={currentProject.screenshots[currentImageIndex].caption}
                    className="max-w-full max-h-[50vh] lg:max-h-[70vh] w-auto h-auto object-contain rounded-xl"
                  />
                  
                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                    <p className="text-white text-lg font-medium">
                      {currentProject.screenshots[currentImageIndex].caption}
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      {currentProject.title} - {currentProject.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnails Sidebar - Desktop */}
            <div className="hidden lg:block w-1/4 h-[80vh] overflow-y-auto pr-2 modal-scrollbar">
              <div className="space-y-3">
                <h4 className="text-white font-semibold mb-4 text-lg sticky top-0 bg-gray-900/90 py-2 px-3 rounded-lg glass-effect">
                  All Screenshots
                </h4>
                {currentProject.screenshots.map((screenshot, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setCurrentImage(screenshot.url);
                      setCurrentImageIndex(idx);
                    }}
                    className={`group cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02] ${
                      currentImageIndex === idx
                        ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                        : 'border-gray-700 hover:border-blue-400'
                    }`}
                  >
                    <div className={`${getAspectRatio(currentProject.type)} bg-gray-800`}>
                      <img
                        src={screenshot.url}
                        alt={screenshot.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Thumbnails Indicator */}
            <div className="lg:hidden w-full mt-4">
              <div className="flex items-center justify-center gap-2">
                {currentProject.screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentImage(currentProject.screenshots[idx].url);
                      setCurrentImageIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === idx
                        ? 'w-8 bg-blue-500'
                        : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animated Cursor Follower */}
      <div
        className="fixed w-6 h-6 border-2 border-blue-500 rounded-full pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          opacity: 0.5,
        }}
      ></div>

      {/* Floating Elements Animation - Dark Theme Colors */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-900/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-900/30 rounded-lg animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-purple-900/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-pink-900/30 rounded-lg animate-float-delayed"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div
              className={`text-2xl font-bold text-blue-400 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
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
                    className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 relative group ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
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
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-900/30 border border-blue-700/50 rounded-full text-blue-400 text-sm font-medium">
                <Sparkles size={16} />
                Available for new opportunities
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-100 leading-tight">
                Frontend
                <br />
                <span className="text-blue-400">Developer</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-xl font-light leading-relaxed">
                I build responsive, interactive web applications with React and
                Tailwind CSS. Creating clean, modern interfaces that work
                seamlessly across devices.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-2"
                >
                  View My Work
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
                <button
                  className="px-8 py-4 border-2 border-gray-300 text-gray-300 hover:bg-gray-800 hover:border-gray-800 hover:text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2"
                  onClick={() => {
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
                {socialLinks.map((social, idx) => (
                  <a
                    key={social.label}
                    href={social.href}
                    onClick={social.onClick || undefined}
                    className="p-3 bg-gray-800 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${idx * 100}ms` }}
                    aria-label={social.label}
                    target={social.isExternal ? "_blank" : "_self"}
                    rel={social.isExternal ? "noopener noreferrer" : ""}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-900/30 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-900/30 rounded-full animate-pulse delay-1000"></div>

                  {/* Image Frame */}
                  <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl shadow-blue-500/10">
                    <img
                      src={lungaImage}
                      alt="Lungani Xulu - Frontend Developer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
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
      <section id="about" className="relative py-32 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square bg-blue-900/20 rounded-3xl border-4 border-gray-800 shadow-xl overflow-hidden relative group">
                <img
                  src={lungaImage2}
                  alt="Lungani Xulu - About Me"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-500"></div>
              </div>
              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-900/30 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-900/30 rounded-lg animate-float-delayed"></div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-100">About Me</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate frontend developer with a keen eye for detail and a love for
                  creating beautiful, intuitive user interfaces. I specialize in React and modern
                  CSS frameworks, bringing designs to life with pixel-perfect precision.
                </p>
                <p>
                  With a strong foundation in HTML, CSS, and JavaScript, I excel at building
                  responsive, accessible web applications that provide exceptional user experiences
                  across all devices. I'm always exploring new technologies and design trends to
                  stay at the forefront of frontend development.
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
                    className="px-4 py-2 bg-blue-900/30 border border-blue-700/50 rounded-full text-sm text-blue-300 font-medium"
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
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-100">Tech Stack</h2>
            <p className="text-gray-400 text-lg">
              Technologies I use to craft beautiful user interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Core Frontend Skills */}
            <div className="group bg-gray-800/50 border-2 border-gray-700 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-900/30 rounded-xl">
                  <Code2 size={24} className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Core</h3>
              </div>
              <div className="space-y-4">
                {skills.core.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Styling & UI Skills */}
            <div className="group bg-gray-800/50 border-2 border-gray-700 rounded-3xl p-8 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-900/30 rounded-xl">
                  <Palette size={24} className="text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Styling & UI</h3>
              </div>
              <div className="space-y-4">
                {skills.styling.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-indigo-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Workflow */}
            <div className="group bg-gray-800/50 border-2 border-gray-700 rounded-3xl p-8 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-900/30 rounded-xl">
                  <Layout size={24} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Tools & Workflow</h3>
              </div>
              <div className="space-y-4">
                {skills.tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full transition-all duration-1000 ease-out"
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

      {/* Projects Section - All 4 Projects with Expandable Feature */}
      <section id="projects" className="relative py-32 px-6 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-100">Featured Projects</h2>
            <p className="text-gray-400 text-lg">A showcase of my best frontend work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className={`group bg-gray-800/50 border-2 border-gray-700 rounded-3xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 ${
                  expandedProject === idx ? "transform-none" : "hover:-translate-y-1"
                }`}
              >
                {/* Project Header - Clickable */}
                <div
                  className={`h-48 ${project.color} relative overflow-hidden cursor-pointer`}
                  onClick={() => handleProjectClick(idx)}
                >
                  {project.projectImage ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${project.projectImage})`,
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-300">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                            {project.title}
                          </h3>
                          <p className="text-white/90 text-sm drop-shadow-md">{project.category}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: project.gradient }}
                    >
                      {project.type === "mobile" ? (
                        <Smartphone
                          size={64}
                          className="text-white/80 group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <Globe
                          size={64}
                          className="text-white/80 group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                    </div>
                  )}
                  {/* Expand/Collapse Indicator */}
                  <div className="absolute bottom-4 right-4 bg-black/50 rounded-full p-2 transition-transform duration-300 group-hover:scale-110">
                    <ChevronDown
                      size={20}
                      className={`text-white transition-transform duration-300 ${
                        expandedProject === idx ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-sm text-gray-400 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expanded Project Details */}
                  {expandedProject === idx && (
                    <div className="mt-6 pt-6 border-t-2 border-gray-700 animate-fadeIn">
                      <h4 className="text-lg font-semibold text-gray-100 mb-4">
                        {project.type === "mobile" ? "App Screenshots" : "Website Screenshots"}
                      </h4>

                      {/* Screenshots Grid with Modal Trigger */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        {project.screenshots.map((screenshot, screenshotIdx) => (
                          <div
                            key={screenshotIdx}
                            className="group/screenshot relative rounded-lg overflow-hidden border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
                            onClick={() => openModal(project, screenshot.url, screenshotIdx)}
                          >
                            <div className={`${getAspectRatio(project.type)} bg-gray-900`}>
                              <img
                                src={screenshot.url}
                                alt={screenshot.caption}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover/screenshot:scale-110"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = `https://via.placeholder.com/${
                                    project.type === "mobile" ? "300x600" : "600x338"
                                  }/${
                                    project.color === "bg-teal-600"
                                      ? "008080"
                                      : project.color === "bg-purple-600"
                                      ? "6a0dad"
                                      : "333333"
                                  }/ffffff?text=${project.title}+${screenshot.caption.replace(
                                    " ",
                                    "+"
                                  )}`;
                                }}
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/screenshot:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                              <p className="text-white text-xs font-medium truncate flex-1">
                                {screenshot.caption}
                              </p>
                              <div className="bg-blue-600 rounded-full p-1.5 transform translate-y-2 group-hover/screenshot:translate-y-0 transition-transform duration-300">
                                <ExternalLink size={12} className="text-white" />
                              </div>
                            </div>
                            
                            {/* Hover overlay with zoom effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/screenshot:opacity-100 transition-all duration-300 flex items-center justify-center">
                              <div className="bg-blue-600/90 rounded-full p-3 transform scale-0 group-hover/screenshot:scale-100 transition-transform duration-300">
                                <ExternalLink size={20} className="text-white" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* GitHub Button */}
                      <div className="flex gap-4 mt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 hover:bg-purple-600 text-white rounded-xl font-medium transition-all duration-300 group/btn border border-gray-600 hover:border-purple-400"
                        >
                          <Github size={18} />
                          View Code
                          <ArrowUpRight
                            size={16}
                            className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                          />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Collapsed View - Show GitHub button only */}
                  {expandedProject !== idx && (
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 hover:bg-purple-600 text-white rounded-xl font-medium transition-all duration-300 group/btn border border-gray-600 hover:border-purple-400"
                      >
                        <Github size={18} />
                        View Code
                        <ArrowUpRight
                          size={16}
                          className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                        />
                      </a>
                    </div>
                  )}
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
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-100">Let's Work Together</h2>
            <p className="text-gray-400 text-lg">Have a project in mind? I'd love to hear from you</p>
          </div>

          <div className="bg-gray-800/50 border-2 border-gray-700 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="space-y-8 text-center">
              <div className="mb-8">
                <p className="text-gray-300 text-lg mb-6">
                  Feel free to reach out through any of these channels:
                </p>
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      onClick={social.onClick || undefined}
                      className="p-4 bg-gray-700 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-300 hover:scale-110 flex flex-col items-center gap-2 group"
                      aria-label={social.label}
                      target={social.isExternal ? "_blank" : "_self"}
                      rel={social.isExternal ? "noopener noreferrer" : ""}
                    >
                      <social.icon size={28} />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t-2 border-gray-700">
                <div className="flex flex-col items-center gap-6">
                  <div className="text-center">
                    <p className="text-gray-400 mb-2">Email me directly</p>
                    <a
                      href="#"
                      onClick={handleEmailClick}
                      className="text-blue-400 hover:text-blue-300 transition-colors font-medium group/email text-lg"
                    >
                      lunganisolethu@gmail.com
                      <span className="block text-xs text-gray-500 mt-1 opacity-0 group-hover/email:opacity-100 transition-opacity">
                        Click to open with pre-filled template
                      </span>
                    </a>
                    <p className="text-gray-500 text-sm mt-4">I typically respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t-2 border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Designed & Built by{" "}
              <span className="text-blue-400 font-semibold">Lungani Xulu</span>
            </p>
            <p className="text-gray-500 text-sm">
              © 2026 All rights reserved. Made with React, Tailwind CSS, and ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;