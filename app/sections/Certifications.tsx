import Image from "next/image";
import Link from "next/link";

export default function Certifications() {
  return (
    <section className="mx-auto max-w-4xl py-24 px-8" id="certifications">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <span className="text-highlight mr-2">05.</span> Certifications
        <div className="ml-4 flex-grow border-t border-foreground/20" />
      </h2>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative w-20 h-20">
          <Image
            src="/lean-six-sigma.png"
            alt="Lean Six Sigma Certification"
            fill
            sizes="(max-width: 768px) 100vw, 20vw"
            className="object-contain"
          />
        </div>
        <div className="text-foreground">
          <p className="font-medium">Lean Six Sigma Yellow Belt</p>
          <Link
            href="https://etigroupusa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight underline"
          >
            ETI Group
          </Link>
        </div>
      </div>
    </section>
  );
}
