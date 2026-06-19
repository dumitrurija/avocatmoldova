import { GoLaw } from "react-icons/go";
import { lawyer } from "../../config/site";
import { useLanguage } from "../../i18n/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 bg-black py-5 px-10 max-sm:p-5">
      {/* Logo */}
      <div className="flex items-center gap-2 max-sm:justify-center max-sm:text-center max-sm:flex-col">
        <GoLaw className="h-12 w-12 text-yellow-600" />
        <div className="flex flex-col">
          <h1 className="text-2xl font-serif">{t.nav.logoTitle}</h1>
          <p className="text-xs text-gray-400">
            {lawyer.name} • {t.footer.logoSubtitle}
          </p>
        </div>
      </div>
      {/* ---- */}

      {/* Copyright */}
      <div className="text-gray-300 text-center flex flex-col justify-between max-lg:order-3 max-lg:col-span-2 max-sm:col-auto max-sm:text-xs">
        <p>&copy; 2026 {t.nav.logoTitle}. {t.footer.rights}</p>
        <p className="text-xs text-gray-600">
          {t.footer.developedBy}{" "}
          <a
            href="https://grandmasterlabs.com"
            target="_blank"
            rel="noreferrer"
            className=" underline"
          >
            GrandMaster Labs
          </a>
        </p>
      </div>
      {/* --------- */}

      {/* Terms */}
      <div className="flex gap-2 text-gray-300 justify-end max-lg:order-2 max-lg:items-center max-sm:justify-center max-sm:flex-col max-sm:text-xs">
        <a href="/privacy.html">{t.footer.privacy}</a>
        <a href="/terms.html">{t.footer.terms}</a>
      </div>
      {/* ----- */}
    </footer>
  );
};

export default Footer;
