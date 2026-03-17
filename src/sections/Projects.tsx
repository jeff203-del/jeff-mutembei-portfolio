import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Completed projects
  const completedProjects = [
    {
      title: "Zalisha Farmers",
      description: "This is a frontend website that provides farming companies , aggregators, farm input providers and farmer cooperatives with a platform manage their activities and operations.",
      image: "https://eu-images.contentstack.com/v3/assets/bltdd43779342bd9107/blt1645b96b020bdced/64380d5d8d2c523d0da7467d/543212762.jpg?width=1280&auto=webp&quality=80&format=jpg&disable=upscale ",
      technologies: ["React", "Node.js", "CSS", "HTML"],
      github: "https://farm-online.netlify.app/ ",
      liveLink: "https://farm-online.netlify.app/ "
    },
    /*{
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80 ",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      github: "https://github.com/jeffmutembei/ecommerce-platform ",
      liveLink: "https://ecommerce-demo.com "
    },
    */
    {
      title: "The Party Yard(Pink Palace)",
      description: "A Website where users can book photography grounds, host wedding parties, and celebrate birthdays.",
      image: "https://marqueemonkeys.com.au/wp-content/uploads/2019/02/marquee-monkeys-2-980x523.jpg ",
      technologies: ["JavaScript", "React", "CSS", "HTML"],
      github: "https://github.com/jeff203-del/The_Party_Yard ",
      liveLink: "https://the-party-yard.netlify.app/ "
    },
   /* {
      title: "Weather Dashboard",
      description: "Real-time weather tracking application with interactive maps and 5-day forecasts.",
      image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 ",
      technologies: ["JavaScript", "React", "OpenWeather API", "Mapbox"],
      github: "https://github.com/jeffmutembei/weather-dashboard ",
      liveLink: "https://weather-app-demo.com "
    },
    */
    {
      title: "Task Management App",
      description: "This is a simple web application that allows you to create a to-do list. You can add new items, mark them as completed, and remove them from the list.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80 ",
      technologies: ["JavaScript", "React", "CSS"],
      github: "https://github.com/jeff203-del/Task-Managemen-App ",
      liveLink: "https://tasks-do-list.netlify.app/ "
    },
    {
      title: "Autoneural",
      description: "Autoneural is a web application designed to simplify the buying and selling of cars. With its sleek UI and powerful backend, it provides users with a delightful experience to explore and list cars effortlessly.",
      image: "https://www.topgear.com/sites/default/files/2023/09/33156-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS132.jpg ",
      technologies: ["JavaScript", "Tailwind CSS", "TypeScript", "Vite"],
      github: "https://github.com/jeff203-del/Autoneural ",
      liveLink: "https://autoneural-cars.vercel.app/"
    },
    {
      title: "Premier Matchmaking",
      description: "This is a web application developed utilizing Reactjs, and CSS to cater to individuals searching for romantic relationships.",
      image: "https://live-production.wcms.abc-cdn.net.au/ea0898c0f7e4910a130d740e0aa88d56?impolicy=wcms_crop_resize&cropH=3749&cropW=3749&xPos=626&yPos=0&width=862&height=862 ",
      technologies: ["React Native", "Node.js", "JavaScript", "CSS"],
      github: "https://github.com/jeff203-del/Premier_Matchmaking ",
      liveLink: "https://premier-match.netlify.app/ "
    },
   /* {
      title: "Fitness Tracker",
      description: "Mobile-responsive application for tracking workouts, progress, and nutrition goals.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 ",
      technologies: ["React Native", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/jeffmutembei/fitness-tracker ",
      liveLink: "https://fitness-tracker-demo.com "
    },
    */
    {
      title: "ARVR Cinema",
      description: "Allows users to review and enquire about the recent movies available movies, booking, and cancellation of movie tickets.",
      image: "https://cdn.dribbble.com/userupload/42180074/file/original-abc7f825ddf72c17ceff66d6bd10e51c.png?resize=400x0 ",
      technologies: ["React", "HTML", "Styled Components"],
      github: "https://github.com/jeff203-del/ARVR-Cinema ",
      liveLink: "https://arvrcinema.netlify.app/ "
    },
  ];

  // UX/UI Design Prototypes
  const prototypeProjects = [
    {
      title: "Car Dealership Mobile App Design",
      description: "Discover a sleek and user-friendly UI design for a cutting-edge car dealership. Seamlessly browse a vast selection of vehicles, engage with interactive features, and enjoy a streamlined experience that revolutionizes the way you buy and sell cars.",
      image: "https://cdn.dribbble.com/userupload/44269292/file/759ba5711960cd4a16c4bb37618a7009.png?format=webp&resize=400x300&vertical=center ",
      technologies: [<span className="flex items-center gap-1"><svg className="w-3 h-3" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/><path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/><path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/><path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/><path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/></svg> Figma</span>],
      /*technologies: ["Figma"],*/
      github: "#",
      liveLink: "https://www.figma.com/proto/JvoGWmFQB8Ob7GCHg8Lde7/Isuracarhire?type=design&node-id=11-12&t=4a6wv1Kj5vNYiM9P-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=11%3A12&show-proto-sidebar=1"
    },
    {
      title: "E-commerce web Design",
      description: "Experience the future of online shopping with our cutting-edge eCommerce website design. Browse a wide array of products, enjoy seamless navigation, and indulge in a streamlined and secure shopping experience. ",
      image: "https://s3-alpha.figma.com/hub/file/3634642979/43fd3db6-2e56-4537-a4dc-c554bf84c0b7-cover.png",
      technologies: [<span className="flex items-center gap-1"><svg className="w-3 h-3" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/><path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/><path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/><path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/><path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/></svg> Figma</span>],
      /*technologies: ["Figma"],*/
      github: "#",
      liveLink: "https://www.figma.com/proto/ZY3zQc0uF7bRtGws2Brox8/e-comerce-website?type=design&node-id=2-3&t=aAF6xulTywoeox1L-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A3"
    },
    {
      title: "Kandaflix Landing Page Design",
      description: "KandaFlix, is the ultimate destination for movie lovers. Explore our vast library of films, enjoy seamless navigation, and engage with interactive features that enhance your movie-watching experience. ",
      image: "https://ndindadiana.netlify.app/static/media/kandaflix.285138fe63181797dc4d.png ",
      technologies: [<span className="flex items-center gap-1"><svg className="w-3 h-3" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/><path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/><path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/><path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/><path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/></svg> Figma</span>],
      /*technologies: ["Figma"],*/
      github: "#",
      liveLink: "https://www.figma.com/proto/cbPoH5YUwDmed0shRj0gSc/Kandaflix-Landing-page?type=design&node-id=7-2&t=XsqCBW8DRWIzPAZ0-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=7%3A2"
    },
  ];

  // Reusable project card component
  const ProjectCard = ({ project, index, isPrototype = false }: { project: any, index: number, isPrototype?: boolean }) => (
    <div
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
          {project.technologies.map((tech: string, idx: number) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-[#2a2f45] text-secondary rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          {/* Only show GitHub and Chrome icons for non-prototype projects */}
          {!isPrototype && (
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
          )}
          {/* Add spacer for prototypes to push button to right */}
          {isPrototype && <div></div>}
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors flex items-center"
          >
            <span className="mr-1">{isPrototype ? "View Prototype" : "View Project"}</span>
            <FontAwesomeIcon icon={faArrowRight} size="sm" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-[#1e2233]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6 text-light">
          What I've Done
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          A selection of my recent projects. Each one has presented unique challenges and learning opportunities.
          <br />
          more coming soon!
        </p>

        {/* Completed Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {completedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isPrototype={false} />
          ))}
        </div>

        {/* UX/UI Designs Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-10 text-light">
            UX/UI Designs(Prototypes)
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {prototypeProjects.map((project, index) => (
              <ProjectCard 
                key={`prototype-${index}`} 
                project={project} 
                index={completedProjects.length + index} 
                isPrototype={true} 
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
          //  href="https://github.com/jeff203-del "
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
