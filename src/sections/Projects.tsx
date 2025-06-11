import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      github: "https://github.com/jeffmutembei/ecommerce-platform",
      liveLink: "https://ecommerce-demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking application with interactive maps and 5-day forecasts.",
      image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      technologies: ["JavaScript", "React", "OpenWeather API", "Mapbox"],
      github: "https://github.com/jeffmutembei/weather-dashboard",
      liveLink: "https://weather-app-demo.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with project tracking and team assignment features.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      technologies: ["TypeScript", "React", "Redux", "Firebase"],
      github: "https://github.com/jeffmutembei/task-manager",
      liveLink: "https://task-manager-demo.com"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills (the one you're currently viewing).",
      image: "https://images.unsplash.com/photo-1481887328591-3e277f9473dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
      github: "https://github.com/jeffmutembei/portfolio",
      liveLink: "#"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-responsive application for tracking workouts, progress, and nutrition goals.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React Native", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/jeffmutembei/fitness-tracker",
      liveLink: "https://fitness-tracker-demo.com"
    },
    {
      title: "Movie Database",
      description: "Film and TV show database with recommendations and user reviews.",
      image: "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80",
      technologies: ["React", "TMDB API", "Styled Components", "Firebase Auth"],
      github: "https://github.com/jeffmutembei/movie-database",
      liveLink: "https://movie-database-demo.com"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#1e2233]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6 text-light">
          What I've Done
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          A selection of my recent projects. Each one has presented unique challenges and learning opportunities.
          <br />
  (more coming soon)
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-primary rounded-lg overflow-hidden shadow-lg border border-gray-800 flex flex-col h-full"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-70"></div>
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-xl font-semibold text-light">{project.title}</h3>
                </div>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-[#2a2f45] text-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light hover:text-secondary transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light hover:text-secondary transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <FontAwesomeIcon icon={faChrome} size="lg" />
                    </a>
                  </div>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent transition-colors flex items-center"
                  >
                    <span className="mr-1">View Project</span>
                    <FontAwesomeIcon icon={faArrowRight} size="sm" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
          //  href="https://github.com/jeff203-del"
          //  target="_blank"
          //  rel="noopener noreferrer"
          //  className="btn btn-primary"
          >
            
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
