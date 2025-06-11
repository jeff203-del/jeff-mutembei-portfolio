import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ UPDATED handleSubmit function to send message via Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xeokgoqn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6 text-light">
          Get In Touch!
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Whether you have an idea for a project or just want to chat, feel free to reach out. I'm always open to discussing new opportunities and interesting collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div>
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#2a2f45] rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-light">Email Me</h3>
                  <a
                    href="mailto:jeff@mutembei.com"
                    className="text-secondary hover:text-accent transition-colors"
                  >
                    jeffmutembei203@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#2a2f45] rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faLocationDot} size="lg" className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-light">Location</h3>
                  <p className="text-gray-300">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1e2233] p-6 rounded-lg border border-gray-800 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-light">Available For</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  Freelance Projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  Full-time Opportunities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  Consultations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  Collaborations
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1e2233] p-6 rounded-lg border border-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-light">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-light"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-light"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-light"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-primary border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-light resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center"
                disabled={submitStatus === 'submitting'}
              >
                {submitStatus === 'submitting' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span className="mr-2">Send Message</span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 text-center text-green-400">
                  Your message has been sent successfully!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 text-center text-red-400">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
