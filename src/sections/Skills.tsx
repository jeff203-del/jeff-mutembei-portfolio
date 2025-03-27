import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faCode,
  faPuzzlePiece
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const technologies = [
    { name: 'HTML5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'AWS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ];

  return (
    <section id="skills" className="py-20 bg-[#1e2233]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-16 text-light">
          What I Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 border-2 border-secondary">
              <FontAwesomeIcon icon={faLaptopCode} size="2x" className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-light">Design</h3>
            <p className="text-gray-300">
              Design isn't just what a product looks like and feels like on the outside.
              Design encompasses the internal functionality of a product as well as the overall
              user experience. I strive to design interfaces and experiences that people can enjoy
              on all digital mediums.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 border-2 border-secondary">
              <FontAwesomeIcon icon={faCode} size="2x" className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-light">Development</h3>
            <p className="text-gray-300">
              With a strong foundation in computer science, I'm passionate about web design and
              development, and interested in cloud technologies. As I grow as a developer, I hope
              to write clean, readable code that can be used by others and leveraged to create
              beautiful, efficient software.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 border-2 border-secondary">
              <FontAwesomeIcon icon={faPuzzlePiece} size="2x" className="text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-light">Problem Solving</h3>
            <p className="text-gray-300">
              I enjoy tackling complex problems and finding elegant solutions. Whether it's optimizing
              performance, enhancing user experience, or architecting scalable systems, I approach
              each challenge methodically. I value collaboration and continuous learning to deliver
              the best results.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12 text-light">
            Some Technologies I've Worked With:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 mb-2 flex items-center justify-center">
                  <img src={tech.image} alt={tech.name} className="max-w-full max-h-full" />
                </div>
                <span className="text-sm text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
