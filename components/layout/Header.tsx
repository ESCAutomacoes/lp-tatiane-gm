import Link from "next/link";
import { siteConfig } from "@/config/site";
import Container from "./Container";
import { buttonClasses } from "@/components/ui/buttonStyles";

const navItems = [
  { label: "Inscrição", href: "#inscricao" },
  { label: "Chega de Caos", href: "#chega-de-caos" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Bônus", href: "#bonus" },
  { label: "Mentora", href: "#mentora" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#336569]">
      <Container className="flex flex-wrap items-center gap-4 py-4">
        <div className="flex items-center">
          <div className="rounded-full border border-white/40 bg-[#bf9579] px-5 py-2 text-sm font-display uppercase tracking-[0.4em] text-white">
            Tatiane Joslin
          </div>
        </div>
        <nav className="ml-auto hidden items-center gap-6 text-sm font-semibold text-white lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#inscricao"
          className={buttonClasses("primary", "sm")}
          aria-label={siteConfig.ctaText}
        >
          {siteConfig.ctaText}
        </Link>
      </Container>
    </header>
  );
};

export default Header;
