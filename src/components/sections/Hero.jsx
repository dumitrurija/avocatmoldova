import heroImg from "../../assets/welcome-img.webp";
import { GoLaw } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import { lawyer } from "../../config/site";
import { useLanguage } from "../../i18n/useLanguage";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex items-center min-h-[90vh] bg-center bg-cover bg-no-repeat p-10 pt-36 pb-20 max-sm:p-5 max-sm:pt-36 max-sm:pb-16"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Bottom smooth gradient fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#14130f] via-[#14130f]/60 to-transparent pointer-events-none" />

      {/* Left Side */}
      <div className="relative z-10 w-1/2 flex flex-col gap-6 max-lg:w-2/3 max-sm:w-auto">
        <span className="text-yellow-600">{t.hero.eyebrow}</span>
        <h1 className="font-serif text-5xl leading-16 text-stone-100">
          {t.hero.title}
        </h1>
        <p className="text-stone-300 leading-8 text-md">{t.hero.body}</p>

        <div className="flex gap-6 max-lg:flex-col">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#c8943f] text-stone-100 py-4 px-8 rounded-sm font-medium text-sm hover:bg-yellow-600 transition"
          >
            <GoLaw className="w-5 h-5" />
            {t.hero.consultation}
          </a>
          <a
            href={lawyer.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-[#c8943f] text-stone-100 py-4 px-8 rounded-sm font-medium text-sm hover:bg-yellow-600 transition"
          >
            <IoLogoWhatsapp className="w-4 h-4" />
            {t.hero.whatsapp}
          </a>
        </div>
      </div>
      {/* --------- */}
    </section>
  );
};

export default Hero;
