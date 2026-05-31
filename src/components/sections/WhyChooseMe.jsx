import { FiShield } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi"; // or target icon below
import { GoLaw } from "react-icons/go";

const data = [
  {
    id: 1,
    name: "Confidentialitate",
    content:
      "Discreţia şi confidențialitatea sunt principile esențiale in colaborarea noastră.",
    icon: FiShield,
  },
  {
    id: 2,
    name: "Abordare Personalizata",
    content:
      "Fiecare client beneficiază de o abordare individuală şi strategii juridice adaptate.",
    icon: LuUserRound,
  },
  {
    id: 3,
    name: "Orientare spre rezultate",
    content:
      "Ma implic activ pentru a obține cele mai bune rezultate in fiecare caz incredintat.",
    icon: HiOutlineAcademicCap,
  },
  {
    id: 4,
    name: "Experienta si Competenta",
    content:
      "Pregătire continuă şi experiență practică în multiple domeniil de drept.",
    icon: GoLaw,
  },
];

const WhyChooseMe = () => {
  return (
    <div className="grid grid-cols-4 gap-5 text-center pt-0 p-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:p-5">
      {data.map((el) => {
        const Icon = el.icon;

        return (
          <div key={el.id} className="flex flex-col items-center gap-2">
            <Icon className="w-10 h-10 text-yellow-600" />
            <h2 className="font-serif text-xl text-stone-100">{el.name}</h2>
            <p className="text-gray-300 max-md:hidden">{el.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WhyChooseMe;
