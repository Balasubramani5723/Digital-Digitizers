import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="p-8 bg-gray-100">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold text-black mt-9"><span className="text-emerald-500">Contact</span>  Us</h1>
        <p className="text-blue-600 text-3xl font-bold mt-1">
          We Love to Listen to Your Requirements
        </p>
        <p className="text-black mt-2 font-bold">CALL: +91 78450 65850</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="bg-lime-400 rounded-xl shadow-md p-6 flex-1">
          <h2 className="text-xl font-bold text-lime-800 mb-2">
            Let's work together
          </h2>
          <p>
            <span className="font-semibold">Phone:</span> +91 78450 65850
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            support@digitaldigitizers.com
          </p>
          <p>
            <span className="font-semibold">Address:</span> 150, 1, Infantry Rd,
            opp. Commissioner Office, Vasanth Nagar, Bengaluru, Karnataka 560001
          </p>
        </div>

        <div className="bg-cyan-400 rounded-xl shadow-md p-6 flex-1">
          <h3 className="text-lg font-bold text-blue-800 mb-2">Bengaluru</h3>
          <p>
            150, 1, Infantry Rd, opp. Commissioner Office, Vasanth Nagar,
            Bengaluru, Karnataka 560001
          </p>
        </div>

        <div className="bg-emerald-400 rounded-xl shadow-md p-6 flex-1">
          <h3 className="text-lg font-bold text-emerald-800 mb-2">Mumbai</h3>
          <p>
            Aerocity Corporate Park, Andheri – Kurla Rd, Safed Pool, Saki Naka,
            Mumbai, Maharashtra 400072
          </p>
        </div>

        <div className="bg-fuchsia-400 rounded-xl shadow-md p-6 flex-1">
          <h3 className="text-lg font-bold text-fuchsia-800 mb-2">Chennai</h3>
          <p>
            No. 431, High Street, Anna Salai, Teynampet, Chennai, Tamil Nadu
            600018
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 ">
        <div className="w-full md:w-1/2">
          <form className="bg-gray-300 rounded-xl shadow-md p-7 space-y-8 h-full border-2 border-black">
            <h1 className="text-center text-2xl font-bold">Contact US</h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-2 border rounded bg-white"
              required
            />
            <input
              type="email"
              placeholder="Enter your Email Id"
              className="w-full p-2 border rounded bg-white"
              required
            />
            <textarea
              placeholder="Drop Your opinion"
              className="w-full p-2 border rounded bg-white"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="rounded-full bg-conic from-emerald-800 border-2 border-black to-emerald-300 to-50% text-white px-18 py-3 transition"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62243.62299986313!2d77.5666739!3d12.9903251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167dc8d52861%3A0xffdfaa3a6222db32!2sVasanth%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1718793000000!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
