import { MenuHeader } from "@components/layout";

import { useRouter } from "next/router";

export function Layout({ children }) {
  return (
    <div className="w-full min-h-screen">
      <div className=" relative max-w-screen-lg px-1 mx-auto antialiased font-body">
        <Header />
        <main>{children}</main>
        <FixedWhatsApp />
        <Footer />
      </div>
    </div>
  );
}

const Header = () => {
  const { pathname } = useRouter();

  const isRoot = pathname === "/";

  return (
    <header className={"flex bg-[#f4f4f4] items-center justify-around h-20 px-1 sm:h-40 lg:h-60"}>
      <a href="#casos_julgados">
        <Logo />
      </a>
      <Adress />
      {isRoot ? <MenuHeader /> : null}
    </header>
  );
};

const Adress = () => (
  <div className="mt-2 text-xs sm:text-lg md:text-2xl ">
    <a href="tel:2130234081">
      <p className={""}>Tel: (21) 3023-4081</p>
    </a>

    <a
      href="https://api.whatsapp.com/send?phone=+5521969759720&text=I'm%20interested%20in%20your%20services"
      target="_blank"
    >
      <p className={""}>Cel: (21) 99999-9999</p>
    </a>
    <a href="mailto:diogo@medeirosadv.adv.br">
      <p className={"hidden sm:block"}>contato@medeirosadv.adv.br</p>
    </a>
  </div>
);

const Logo = () => (
  <div className={"w-[110px] h-[40px] sm:w-[221px] sm:h-[81px] md:h-[180px] md:w-[340px]"}>
    <img className={"object-contain w-full h-full"} src="/logo2.png" />
  </div>
);

const FixedWhatsApp = () => (
  <div className="fixed bottom-1 right-3">
    <a
      href="https://api.whatsapp.com/send?phone=+5521969759720&text=I'm%20interested%20in%20your%20services"
      target="_blank"
    >
      <button>
        <div className={"w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"}>
          <img className={"object-contain w-full h-full"} src="/logo_wpp.svg" />
        </div>
      </button>
    </a>
  </div>
);

const Footer = () => (
  <footer>
    <div className="bg-metal flex items-center justify-center h-40 p-5">
      <div className="text-white text-center text-sm font-light sm:text-lg">
        <p>Tel: 021 3023-4081 | Email: contato@medeirosadv.adv.br</p>

        <p>Endereço: Av. Rio Branco nº25, Grupo 905, Centro</p>

        <p>Rio de Janeiro - RJ</p>
      </div>
    </div>
  </footer>
);
