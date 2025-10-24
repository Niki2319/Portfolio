import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-24 px-6 md:px-20 bg-[#fdf7f2] relative overflow-hidden"
    >
      {/* Floating background orbs */}
      <div className="absolute w-6 h-6 bg-[#d4b996]/40 rounded-full animate-float top-10 left-1/4"></div>
      <div className="absolute w-5 h-5 bg-[#b68d5c]/40 rounded-full animate-float-slow top-1/2 left-3/4"></div>
      <div className="absolute w-7 h-7 bg-[#c6a475]/30 rounded-full animate-float-reverse bottom-20 right-1/3"></div>
      <div className="absolute w-4 h-4 bg-[#b58c5a]/50 rounded-full animate-float top-3/4 left-1/5"></div>

      <RevealOnScroll>
        {/* 👇 Responsive width here */}
        <div className="w-[25rem] sm:w-[37.5rem] bg-white/70 backdrop-blur-sm p-6 sm:p-10 rounded-2xl shadow-md z-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#3b2f2f]">
            <span className="bg-gradient-to-r from-[#62381e] to-[#efa050] bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white border border-[#a26a4d]/30 rounded-lg px-4 py-3 text-[#3b2f2f] placeholder-[#a26a4d]/60 focus:outline-none focus:border-[#a26a4d] focus:ring-2 focus:ring-[#efa050]/40 transition"
                placeholder="Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white border border-[#a26a4d]/30 rounded-lg px-4 py-3 text-[#3b2f2f] placeholder-[#a26a4d]/60 focus:outline-none focus:border-[#a26a4d] focus:ring-2 focus:ring-[#efa050]/40 transition"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white border border-[#a26a4d]/30 rounded-lg px-4 py-3 text-[#3b2f2f] placeholder-[#a26a4d]/60 focus:outline-none focus:border-[#a26a4d] focus:ring-2 focus:ring-[#efa050]/40 transition"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#62381e] to-[#efa050] text-white py-3 px-6 rounded-full font-medium 
              transition transform hover:scale-105 hover:shadow-[0_4px_15px_rgba(98,56,30,0.3)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
