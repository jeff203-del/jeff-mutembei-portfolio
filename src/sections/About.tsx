import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-16 text-light">
          A Little Bit About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-secondary">
            <img
              src="image.jpg.JPG"
              alt="Jeff Mutembei"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-2xl">
            <p className="text-gray-300 mb-4">
              Hey! My name is Jeff Mutembei and I'm a software developer with a passion for front-end development and user experience design. I'm currently studying Bsc Information Technology at KCA University, as a senior undergraduate student.
            </p>
            <p className="text-gray-300 mb-4">
              I have a background in computer science with a specialization in web technologies. I'm particularly interested in creating accessible and responsive web applications that deliver exceptional user experiences. I love working with modern JavaScript frameworks and exploring new technologies to solve complex problems.
            </p>
            <p className="text-gray-300 mb-6">
              When I'm not coding or designing, I enjoy swiming, photography, and exploring new places. I'm also a big fan of science fiction and always up for a good conversation about the latest tech trends.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/resume.pdf"
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary">
 View Résumé
</a>

              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-primary"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-800">
          <h3 className="text-2xl font-semibold text-center mb-10 text-light">
            TL;DR? Self Proclamations:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-light font-medium">Web Developer</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-light font-medium">UX Enthusiast</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <span className="text-light font-medium">Software Engineer</span>
            
            <div className="flex flex-col items-center">
  <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center mb-4 relative">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.5 17c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" />
      <circle cx="9" cy="6" r="2" />
      <path d="M9 8c1 0 2 1.5 3 2.5s2 1 3.5 1.5 2.5 0 3.5-1.5c-1-1-2-1.5-3-2.5S12 7 11 8c-1 1-2 3-2 3" />
    </svg>
  </div>
  <span className="text-blue-700 font-medium">Swimming</span>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
