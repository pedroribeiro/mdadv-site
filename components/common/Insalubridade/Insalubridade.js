import { useState } from "react";
import { Button } from "@/components/layout";
import clsx from "clsx";
import { Title } from "@components/layout/Title";

export const Insalubridade = () => {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <section
      id="insalubridade"
      className="full-bleed-dark-grey text-black text-center text-sm font-light sm:text-lg p-5"
    >

      <Title text={"Insalubridade e Periculosidade"} icon="health" />
      -
      <h2>Concessão e revisão de aposentadorias especiais</h2>

      <br />

      <p>
        Um dos temas mais recorrentes nas demandas previdenciárias é o do reconhecimento do tempo de
        atividades insalubres e perigosas, com a consequente concessão de aposentadoria especial ou conversão
        para tempo de contribuição comum.
      </p>

      <br />

      <p>
        Quem exerce este tipo de atividade possui direito à aposentadoria especial em 15, 20 ou 25 anos de
        contribuição ou ainda à conversão do tempo especial para utilização na aposentadoria comum.
      </p>

      <br />

      <p>
        A caracterização do trabalho como insalubre ou perigoso depende do enquadramento da atividade
        profissional ou da exposição a certos agentes, como: ruídos, eletricidade acima de 250 volts,
        hidrocarbonetos e muitos outros previstos em regulamentos próprios.
      </p>

      <br />

      <p>
        Contudo, muitas são as razões alegadas pelo INSS para negar os benefícios, tais como: ausência de
        comprovação, formulários e laudos extemporâneos, uso de EPI, entre outros, em sua maioria rechaçados
        pelo Poder Judiciário.
      </p>

      <br />

      <p>
        Por tal razão, é fundamental consultar advogado especialista antes de requerer o reconhecimento de
        tempo especial ou após negativa por parte do INSS.
      </p>

      <br />

      <p>Nosso escritório possui larga experiência neste tipo de ação, com histórico de sólidas vitórias.</p>

      <br />
      <p>Confira abaixo alguns dos mais recentes julgados obtidos em processos com nossa atuação:</p>
      <br />

      <div className={clsx("flex flex-col items-center", { hidden: hidden })}>
        <h2>
          - Trabalhadores em plataformas de petróleo e refinarias (exposição a hidrocarbonetos, berílio,
          cadmio, cromo, mercúrio, benzeno, entre outros):{" "}
        </h2>
        <br />
        <a href="http://medeirosadv.adv.br/wp-content/uploads/2020/12/acordao-3.pdf">
          Processo n. 0173985-45.2017.4.02.5101
        </a>
        <br />
        <a href="http://medeirosadv.adv.br/wp-content/uploads/2020/12/acordao1.pdf">
          Processo n. 0007972-61.2014.4.02.5101
        </a>

        <br />
        <a href="http://medeirosadv.adv.br/wp-content/uploads/2020/12/acordao-31.pdf">
          Processo n. 0086879-16.2015.4.02.5101
        </a>
        <br />

        <h2>- Exposição a ruídos acima dos limites de tolerância:</h2>
        <br />
        <a href="">Processo n. 5002016-73.2019.4.02.5110</a>
        <br />
        <a href="">Processo n. 5001146-04.2019.4.02.5118</a>
        <br />

        <h2>- Vigilantes: </h2>
        <br />
        <a href="">Processo n. 5002432-51.2018.4.02.5118</a>
        <br />
        <a href="">Processo n. 5015172-58.2019.4.02.5101</a>
        <br />
        <a href="">Processo n. 0208875-54.2017.4.02.5151</a>
        <br />

        <h2>
          - Médicos, enfermeiros, técnicos de enfermagem, veterinários e dentistas (exposição a
          microorganismos e parasitas):{" "}
        </h2>
        <br />
        <a href="">Processo n. 0102184-69.2017.4.02.5101</a>
        <br />
        <a href="">Processo n. 0171616-78.2017.4.02.5101</a>
        <br />
        <h2>- Exposição a correntes elétricas superiores a 250 volts: </h2>
        <br />
        <a href="">Processo n. 5001556-65.2019.4.02.5117</a>
        <br />
        <a href="">Processo n. 5001557-50.2019.4.02.5117</a>
        <br />
        <p>
          Observação: Os julgados acima são exemplificativos, havendo possibilidade de enquadramento especial
          por exposição a diversos outros agentes. Caso tenha qualquer dúvida, será um prazer lhe ajudar,
          entre em contato conosco.{" "}
        </p>
      </div>
      <br />
      <Button text={hidden ? "Confira" : "Veja menos"} size={8} handleClick={handleClick} ligth />
    </section>
  );
};
