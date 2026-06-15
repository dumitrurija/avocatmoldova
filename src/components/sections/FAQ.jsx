import { faqs } from "../../config/site";

const FAQ = () => {
  return (
    <section className="p-10 max-sm:p-5">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <div className="text-center">
          <span className="text-yellow-600">ÎNTREBĂRI FRECVENTE</span>
          <h2 className="font-serif text-4xl text-stone-100">
            Înainte de consultație
          </h2>
        </div>

        <div className="grid gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group rounded-md border border-stone-800 bg-stone-900 p-5"
            >
              <summary className="cursor-pointer list-none font-serif text-xl text-stone-100">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-yellow-600 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-stone-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
