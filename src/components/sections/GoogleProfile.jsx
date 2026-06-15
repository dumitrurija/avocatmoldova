import { useState } from "react";
import { FaCopy, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaMapLocationDot, FaStar } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { lawyer } from "../../config/site";

const GoogleProfile = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(lawyer.address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="grid grid-cols-[1.1fr_0.9fr] gap-6 p-10 pt-0 max-lg:grid-cols-1 max-sm:p-5 max-sm:pt-0">
      <div className="border border-stone-800 bg-stone-950 p-6 rounded-md flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4 max-sm:flex-col">
          <div className="flex flex-col gap-2">
            <span className="text-yellow-600">PROFIL GOOGLE BUSINESS</span>
            <h2 className="text-stone-100 text-4xl font-serif">
              {lawyer.businessName}
            </h2>
            <p className="text-stone-400">
              {lawyer.category} verificat local, cu birou în sectorul Botanica.
            </p>
          </div>

          <div className="flex flex-col items-end max-sm:items-start">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-serif text-stone-100">
                {lawyer.googleRating}
              </span>
              <div className="flex text-yellow-600">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
            </div>
            <p className="text-sm text-stone-500">
              {lawyer.reviewCount} recenzii Google
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
          <a
            href={lawyer.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-[#c8943f] text-stone-100 py-4 px-5 rounded-sm font-medium text-sm hover:bg-yellow-600 transition"
          >
            <FaMapLocationDot className="w-4 h-4" />
            Direcții
          </a>
          <a
            href={lawyer.phoneHref}
            className="flex items-center justify-center gap-2 border border-stone-700 text-stone-100 py-4 px-5 rounded-sm font-medium text-sm hover:border-yellow-600 transition"
          >
            <FaPhoneAlt className="w-4 h-4 text-yellow-600" />
            Sună acum
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 border border-stone-700 text-stone-100 py-4 px-5 rounded-sm font-medium text-sm hover:border-yellow-600 transition"
          >
            <IoShieldCheckmarkOutline className="w-5 h-5 text-yellow-600" />
            Programare
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm max-md:grid-cols-1">
          <div className="flex gap-3 rounded-md border border-stone-800 p-4">
            <FaLocationDot className="mt-1 text-yellow-600" />
            <div className="flex-1">
              <p className="text-stone-100">{lawyer.address}</p>
              <p className="text-stone-500">{lawyer.plusCode}</p>
              <button
                type="button"
                onClick={handleCopyAddress}
                className="mt-3 flex items-center gap-2 text-xs text-yellow-600 hover:text-yellow-500"
              >
                <FaCopy className="h-3 w-3" />
                {copied ? "Adresă copiată" : "Copiază adresa"}
              </button>
            </div>
          </div>

          <div className="rounded-md border border-stone-800 p-4">
            <p className="text-stone-100">{lawyer.ownership}</p>
            <p className="text-stone-500">
              Consultanță juridică pentru persoane fizice și companii.
            </p>
          </div>
        </div>
      </div>

      <aside className="border border-stone-800 bg-stone-900 p-6 rounded-md">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-serif text-2xl text-stone-100">Program</h2>
          <span className="text-sm text-yellow-600">Cu programare</span>
        </div>

        <div className="mt-5 flex flex-col divide-y divide-stone-800">
          {lawyer.hours.map((item) => (
            <div key={item.day} className="flex justify-between gap-4 py-3">
              <span className="text-stone-300">{item.day}</span>
              <span className="text-stone-500">{item.time}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default GoogleProfile;
