import { GoLaw } from "react-icons/go";
import { CiPhone } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { lawyer, navLinks } from "../../config/site";
import { useLanguage } from "../../i18n/useLanguage";

const LanguageSelect = ({ className = "" }) => {
  const { language, languages, setLanguage, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-sm border border-stone-800 bg-stone-950/90 p-1 text-xs ${className}`}
      role="group"
      aria-label={t.nav.language}
    >
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLanguage(item.code)}
          className={`px-2.5 py-1 rounded-sm transition font-medium cursor-pointer ${
            language === item.code
              ? "bg-[#c8943f] text-stone-950 font-bold shadow-xs"
              : "text-stone-400 hover:text-stone-100"
          }`}
          aria-pressed={language === item.code}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const { t } = useLanguage();

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
    <header className="fixed top-0 w-full p-5 bg-black/85 backdrop-blur-sm z-50 border-b border-stone-900/60">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <GoLaw className="h-10 w-10 text-yellow-600 shrink-0" />
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl font-serif text-stone-100">{t.nav.logoTitle}</h1>
            <p className="text-xs text-gray-400">
              {t.nav.logoSubtitle}
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
              <a href={`#${link.id}`} className="hover:text-yellow-600 transition">
                {t.nav.links[link.id]}
              </a>
            </li>
          ))}
        </ul>
        {/* ------------ */}

        {/* Right Actions (Language + CTA) */}
        <div className="flex items-center gap-4 max-lg:hidden">
          <LanguageSelect />

          {/* CTA */}
          <a
            href={lawyer.phoneHref}
            className="flex items-center gap-2 px-3.5 py-2 border border-yellow-600 rounded-sm hover:bg-yellow-600/10 hover:scale-105 transition"
          >
            <CiPhone className="w-5 h-5 text-yellow-600" />
            <span className="text-stone-100 font-medium text-sm">
              {lawyer.phoneDisplay}
            </span>
          </a>
        </div>
        {/* --- */}

        {/* Menu Mobile */}
        <button
          type="button"
          className="lg:hidden"
          onClick={toggleMobileMenu}
          aria-label={t.nav.openMenu}
          aria-expanded={isMobileMenuOpen}
        >
          <GiHamburgerMenu className="w-5 h-5" />
        </button>
        {/* ----------- */}

        {/* Drawer Mobile */}
        {isMobileMenuOpen && (
          <div className="flex flex-col justify-between p-5 pb-16 h-screen absolute inset-0 bg-black">
            <div className="flex justify-between items-center">
              <h2 className="font-serif text-2xl">
                <span className="text-yellow-600">{t.nav.logoTitle}</span>
              </h2>

              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-label={t.nav.closeMenu}
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
                  <a href={`#${link.id}`}>{t.nav.links[link.id]}</a>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between pb-8">
              <LanguageSelect />
              <GoLaw className="h-12 w-12 text-yellow-600" />
            </div>
          </div>
        )}
        {/* ------------- */}
      </nav>
    </header>
  );
};

export default Navbar;
