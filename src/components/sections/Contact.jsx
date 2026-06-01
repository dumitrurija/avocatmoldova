import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "d068a0c9-919c-4a44-a832-ecea5cf39bc9",
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Succesful!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Not succesful.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <input
        onChange={handleChange}
        value={form.name}
        type="text"
        placeholder="Nume"
        name="name"
        className="outline-none border border-stone-800 py-2 px-4 rounded"
      />
      <input
        onChange={handleChange}
        value={form.email}
        type="email"
        name="email"
        placeholder="Email"
        className="outline-none border border-stone-800 py-2 px-4 rounded"
      />

      <input
        onChange={handleChange}
        value={form.phone}
        type="phone"
        placeholder="Telefon"
        name="phone"
        className="outline-none border border-stone-800 py-2 px-4 rounded col-span-2"
      />

      <textarea
        onChange={handleChange}
        value={form.message}
        placeholder="Mesajul dvs."
        name="message"
        className="outline-none border border-stone-800 py-2 px-4 resize-none rounded col-span-2"
      ></textarea>

      <button
        type="submit"
        className="flex justify-center items-center gap-2 bg-[#c8943f] text-stone-100 py-4 px-8 rounded-sm font-medium text-sm col-span-2 hover:bg-yellow-600 transition cursor-pointer"
      >
        <IoIosSend className="w-5 h-5" />
        Trimite Mesaj
      </button>
    </form>
  );
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 p-10 max-sm:p-5"
    >
      {/* Contact */}
      <div className="flex flex-col gap-4 max-lg:order-2">
        <span className="text-yellow-600">CONTACT</span>

        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-yellow-600 w-5 h-5" />

          <a
            className="text-stone-100 text-sm hover:underline"
            href="tel:+37367679147"
          >
            067 679 147
          </a>
        </div>
        <div className="flex items-center gap-2">
          <IoMdMail className="text-yellow-600 w-5 h-5" />

          <a
            className="text-stone-100 text-sm hover:underline"
            href="mailto:gainanatalia78@gmail.com"
          >
            gainanatalia78@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-yellow-600 w-5 h-5" />

          <a
            className="text-stone-100 text-sm hover:underline"
            href="https://maps.app.goo.gl/X2wbXmF2aCbcPbLr9"
            target="_blank"
          >
            Strada Cuza Voda 24
          </a>
        </div>
      </div>
      {/* ------- */}

      {/* Form */}
      <div className="flex flex-col gap-4 max-lg:col-span-2 max-lg:order-1 max-sm:col-auto">
        <span className="text-yellow-600 text-center">
          TRIMITETI-MI UN MESAJ
        </span>

        <ContactForm />
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
    </section>
  );
};

export default Contact;
