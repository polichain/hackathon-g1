import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "~~/components/Header";

const PorQueDoar: React.FC = () => {
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
                contribuindo para o desenvolvimento social e econômico do povo latino. Cada contribuição pode gerar um
                impacto significativo, desde melhorar a educação, apoiar a saúde, promover a cultura até fortalecer
                iniciativas ambientais. Empresas que doam não só ajudam a resolver problemas urgentes, mas também
                constroem um legado de responsabilidade social que inspira colaboradores e clientes.
              </p>
            </div>
            <div className="image-wrapper">
              <Image src="/maos.png" alt="latam" width={200} height={250} />
            </div>
          </div>
          <div className="section">
            <div className="image-full">
              <Image src="/voluntarios.jpg" alt="Voluntários" width={200} height={200} />
            </div>
            <div className="cemtered-title">
              <p> Doe e transforme.</p>
              <p>Juntos, podemos fazer a América Latina um lugar melhor para todos.</p>
            </div>
          </div>
          <div className="cta-container">
            <Link href="/doacoes" passHref>
              <button className="cta-button">Faça a Diferença</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PorQueDoar;
