import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useLanguage } from "../../i18n/useLanguage";

const data = [
  {
    id: 1,
    name: "Maria Burcovschi",
    pfp: "https://lh3.googleusercontent.com/a/ACg8ocKtTPpJJLNIgoGU6swztuVLL62IitLpQJcuPtDUZLPtPz7MyQ=w144-h144-p-rp-mo-br100",
    content:
      "Am avut o experiență foarte plăcută cu această doamnă avocat. Este o profesionistă foarte bine pregătită și extrem de atentă. O persoană ce dă dovadă de seriozitate, amabilitate și respect.",
    stars: 5,
  },
  {
    id: 2,
    name: "Lazarenco Angela",
    pfp: "https://lh3.googleusercontent.com/a/ACg8ocI2W1UEpzi_McGwOc6ZpKzI4AWoWupfA8UVAkIuE_gG_Ycjcw=w144-h144-p-rp-mo-br100",
    content:
      "Servicii profesionale și seriozitate din partea doamnei avocat. Mulțumesc și recomand.",
    stars: 5,
  },
  {
    id: 3,
    name: "Cristian Bolocan",
    pfp: "https://lh3.googleusercontent.com/a/ACg8ocLAptL4t-JdhQhfsP6zoGSYc5NpM4tm2xrGnxJWGas8rsNJ0Q=w144-h144-p-rp-mo-br100",
    content: "Prestează servicii de calitate, apelați cu încredere.",
    stars: 5,
  },
  {
    id: 4,
    name: "Maria Maria",
    pfp: "https://lh3.googleusercontent.com/a/ACg8ocLI6J4w4e-_yH06lbQ-2pNNVrPZuMbBuYsdjIRlo5Lf57R9UA=w144-h144-p-rp-mo-br100",
    content: "Sunt foarte mulțumită pentru rezultatul obținut.",
    stars: 5,
  },
  {
    id: 5,
    name: "Tatiana Gaina",
    pfp: "https://lh3.googleusercontent.com/a/ACg8ocIPs9m9mXG2H9tn4gSoGWKcvtOGcV3gJ9jp2C5Bzr_oMEgmlA=w144-h144-p-rp-mo-br100",
    content:
      "Persoană excepțională, care a dat dovadă de profesionalism și abilitate de neegalat.",
    stars: 5,
  },
];

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section
      id="testimonials"
      className="flex flex-col items-center gap-8 p-10 max-sm:p-5"
    >
      {/* Titlu */}
      <div className="text-center">
        <span className="text-yellow-600">{t.testimonials.eyebrow}</span>
        <h1 className="text-stone-100 text-4xl font-serif">
          {t.testimonials.title}
        </h1>
      </div>
      {/* ----- */}

      {/* Reviews */}
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {data.map((el, index) => (
          <div
            key={el.id}
            className="flex flex-col justify-between gap-4 p-5 bg-stone-900 border border-stone-800 rounded-md"
          >
            <div className="flex flex-col gap-4">
              <FaQuoteLeft className="w-10 h-10 text-yellow-600" />

              <p className="text-stone-100">
                {t.testimonials.items[index]}
              </p>
            </div>

            <div className="flex justify-between max-lg:items-center">
              <div className="text-gray-300 flex items-center gap-1">
                <img
                  src={el.pfp}
                  className="h-5 w-5"
                  referrerPolicy="no-referrer"
                  alt={`${t.testimonials.imageAlt} ${el.name}`}
                />
                {el.name}
              </div>

              <div className="flex">
                {[...Array(el.stars)].map((star, i) => (
                  <FaStar key={i} className="text-yellow-600" />
                ))}
              </div>
            </div>
          </div>
        ))}
        <div></div>
      </div>
      {/* ------- */}
    </section>
  );
};

export default Testimonials;
