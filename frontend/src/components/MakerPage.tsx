import NavbarMain from './NavbarMain';

function AboutMe() {
  return (
    <div className="relative h-screen bg-gray-800">
      <NavbarMain />

      <div className="relative z-30 flex flex-col items-center justify-center h-full px-6 bg-black bg-opacity-20">
        <h1 className="mb-8 text-5xl font-bold text-white font-poppins">About Me</h1>
        <p className="max-w-2xl mb-6 text-lg text-center text-white font-roboto">
          Hi! I'm Vishu, the creator of BU SPACE. I started this platform to provide a safe space for individuals to express themselves freely and anonymously. 
          I want to create a community where everyone can share their thoughts and experiences without fear of judgment.
        </p>
        <p className="max-w-2xl mb-6 text-lg text-center text-white font-roboto">
          My agenda with BU SPACE is to encourage open dialogue, foster creativity, and empower voices that deserve to be heard. I believe in the power of words and the impact they can have on our lives.
        </p>
        <h2 className="mb-4 text-2xl font-bold text-white">Connect with Me:</h2>
        <ul className="flex flex-col items-center space-y-4 text-white">
          <li>
            <a href="https://github.com/vishuRizz" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-300">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vishu-pratap-soft-dev/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-300">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://x.com/vishuRizz" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-300">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/vishuiuiuiuiu/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gray-300">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
