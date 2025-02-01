import Link from "next/link";

export default function Contact() {
  return (
    <section className="mx-auto max-w-2xl py-24 px-8 text-center">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
        <span className="text-highlight mr-2">04.</span> Contact
      </h2>
      <p className="text-slate-300 mb-6">
        Interested in discussing opportunities in supply chain analytics, forecasting, or BI development? My inbox is always open.
        Feel free to reach out with any questions or just to connect.
      </p>
      <Link href="mailto:chris@tycer.dev" className="highlight-button">
        Say Hello
      </Link>
    </section>
  );
}
