import { reasons } from "../../config/site";

const WhyChooseMe = () => {
  return (
    <div className="grid grid-cols-4 gap-5 text-center pt-0 p-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:p-5">
      {reasons.map((el) => {
        const Icon = el.icon;

        return (
          <div key={el.id} className="flex flex-col items-center gap-2">
            <Icon className="w-10 h-10 text-yellow-600" />
            <h2 className="font-serif text-xl text-stone-300">{el.name}</h2>
            <p className="text-stone-500 max-md:hidden">{el.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WhyChooseMe;
