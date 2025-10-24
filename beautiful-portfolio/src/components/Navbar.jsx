import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(255,250,245,0.85)] backdrop-blur-lg border-b border-[#a26a4d]/20 shadow-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <a
            href="#home"
            className="font-mono text-xl font-bold text-[#3b2f2f]"
          >
            Nikita{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#62381e] to-[#efa050]">
              Upadhyay
            </span>
          </a>

          {/* Mobile Menu Icon */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-[#3b2f2f] text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#6b4f3f] font-medium hover:text-[#a26a4d] transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#fdf7f2]/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 md:hidden z-30 transition-all duration-500 ease-in-out animate-fadeSlide">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-[#6b4f3f] text-2xl font-medium hover:text-[#a26a4d] transition-all duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
