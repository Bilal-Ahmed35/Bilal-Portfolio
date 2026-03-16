import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!form.name || !form.email || !form.message) {
      setStatus("⚠️ Please fill all required fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      // Map React state to EmailJS template variables
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,    // EmailJS template variable
          from_email: form.email,  // EmailJS template variable
          message: form.message,   // EmailJS template variable
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* FORM */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          {/* NAME */}
          <label className="flex flex-col">
            <span className="text-white mb-2">Your Name *</span>
            <input
              type="text"
              name="name"        // React state key
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What's your name?"
              className="bg-tertiary py-3 px-5 text-white rounded-lg outline-none"
            />
          </label>

          {/* EMAIL */}
          <label className="flex flex-col">
            <span className="text-white mb-2">Your Email *</span>
            <input
              type="email"
              name="email"       // React state key
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What's your email?"
              className="bg-tertiary py-3 px-5 text-white rounded-lg outline-none"
            />
          </label>

          {/* MESSAGE */}
          <label className="flex flex-col">
            <span className="text-white mb-2">Your Message *</span>
            <textarea
              rows={5}
              name="message"     // React state key
              value={form.message}
              onChange={handleChange}
              required
              placeholder="What would you like to say?"
              className="bg-tertiary py-3 px-5 text-white rounded-lg outline-none"
            />
          </label>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#915eff] hover:bg-[#7b4fe0] transition py-3 px-8 text-white font-bold rounded-xl w-fit"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS MESSAGE */}
          {status && <p className="text-sm text-gray-300 mt-2">{status}</p>}
        </form>
      </motion.div>

      {/* EARTH CANVAS */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");