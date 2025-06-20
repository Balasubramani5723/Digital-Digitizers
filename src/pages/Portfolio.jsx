import { motion } from "framer-motion";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.avif";
import img3 from "../assets/img-3.avif";
import img4 from "../assets/img-4.jpg";
import img5 from "../assets/img-5.avif";
import img6 from "../assets/img-6.jpg";
import img7 from "../assets/img-7.png";
import img8 from "../assets/img-8.png";

const Services = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-black mt-13">
        <span className="text-emerald-400">Top-rated </span>Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left mt-7">
        <div className="bg-blue-600  rounded-xl shadow-md hover:shadow-lg transition text-center">
          <img
            src={img1}
            alt="App Development"
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold text-white mb-2">Blockchain</h3>
          <p className="text-black text-sm p-2">
            Secure, decentralized solutions for smarter and transparent systems.
            We specialize in smart contracts and Web3 integration.
          </p>
        </div>

        <div className="bg-pink-600 rounded-xl shadow-md hover:shadow-lg transition text-center">
          <img
            src={img2}
            alt="App Development"
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
          <p className="text-black text-sm p-2">
            Modern websites and portals built with cutting-edge tech to elevate
            your online presence and user experience.
          </p>
        </div>

        <div className="bg-green-600 rounded-xl shadow-md hover:shadow-lg transition text-center">
          <img
            src={img3}
            alt="App Development"
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold text-white mb-2">
            Digital Marketing
          </h3>
          <p className="text-black text-sm p-2">
            Data-driven campaigns, SEO, social media, and performance marketing
            that convert visitors into loyal customers.
          </p>
        </div>

        <div className="bg-purple-600 rounded-xl shadow-md hover:shadow-lg transition text-center">
          <img
            src={img5}
            alt="App Development"
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold text-white mb-2">App Development</h3>
          <p className="text-black text-sm p-2">
            Native and cross-platform mobile apps designed for performance,
            scalability, and engaging user experience.
          </p>
        </div>
        <div className="bg-emerald-800 rounded-xl shadow-md hover:shadow-lg transition text-center">
          <img
            src={img4}
            alt="App Development"
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold text-white mb-2">AR VR Solution</h3>
          <p className="text-black text-sm p-2">
            We create immersive Augmented and Virtual Reality experiences that
            enhance user interaction. Ideal for industries like education,
            retail, real estate, and gaming.
          </p>
        </div>
        <div className="bg-blue-500 rounded-xl shadow-md hover:shadow-lg transition text-center">
          <img
            src={img6}
            alt="App Development"
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold text-white mb-2">
            Ecommerce Development
          </h3>
          <p className="text-black text-sm p-2">
            We build secure, scalable online stores with user-friendly
            interfaces and payment integration. Empower your business to sell
            products or services 24/7 across the globe.
          </p>
        </div>
        <div className="bg-gray-400 rounded-xl shadow-md hover:shadow-lg transition text-center">
          <img
            src={img7}
            alt="App Development"
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold text-white mb-2">ERP Solution</h3>
          <p className="text-black text-sm p-2">
            Our ERP systems unify core business processes like finance, HR, and
            inventory into one platform. Streamline operations, improve
            efficiency, and support data-driven decisions.
          </p>
        </div>
        <div className="bg-black rounded-xl shadow-md hover:shadow-lg transition text-center">
          <img
            src={img8}
            alt="App Development"
            className="w-full h-50 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold text-white mb-2">
            Education Service
          </h3>
          <p className="text-white text-sm p-2">
            We develop smart digital learning platforms for schools,
            universities, and e-learning businesses. Engage learners through
            interactive content, LMS integration, and mobile accessibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
