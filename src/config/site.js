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
  businessName: "Avocat Moldova, Chișinău",
  phoneDisplay: "+373 67 679 147",
  phoneHref: "tel:+37367679147",
  whatsappHref: "https://wa.me/37367679147",
  viberHref: "viber://chat?number=%2B37367679147",
  email: "gainanatalia78@gmail.com",
  emailHref: "mailto:gainanatalia78@gmail.com",
  address: "Strada Cuza Vodă 24",
  mapsHref: "https://maps.app.goo.gl/X2wbXmF2aCbcPbLr9",
  plusCode: "Chișinău, Moldova",
  googleRating: "5.0",
  reviewCount: 5,
  category: "Avocat",
  ownership: "Afacere deținută de femei",
  hours: [
    { day: "Luni", time: "09:00 - 18:00" },
    { day: "Marți", time: "10:00 - 18:00" },
    { day: "Miercuri", time: "09:00 - 18:00" },
    { day: "Joi", time: "09:00 - 18:00" },
    { day: "Vineri", time: "09:00 - 18:00" },
    { day: "Sâmbătă", time: "10:00 - 16:00" },
    { day: "Duminică", time: "10:00 - 16:00" },
  ],
};

export const contactTopics = [
  "Drept civil",
  "Dreptul familiei",
  "Drept comercial",
  "Moșteniri",
  "Litigii și reprezentare",
  "Altă problemă juridică",
];

export const trustHighlights = [
  "Consultații cu programare",
  "Confidențialitate garantată",
  "5.0 rating Google",
  "Birou în Chișinău",
];

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

export const faqs = [
  {
    id: 1,
    question: "Cât costă o consultație juridică?",
    answer:
      "Costul depinde de complexitatea problemei și de documentele care trebuie analizate. Pentru o estimare corectă, transmiteți pe scurt situația și veți primi detalii înainte de programare.",
  },
  {
    id: 2,
    question: "Pot primi consultație online?",
    answer:
      "Da. Consultațiile pot fi discutate telefonic sau online, iar documentele pot fi transmise în format electronic înainte de discuție.",
  },
  {
    id: 3,
    question: "Ce acte trebuie să pregătesc?",
    answer:
      "Pregătiți actele de identitate, contractele, hotărârile, corespondența sau orice document relevant pentru situația juridică. Dacă nu sunteți sigur, puteți întreba înainte de consultație.",
  },
  {
    id: 4,
    question: "Reprezentați clienți în instanță?",
    answer:
      "Da. Serviciile includ consultanță, pregătirea actelor și reprezentare în fața instanțelor de judecată sau a altor autorități publice.",
  },
  {
    id: 5,
    question: "Cum pot programa o consultație?",
    answer:
      "Puteți suna direct, puteți scrie pe WhatsApp sau Viber ori puteți completa formularul de contact. Pentru urgențe, apelul telefonic este cea mai rapidă opțiune.",
  },
];
