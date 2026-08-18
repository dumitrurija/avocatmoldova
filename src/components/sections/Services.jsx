import { services } from "../../config/site";
import { useLanguage } from "../../i18n/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="flex flex-col items-center gap-8 p-10 max-sm:p-5"
    >
      {/* Title */}
      <div className="text-center flex flex-col gap-4">
        <span className="text-yellow-600">{t.services.eyebrow}</span>
        <h1 className="text-stone-100 text-4xl font-serif">
          {t.services.title}
        </h1>
      </div>
      {/* ----- */}

      {/* Services */}
      <div className="grid grid-cols-5 gap-5 max-lg:grid-cols-3 max-sm:grid-cols-1">
        {services.map((el, index) => {
          const Icon = el.icon;
          const service = t.services.items[index];

          return (
            <div
              key={el.id}
              className="bg-stone-900 p-5 flex flex-col gap-6 items-center text-center border border-stone-800 rounded-md hover:bg-stone-800 transition"
            >
              <Icon className="text-yellow-600 w-12 h-12" />
              <h2 className="font-serif text-xl">{service.name}</h2>
              <p className="text-stone-300 text-sm leading-relaxed">{service.content}</p>
              <hr className="w-1/3 text-yellow-600" />
            </div>
          );
        })}
      </div>
      {/* ------- */}
    </section>
  );
};

export default Services;
