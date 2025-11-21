import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";

// template_49jw5yq
// service_9gvq101
// 3lDtCP31mFt_52s7F

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!response.ok) {
        console.error("Contact API error", response.status);
        throw new Error("Failed to send email via contact API");
      }

      setloading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setform({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setloading(false);
      alert("Something went wrong while sending your message.");
    }
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="mt-6 mb-4 flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/Bilal-Ahmed35"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-tertiary border border-[#915eff] flex items-center justify-center hover:bg-[#915eff] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white fill-current"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.06.14 3.02.4 2.28-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.87.13 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.38.81 1.12.81 2.26 0 1.63-.02 2.95-.02 3.35 0 .32.21.7.82.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/bilalshah34/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-tertiary border border-[#915eff] flex items-center justify-center hover:bg-[#915eff] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white fill-current"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8.11h4.4V24H.3V8.11zM8.59 8.11h4.22v2.16h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.76V24h-4.4v-7.3c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V24h-4.4V8.11z" />
            </svg>
          </a>

          <a
            href="mailto:bilalahmedshah35@gmail.com"
            className="w-10 h-10 rounded-full bg-tertiary border border-[#915eff] flex items-center justify-center hover:bg-[#915eff] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white fill-current"
            >
              <path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13 22 6.01V6H2zm0 12h20V9l-10 7L2 9v9z" />
            </svg>
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handlesubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handlechange}
              placeholder="what's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handlechange}
              placeholder="what's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={5}
              type="text"
              name="message"
              value={form.message}
              onChange={handlechange}
              placeholder="what do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
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
