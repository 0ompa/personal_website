import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ProjectCard } from "./components/ProjectCard"
import { HobbiesSlideshow } from "./components/HobbiesSlideshow"
import  GeorgiaTechLogo from "./assets/GeorgiaTechLogo.png"
import Headshot from "./assets/Professional_Headshot.jpg";
import Respire1 from "./assets/Respire1.png"
import Respire2 from "./assets/Respire2.png"
import Respire3 from "./assets/Respire3.png"
import AI4OPT from "./assets/AI4OPT.png"
import PSFC from "./assets/PSFC.png"
import Robotics from "./assets/Robotics.png"
import EIC1 from "./assets/EIC1.png"
import EIC2 from "./assets/EIC2.png"
import JobPortal from "./assets/JobPortal.png"


import { ArrowRight, Code2, Palette, Zap, Mail, BrainCircuit, Laptop2, Laptop2Icon, LaptopIcon, LaptopMinimal, LightbulbIcon, BotIcon } from "lucide-react"
import "./App.css"



import { useState, useEffect } from "react";

function HeroHeading() {
  const fullName = "Om Patil";
  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullName.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {/* Static part */}
      <span className="text-white">Hi, I'm </span>
      {/* Animated typing part */}
      <span
        className="text-primary"
        style={{
          textShadow:
            "0 0 20px oklch(0.65 0.2 250 / 0.5), 0 0 40px oklch(0.65 0.2 250 / 0.3)",
        }}
      >
        {displayedName}
      </span>
    </span>
  );
}


function App() {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      title: "Efficient and Intelligent Computing Lab",
      description: "Analyzed cosine similarity among layers of each denoising step and across different steps for Fast-dLLM model. Picture 1 shows heatmap of between layers through forward deterministic passes, while Picture 2 shows the heatmap after introducing noise to activations using stochastic generation. See the GitHub link to view more info about fast-dLLM.",
      images: [EIC1, EIC2],
      technologies: ["PyTorch", "Pandas", "Seaborn", "Matplotlib", "NumPy", "GPU optimization"],
      liveUrl: "https://eiclab.scs.gatech.edu/index.html",
      githubUrl: "https://github.com/NVlabs/Fast-dLLM"
    },
    {
      title: "Respire: HackGT 2025",
      description: "A full-stack web application that uses AI to assist individuals in tracking real-time air quality data and providing personalized health recommendations based on their environment and health conditions. Demoed at HackGT 2025.",
      images: [Respire1, Respire2, Respire3],
      technologies: ["React", "Javascript", "Python", "TailwindCSS", "Flask", "Google Gemini API", "Google Maps API", "Auth0", "WAQI"],
      liveUrl: "https://devpost.com/software/respire-qc9myl",
      githubUrl: "https://github.com/Yoloholoknow/Respire",
    },
    {
      title: "AI4OPT Data Science & AI Camp",
      description: "Mentored and coached summer camp students at Georgia Tech in Generative AI, including LLMs, Deep Learning, RAG, Ollama, and more. Most successful advanced camp with 20+ students completing the program.",
      images: [AI4OPT],
      technologies: ["Python", "Ollama", "Tensorflow", "Keras", "Retrieval-Augmented Generation (RAG)", "Diffusion Models", "Deep Learning", "Large Language Model (LLM)"],
      liveUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7355680306827300865/",
    },
    {
      title: "MIT Plasma Science and Fusion Center",
      description: "Developed AI and ML techniques to predict for plasma disruptions in nuclear fusion energy. Implemented time series clustering in Python and visualized multi-dimensional data. Co-authored paper featured in NeurIPS 2024.",
      images: [PSFC],
      technologies: ["Python", "t-SNE", "HDBSCAN", "Matplotlib", "Scikit-learn", "Pandas", "Numpy"],
      liveUrl: "https://ml4physicalsciences.github.io/2024/files/NeurIPS_ML4PS_2024_141.pdf",
    },
    {
      title: "Competitive Robotics",
      description: "High School Robotics: FIRST Tech Challenge team Software Lead, programmed autonomous and driver control modes in Java using Android Studio. Implemented computer vision with April Tags, PID control, and subsystem software. Won 2024 Regional Design Award and competed in State Championships.",
      images: [Robotics],
      technologies: ["Java", "Object-Oriented Programming (OOP)", "FTC Lib", "April Tags", "PID Control"],
      githubUrl: "https://github.com/0ompa/9686-Centerstage",
    },
    {
      title: "Student Career Portal",
      description: "Student Career Portal website where students can find jobs and internships and employers can post openings and evaluate candidates. Recognized as top 10 team in FBLA Georgia State Leadership Conference.",
      images: [JobPortal],
      technologies: ["HTML", "CSS", "TailwindCSS", "Javascript", "Firebase"],
      liveUrl: "https://0ompa.github.io/FBLA25/index.html",
      githubUrl: "https://github.com/0ompa/FBLA25"
    }
  ]

  const skills = [
    {
      icon: BrainCircuit,
      title: "AI & Machine Learning",
      description: "Building intelligent models and systems for various applications",
    },
    {
      icon: LaptopMinimal,
      title: "Software Engineering",
      description: "Creating efficient software solutions and applications for web and mobile platforms",
    },
    {
      icon: BotIcon,
      title: "Robotics",
      description: "Software and hardware integration for autonomous robots",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
<section id="home" className="pt-40 pb-32 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">

      {/* Left: Text Content */}
      <div className="lg:w-1/2 text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-heading">
          <HeroHeading />
        </h1>

        <p className="text-xl sm:text-2xl text-white mb-10 flex items-center justify-center gap-2 mr-10">
          Computer Science @ Georgia Tech
          <img
            src={GeorgiaTechLogo}
            alt="Georgia Tech Logo"
            className="h-8 inline-block ml-2"
          />
        </p>

        <p className="text-base sm:text-lg text-white mb-12 max-w-2xl leading-relaxed" style={{ fontSize: "1.2rem" }}>
          I'm passionate about building innovative solutions and learning new technologies.
          I love exploring artificial intelligence and robotics applications in real-world
          scenarios. I also enjoy collaborating on software projects, leveraging my strengths in math and
          statistics to solve complex problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="btn btn-primary flex items-center justify-center">
            View My Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Right: Headshot */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="w-[320px] h-[400px] shadow-[0_0_30px_rgba(0,123,255,0.6)] rounded-2xl overflow-hidden">
          <img
            src={Headshot}
            alt="Om Patil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>



      {/* About Section */}
<section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted">
  <div className="container mx-auto">
    <div className="max-w-4xl mx-auto">
      {/* Title */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center"
        style={{textShadow: "0 0 20px oklch(0.65 0.2 250 / 0.5), 0 0 40px oklch(0.65 0.2 250 / 0.3)",}}  
      >
        About Me
      </h2>

      <p className="text-lg text-muted-foreground mb-10 text-center leading-relaxed" style={{ fontSize: "1.2rem" }}>
        I'm a computer science student at Georgia Tech with a passion for technology and innovation. Here's what I like to do:
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {skills.map((skill) => (
          <div key={skill.title} className="card text-center hover:shadow-md transition-shadow">
            <div className="card-content pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-light text-primary mb-4">
                <skill.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>


      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center"
        style={{
        backgroundImage: "linear-gradient(90deg, #ff8c00 0%, #00ffff 100%)", // bright orange to cyan
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent"
      }}
      >
        Interests & Hobbies
      </h2>
      {/* Slideshow of Hobbies and Interests */}
      
      <HobbiesSlideshow />
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center" style ={{textShadow: "0 0 20px oklch(0.65 0.2 90 / 0.5), 0 0 40px oklch(0.65 0.2 90 / 0.3)", color: "#8eb6f5"}}>Featured Projects</h2>
            <p className="text-lg text-muted-foreground mb-16 text-center leading-relaxed" style={{ fontSize: "1.2rem" }}>
              Here are some of my recent projects that showcase my skills and experience. Click on one to learn more!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center mt-12" >
              <h3 className="text-2xl font-semibold mb-4" style={{ fontSize: "2rem", textShadow: "0 0 20px oklch(0.65 0.2 90 / 0.5), 0 0 40px oklch(0.65 0.2 90 / 0.3)", color: "#6da4fc"}}>Other projects I’ve worked on:</h3>
              <ul className="text-lg text-muted-foreground space-y-2 list-disc list-inside text-left sm:text-center sm:list-none sm:space-y-3" style={{ fontSize: "1.1rem" }}>
                <li>Business Demand Forecasting for ERP — integrated ARIMA forecasting models for corporate time series data in Excel for Fortune 500 company</li>
                <li>Datasync — a data synchronization platform for school CTEA departments (FBLA Nationals)</li>
                <li>SkinSpot — a mobile app to detect for cancerous moles that may indicate melanoma</li>
                <li>Chess Engine in Java</li>
              </ul>
            </div>
          </div>
        </div>


      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8" style={{ color: "#B3A369", textShadow: "0 0 10px rgba(179,163,105,0.45)" }}>Get In Touch!</h2>
          <div className="flex justify-center items-center gap-10 text-muted-foreground">
        {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/om-patil34/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
          2.761 2.239 5 5 5h14c2.761 0 5-2.239 
          5-5v-14c0-2.761-2.239-5-5-5zm-11 
          19h-3v-10h3v10zm-1.5-11.268c-.966 
          0-1.75-.784-1.75-1.75s.784-1.75 
          1.75-1.75 1.75.784 1.75 
          1.75-.784 1.75-1.75 1.75zm13.5 
          11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.87 
          0-2.157 1.462-2.157 2.972v5.695h-3v-10h2.879v1.367h.041c.401-.76 
          1.379-1.562 2.841-1.562 3.04 0 3.6 2.002 3.6 4.605v5.59z" />
        </svg>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/0ompa"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-400 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 .297c-6.63 0-12 
          5.373-12 12 0 5.303 3.438 9.8 
          8.205 11.385.6.113.82-.258.82-.577 
          0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 
          1.205.084 1.84 1.236 1.84 
          1.236 1.07 1.835 2.809 1.304 
          3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 
          0-1.31.468-2.38 1.235-3.22-.135-.304-.54-1.523.105-3.176 
          0 0 1.005-.322 3.3 1.23a11.48 11.48 0 0 1 
          3-.405c1.02.005 2.045.138 3 
          .405 2.28-1.552 3.285-1.23 
          3.285-1.23.645 1.653.24 2.872.12 
          3.176.765.84 1.23 1.91 1.23 
          3.22 0 4.61-2.805 5.625-5.475 
          5.92.42.36.81 1.096.81 2.215 
          0 1.6-.015 2.89-.015 3.285 
          0 .315.21.69.825.57 4.765-1.585 
          8.2-6.082 8.2-11.385 
          0-6.627-5.373-12-12-12z" />
        </svg>
      </a>

      {/* Email */}
      <a
        href="mailto:opatil34@gatech.edu"
        className="hover:text-blue-300 transition-colors text-xl"
      >
        opatil34@gatech.edu
      </a>
        </div>
      </div>
    </section>


      <Footer />
    </div>
  )
}

export default App
