import React from "react";
import Image from "next/image";
import { Header } from "~~/components/Header";

const Sobre: React.FC = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <h1 className="centered-title">Sobre o Projeto</h1>
        <div className="section">
          <div className="section-text">
            <p>
              Em tempos de crises e adversidades, a solidariedade e a união do povo são mais importantes do que nunca. O
              projeto Corrente do Bem é uma plataforma descentralizada que visa resolver os gargalos da cadeia de
              suprimentos humanitária através de certificação, rastreabilidade e transparência. Nossa missão é garantir
              que as doações cheguem de forma eficiente e rápida às ONGs necessitadas em toda a América Latina.
            </p>
            <br />
            <p>
              A América Latina enfrenta diversos desafios, desde desastres naturais até crises econômicas. Nesses
              momentos críticos, é essencial que as comunidades se unam para apoiar aqueles que mais precisam. Nossa
              plataforma utiliza tecnologia blockchain para assegurar que cada doação seja rastreada e chegue ao seu
              destino de maneira transparente e segura.
            </p>
            <br />
            <p>
              Através do nosso sistema, as ONGs podem criar demandas específicas de produtos necessários, e os doadores
              podem contribuir suprindo a demanda. Cada doação é recompensada com tokens CBC, incentivando a
              generosidade e aumentando a circulação dos tokens. Com isso, não só ajudamos a suprir necessidades
              imediatas, mas também promovemos um ciclo contínuo de apoio e solidariedade entre os países
              latino-americanos.
            </p>
            <br />
            <p>
              A união do povo latino é fundamental para enfrentar períodos de crise. Juntos, podemos fazer a diferença e
              garantir que a ajuda chegue onde é mais necessária. Com transparência, certificação e rastreabilidade,
              mostramos que as barreiras geográficas e linguísticas não são obstáculos para a solidariedade e o apoio
              mútuo.
            </p>
          </div>
          <br />
          <Image src="/fundo.png" alt="fundo" width={500} height={300} />
        </div>
        <div className="section">
          <div className="section-text">
            <br />
            <p>
              Nosso diferencial é entregar certificação, transparência e rastreabilidade durante toda a cadeia de
              suprimentos de doações. Otimizamos as entregas de forma rápida, eficaz e sem desperdícios, garantindo que
              cada contribuição faça a diferença. A fronteira da língua não é suficiente para parar a vontade do povo
              latino de se ajudar. Juntos, construímos uma rede de apoio sólida e eficaz em tempos de necessidade.
            </p>
            <br />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sobre;
