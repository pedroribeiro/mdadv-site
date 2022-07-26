import { Button } from "@components/layout";

export const Consultoria = () => {
  return (
    <section id="consultoria_e_planejamento_previdenciario" className=" bg-[#E5E5E5] p-5">
      <div className="text-black text-center">
        <h1>Consultoria e Planejamento Previdenciário</h1>
        <br />

        <div className="flex flex-col items-center justify-between">
          <p>
            Considerando a complexidade da legislação previdenciária e a constante alteração da mesma, vista,
            por exemplo, com a recente reforma promovida pela Emenda Constitucional 103/19, é essencial a
            assistência de advogado especialista para orientação visando a obtenção do melhor benefício.
          </p>

          <br />

          <p>
            Oferecemos consultoria e planejamento previdenciário, contabilizando tempo de contribuição,
            analisando formulários e laudos técnicos, projetando valor de aposentadoria e esclarecendo todas
            as dúvidas.
          </p>

          <br />

          <p>
            Atendemos mediante agendamento de reunião presencial em nosso escritório ou à distância,
            fornecendo todos os dados e respostas que nossos clientes precisam sem que tenham que sair de seus
            lares.
          </p>

          <br />

          <CallToAction />

          <br />

          {/* <Button text={"INFORMAÇÕES IMPORTANTES"} disabled />

          <br />

          <p className="font-bold">
            Veja nossas participações em reportagens e programas no rádio, na TV e nos jornais
          </p>

          <br />

          <p className="italic">Conheça melhor a Aposentadoria por invalidez</p>

          <br />

          <p className="italic">Conheça melhor o Auxilio Acidente</p>

          <br />

          <p className="italic">Conheça melhor a Pensão por morte</p>

          <br />

          <p className="italic">Conheça melhor a Aposentadoria Especial</p>

          <br />

          <p className="italic">Saiba tudo sobre Desaposentação</p>

          <br />

          <Button text={"INFORMAÇÕES OFICIAIS"} disabled size={8} />

          <br />
          <p className="font-bold">
            Os links abaixo conduzem ao site da Dataprev, onde os segurados poderão obter importantes
            informações sobre seus benefícios previdenciários:
          </p>

          <br />
          <p className="italic">INSS - Simulação da contagem de tempo de contribuição</p>

          <br />

          <p className="italic">INSS - Simulação de cálculo de aposentadoria</p>

          <br />

          <p className="italic">INSS - Consulta Carta de Concessão</p>

          <br />

          <p className="italic">INSS - Memória de Cálculo do Benefício</p>
          <br /> */}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <div className="bg-[#f4f4f4] w-full px-6">
      <div className="flex items-center justify-evenly text-white">
        <a href="tel:2130234081">
          <p className="text-2xl sm:text-xl md:text-3xl lg:text-4xl">Tel: 3023-4081</p>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+5521992552687&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços"
          target="_blank"
        >
          <button className="mt-2">
            <div className={"w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"}>
              <img className={"object-contain w-full h-full"} src="/logo_wpp.svg" />
            </div>
          </button>
        </a>
        <a href="mailto:diogo@medeirosadv.adv.br">
          <p className={"text-2xl sm:text-xl md:text-3xl lg:text-4xl hidden sm:block"}>
            email: contato@medeirosadv.adv.br
          </p>
        </a>
      </div>
    </div>
  );
};
