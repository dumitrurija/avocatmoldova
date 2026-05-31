import aboutMe from "../../assets/about-me.png";
import { GoLaw } from "react-icons/go";

const AboutMe = () => {
  return (
    <div className="flex items-center p-10 gap-6 max-md:flex-col">
      {/* Left Side */}
      <div className="w-1/2 max-md:w-full">
        <img
          src={aboutMe}
          alt=""
          className="w-full h-100 object-cover object-center rounded-md"
        />
      </div>
      {/* --------- */}

      {/* Right Side */}
      <div className="flex flex-col gap-6 w-1/2 max-md:w-full">
        <span className="text-yellow-600">DESPRE MINE</span>
        <h2 className="text-stone-100 text-4xl font-serif">
          Încredere. Integritate. Reprezentare juridică.
        </h2>
        <p className="text-stone-300">
          Sunt avocat licențiat în Republica Moldova și ofer asistență juridică
          personalizată persoanelor fizice și companiilor care au nevoie de
          sprijin profesionist în soluționarea problemelor juridice.
          <br /> <br />
          Obiectivul meu este să vă ofer siguranță juridică, reprezentare
          competentă și încrederea că aveți alături un partener dedicat pe tot
          parcursul procesului legal.
        </p>
        <a
          href=""
          className="flex items-center gap-2 bg-[#c8943f] text-stone-100 py-4 px-8 rounded-sm font-medium text-sm w-fit"
        >
          <GoLaw className="w-5 h-5" />
          SOLICITĂ CONSULTAȚIE
        </a>
      </div>
      {/* --------- */}
    </div>
  );
};

export default AboutMe;
