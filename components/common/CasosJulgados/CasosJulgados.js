import { useState } from "react";
import { Button } from "@components/layout";
import clsx from "clsx";

export const CasosJulgados = () => {
  const [hidden, setHidden] = useState(true);
  const handleClick = () => {
    setHidden(!hidden);
  };
  return (
    <div className="bg-metal-light p-5">
      <div className="text-black text-center">
        <h1>Casos Julgados</h1>
        <br />

        <div className="italic">
          <p className="font-bold">Confira abaixo as mais recentes decisões obtidas por nosso escritório:</p>

          <br />
          <p>
            Trabalho em condições insalubres gera direito à Aposentadoria Especial ou à contagem diferenciada
            do tempo de contribuição.
          </p>

          <br />
          <p>
            Qualidade de segurado pode ser estendida para até 36 meses após a última contribuição. Confira
            decisão judicial neste sentido.
          </p>

          <br />
          <p>Exposição a ruídos acima dos níveis de tolerância gera direito à aposentadoria especial.</p>

          <br />
          <p>
            Filho maior de 21 anos e inválido tem direito à pensão por morte do INSS. Veja sentença obtida por
            nosso escritório em processo que trata do assunto.
          </p>
        </div>

        <div className={clsx("italic", { hidden: hidden })}>
          <br />
          <p>
            Trabalho em condições insalubres gera direito à Aposentadoria Especial ou à contagem diferenciada
            do tempo de contribuição.
          </p>

          <br />
          <p>
            Qualidade de segurado pode ser estendida para até 36 meses após a última contribuição. Confira
            decisão judicial neste sentido.
          </p>

          <br />
          <p>Exposição a ruídos acima dos níveis de tolerância gera direito à aposentadoria especial.</p>

          <br />
          <p>
            Filho maior de 21 anos e inválido tem direito à pensão por morte do INSS. Veja sentença obtida por
            nosso escritório em processo que trata do assunto.
          </p>
        </div>

        <br />
        <Button text={hidden ? "Veja mais" : "Veja menos"} size={8} handleClick={handleClick} />
      </div>
    </div>
  );
};
