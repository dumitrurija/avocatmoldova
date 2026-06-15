import heroImg from "../../assets/welcome-img.webp";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaRegStar, FaRegUser } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import { lawyer } from "../../config/site";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center min-h-screen bg-center bg-cover bg-no-repeat p-10 pt-36 pb-14 max-sm:p-5 max-sm:pt-40 max-sm:pb-10"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Left Side */}
      <div className="w-1/2 flex flex-col gap-6 max-lg:w-2/3 max-sm:w-auto">
        <span className="text-yellow-600">AVOCAT ÎN REPUBLICA MOLDOVA</span>
        <h1 className="font-serif text-5xl leading-16 text-stone-100">
          {lawyer.name}
        </h1>
        <p className="text-stone-300 leading-8 text-md">
          Asistență juridică profesionistă pentru persoane fizice și companii.
          Protejăm ceea ce contează.
        </p>

        <div className="flex gap-6 max-lg:flex-col">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#c8943f] text-stone-100 py-4 px-8 rounded-sm font-medium text-sm hover:bg-yellow-600 transition"
          >
            <GoLaw className="w-5 h-5" />
            SOLICITĂ CONSULTAȚIE
          </a>
          <a
            href={lawyer.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-[#c8943f] text-stone-100 py-4 px-8 rounded-sm font-medium text-sm hover:bg-yellow-600 transition"
          >
            <IoLogoWhatsapp className="w-4 h-4" />
            SCRIE PE WHATSAPP
          </a>
        </div>

        <div className="grid grid-cols-3 mt-10 gap-2 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-6">
          <div className="flex gap-2 items-center">
            <IoShieldCheckmarkOutline className="text-yellow-600 w-8 h-8" />
            <p>Confidențialitate și discreție</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaRegUser className="text-yellow-600 w-8 h-8" />
            <p>Abordare personalizată pentru fiecare caz</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaRegStar className="text-yellow-600 w-8 h-8" />
            <p>Experiență și profesionalism</p>
          </div>
        </div>
      </div>
      {/* --------- */}
    </section>
  );
};

export default Hero;
