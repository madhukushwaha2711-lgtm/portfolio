import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  Menu,
  X,
  Download,
  Mail,
  GraduationCap,
  Briefcase,
  Terminal,
  Award,
  ChevronRight,
  ExternalLink,
  Code2,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// --- Components --- //

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold font-mono text-primary flex items-center gap-2"
          data-testid="link-home"
        >
          <Code2 className="w-6 h-6" />
          <span>MK.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              data-testid={`link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            data-testid="button-theme-toggle"
            className="rounded-full"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors px-4 py-2 rounded-md hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden" id="hero">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[25rem] h-[25rem] bg-blue-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono font-medium mb-4 tracking-wider uppercase text-sm md:text-base">
              Welcome to my portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Madhu Kushwaha
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Computer Science Engineering Student & Aspiring Software Developer. Building robust solutions with clean code.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" className="w-full sm:w-auto gap-2" asChild data-testid="button-download-resume">
                <a href="#resume">
                  <Download className="w-4 h-4" /> Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild data-testid="button-contact">
                <a href="#contact">
                  <Mail className="w-4 h-4" /> Contact Me
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 rounded-full blur-2xl opacity-40 animate-pulse" />
            <div className="relative w-full h-full bg-card border border-border rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
              <span className="text-6xl md:text-8xl font-bold text-primary font-mono tracking-tighter">MK</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <Terminal className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="h-px bg-border flex-1 ml-4 hidden md:block" />
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
              Motivated and detail-oriented Computer Science & Engineering student with a strong foundation in Python, HTML, and CSS. Passionate about software development, problem-solving, and learning emerging technologies. Seeking opportunities to apply technical skills to real-world projects and contribute to innovative solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            <div className="h-px bg-border flex-1 ml-4 hidden md:block" />
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Timeline line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="relative mb-12 md:w-1/2 md:pr-12 md:text-right">
              {/* Timeline dot */}
              <div className="absolute left-[-33px] md:left-auto md:right-[-5px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />
              
              <div className="bg-card border border-border p-6 rounded-xl shadow-sm hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-2">B.Tech in Computer Science & Engineering</h3>
                <p className="text-primary font-medium mb-4">Shri Ramswaroop College of Engineering and Management</p>
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium border border-border">
                  Current Percentage: 75.8%
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "Python", icon: Code2 },
    { name: "HTML5", icon: Code2 },
    { name: "CSS3", icon: Code2 },
    { name: "C Programming", icon: Code2 },
    { name: "Computer Networks", icon: Terminal },
    { name: "DBMS", icon: Terminal },
    { name: "Problem Solving", icon: Terminal },
    { name: "Communication Skills", icon: Terminal },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12 justify-end">
            <div className="h-px bg-border flex-1 mr-4 hidden md:block" />
            <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
            <Code2 className="w-8 h-8 text-primary" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 hover:border-primary transition-colors group cursor-default shadow-sm"
              >
                <skill.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-medium text-foreground">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio to showcase projects, skills, and contact info.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: Code2
    },
    {
      title: "Student Management System",
      desc: "A system to manage student records including add, update, and delete operations.",
      tech: ["Python"],
      icon: Terminal
    },
    {
      title: "Dictionary Translation Program",
      desc: "Translates English words to Hindi using a structured dictionary.",
      tech: ["Python"],
      icon: Terminal
    },
    {
      title: "Networking Mini Projects",
      desc: "A collection of small networking concept implementations and simulations.",
      tech: ["Computer Networks", "Python"],
      icon: Terminal
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
            <div className="h-px bg-border flex-1 ml-4 hidden md:block" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md flex flex-col h-full group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-muted rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12 justify-end">
            <div className="h-px bg-border flex-1 mr-4 hidden md:block" />
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
            <Award className="w-8 h-8 text-primary" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card border border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 aspect-square opacity-60 hover:opacity-100 hover:border-primary/50 transition-all cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-muted-foreground group-hover:text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Future Certification</p>
                  <p className="text-sm text-muted-foreground">Upload Certificate</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Resume = () => {
  return (
    <section id="resume" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to know more?</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get a comprehensive overview of my skills, education, and projects by downloading my complete resume.
          </p>

          <div className="relative max-w-lg mx-auto bg-card border border-border rounded-xl shadow-lg overflow-hidden text-left mb-12 opacity-80 pointer-events-none select-none">
            {/* Faux Resume Preview */}
            <div className="h-4 bg-primary/20 w-full" />
            <div className="p-8">
              <div className="border-b border-border pb-6 mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">Madhu Kushwaha</h3>
                <p className="text-sm text-muted-foreground flex gap-4">
                  <span>madhukushwaha2711@gmail.com</span>
                  <span>+91 9569102711</span>
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-3">Summary</h4>
                  <div className="h-2 bg-muted rounded w-full mb-2" />
                  <div className="h-2 bg-muted rounded w-5/6 mb-2" />
                  <div className="h-2 bg-muted rounded w-4/6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-3">Skills</h4>
                  <div className="flex gap-2 flex-wrap">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="h-6 w-16 bg-muted rounded" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Fade out bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-card to-transparent" />
          </div>

          <Button size="lg" className="px-8 gap-2 group">
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Download Complete Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <Mail className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <div className="h-px bg-border flex-1 ml-4 hidden md:block" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's build something together.</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Email</p>
                    <a href="mailto:madhukushwaha2711@gmail.com" className="text-lg font-medium">madhukushwaha2711@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Phone</p>
                    <a href="tel:+919569102711" className="text-lg font-medium">+91 9569102711</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <a href="#" className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <Textarea id="message" placeholder="Your message here..." className="bg-background min-h-[150px] resize-none" />
                </div>
                <Button type="submit" className="w-full gap-2">
                  Send Message <ChevronRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 text-center text-muted-foreground text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2025 Madhu Kushwaha. All rights reserved.</p>
        <p className="font-mono flex items-center gap-1 justify-center">
          Built with <Code2 className="w-4 h-4 text-primary" /> and logic
        </p>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
