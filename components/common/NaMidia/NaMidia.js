import { useState } from "react";
import clsx from "clsx";
import { Button } from "@components/layout";

export const NaMidia = () => {
  const [hidden, setHidden] = useState(true);
  const handleClick = () => {
    setHidden(!hidden);
  };
  return (
    <section id="na_midia" className="bg-[#f4f4f4] p-5">
      <div className="text-black text-center text-sm sm:text-lg">
        <h1>Participações na Mídia</h1>
        <br />

        <div className="flex flex-col items-center">
          <p>
            Fruto do destaque obtido em sua atuação, o escritório Medeiros Advogados é constantemente
            convidado a colaborar com a imprensa em pautas atinentes ao Direito Previdenciário.
          </p>

          <br />

          <p className="font-bold">Confira abaixo algumas das nossas mais recentes participações::</p>

          <br />

          <a href="https://odia.ig.com.br/economia/2016-10-20/coluna-do-servidor-aumenta-concessao-de-aposentadorias.html">
            <p className="italic">
              Coluna do Servidor: Aumenta concessão de aposentadorias - Jornal O Dia de 20/10/2016
            </p>
          </a>

          <br />

          <a href="https://odia.ig.com.br/noticia/economia/2013-10-11/acoes-contra-o-inss-vao-ter-indice-de-correcao-maior.html">
            <p className="italic">Reportagem do Jornal O DIA de 11/10/2013:</p>

            <br />

            <div className="w-[280px] sm:w-[560px] sm:h-[315px] sm:mb-14">
              <img src="/reportagem.jpg" alt="capa do jortnal O DIA do dia 11/10/2013 " />
            </div>
          </a>

          <br />

          <p className="italic font-thin">
            Entrevistas concedidas para a Rádio Tupi em 12/05/2016 e 13/05/2016.
          </p>

          <br />

          <iframe
            className="w-[280px] h-auto sm:w-[560px] sm:h-[315px]"
            src="https://www.youtube.com/embed/6xTxSsP5pFg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
        </div>

        <div className={clsx("flex flex-col items-center", { hidden: hidden })}>
          <iframe
            className="w-[280px] h-auto sm:w-[560px] sm:h-[315px]"
            src="https://www.youtube.com/embed/ryNODHbXu8A"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <a href="https://odia.ig.com.br/economia/2016-10-20/coluna-do-servidor-aumenta-concessao-de-aposentadorias.html">
            <p className="italic">
              Coluna do Servidor: Aumenta concessão de aposentadorias - Jornal O Dia de 20/10/2016
            </p>
          </a>
          <br />

          <p>
            – Revisão de aposentadoria para quem teve o benefício concedido limitado ao teto (concessão até
            dezembro de 2003) – Jornal RJ Acontece – Rede Bandeirantes – 21/10/2010:
          </p>

          <iframe
            className="w-[280px] h-auto sm:w-[560px] sm:h-[315px]"
            src="https://www.youtube.com/embed/C4TMT_2kGBI"
            title="Reportagem band inss"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <br />
        </div>

        <br />
        <Button text={hidden ? "Veja mais" : "Veja menos"} size={8} handleClick={handleClick} ligth />
        <br />
      </div>
    </section>
  );
};
