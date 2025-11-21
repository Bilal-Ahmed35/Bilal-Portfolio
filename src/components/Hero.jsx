import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import ProfilePicture from "../assets/Pictures/Profile Picture.jpg";
import BilalCV from "../assets/CV/Bilal CV.docx";


const Hero = () => {
  return (
    <section className="relative w-full   h-screen mx-auto">
      <div
        className={`${styles.paddingX} inset-0 sm:top-[70px] top-[90px] absolute max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className="text-[#915eff]">Bilal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            i develop 3d visuals, user <br className="sm:block hidden" />{" "}
            interfaces and web applications
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
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

            <a
              href={BilalCV}
              download
              className="px-5 py-2 rounded-full border border-[#915eff] bg-[#915eff]/10 text-sm font-medium text-white hover:bg-[#915eff] hover:text-white transition-colors shadow-md shadow-[#915eff]/30"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute top-[140px] lg:top-[150px] right-[10%] flex items-start justify-end pointer-events-none">
        <div className="relative w-[220px] h-[300px] md:w-[240px] md:h-[320px] rounded-3xl overflow-hidden border border-[#915eff]/60 bg-gradient-to-b from-[#151030] to-[#050816] shadow-lg shadow-[#915eff]/40">
          <img
            src={ProfilePicture}
            alt="Bilal portrait"
            className="w-full h-full object-cover opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-transparent to-transparent" />
        </div>
      </div>
      {/* <div className="absolute inset-y-0 right-0 w-1/2 h-full">
        <ComputersCanvas />
      </div> */}
      <div className="absolute sm:bottom-24 bottom-36 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
