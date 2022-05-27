import { useState, useEffect } from "react";
import { WhatsApp } from "@components/layout";
import clsx from "clsx";

export function Layout({ children }) {
  return (
    <div className="w-full min-h-screen dark:bg-gray-700 dark:text-white">
      <div className="max-w-screen-lg px-1 mx-auto antialiased font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <header className={"flex bg-[#f4f4f4] items-center justify-around h-20 px-1 sm:h-40 lg:h-60"}>
      <Logo />
      <Adress />
      <WhatsApp showText />
    </header>
  );
};

const Adress = () => (
  <div className="mt-2 text-xs sm:text-lg md:text-2xl ">
    <p className={""}>Tel: (21) 3023-4081</p>

    <a
      href="https://api.whatsapp.com/send?phone=+5521969759720&text=I'm%20interested%20in%20your%20services"
      target="_blank"
    >
      <p className={""}>Cel: (21) 99999-9999</p>
    </a>
    <p className={"hidden sm:block"}>contato@medeirosadv.adv.br</p>
  </div>
);

const Logo = () => (
  <div className={"w-[110px] h-[40px] sm:w-[221px] sm:h-[81px] md:h-[180px] md:w-[340px]"}>
    <img className={"object-contain w-full h-full"} src="/logo2.png" />
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
