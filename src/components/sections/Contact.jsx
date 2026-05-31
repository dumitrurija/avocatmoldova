import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div
      id="contact"
      className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 p-10 max-sm:p-5"
    >
      {/* Contact */}
      <div className="flex flex-col gap-4 max-lg:order-2">
        <span className="text-yellow-600">CONTACT</span>

        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-yellow-600 w-5 h-5" />
          <p className="text-stone-100 text-sm">067 679 147</p>
        </div>
        <div className="flex items-center gap-2">
          <IoMdMail className="text-yellow-600 w-5 h-5" />
          <p className="text-stone-100 text-sm">natalia.gaina@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-yellow-600 w-5 h-5" />
          <p className="text-stone-100 text-sm">Strada Cuza Voda 24</p>
        </div>
      </div>
      {/* ------- */}

      {/* Form */}
      <div className="flex flex-col gap-4 max-lg:col-span-2 max-lg:order-1 max-sm:col-auto">
        <span className="text-yellow-600 text-center">
          TRIMITETI-MI UN MESAJ
        </span>

        <form action="" className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nume complet"
            className="outline-none border border-stone-800 py-2 px-4 rounded"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="outline-none border border-stone-800 py-2 px-4 rounded"
          />

          <input
            type="phone"
            placeholder="Telefon"
            className="outline-none border border-stone-800 py-2 px-4 rounded col-span-2"
          />

          <textarea
            name=""
            id=""
            placeholder="Mesajul dvs."
            className="outline-none border border-stone-800 py-2 px-4 resize-none rounded col-span-2"
          ></textarea>

          <button
            type="submit"
            className="flex justify-center items-center gap-2 bg-[#c8943f] text-stone-100 py-4 px-8 rounded-sm font-medium text-sm col-span-2"
          >
            <IoIosSend className="w-5 h-5" />
            Trimite Mesaj
          </button>
        </form>
      </div>
      {/* ---- */}

      {/* Program */}
      <div className="flex flex-col gap-4 text-right max-lg:order-3 max-sm:text-left">
        <div className="flex flex-col gap-4">
          <span className="text-yellow-600">PROGRAM</span>

          <p className="text-stone-100 text-sm">Luni - Vineri: 09:00 - 18:00</p>
          <p className="text-stone-100 text-sm">
            Sambata - Duminica: 10:00 - 16:00
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-yellow-600">Consultatii</span>

          <p className="text-stone-100 text-sm">
            Consultatiile se ofera in baza unei programari prealabile .
          </p>
        </div>
      </div>
      {/* ------- */}
    </div>
  );
};

export default Contact;
