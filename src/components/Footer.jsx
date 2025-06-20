import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-white text-black p-2 mt-0 text-center font-bold">
    <div className="mt-4 space-x-4">
      <a href="https://www.facebook.com/digital.digitizers" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="inline text-xl hover:text-gray-400" />
      </a>
      <a href="https://www.instagram.com/digitaldigitizers?igsh=dW1ucWR4MGg1bzFq" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="inline text-xl hover:text-gray-400" />
      </a>
      <a href="mailto:support@digitaldigitizers.com">
        <FaEnvelope className="inline text-xl hover:text-gray-400" />
      </a>
    </div>
    <p className='mt-3'>© 2025 MySite. All rights reserved.</p>
  </footer>
);
export default Footer