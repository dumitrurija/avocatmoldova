import heroImg from "../../assets/welcome-img.webp";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaRegStar, FaRegUser } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { IoMdMail } from "react-icons/io";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center h-screen bg-center bg-cover bg-no-repeat pt-30 p-10 max-sm:p-5 max-sm:pt-30 max-sm:h-auto"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Left Side */}
      <div className="w-1/2 flex flex-col gap-6 max-lg:w-2/3 max-sm:w-auto">
        <span className="text-yellow-600">AVOCAT ÎN REPUBLICA MOLDOVA</span>
        <h1 className="font-serif text-5xl leading-16 text-stone-100">
          Protejăm ceea ce contează.
        </h1>
        <p className="text-stone-300 leading-8 text-md">
          Asistență juridică profesionistă pentru persoane fizice și companii.
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
            href="tel:+37367679147"
            className="flex items-center gap-2 border border-[#c8943f] text-stone-100 py-4 px-8 rounded-sm font-medium text-sm hover:bg-yellow-600 transition"
          >
            <IoMdMail className="w-4 h-4" />
            CONTACTEAZĂ-MĂ
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
