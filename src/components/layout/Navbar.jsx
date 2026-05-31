import { GoLaw } from "react-icons/go";
import { CiPhone } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);

    console.log(isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full p-5 bg-black/75 z-50">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <GoLaw className="h-12 w-12 text-yellow-600" />
          <div className="flex flex-col">
            <h1 className="text-2xl font-serif">AVOCAT</h1>
            <p className="text-xs text-gray-400">
              DREPT CIVIL • FAMILIE • COMERCIAL
            </p>
          </div>
        </a>
        {/* ---- */}

        {/* Menu Desktop */}
        <ul className="flex gap-6 max-lg:hidden">
          <li className="text-yellow-600">
            <a href="#home">Acasă</a>
          </li>
          <li>
            <a href="#about">Despre Mine</a>
          </li>
          <li>
            <a href="#services">Servicii</a>
          </li>
          <li>
            <a href="#testimonials">Testimoniale</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* ------------ */}

        {/* CTA */}
        <button className="flex items-center gap-2 p-2 border border-yellow-600 rounded-sm max-lg:hidden">
          <CiPhone className="w-6 h-6 text-yellow-600" />
          <a href="tel:+37367679147" className="">
            067 679 147
          </a>
        </button>
        {/* --- */}

        {/* Menu Mobile */}
        <div className="lg:hidden" onClick={toggleMobileMenu}>
          <GiHamburgerMenu className="w-5 h-5" />
        </div>
        {/* ----------- */}

        {/* Drawer Mobile */}
        {isMobileMenuOpen && (
          <div className="flex flex-col justify-between p-5 h-screen absolute inset-0 bg-black">
            <div className="flex justify-between items-center">
              <h2 className="font-serif text-2xl">
                <span className="text-yellow-600">Avocat</span> Moldova
              </h2>

              <IoClose className="w-6 h-6" onClick={toggleMobileMenu} />
            </div>

            <ul className="flex flex-col gap-6">
              <li className="text-yellow-600">
                <a href="#home">Acasă</a>
              </li>
              <li>
                <a href="#about">Despre Mine</a>
              </li>
              <li>
                <a href="#services">Servicii</a>
              </li>
              <li>
                <a href="#testimonials">Testimoniale</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
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
