import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: "linear-gradient(rgba(24, 29, 43, 0.7), rgba(24, 29, 43, 0.7)), url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1770&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm Jeff Mutembei
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-secondary">
            Software Developer & UX Enthusiast
          </p>
          <div className="mt-8">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block btn btn-primary"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-light cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
