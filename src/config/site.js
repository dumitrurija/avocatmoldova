import { RiGovernmentLine } from "react-icons/ri";
import { IoMdPeople } from "react-icons/io";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaFileSignature } from "react-icons/fa";
import { TbGavel } from "react-icons/tb";
import { FiShield } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { GoLaw } from "react-icons/go";

export const lawyer = {
  name: "Natalia Găină",
  brand: "Avocat Natalia Găină",
  phoneDisplay: "067 679 147",
  phoneHref: "tel:+37367679147",
  whatsappHref: "https://wa.me/37367679147",
  email: "gainanatalia78@gmail.com",
  emailHref: "mailto:gainanatalia78@gmail.com",
  address: "Strada Cuza Vodă 24, Chișinău",
  mapsHref: "https://maps.app.goo.gl/X2wbXmF2aCbcPbLr9",
};

export const navLinks = [
  { id: "home", name: "Acasă" },
  { id: "services", name: "Servicii" },
  { id: "about", name: "Despre mine" },
  { id: "testimonials", name: "Testimoniale" },
  { id: "contact", name: "Contact" },
];

export const services = [
  {
    id: 1,
    name: "Drept civil",
    icon: RiGovernmentLine,
    content:
      "Asistență și reprezentare în litigii civile, contracte, obligații și răspundere civilă.",
  },
  {
    id: 2,
    name: "Dreptul familiei",
    icon: IoMdPeople,
    content:
      "Divorț, partaj, pensie de întreținere, încredințarea copiilor și alte cauze de dreptul familiei.",
  },
  {
    id: 3,
    name: "Drept comercial",
    icon: IoBriefcaseOutline,
    content:
      "Consultanță pentru afaceri, contracte comerciale, societăți și reprezentare în litigii.",
  },
  {
    id: 4,
    name: "Moșteniri",
    icon: FaFileSignature,
    content:
      "Deschiderea succesiunii, partaj succesoral și redactarea actelor testamentare.",
  },
  {
    id: 5,
    name: "Litigii și reprezentare",
    icon: TbGavel,
    content:
      "Reprezentare în instanțele de judecată și în fața altor autorități publice.",
  },
];

export const reasons = [
  {
    id: 1,
    name: "Confidențialitate",
    content:
      "Discreția și confidențialitatea sunt principii esențiale în colaborarea noastră.",
    icon: FiShield,
  },
  {
    id: 2,
    name: "Abordare personalizată",
    content:
      "Fiecare client beneficiază de o abordare individuală și strategii juridice adaptate.",
    icon: LuUserRound,
  },
  {
    id: 3,
    name: "Orientare spre rezultate",
    content:
      "Mă implic activ pentru a obține cele mai bune rezultate în fiecare caz încredințat.",
    icon: HiOutlineAcademicCap,
  },
  {
    id: 4,
    name: "Experiență și competență",
    content:
      "Pregătire continuă și experiență practică în multiple domenii de drept.",
    icon: GoLaw,
  },
];
