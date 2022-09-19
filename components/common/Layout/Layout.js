import cslx from "clsx";

import { useRouter } from "next/router";

export function Layout({ children }) {
  return (
    <div className="w-full min-h-screen">
      <div className="relative max-w-screen-xl px-1 mx-auto antialiased font-body">
        <Header />
        <main>{children}</main>
        <FixedWhatsApp fixed={false} />
        <Footer />
      </div>
    </div>
  );
}

const Header = () => {
  const { pathname } = useRouter();

  const isRoot = pathname === "/";

  return (
    <header className={"full-bleed-dark-grey p-2"}>
      <div className="flex items-center justify-around">
        <a href="#casos_julgados">
          <Logo />
        </a>
        <Adress />
        <FixedWhatsApp fixed />
      </div>
      {isRoot &&
        <nav className="flex items-center justify-around mt-4">
          <a href="#quem_somos">
            <p className={"text-xs sm:text-lg md:text-xl lg:text-2xl"}>Quem Somos</p>
          </a>
          <a href="#casos_julgados">
            <p className={"text-xs sm:text-lg md:text-xl lg:text-2xl"}>Casos Julgados</p>
          </a>
          <a href="#na_midia">
            <p className={"text-xs sm:text-lg md:text-xl lg:text-2xl"}>Na mídia</p>
          </a>
          <a className={"text-xs sm:hidden"} href="#consultoria_e_planejamento_previdenciario">
            <p className={"text-xs sm:hidden"}>Planejamento</p>
          </a>
          <a href="#consultoria_e_planejamento_previdenciario">
            <p className={"hidden sm:block"}>Planejamento Previdenciário</p>
          </a>
        </nav>
      }
    </header>
  );
};

const Adress = () => (
  <div className="mt-2 text-xs sm:text-lg md:text-2xl ">
    <a href="tel:2130234081">
      <p className={"text-xs sm:text-lg md:text-xl lg:text-2xl"}>Tel: (21) 3023-4081</p>
    </a>

    <a href="mailto:diogo@medeirosadv.adv.br">
      <p className={"text-xs sm:text-lg md:text-xl lg:text-2xl"}>contato@medeirosadv.adv.br</p>
    </a>
  </div>
);

const Logo = () => (
  <div className={"w-[110px] h-[40px] sm:w-[221px] sm:h-[81px] md:h-[180px] md:w-[340px]"}>
    <img className={"object-contain w-full h-full"} src="/logo2.png" />
  </div>
);

const FixedWhatsApp = ({ fixed }) => {
  return (
    <div className={cslx("mt-2", { "fixed bottom-1 right-3": !fixed })}>
      <a
        href="https://api.whatsapp.com/send?phone=+5521992552687&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços"
        target="_blank"
      >
        <button>
          <div className={cslx("sm:w-20 sm:h-20 lg:w-24 lg:h-24", { "w-14 h-14": !fixed })}>
            <img className={"object-contain w-full h-full"} src="/logo_wpp.svg" />
          </div>
        </button>
      </a>
    </div>
  );
};

const Footer = () => (
  <footer>
    <div className="full-bleed-metal flex items-center justify-center h-40 p-5">
      <div className="text-white text-center text-sm font-light sm:text-lg">
        <p>Tel: 021 3023-4081 | Email: contato@medeirosadv.adv.br</p>

        <p>Endereço: Av. Rio Branco nº26, Sobreloja, Centro</p>

        <p>Rio de Janeiro - RJ</p>
      </div>
    </div>
  </footer>
);
