import React from "react";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.avif";
import img3 from "../assets/img-3.avif";
import img5 from "../assets/img-5.avif";

const About = () => (
  <div className="p-8 text-center">
    <h1 className="text-2xl font-bold text-blue-600 mt-10">
      WE ARE CREATIVE AGENCY
    </h1>
    <p className="text-black text-3xl font-bold mt-2">
     <span className="text-emerald-500">Top-rated Digital</span> Transformation Company
    </p>
    <p className="text-gray-700 mt-3">
      Digital Digitizers we are not just a tech company—we are the architects of
      digital evolution. With a bold vision and deep-rooted expertise, we
      engineer intelligent, future-ready solutions that empower businesses to
      lead in the digital age. Whether it's building immersive AR/VR
      experiences, deploying enterprise-grade ERP systems, pioneering blockchain
      integration, or delivering results-driven digital marketing—we don't just
      follow trends; we set them.
    </p>

    <h2 className="text-2xl font-semibold mt-10 mb-6 text-gray-800">
      Top-rated Services
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
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
        <h3 className="text-xl font-bold text-white mb-2">
          Web Development
        </h3>
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
        <h3 className="text-xl font-bold text-white mb-2">
          App Development
        </h3>
        <p className="text-black text-sm p-2">
          Native and cross-platform mobile apps designed for performance,
          scalability, and engaging user experience.
        </p>
      </div>
    </div>
  </div>
);

export default About;
