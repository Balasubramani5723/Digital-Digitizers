import { motion } from "framer-motion";

const services = [
  {
    title: "AR/VR Solutions",
    description:
      "We deliver immersive Augmented and Virtual Reality applications for training, education, real estate, and retail industries.",
  },
  {
    title: "App Development",
    description:
      "We create high-performance native and cross-platform apps with intuitive UI/UX for Android and iOS devices.",
  },
  {
    title: "Ecommerce Development",
    description:
      "From product listings to payment gateways, we build scalable and responsive ecommerce platforms tailored to your business.",
  },
  {
    title: "ERP Solutions",
    description:
      "Streamline business operations with our custom ERP systems, managing finance, HR, inventory, and analytics in one platform.",
  },
  {
    title: "Digital Marketing",
    description:
      "We believe in emotion-led marketing. Your audience isn’t just data they’re people with dreams, fears, hopes. And when your brand speaks to their heart, you don’t just get clicks. You get loyalty.",
  },
  {
    title: "Education Services",
    description:
      "We build smart digital learning solutions and LMS platforms to enhance student engagement and institutional efficiency.",
  },
  {
    title: "Blockchain Development",
    description:
      "Develop secure and transparent systems using blockchain, including smart contracts, tokenization, and DApps.",
  },
  {
    title: "Mobile App Development",
    description:
      "We create high-performance native and cross-platform apps with intuitive UI/UX for Android and iOS devices.",
  },
  {
    title: "Video Service",
    description:
      "We create engaging and professional videos that elevate your brand and captivate your audience.",
  },
];

const Services = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-black mt-15"
      >
       <span className="text-emerald-500">Our</span>  Services
      </motion.h1>

      <p className="text-center text-gray-800 max-w-xl mx-auto mt-5">
        At Digital Digitizers, we specialize in delivering innovative and
        future-ready solutions across digital transformation, education,
        enterprise, and technology. Explore our core offerings below:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
