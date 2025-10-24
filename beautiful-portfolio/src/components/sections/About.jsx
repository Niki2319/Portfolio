import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Vue", "TailwindCSS", "Javascript"];
  const backendSkills = ["Node.js", "Java", "Python", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-[#fdf7f2] relative overflow-hidden"
    >
      {/* Floating soft particles for theme consistency */}
      <div className="absolute w-6 h-6 bg-[#d4b996]/40 rounded-full animate-float top-10 left-1/4"></div>
      <div className="absolute w-5 h-5 bg-[#b68d5c]/40 rounded-full animate-float-slow top-1/2 left-3/4"></div>
      <div className="absolute w-7 h-7 bg-[#c6a475]/30 rounded-full animate-float-reverse bottom-20 right-1/3"></div>
      <div className="absolute w-4 h-4 bg-[#b58c5a]/50 rounded-full animate-float top-3/4 left-1/5"></div>

      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 z-10">
          <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#62381e] to-[#efa050]">
            About Me
          </h2>

          {/* Intro Card */}
          <div className="rounded-2xl p-8 border border-[#a26a4d]/20 bg-[#fff9f4]/80 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 backdrop-blur-sm">
            <p className="text-[#41291a] mb-8 text-lg leading-relaxed">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions. I enjoy combining
              technical precision with creative design to craft digital
              experiences that are functional, aesthetic, and performant.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl p-6 bg-[#fff9f4]/60 border border-[#a26a4d]/20 hover:-translate-y-1 transition-all shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#3b2f2f]">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#a26a4d]/10 text-[#62381e] py-1 px-3 rounded-full text-sm hover:bg-[#a26a4d]/20 hover:shadow-md transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-[#fff9f4]/60 border border-[#a26a4d]/20 hover:-translate-y-1 transition-all shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#3b2f2f]">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#a26a4d]/10 text-[#62381e] py-1 px-3 rounded-full text-sm hover:bg-[#a26a4d]/20 hover:shadow-md transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Education */}
            <div className="p-8 rounded-2xl bg-[#fff9f4]/80 border border-[#a26a4d]/20 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-[#3b2f2f]">
                🏫 Education
              </h3>
              <ul className="list-disc list-inside text-[#41291a] space-y-2">
                <li>
                  <strong>M.C.A in Computer Science</strong> – Harcourt Butler
                  Technical University (2019–2022)
                </li>
                <li>
                  <strong>B.C.A in Computer Science</strong> – C.C.S University
                  (2014–2017)
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-8 rounded-2xl bg-[#fff9f4]/80 border border-[#a26a4d]/20 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-[#3b2f2f]">
                💼 Work Experience
              </h3>
              <div className="space-y-5 text-[#41291a]">
                <div>
                  <h4 className="font-semibold text-[#62381e]">
                    Samsung SDS | Software Developer, Gurugram (Feb 2022 – Nov
                    2023)
                  </h4>
                  <p>
                    Cleared Samsung SDS Advanced Coding Test and enhanced Samsung
                    Shop’s performance through Vue.js front-end improvements and
                    secure Spring Boot backend development.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#62381e]">
                    Gingertale Pvt Ltd | Full Stack Developer, Gurugram (Jan
                    2025 – Present)
                  </h4>
                  <p>
                    Developed responsive Next.js and React interfaces with MUI,
                    improved code quality using Prettier and ESLint, and
                    integrated APIs and MongoDB with Node.js for seamless
                    frontend-backend functionality and better user engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
