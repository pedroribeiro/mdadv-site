import { Button } from "@/components/layout";
export const QuemSomos = () => {
  return (
    <div className="text-black text-center text-sm font-light sm:text-lg p-5">
      <h1>Quem Somos</h1>

      <br />

      <p>
        Desde 2008 no mesmo endereço, a poucos metros de distância da sede da Justiça Federal, atuamos com
        foco exclusivo no Direito Previdenciário.
      </p>

      <br />

      <p>
        Nesses mais de dez anos logramos êxito em centenas de casos de concessões e revisões de aposentadorias
        e pensões, além de consultorias que resultaram em rápidas soluções para nossos clientes.
      </p>

      <br />

      <p>
        Assim, já consagrados como referência na advocacia previdenciária do Rio de Janeiro, reafirmamos os
        seguintes compromissos com nossos clientes:
      </p>

      <br />
      <br />

      <ButtonCombo
        buttonText="ATENDIMENTO PERSONALIZADO"
        paragraphText={`
          Desde o primeiro contato, o cliente conversa com advogado
          especialista, obtendo resposta aos seus questionamentos sempre no prazo máximo de até 24 horas
          `}
      />

      <ButtonCombo
        buttonText="CELERIDADE"
        paragraphText={`
          Cumprimos os prazos processuais sempre com antecedência mínima de dois dias, conferindo maior rapidez ao andamento processual e segurança para os clientes
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
