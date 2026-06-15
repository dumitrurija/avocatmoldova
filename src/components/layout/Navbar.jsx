import { GoLaw } from "react-icons/go";
import { CiPhone } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { lawyer, navLinks } from "../../config/site";

const Navbar = () => {
  // Mobile Menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);
  // -----------

  // Observer
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  // --------

  return (
    <header className="fixed top-0 w-full p-5 bg-black/75 z-50">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <GoLaw className="h-12 w-12 text-yellow-600" />
          <div className="flex flex-col">
            <h1 className="text-2xl font-serif">AVOCAT</h1>
            <p className="text-xs text-gray-400">
              {lawyer.name} • DREPT CIVIL • FAMILIE
            </p>
          </div>
        </a>
        {/* ---- */}

        {/* Menu Desktop */}
        <ul className="flex gap-6 max-lg:hidden">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={
                activeSection === link.id ? "text-yellow-600" : "text-white"
              }
            >
              <a href={`#${link.id}`}>{link.name}</a>
            </li>
          ))}
        </ul>
        {/* ------------ */}

        {/* CTA */}
        <a
          href={lawyer.phoneHref}
          className="flex items-center gap-2 p-2 border border-yellow-600 rounded-sm max-lg:hidden hover:scale-105 transition"
        >
          <CiPhone className="w-6 h-6 text-yellow-600" />
          {lawyer.phoneDisplay}
        </a>
        {/* --- */}

        {/* Menu Mobile */}
        <button
          type="button"
          className="lg:hidden"
          onClick={toggleMobileMenu}
          aria-label="Deschide meniul"
          aria-expanded={isMobileMenuOpen}
        >
          <GiHamburgerMenu className="w-5 h-5" />
        </button>
        {/* ----------- */}

        {/* Drawer Mobile */}
        {isMobileMenuOpen && (
          <div className="flex flex-col justify-between p-5 h-screen absolute inset-0 bg-black">
            <div className="flex justify-between items-center">
              <h2 className="font-serif text-2xl">
                <span className="text-yellow-600">Avocat</span> {lawyer.name}
              </h2>

              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-label="Închide meniul"
              >
                <IoClose className="w-6 h-6" />
              </button>
            </div>

            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={
                    activeSection === link.id
                      ? "text-yellow-600"
                      : "text-white"
                  }
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.name}</a>
                </li>
              ))}
            </ul>

            <GoLaw className="h-12 w-12 text-yellow-600" />
          </div>
        )}
        {/* ------------- */}
      </nav>
    </header>
  );
};

export default Navbar;
