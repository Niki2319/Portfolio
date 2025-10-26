import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Developed a responsive portfolio using React and TailwindCSS with smooth animations, reusable components, and SEO optimization.",
      tech: ["React", "TailwindCSS", "Vite", "Framer Motion"],
      link: "#",
    },    
    {
      title: "Movie Rating Site",
      description:
        "Developed a movie rating application allowing users to rate, add, delete, and view information for over 50 movies.",
      tech: ["Vue.js", "HTML", "JavaScript", "CSS"],
      link: "https://github.com/Niki2319/Movie-rating-pages",
    },
    {
      title: "Chatbot",
      description:
        "Created and deployed a Python-powered Chatbot using the OpenAI GPT-3.5-turbo model for intelligent conversations.",
      tech: ["Python", "Flask", "OpenAI API", "HTML/CSS"],
      link: "#",
    },
    {
      title: "Fantasy Cricket",
      description:
        "Designed a cricket platform using Idle, SQLite, and QtDesigner within a 2-week development period, enabling users to manage and track fantasy cricket teams.",
      tech: ["Python", "SQLite", "QtDesigner"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-20 bg-[#fdf7f2] relative overflow-hidden"
    >
      {/* Floating particles for subtle motion */}
      <div className="absolute w-6 h-6 bg-[#d4b996]/40 rounded-full animate-float top-10 left-1/4"></div>
      <div className="absolute w-5 h-5 bg-[#b68d5c]/40 rounded-full animate-float-slow top-1/2 left-3/4"></div>
      <div className="absolute w-7 h-7 bg-[#c6a475]/30 rounded-full animate-float-reverse bottom-20 right-1/3"></div>
      <div className="absolute w-4 h-4 bg-[#b58c5a]/50 rounded-full animate-float top-3/4 left-1/5"></div>

      <RevealOnScroll>
        <div className="max-w-6xl w-full z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#3b2f2f] text-center">
            <span className="bg-gradient-to-r from-[#62381e] to-[#efa050] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-[#a26a4d]/20 bg-[#ffffff] shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(98,56,30,0.15)] transition transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold mb-3 text-[#3b2f2f]">
                  {project.title}
                </h3>

                <p className="text-[#41291a] mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#a26a4d]/10 text-[#62381e] py-1 px-3 rounded-full text-sm 
                      hover:bg-[#a26a4d]/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#a26a4d] font-medium hover:text-[#62381e] 
                  transition transform hover:translate-x-1"
                >
                  View Project ➡️
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
