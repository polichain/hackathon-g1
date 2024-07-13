import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "~~/components/Header";

const PorQueDoar = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <h1 className="centered-title">Por Que Doar</h1>
        <div className="content">
          <div className="section">
            <div className="section-text">
              <p>
                As empresas têm um papel fundamental na construção de um futuro melhor para todos. Ao investir em
                doações, seja em dinheiro ou produtos, você não está apenas fortalecendo a sua marca, mas também
                contribuindo para o desenvolvimento social e econômico do Brasil. Cada contribuição pode gerar um
                impacto significativo, desde melhorar a educação, apoiar a saúde, promover a cultura até fortalecer
                iniciativas ambientais. Empresas que doam não só ajudam a resolver problemas urgentes, mas também
                constroem um legado de responsabilidade social que inspira colaboradores e clientes. Doe e transforme.
                Juntos, podemos fazer do Brasil um lugar melhor para todos.
              </p>
            </div>
            <div className="image-wrapper">
              <Image src="/maos.jpg" alt="Mãos unidas" width={250} height={250} />
            </div>
          </div>
          <div className="section">
            <div className="image-wrapper">
              <Image src="/voluntarios.jpg" alt="Voluntários" width={250} height={250} />
            </div>
            <div className="section-text">
              <p>
                O nosso diferencial é entregar certificação, transparência e rastreabilidade durante toda a cadeia de
                suprimentos de doação de diferentes produtos. Além de otimizar as entregas de doações de forma rápida,
                eficaz e sem desperdícios.
              </p>
            </div>
          </div>
        </div>
        <div className="cta-container">
          <Link href="/doacoes" passHref>
            <button className="cta-button">Faça a Diferença</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PorQueDoar;
