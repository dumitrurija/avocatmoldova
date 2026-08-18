import aboutMe from "../../assets/about-me.webp";
import { GoLaw } from "react-icons/go";
import { useLanguage } from "../../i18n/useLanguage";

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="flex items-center p-10 gap-6 max-md:flex-col max-sm:p-5"
    >
      {/* Left Side */}
      <div className="w-1/2 max-md:w-full">
        <img
          src={aboutMe}
          alt={t.about.imageAlt}
          width="600"
          height="400"
          loading="lazy"
          decoding="async"
          className="w-full h-100 object-cover object-center rounded-md"
        />
      </div>
      {/* --------- */}

      {/* Right Side */}
      <div className="flex flex-col gap-6 w-1/2 max-md:w-full">
        <span className="text-yellow-600">{t.about.eyebrow}</span>
        <h2 className="text-stone-100 text-4xl font-serif">
          {t.about.title}
        </h2>
        <p className="text-stone-300">
          {t.about.bodyOne}
          <br /> <br />
          {t.about.bodyTwo}
        </p>
        <a
          href="#contact"
          className="flex items-center gap-2 bg-[#c8943f] text-stone-100 py-4 px-8 rounded-sm font-medium text-sm w-fit hover:bg-yellow-600 transition"
        >
          <GoLaw className="w-5 h-5" />
          {t.about.cta}
        </a>
      </div>
      {/* --------- */}
    </section>
  );
};

export default AboutMe;
