import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";
import { contactTopics, lawyer } from "../../config/site";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult({ type: "", message: "" });

    try {
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
          topic: form.topic,
          message: form.message,
          subject: `Mesaj nou de pe avocatmoldova${
            form.topic ? ` - ${form.topic}` : ""
          }`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setResult({ type: "success", message: "Mesajul a fost transmis!" });
        setForm(initialForm);
      } else {
        setResult({
          type: "error",
          message:
            "Mesajul nu a putut fi trimis. Încercați din nou sau sunați direct.",
        });
      }
    } catch {
      setResult({
        type: "error",
        message:
          "A apărut o eroare de conexiune. Încercați din nou sau sunați direct.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "outline-none border border-stone-800 bg-transparent py-2 px-4 rounded placeholder:text-stone-600 focus:border-yellow-600";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <label className="flex flex-col gap-2 text-sm text-stone-300 max-sm:col-span-2">
        Nume
        <input
          onChange={handleChange}
          value={form.name}
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Ex: Ion Popescu"
          required
          className={inputClass}
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-stone-300 max-sm:col-span-2">
        Email
        <input
          onChange={handleChange}
          value={form.email}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="exemplu@email.com"
          required
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-2 text-sm text-stone-300 col-span-2">
        Telefon
        <input
          onChange={handleChange}
          value={form.phone}
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="+373 67 000 000"
          required
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-2 text-sm text-stone-300 col-span-2">
        Problema juridică
        <select
          onChange={handleChange}
          value={form.topic}
          name="topic"
          required
          className={`${inputClass} bg-[#14130f]`}
        >
          <option value="">Alegeți domeniul</option>
          {contactTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm text-stone-300 col-span-2">
        Mesajul dvs.
        <textarea
          onChange={handleChange}
          value={form.message}
          name="message"
          placeholder="Descrieți pe scurt problema juridică și ce rezultat doriți să obțineți."
          required
          rows="5"
          className={`${inputClass} resize-none`}
        ></textarea>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex justify-center items-center gap-2 bg-[#c8943f] text-stone-100 py-4 px-8 rounded-sm font-medium text-sm col-span-2 hover:bg-yellow-600 transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
      >
        <IoIosSend className="w-5 h-5" />
        {isSubmitting ? "Se trimite..." : "Trimite mesaj"}
      </button>

      {result.message && (
        <p
          className={`col-span-2 text-sm ${
            result.type === "success" ? "text-green-400" : "text-red-400"
          }`}
          role="status"
        >
          {result.message}
        </p>
      )}
    </form>
  );
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 p-10 max-sm:p-5 max-sm:pb-28"
    >
      {/* Contact */}
      <div className="flex flex-col gap-4 max-lg:order-2">
        <span className="text-yellow-600">CONTACT</span>

        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-yellow-600 w-5 h-5" />

          <a
            className="text-stone-100 text-sm hover:underline"
            href={lawyer.phoneHref}
          >
            {lawyer.phoneDisplay}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <IoMdMail className="text-yellow-600 w-5 h-5" />

          <a
            className="text-stone-100 text-sm hover:underline"
            href={lawyer.emailHref}
          >
            {lawyer.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-yellow-600 w-5 h-5" />

          <a
            className="text-stone-100 text-sm hover:underline"
            href={lawyer.mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            {lawyer.address}
          </a>
        </div>
      </div>
      {/* ------- */}

      {/* Form */}
      <div className="flex flex-col gap-4 max-lg:col-span-2 max-lg:order-1 max-sm:col-auto">
        <span className="text-yellow-600 text-center">
          TRIMITEȚI-MI UN MESAJ
        </span>
        <div className="rounded-md border border-stone-800 bg-stone-900 p-4 text-center">
          <p className="text-sm text-stone-100">
            Răspund de obicei în aceeași zi lucrătoare.
          </p>
          <p className="mt-1 text-xs text-stone-500">
            {lawyer.googleRating}/5 pe Google · {lawyer.reviewCount} recenzii ·
            consultație cu programare
          </p>
        </div>

        <ContactForm />
      </div>
      {/* ---- */}

      {/* Program */}
      <div className="flex flex-col gap-4 text-right max-lg:order-3 max-sm:text-left">
        <div className="flex flex-col gap-4">
          <span className="text-yellow-600">PROGRAM</span>

          <p className="text-stone-100 text-sm">Luni - Vineri: 09:00 - 18:00</p>
          <p className="text-stone-100 text-sm">
            Sâmbătă - Duminică: 10:00 - 16:00
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-yellow-600">Consultații</span>

          <p className="text-stone-100 text-sm">
            Consultațiile se oferă în baza unei programări prealabile.
          </p>
        </div>
      </div>
      {/* ------- */}
    </section>
  );
};

export default Contact;
