import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Shield,
  Network,
  Settings,
  Briefcase,
  GraduationCap,
  Award,
  MessageCircle,
  Linkedin,
  Github,
  Calendar,
  Building,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Server,
  Lock,
  Cpu,
  Monitor,
  Smartphone,
  Eye,
  ArrowRight,
  Play,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Smooth scroll functionality and scroll-to-top button visibility
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Show/hide scroll-to-top button
      setShowScrollTop(scrollY > 300);

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Skills slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % 4); // 4 skill categories
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest("nav") && !target.closest("[data-mobile-menu]")) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", icon: Code, color: "text-blue-600" },
        { name: "JavaScript", icon: Code, color: "text-yellow-600" },
        { name: "React", icon: Code, color: "text-cyan-600" },
        { name: "PHP", icon: Code, color: "text-purple-600" },
        { name: "Java", icon: Code, color: "text-orange-600" },
        { name: "C#", icon: Code, color: "text-green-600" },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        { name: "Google Cloud", icon: Cloud, color: "text-blue-500" },
        { name: "AWS", icon: Cloud, color: "text-orange-500" },
        { name: "Docker", icon: Server, color: "text-blue-600" },
        { name: "Kubernetes", icon: Network, color: "text-purple-600" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: Database, color: "text-blue-600" },
        { name: "PostgreSQL", icon: Database, color: "text-indigo-600" },
        { name: "Oracle", icon: Database, color: "text-red-600" },
        { name: "MongoDB", icon: Database, color: "text-green-600" },
      ],
    },
    {
      category: "Security & Systems",
      items: [
        { name: "Network Security", icon: Shield, color: "text-red-600" },
        { name: "Cybersecurity", icon: Lock, color: "text-orange-600" },
        { name: "ERP Systems", icon: Settings, color: "text-purple-600" },
        { name: "CCTV Systems", icon: Eye, color: "text-blue-600" },
      ],
    },
  ];

  const experiences = [
    {
      title: "Project Manager",
      company: "Anzili Digital Consultancy",
      period: "Jan 2024 - Present",
      type: "Current Role",
      description:
        "Leading digital transformation projects and advanced system implementations",
      highlights: [
        "Spearheading cutting-edge IT projects",
        "Implementing advanced websites and systems",
        "Managing quality assurance and performance optimization",
        "Setting strategic targets with KPIs",
      ],
      tech: ["Project Management", "System Architecture", "Quality Assurance"],
    },
    {
      title: "IT Manager",
      company: "Sagret Hotel Equatorial LTD",
      period: "2023",
      type: "Leadership",
      description:
        "Directed comprehensive ICT operations across multiple branches",
      highlights: [
        "Reduced system downtime by 30%",
        "Implemented robust ERP systems",
        "Established cybersecurity protocols",
        "Optimized IT infrastructure",
      ],
      tech: ["ERP Implementation", "Network Infrastructure", "Team Leadership"],
    },
    {
      title: "ICT Officer",
      company: "Hamnic Technologies",
      period: "2020 - Dec 2023",
      type: "Technical Expert",
      description:
        "Comprehensive ICT support and digital strategy implementation",
      highlights: [
        "Improved operational efficiency",
        "Cloud solutions deployment",
        "IT audits and compliance",
        "Remote support systems",
      ],
      tech: ["Cloud Computing", "Digital Strategy", "IT Auditing"],
    },
  ];

  const projects = [
    {
      title: "Church Management System",
      description:
        "Revolutionary digital platform transforming church operations with member management, financial tracking, and communication tools.",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      features: [
        "Member Portal",
        "Financial Management",
        "Event Scheduling",
        "Communication Hub",
      ],
      status: "Live",
      impact: "500+ Users",
    },
    {
      title: "Bizkit POS Partnership",
      description:
        "One of several strategic partnerships in innovative POS systems. Contributed to next-generation retail solutions among many diverse projects.",
      tech: ["React Native", "C#", ".NET", "SQL Server"],
      features: [
        "Mobile-First Design",
        "Real-time Analytics",
        "Inventory Management",
        "Cloud Integration",
      ],
      status: "Live Platform",
      impact: "Multiple Deployments",
    },
    {
      title: "Hospital Management System",
      description:
        "Comprehensive HMIS optimization enhancing healthcare delivery and database operations.",
      tech: ["Oracle", "Python", "Java", "Web Services"],
      features: [
        "Patient Records",
        "Appointment System",
        "Billing Integration",
        "Reports Dashboard",
      ],
      status: "Deployed",
      impact: "Healthcare Excellence",
    },
  ];

  const certifications = [
    {
      name: "CCNA - Cisco Certified Network Associate",
      icon: Network,
      verified: true,
    },
    {
      name: "CISP - Certified Information Security Professional",
      icon: Shield,
      verified: true,
    },
    {
      name: "Oracle Database Certified Professional",
      icon: Database,
      verified: true,
    },
    { name: "Google Cloud Professional", icon: Cloud, verified: true },
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hello Humphrey! I'm impressed by your portfolio and would like to discuss a potential project opportunity with you.",
    );
    window.open(`https://wa.me/254792310301?text=${message}`, "_blank");
  };

  const handleEmailContact = (email: string) => {
    window.open(`mailto:${email}`, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50 text-slate-900 overflow-x-hidden">
      {/* Spectacular Background with Tech Grid Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Minimal Code Snippets - Reduced for better visibility */}
        <div className="absolute top-32 left-16 opacity-15">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-2 border border-slate-100 font-mono text-xs text-slate-400 shadow-sm">
            <div>const expert = "Humphrey";</div>
          </div>
        </div>

        <div className="absolute bottom-40 right-16 opacity-15">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-2 border border-slate-100 font-mono text-xs text-slate-400 shadow-sm">
            <div>SELECT success FROM projects;</div>
          </div>
        </div>

        {/* Professional Subtle Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 via-white to-slate-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-60 -left-32 w-64 h-64 bg-gradient-to-br from-slate-100 via-blue-50 to-gray-100 rounded-full blur-2xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-200 via-white to-slate-200 rounded-full opacity-25 blur-xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-gray-200 via-white to-blue-100 rounded-full opacity-20 blur-lg"></div>
        <div className="absolute bottom-1/3 left-3/4 w-40 h-40 bg-gradient-to-br from-slate-200 via-blue-100 to-gray-200 rounded-full opacity-25 blur-xl"></div>

        {/* Minimal Particle System */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-slate-200 rounded-full opacity-15"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${30 + Math.random() * 40}%`,
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-transparent backdrop-blur-xl z-50 border-b border-blue-300/30 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg flex items-center justify-center shadow-lg">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                Humphrey Njoroge
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`transition-colors font-medium ${
                  activeSection === "home"
                    ? "text-white bg-white/20 px-3 py-1 rounded-full"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`transition-colors font-medium ${
                  activeSection === "about"
                    ? "text-white bg-white/20 px-3 py-1 rounded-full"
                    : "text-white/90 hover:text-white"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`transition-colors font-medium ${
                  activeSection === "skills"
                    ? "text-white bg-white/20 px-3 py-1 rounded-full"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className={`transition-colors font-medium ${
                  activeSection === "experience"
                    ? "text-white bg-white/20 px-3 py-1 rounded-full"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`transition-colors font-medium ${
                  activeSection === "projects"
                    ? "text-white bg-white/20 px-3 py-1 rounded-full"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`transition-colors font-medium ${
                  activeSection === "contact"
                    ? "text-white bg-white/20 px-3 py-1 rounded-full"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:text-white/70 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop WhatsApp Button */}
            <div className="hidden md:block">
              <Button
                onClick={handleWhatsAppContact}
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white border-0 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-20 left-0 right-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 backdrop-blur-xl border-b border-blue-300/30 z-40 md:hidden shadow-lg"
          data-mobile-menu
        >
          <div className="px-6 py-4">
            <div className="space-y-4">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "projects" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-colors font-medium ${
                    activeSection === item.id
                      ? "text-white bg-white/20"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile WhatsApp Button */}
              <div className="pt-4 border-t border-white/20">
                <Button
                  onClick={() => {
                    handleWhatsAppContact();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-white text-blue-600 hover:bg-white/90 border-0 py-3 shadow-lg font-medium"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-16 sm:pt-20 overflow-hidden px-4 sm:px-6"
      >
        {/* Enhanced Hero Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200/90 to-blue-50"></div>

        {/* Animated Blue Glow Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 bg-blue-400/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-600/35 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-blue-300/45 rounded-full blur-2xl animate-pulse delay-1500"></div>

        {/* Minimal Geometric Elements */}
        <div className="absolute top-32 left-32 w-12 h-12 border border-slate-200 rounded-lg rotate-45 opacity-10"></div>
        <div className="absolute bottom-40 right-40 w-8 h-8 border border-slate-200 rounded-full opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 max-w-7xl">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center mb-8">
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Available for Innovative ICT Projects
              </Badge>
            </div>

            {/* Hero Content - Photo First, Then Name and Text */}
            <div className="text-center max-w-5xl mx-auto relative">
              {/* Simple ICT Wallpaper Icons */}
              <div className="absolute inset-0 opacity-40 pointer-events-none hidden lg:block">
                {/* Left Side - Essential Icons Only */}
                <div className="absolute top-20 left-6 text-blue-600">
                  <Database className="w-6 h-6" />
                </div>
                <div className="absolute top-40 left-4 text-indigo-600">
                  <Code className="w-6 h-6" />
                </div>
                <div className="absolute top-60 left-8 text-emerald-600">
                  <Network className="w-6 h-6" />
                </div>
                <div className="absolute bottom-40 left-6 text-slate-600">
                  <Monitor className="w-6 h-6" />
                </div>

                {/* Right Side - Essential Icons Only */}
                <div className="absolute top-24 right-6 text-blue-700">
                  <Database className="w-6 h-6" />
                </div>
                <div className="absolute top-44 right-4 text-indigo-700">
                  <Code className="w-6 h-6" />
                </div>
                <div className="absolute top-64 right-8 text-emerald-700">
                  <Network className="w-6 h-6" />
                </div>
                <div className="absolute bottom-36 right-6 text-slate-700">
                  <Monitor className="w-6 h-6" />
                </div>
              </div>
              {/* Professional Photo Section with Rotating Layer */}
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mb-4 md:mb-6">
                {/* Rotating Professional Rings */}
                <div className="absolute inset-0 rounded-full">
                  {/* Outer rotating ring */}
                  <div
                    className="absolute -inset-6 border-2 border-blue-300/40 rounded-full animate-spin"
                    style={{ animationDuration: "20s" }}
                  >
                    {/* Tech dots on outer ring */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>

                  {/* Middle rotating ring - opposite direction */}
                  <div
                    className="absolute -inset-4 border border-slate-400/30 rounded-full animate-spin"
                    style={{
                      animationDuration: "15s",
                      animationDirection: "reverse",
                    }}
                  >
                    {/* Small tech icons on middle ring */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="absolute top-1/3 left-0 w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <div className="absolute bottom-1/3 right-0 w-2 h-2 bg-pink-400 rounded-full"></div>
                  </div>

                  {/* Inner rotating ring */}
                  <div
                    className="absolute -inset-2 border border-blue-200/50 rounded-full animate-spin"
                    style={{ animationDuration: "12s" }}
                  >
                    {/* Mini indicators */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  </div>
                </div>

                {/* Subtle glow around photo */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/20 via-white/10 to-blue-300/20 rounded-full blur-xl"></div>

                {/* Professional orbiting elements */}
                <div className="absolute -inset-8">
                  {/* Code icon orbiting */}
                  <div
                    className="absolute inset-0 animate-spin"
                    style={{ animationDuration: "25s" }}
                  >
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-blue-600 p-2 rounded-full shadow-lg">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Database icon orbiting - reverse */}
                  <div
                    className="absolute inset-0 animate-spin"
                    style={{
                      animationDuration: "30s",
                      animationDirection: "reverse",
                    }}
                  >
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-emerald-600 p-2 rounded-full shadow-lg">
                      <Database className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Network icon orbiting */}
                  <div
                    className="absolute inset-0 animate-spin"
                    style={{ animationDuration: "22s" }}
                  >
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-cyan-600 p-2 rounded-full shadow-lg">
                      <Network className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Shield icon orbiting - reverse */}
                  <div
                    className="absolute inset-0 animate-spin"
                    style={{
                      animationDuration: "28s",
                      animationDirection: "reverse",
                    }}
                  >
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-500 to-pink-600 p-2 rounded-full shadow-lg">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Photo frame */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-slate-600 to-blue-600 rounded-full p-1 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-full p-4 shadow-inner relative overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/assets/3fa5ec70f88843e08f209a181c11716f/whatsapp-image-2025-07-15-at-11.40.12-am-1-1a8b3c?format=webp&width=800"
                      alt="Humphrey Njoroge - ICT Expert"
                      className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500 relative z-10"
                    />
                  </div>
                </div>
              </div>

              {/* Enhanced Name - Below Photo */}
              <div className="relative mb-6">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/30 via-blue-300/20 to-blue-200/30 blur-xl rounded-lg"></div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold relative z-10">
                  <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-900 hover:via-blue-700 hover:to-blue-900 transition-all duration-700">
                    Humphrey Njoroge
                  </span>
                </h1>
              </div>

              <div className="relative mb-8">
                <div className="bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-blue-200/40 shadow-lg">
                  <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 bg-clip-text text-transparent font-bold text-center leading-relaxed">
                    ICT Expert & Digital Transformation Specialist
                  </p>
                  <div className="mt-3 flex justify-center">
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="relative mb-8">
                <div className="absolute -inset-2 bg-blue-100/50 blur-sm rounded-lg"></div>
                <p className="text-lg md:text-xl text-slate-800 max-w-3xl mx-auto leading-relaxed font-medium relative z-10 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200/50">
                  Transforming businesses through cutting-edge technology
                  solutions, strategic ICT implementation, and innovative
                  digital experiences.
                </p>
              </div>
            </div>

            {/* Enhanced Call to Action Section */}
            <div className="relative px-4">
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 md:w-40 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse delay-500"></div>

              {/* Glowing Background for Buttons */}
              <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-blue-200/20 via-blue-300/30 to-blue-200/20 blur-2xl rounded-2xl"></div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 relative z-10 max-w-2xl mx-auto">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white border-0 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg transform hover:scale-105 md:hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-blue-500/40 relative group"
                  onClick={() => handleEmailContact("humnjoroge5@gmail.com")}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 relative z-10" />
                  <span className="relative z-10 font-semibold">
                    Start a Conversation
                  </span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 bg-white/90 text-blue-700 hover:bg-blue-600 hover:text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg transform hover:scale-105 md:hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-blue-400/40 relative group backdrop-blur-sm"
                  onClick={() => window.open("https://anzili.com/", "_blank")}
                >
                  <div className="absolute inset-0 bg-blue-400/30 rounded-lg blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2 relative z-10" />
                  <span className="relative z-10 font-semibold">
                    Visit Anzili
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { value: "7+", label: "Years Experience", icon: Calendar },
              { value: "100+", label: "Projects Delivered", icon: Briefcase },
              { value: "50+", label: "Technologies Mastered", icon: Star },
              { value: "99%", label: "Client Satisfaction", icon: TrendingUp },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/30">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              What I Can Do
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Delivering comprehensive ICT solutions through proven expertise
              and innovative approaches
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                About Humphrey Njoroge
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  I'm Humphrey Njoroge, an experienced ICT professional and
                  technology strategist with a proven track record of delivering
                  impactful digital solutions across diverse industries. With
                  over 7 years of experience in IT infrastructure, systems
                  development, and cloud integration, I help businesses
                  transform operations through smart, secure, and scalable
                  technology.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed">
                  Currently, I lead digital projects at{" "}
                  <a
                    href="https://anzili.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline decoration-dotted font-medium"
                  >
                    Anzili Digital Consultancy
                  </a>{" "}
                  as a Project Manager, where I oversee the development and
                  deployment of enterprise systems, ERP solutions, and secure
                  network environments. My approach blends deep technical
                  expertise with strategic thinking—ensuring every solution not
                  only works but aligns with the client's broader goals.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed">
                  I'm proficient in a wide range of tools and technologies,
                  including{" "}
                  <span className="text-blue-700 font-semibold">
                    Python, PHP, Java, C#, React Native, Laravel, MySQL, Oracle,
                    and Google Cloud
                  </span>
                  . My expertise extends to{" "}
                  <span className="text-emerald-700 font-semibold">
                    networking infrastructure, PC maintenance and repair, and
                    strategic ICT consultation
                  </span>
                  . From system programming and biometric integrations to data
                  analytics and IT project execution, I bring both breadth and
                  depth to every challenge I take on.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-lg p-6 backdrop-blur-sm">
                  <p className="text-lg text-slate-700 leading-relaxed italic font-medium">
                    "I believe in technology with purpose—tools that solve real
                    problems, systems that improve efficiency, and platforms
                    that scale with growth. I'm also guided by faith, integrity,
                    and a passion for excellence in every project I lead."
                  </p>
                </div>

                <p className="text-lg text-slate-800 leading-relaxed font-medium">
                  If you're looking for a tech partner who delivers results,
                  adapts to evolving needs, and builds systems that work
                  seamlessly behind the scenes—I'd love to connect.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 justify-center max-w-2xl mx-auto">
                {[
                  "Strategic ICT Planning",
                  "Digital Transformation",
                  "Cloud Architecture",
                  "System Integration",
                  "Network Infrastructure",
                  "PC Maintenance & Repair",
                  "ICT Consultation",
                  "Project Leadership",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center sm:justify-start"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-slate-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education and Certifications - Centered Below */}
            <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center text-slate-800">
                    <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                    Education Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-700 text-center">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        Bachelor of Science in Information Technology
                      </h4>
                      <p className="text-blue-600 font-medium">
                        Meru University of Science and Technology
                      </p>
                      <p className="text-sm text-slate-600">
                        2015 - 2019 • Second Class Upper Division
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 border-slate-200 backdrop-blur-sm shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center text-slate-800">
                    <Award className="w-6 h-6 mr-3 text-blue-600" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {certifications.map((cert, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-blue-600 text-blue-700 bg-blue-50 font-medium"
                      >
                        <cert.icon className="w-3 h-3 mr-1" />
                        {cert.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-16 bg-slate-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Technical Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mastering cutting-edge technologies to deliver exceptional
              solutions
            </p>
          </div>

          {/* Skills Slider */}
          <div className="mb-12">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSkillIndex * 100}%)`,
                }}
              >
                {skills.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="w-full flex-shrink-0">
                    <Card className="bg-white/90 border-slate-200 backdrop-blur-sm mx-4 shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-slate-800 text-2xl text-center">
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {category.items.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/5 transition-colors"
                            >
                              <div className={`p-3 rounded-lg bg-white/10`}>
                                <skill.icon
                                  className={`w-6 h-6 ${skill.color}`}
                                />
                              </div>
                              <span className="text-slate-700 font-medium text-center text-sm">
                                {skill.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Slider Controls */}
              <div className="flex justify-center mt-6 space-x-2">
                {skills.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSkillIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSkillIndex === index
                        ? "bg-blue-600"
                        : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  setCurrentSkillIndex(
                    (prev) => (prev - 1 + skills.length) % skills.length,
                  )
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors shadow-sm"
              >
                <ChevronDown className="w-6 h-6 text-slate-600 transform rotate-90" />
              </button>
              <button
                onClick={() =>
                  setCurrentSkillIndex((prev) => (prev + 1) % skills.length)
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors shadow-sm"
              >
                <ChevronDown className="w-6 h-6 text-slate-600 transform -rotate-90" />
              </button>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "ICT Strategy Development & Implementation",
                "ERP Systems Integration & Administration",
                "Network Design, Monitoring & Security",
                "PC Maintenance, Repair & Troubleshooting",
                "Data Analytics & Business Intelligence",
                "Management Information Systems",
                "Digital Transformation & Cloud Solutions",
                "IT Project Management & Execution",
                "ICT Consultation & Advisory Services",
                "Biometrics & Access Control Systems",
                "CCTV Installation & Monitoring",
                "System Programming & Development",
                "Database Design & Management",
                "Cybersecurity & Data Protection",
              ].map((competency, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white/80 rounded-lg backdrop-blur-sm border border-slate-200 shadow-sm"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-slate-700">{competency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Professional Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A trajectory of innovation, leadership, and technological
              excellence
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-white/90 border-slate-200 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-sm"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-blue-50 text-blue-700 border-blue-200 mr-4">
                          {exp.type}
                        </Badge>
                        {index === 0 && (
                          <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
                            Current
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        {exp.company === "Anzili Digital Consultancy" ? (
                          <a
                            href="https://anzili.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:text-blue-800 transition-colors underline decoration-dotted"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span className="font-semibold">{exp.company}</span>
                        )}
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-700 mb-6 text-lg">
                    {exp.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start">
                            <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-slate-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                        <Settings className="w-4 h-4 mr-2 text-blue-600" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((technology, tIndex) => (
                          <Badge
                            key={tIndex}
                            variant="outline"
                            className="border-blue-600 text-blue-700 bg-blue-50"
                          >
                            {technology}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-16 bg-slate-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Innovative solutions that transform businesses and enhance user
              experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/90 border-slate-200 backdrop-blur-sm hover:bg-white transition-all duration-300 group shadow-sm"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      className={`${
                        project.status === "Live"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : project.status === "Live Platform"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : "bg-slate-50 text-slate-700 border-slate-200"
                      }`}
                    >
                      {project.status}
                    </Badge>
                    <div className="text-right">
                      <div className="text-sm text-slate-600">Impact</div>
                      <div className="text-blue-600 font-semibold">
                        {project.impact}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-slate-800 text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                        Key Features
                      </h4>
                      <div className="space-y-1">
                        {project.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="flex items-center text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                        <Code className="w-4 h-4 mr-2 text-blue-600" />
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, tIndex) => (
                          <Badge
                            key={tIndex}
                            variant="outline"
                            className="border-blue-600 text-blue-700 bg-blue-50 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-slate-900">
              Let's Create Something Amazing
            </h2>
            <p className="text-lg md:text-xl text-slate-800 max-w-3xl mx-auto px-4 font-medium">
              Ready to transform your business with innovative ICT solutions?
              Let's discuss your vision.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center max-w-6xl mx-auto">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center lg:text-left">
                Get In Touch
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "humnjoroge5@gmail.com",
                    action: () => handleEmailContact("humnjoroge5@gmail.com"),
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+254 792 310 301",
                    action: () => window.open("tel:+254792310301"),
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Nairobi, Kenya",
                    action: null,
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 md:p-4 bg-gradient-to-r from-white/5 to-blue-500/5 rounded-lg backdrop-blur-sm border border-white/10 ${contact.action ? "cursor-pointer hover:from-white/10 hover:to-blue-500/10 transition-all duration-300 transform hover:scale-105" : ""}`}
                    onClick={contact.action || undefined}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-slate-700 rounded-full flex items-center justify-center mr-3 md:mr-4 shadow-lg">
                      <contact.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-900 text-sm md:text-base">
                        {contact.label}
                      </div>
                      <div className="text-slate-800 text-xs md:text-sm break-all font-medium">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/80 via-blue-50/80 to-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm order-1 lg:order-2">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6 text-center">
                Quick Connect
              </h3>

              <div className="space-y-3 md:space-y-4">
                <Button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 py-3 md:py-4 text-base md:text-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Start WhatsApp Conversation
                </Button>

                <Button
                  onClick={() => handleEmailContact("humnjoroge5@gmail.com")}
                  className="w-full bg-gradient-to-r from-blue-600 via-white/10 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white border-0 py-3 md:py-4 text-base md:text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Send Email
                </Button>
              </div>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20 text-center">
                <p className="text-slate-800 text-sm md:text-base px-2 font-medium">
                  Available for freelance projects and full-time opportunities
                </p>
                <div className="flex justify-center space-x-3 md:space-x-4 mt-3 md:mt-4">
                  {[
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/humphrey-njoroge-532362172/",
                    },
                    { icon: Github, href: "#" },
                    { icon: Globe, href: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-white/10 to-blue-500/10 rounded-full flex items-center justify-center hover:from-white/20 hover:to-blue-500/20 transition-all duration-300 transform hover:scale-110"
                    >
                      <social.icon className="w-4 h-4 md:w-5 md:h-5 text-slate-800" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-10 border-t border-blue-200/50 relative">
        {/* Subtle blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-blue-300/30 to-blue-100/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg flex items-center justify-center mr-3 shadow-lg">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              Humphrey Njoroge
            </span>
          </div>
          <p className="text-blue-800 mb-4 font-medium">
            ICT Expert | Transforming businesses through innovative technology
            solutions
          </p>
          <p className="text-blue-700 text-sm font-medium">
            © 2024 Humphrey Njoroge.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white p-3 rounded-full shadow-lg hover:shadow-blue-500/25 transform hover:scale-110 transition-all duration-300 border-2 border-white/50"
          aria-label="Scroll to top"
        >
          <ChevronDown className="w-5 h-5 transform rotate-180" />
        </button>
      )}
    </div>
  );
};

export default Index;
