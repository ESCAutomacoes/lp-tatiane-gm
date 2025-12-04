import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-page text-moss">
      <Container className="flex flex-col gap-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg">{siteConfig.name}</p>
          <p className="max-w-xl text-sm text-moss/80">
            {siteConfig.description}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.4em] text-moss/60">
            {siteConfig.eventDate}
          </p>
        </div>
        <div className="flex flex-col gap-3 text-right text-moss/80">
          <p className="font-semibold uppercase tracking-widest text-xs">
            Redes
          </p>
          <div className="flex items-center justify-end gap-4">
            {siteConfig.mentor.socials.map((social) => (
              <Link
                key={social.label}
                href={social.url}
                className="rounded-full border border-highlight bg-highlight px-3 py-1 text-xs uppercase tracking-wider text-white transition hover:bg-highlight/80"
              >
                {social.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-moss/60">
            © {new Date().getFullYear()} ESC Lançamentos Digitais · Todos os
            direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
