import { useState, useEffect } from "react";
import { GoLaw } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { lawyer } from "../../config/site";
import { useLanguage } from "../../i18n/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const [modalType, setModalType] = useState(null); // 'privacy' | 'terms' | null

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalType) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalType(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalType]);

  const modalData =
    modalType === "privacy"
      ? t.privacyModal
      : modalType === "terms"
        ? t.termsModal
        : null;

  return (
    <>
      <footer className="w-full bg-black border-t border-stone-900 py-8 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 hover:opacity-90 transition max-sm:flex-col max-sm:text-center text-left"
          >
            <GoLaw className="h-10 w-10 text-yellow-600 shrink-0" />
            <div className="flex flex-col">
              <h2 className="text-lg font-serif text-stone-100">{t.nav.logoTitle}</h2>
              <p className="text-xs text-stone-400">
                {t.footer.logoSubtitle}
              </p>
            </div>
          </a>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-stone-400 text-center">
            &copy; 2026 {lawyer.brand}. {t.footer.rights}
          </p>

          {/* Terms / Privacy Triggers */}
          <div className="flex items-center gap-4 text-xs sm:text-sm text-stone-400">
            <button
              type="button"
              onClick={() => setModalType("privacy")}
              className="hover:text-yellow-600 transition cursor-pointer"
            >
              {t.footer.privacy}
            </button>
            <span className="text-stone-700">•</span>
            <button
              type="button"
              onClick={() => setModalType("terms")}
              className="hover:text-yellow-600 transition cursor-pointer"
            >
              {t.footer.terms}
            </button>
          </div>
        </div>
      </footer>

      {/* Multilingual Legal Modal */}
      {modalData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalType(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-lg border border-stone-800 bg-stone-950 p-6 sm:p-8 text-stone-200 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-900 rounded-sm transition cursor-pointer"
              aria-label={modalData.close}
            >
              <IoClose className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <GoLaw className="w-8 h-8 text-yellow-600 shrink-0" />
              <h2
                id="legal-modal-title"
                className="text-2xl font-serif text-stone-100"
              >
                {modalData.title}
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-stone-400 mb-6 pb-4 border-b border-stone-800">
              {modalData.intro}
            </p>

            {/* Modal Sections */}
            <div className="space-y-6 text-sm">
              {modalData.sections.map((section, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h3 className="font-serif text-base text-yellow-600">
                    {section.heading}
                  </h3>
                  <p className="leading-relaxed text-stone-300">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-stone-800 flex justify-end">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-6 py-2.5 bg-[#c8943f] hover:bg-yellow-600 text-stone-950 font-semibold text-sm rounded-sm transition cursor-pointer"
              >
                {modalData.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
