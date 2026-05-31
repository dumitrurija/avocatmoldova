import { RiGovernmentLine } from "react-icons/ri";
import { IoMdPeople } from "react-icons/io";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaFileSignature } from "react-icons/fa";
import { TbGavel } from "react-icons/tb";

const data = [
  {
    id: 1,
    name: "Drept Civil",
    icon: RiGovernmentLine,
    content:
      "Asistenţă şi reprezentare in litigii civile, contracte, obligații şi răspundere civila.",
  },
  {
    id: 2,
    name: "Dreptul Familiei",
    icon: IoMdPeople,
    content:
      "Divort, partaj, pensie de întreţinere, Incredinţarea copilor şi alte cauze de dreptul familiei.",
  },
  {
    id: 3,
    name: "Drept Comercial",
    icon: IoBriefcaseOutline,
    content:
      "Consultanță pentru afaceri, contracte comerciale, societăţi şi reprezentare in litigii.",
  },
  {
    id: 4,
    name: "Moșteniri",
    icon: FaFileSignature,
    content:
      "Deschiderea succesiunii, partaj succesoral, redactarea actelor testamentare.",
  },
  {
    id: 5,
    name: "Litigii & Reprezentare",
    icon: TbGavel,
    content:
      "Reprezentare in instantele de judecată şi în fața altor autorități publice.",
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center gap-8 p-10 max-sm:p-5"
    >
      {/* Title */}
      <div className="text-center flex flex-col gap-4">
        <span className="text-yellow-600">DOMENII DE PRACTICĂ</span>
        <h1 className="text-stone-100 text-4xl font-serif">
          Servicii Juridice
        </h1>
      </div>
      {/* ----- */}

      {/* Services */}
      <div className="grid grid-cols-5 gap-5 max-lg:grid-cols-3 max-sm:grid-cols-1">
        {data.map((el) => {
          const Icon = el.icon;

          return (
            <div
              key={el.id}
              className="bg-stone-900 p-5 flex flex-col gap-6 items-center text-center border border-stone-800 rounded-md hover:bg-stone-800 transition"
            >
              <Icon className="text-yellow-600 w-12 h-12" />
              <h2 className="font-serif text-xl">{el.name}</h2>
              <p className="text-stone-500 text-sm">{el.content}</p>
              <hr className="w-1/3 text-yellow-600" />
            </div>
          );
        })}
      </div>
      {/* ------- */}
    </div>
  );
};

export default Services;
