import { useState } from "react";
import clsx from "clsx";
import { Button } from "@components/layout";

export const NaMidia = () => {
  const [hidden, setHidden] = useState(true);
  const handleClick = () => {
    setHidden(!hidden);
  };
  return (
    <div id="na_midia" className="bg-[#f4f4f4] p-5">
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

          <p className="italic font-thin">
            Entrevistas concedidas para a Rádio Tupi em 12/05/2016 e 13/05/2016.
          </p>
          {/* <iframe
            className="w-[280px] h-auto sm:w-[560px] sm:h-[315px]"
            src="https://www.youtube.com/embed/6xTxSsP5pFg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <iframe
            className="w-[280px] h-auto sm:w-[560px] sm:h-[315px]"
            src="https://www.youtube.com/embed/ryNODHbXu8A"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <br />
        </div>

        <div className={clsx("flex flex-col items-center", { hidden: hidden })}>
          <a href="https://odia.ig.com.br/economia/2016-10-20/coluna-do-servidor-aumenta-concessao-de-aposentadorias.html">
            <p className="italic">
              Coluna do Servidor: Aumenta concessão de aposentadorias - Jornal O Dia de 20/10/2016
            </p>
          </a>

          <br />

          <p className="italic font-thin">
            Entrevistas concedidas para a Rádio Tupi em 12/05/2016 e 13/05/2016.
          </p>
          {/* <iframe
            className="w-[280px] h-auto sm:w-[560px] sm:h-[315px]"
            src="https://www.youtube.com/embed/6xTxSsP5pFg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
          <iframe
            className="w-[280px] h-auto sm:w-[560px] sm:h-[315px]"
            src="https://www.youtube.com/embed/ryNODHbXu8A"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <br />
        </div>

        <br />
        <Button text={hidden ? "Veja mais" : "Veja menos"} size={8} handleClick={handleClick} ligth />
        <br />
        <br />
      </div>
    </div>
  );
};
