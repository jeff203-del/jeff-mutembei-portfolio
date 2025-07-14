const Experience = () => {
  const experiences = [
    {
      company: "Kahustle",
      logo: "https://kahustle.co.ke/wp-content/uploads/2025/04/350-LOGO-2.png",
      role: "Web Developer",
      period: "2025 March-June",
      description: "Supported the development and testing of Kahustle, a Kenyan online classifieds platform, focusing on user experience, functionality, and feature enhancements"
    },
    {
      company: "Elegant Beauty Brand",
      logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/large/s3/etcetera_accesorios_logo.png?1f3ZJE3.gGWD57HiExGrJNwkyo2Yy.y3&itok=UhLxNzVR",
      role: "Graphic Designer",
      period: "2025 Jan-March",
      description: "developed on‑brand graphics for social media, boosting Instagram engagement by 45%. I designed premium packaging for a new wig line, driving a 20% increase in pre‑launch orders. "
    },
    
    {
      company: "Skycorp solutions",
      logo: "https://d1yjjnpx0p53s8.cloudfront.net/styles/large/s3/avatar_white.jpg?NKLva1xpa1py3FpzjElVTC3UBJmkj7pV&itok=DkC6lwAH",
      role: "Web Developer",
      period: "2024 July-Sep",
      description: "Worked on various client projects building responsive websites. Collaborated with design teams to implement UI/UX designs using modern web technologies."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6 text-light">
          Experience
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          I've been doing web development for several years, consistently delivering high-quality products and always eager to learn more in this fast-paced industry.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#1e2233] p-6 rounded-lg shadow-lg flex flex-col h-full border border-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-white p-1">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-light">{exp.company}</h3>
                  <p className="text-secondary text-sm">{exp.period}</p>
                </div>
              </div>
              <h4 className="text-lg font-medium text-gray-200 mb-2">{exp.role}</h4>
              <p className="text-gray-300 flex-grow">{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
