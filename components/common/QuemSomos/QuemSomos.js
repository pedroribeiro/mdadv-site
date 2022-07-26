import { useState } from "react";
import { Button } from "@/components/layout";
import clsx from "clsx";

export const QuemSomos = () => {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <section
      id="quem_somos"
      className="bg-[#f4f4f4] text-black text-center text-sm font-light sm:text-lg p-5"
    >
      <h1>Quem Somos</h1>

      <br />

      <p>
        Desde 2008, com escritório a poucos metros de distância da sede da Justiça Federal, atuamos apenas na
        área do direito previdenciário.
      </p>

      <br />

      <p>
        Entendemos que não há mais espaço para advogados generalistas, que atuam em todas as matérias do
        direito, pois a profundidade e complexidade dos debates atuais exigem causídicos especialistas em cada
        ramo de atuação.
      </p>

      <br />

      <p>
        Focados exclusivamente na área do direito previdenciário há mais de 14 anos, aliamos a técnica, obtida
        em estudos aprofundados, com a experiência, adquirida no patrocínio de mais de dois mil processos
        previdenciários, para alcançar os melhores resultados em favor dos nossos clientes.
      </p>

      <br />

      <p>
        Como consequência, logramos êxito em centenas de casos de concessões e revisões de aposentadorias e
        pensões, além de consultorias que resultaram em rápidas soluções para segurados do INSS.
      </p>

      <br />

      <div className={clsx("flex flex-col items-center", { hidden: hidden })}>
        <ButtonCombo
          buttonText="ATENDIMENTO PERSONALIZADO"
          paragraphText={`
            Desde o primeiro contato, 
            o cliente conversa com advogado especialista e obtém o telefone pessoal do mesmo para ligações e troca de mensagens, 
            recebendo resposta aos seus questionamentos sempre no prazo máximo de 24 horas
          `}
        />

        <ButtonCombo
          buttonText="CELERIDADE"
          paragraphText={`
            Cumprimos os prazos processuais sempre com antecedência mínima de dois dias, 
            conferindo maior rapidez ao andamento processual e segurança para os clientes
          `}
        />

        <ButtonCombo
          buttonText="LEALDADE"
          paragraphText={`
            Patrocinamos os processos da primeira à última instância, atuando perante os Tribunais Superiores quando necessário
          `}
        />

        <ButtonCombo
          buttonText="QUALIDADE"
          paragraphText={`
          A técnica faz a diferença, mantemos constante aperfeiçoamento para oferecer a melhor advocacia
          `}
        />

        <ButtonCombo
          buttonText="TRANSPARÊNCIA"
          paragraphText={`
          O cliente tem total liberdade para consultar o advogado sobre o seu processo, recebendo sempre informações atualizadas e precisas.
          `}
        />
      </div>
      <Button text={hidden ? "Veja mais" : "Veja menos"} size={8} handleClick={handleClick} ligth />
    </section>
  );
};

const ButtonCombo = ({ buttonText, paragraphText, ligth }) => {
  return (
    <div>
      <Button text={buttonText} ligth={ligth} disabled />
      <br />
      <br />

      <p>{paragraphText}</p>

      <br />
    </div>
  );
};
