import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/jeff203-del"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-secondary transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeff-mutembei-582658246/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B3pXowmvWSsGh0uIoxt0ThA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://x.com/Ady_zoomer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-secondary transition-colors"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
             <a
              href="https://instagram.com/ady_zmr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-secondary transition-colors"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            
          </div>
          <div className="text-center">
            <a href="#" className="scroll-to-top">
              <div className="mb-4 text-secondary hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
              </div>
            </a>
            <p className="text-sm text-gray">Beam me up!</p>
            <p className="text-sm text-gray mt-2">© {currentYear} Jeff Mutembei</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
