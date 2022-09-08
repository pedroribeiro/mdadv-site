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

          <a
            href="https://odia.ig.com.br/economia/2016-10-20/coluna-do-servidor-aumenta-concessao-de-aposentadorias.html"
            target="_blank"
          >
            <p className="italic">
              Coluna do Servidor: Aumenta concessão de aposentadorias - Jornal O Dia de 20/10/2016
            </p>
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

          <iframe
            className="w-[280px] h-auto sm:w-[560px] sm:h-[315px]"
            src="https://www.youtube.com/embed/ryNODHbXu8A"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <br />
        </div>

        <div className={clsx("flex flex-col items-center", { hidden: hidden })}>
          <a href="http://medeirosadv.adv.br/wp-content/uploads/2015/12/postalis.pdf" target="_blank">
            <p className="italic">– Por dentro da Previdência no mundo – Universo Postalis – 10/11/2015</p>

            <br />

            {/* <div className="w-[280px] sm:w-[560px] sm:h-[315px] sm:mb-14"> */}
            <img src="/universo.png" alt="capa do site universo postalis do dia 10/11/2015" />
            {/* </div> */}
          </a>

          <br />

          <a
            href="http://epocanegocios.globo.com/Inspiracao/Vida/noticia/2015/06/entenda-novas-regras-para-se-aposentar-pelo-inss.html"
            target="_blank"
          >
            <p>
              Entenda as novas regras para se aposentar pelo INSS&nbsp;– Revista Época Negócios – 18/06/2015
            </p>
          </a>

          <br />

          <a
            href="http://globotv.globo.com/globo-news/jornal-das-dez/v/aposentados-que-voltam-a-trabalhar-pedem-revisao-de-beneficios-na-justica/3291600/"
            target="_blank"
          >
            <p>
              Aposentados que voltam a trabalhar pedem revisão de benefícios na Justiça – Reportagem do jornal
              das 22 hrs. da Globonews – 18/04/2014
            </p>
          </a>

          <br />

          <a
            href="http://mobile.opovo.com.br/app/destaque/index/2015/01/24/4935036/levy-diz-que-modelo-e-ultrapassado.shtml"
            target="_blank"
          >
            <p>Levy diz que modelo é ultrapassado – O Povo online – 24/01/2015.</p>
          </a>

          <br />

          <a
            href="https://odia.ig.com.br/noticia/economia/2013-10-11/acoes-contra-o-inss-vao-ter-indice-de-correcao-maior.html"
            target="_blank"
          >
            <p className="italic">Reportagem do Jornal O DIA de 11/10/2013:</p>

            <br />

            <div className="w-[280px] sm:w-[560px] sm:h-[315px] sm:mb-14">
              <img src="/reportagem.jpg" alt="capa do jortnal O DIA do dia 11/10/2013 " />
            </div>
          </a>

          <br />

          <p>
            Programa Catedral Maturidade (Radio Catedral FM) sobre Direito Previdenciário e desaposentação
            (21/01/2013).
          </p>
          <iframe
            className="w-[280px] h-auto sm:w-[560px] sm:h-[315px]"
            src="https://www.youtube.com/embed/A6sp8jWwwBQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <br />

          <a
            href="http://noticias.bol.uol.com.br/ultimas-noticias/brasil/2012/09/17/homem-grava-ofensa-de-funcionaria-do-inss-de-ubatuba-sp-durante-atendimento-video-circula-na-web.htm"
            target="_blank"
          >
            <p>
              Homem grava ofensa de funcionária do INSS de Ubatuba (SP) durante atendimento; Reportagem do UOL
              de 17/09/2012.
            </p>
          </a>

          <br />

          <p>
            Votação do STJ deve por fim à polêmica sobre “desaposentadoria”. Reportagem do Jornal O Globo de
            18/07/2012 com nossa participação:
          </p>
          <br />
          <img
            loading="lazy"
            class="aligncenter size-full wp-image-325"
            title="reportagem-oglobo"
            src="reportagem-oglobo.jpg"
            alt=""
            width="286"
            height="485"
          ></img>

          <br />

          <p>Desaposentadoria – Jornal Repórter Brasil – TV Brasil – 26/07/2011:</p>
          <br />
          <iframe
            className="w-[280px] h-auto sm:w-[560px] sm:h-[315px]"
            src="https://www.youtube.com/embed/LVyGA2eUgGw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <br />

          <p>
            Revisão de aposentadoria para quem teve o benefício concedido limitado ao teto (concessão até
            dezembro de 2003) – Jornal RJ Acontece – Rede Bandeirantes – 21/10/2010:
          </p>
          <br />
          <iframe
            className="w-[280px] h-auto sm:w-[560px] sm:h-[315px]"
            src="https://www.youtube.com/embed/C4TMT_2kGBI"
            title="Reportagem band inss"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <br />

          <a
            href="http://medeirosadv.adv.br/2010/08/26/previdencia-precisa-de-providencias-reportagem-do-jornal-o-estado-com-nossa-participacao/"
            target="_blank"
          >
            <p>Previdência precisa de Providências – Reportagem do Jornal O Estado com nossa participação.</p>
          </a>

        </div>

        <br />
        <Button text={hidden ? "Veja mais" : "Veja menos"} size={8} handleClick={handleClick} ligth />
        <br />
      </div>
    </section>
  );
};
