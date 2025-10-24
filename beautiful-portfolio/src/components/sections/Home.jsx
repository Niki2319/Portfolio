import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 bg-[#fdf7f2] relative overflow-hidden pt-20"
    >
      {/* Floating particles */}
      <div className="absolute w-6 h-6 bg-[#d4b996]/40 rounded-full animate-float top-10 left-1/4"></div>
      <div className="absolute w-5 h-5 bg-[#b68d5c]/40 rounded-full animate-float-slow top-1/2 left-3/4"></div>
      <div className="absolute w-7 h-7 bg-[#c6a475]/30 rounded-full animate-float-reverse bottom-20 right-1/3"></div>
      <div className="absolute w-4 h-4 bg-[#b58c5a]/50 rounded-full animate-float top-3/4 left-1/5"></div>

      <RevealOnScroll>
        <div className="flex-1 text-center md:text-left space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-[#3b2f2f]">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#62381e] to-[#efa050]">
              Nikita Upadhyay
            </span>
          </h1>

          <p className="text-[#41291a] text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            Full Stack Developer with 2+ years of experience building scalable,
            high-performance web applications. Skilled in React, Next.js, Javascript,
            and Java — I create clean, responsive UIs and efficient
            backend systems that deliver great user experiences.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-[#62381e] to-[#efa050] text-white py-3 px-8 rounded-full font-medium 
              transition transform hover:scale-105 hover:shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-[#a26a4d] text-[#a26a4d] py-3 px-8 rounded-full font-medium 
              transition transform hover:bg-[#a26a4d]/10 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
