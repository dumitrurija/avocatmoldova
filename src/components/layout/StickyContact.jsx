import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaViber, FaWhatsapp } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { lawyer } from "../../config/site";
import { useLanguage } from "../../i18n/useLanguage";

const actions = [
  {
    label: "WhatsApp",
    href: lawyer.whatsappHref,
    icon: FaWhatsapp,
    className: "bg-green-600 hover:bg-green-500",
    external: true,
  },
  {
    label: "Viber",
    href: lawyer.viberHref,
    icon: FaViber,
    className: "bg-purple-600 hover:bg-purple-500",
  },
  {
    label: "call",
    href: lawyer.phoneHref,
    icon: FaPhoneAlt,
    className: "bg-[#c8943f] hover:bg-yellow-600",
  },
];

const StickyContact = () => {
  const { t } = useLanguage();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 180);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasScrolled || isDismissed) {
    return null;
  }

  return (
    <>
      <aside className="fixed bottom-6 right-6 z-40 hidden w-64 flex-col gap-3 rounded-md border border-stone-800 bg-black/90 p-4 shadow-2xl backdrop-blur sm:flex">
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="absolute right-3 top-3 text-stone-500 hover:text-stone-100"
          aria-label={t.sticky.close}
        >
          <IoClose className="h-5 w-5" />
        </button>

        <div className="pr-8">
          <p className="text-sm font-medium text-stone-100">
            {t.sticky.title}
          </p>
          <p className="text-xs text-stone-500">{t.sticky.text}</p>
        </div>

        <div className="grid gap-2">
          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noreferrer" : undefined}
                className={`flex items-center justify-center gap-2 rounded-sm px-4 py-3 text-sm font-medium text-white transition ${action.className}`}
              >
                <Icon className="h-4 w-4" />
                {action.label === "call" ? t.sticky.call : action.label}
              </a>
            );
          })}
        </div>
      </aside>

      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden">
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="absolute -top-9 right-3 rounded-full border border-stone-800 bg-black/95 p-2 text-stone-400"
          aria-label={t.sticky.close}
        >
          <IoClose className="h-4 w-4" />
        </button>

        <nav className="grid grid-cols-3 border-t border-stone-800 bg-black/95">
          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
              rel={action.external ? "noreferrer" : undefined}
              className="flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-medium text-stone-100"
              aria-label={`${t.contact.contact}: ${
                action.label === "call" ? t.sticky.call : action.label
              }`}
            >
              <Icon className="h-5 w-5 text-yellow-600" />
              {action.label === "call" ? t.sticky.call : action.label}
            </a>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default StickyContact;
