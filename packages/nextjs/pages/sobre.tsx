import React from "react";
import Image from "next/image";
import { Header } from "~~/components/Header";

const Sobre = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <h1 className="centered-title">Sobre o Projeto</h1>
        <div className="section">
          <div className="section-text">
            <p>
              Em um contexto global tanto referente ao consenso científico através dos dados do IPCC (Painel
              Intergovernamental de Mudanças Climáticas), quanto aos próprios eventos climáticos extremos acontecendo
              com mais frequência por todo o globo, graças a média da temperatura terrestre ter completado 1 ano acima
              de 1,5°C, evidenciam que as mudanças climáticas são reais até mesmo para os negacionista de plantão.
            </p>
            <p>
              Há 15 meses os oceanos estão batendo recordes de temperaturas máximas e junho bateu o 13° recorde mensal
              seguido de temperatura. Quando olhamos para o sul global, vemos eventos extremos climáticos acontecendo de
              norte ao sul do Brasil.Desde seca na Amazônia, incêndios no pantanal até inundações no Acre e no RS sendo
              intensificadas pelos fenômenos já conhecidos do El nino e La nina.{" "}
            </p>
            <p>
              Sendo assim, podemos começar a entender que a causa raiz de todas as catástrofes globais, como as ocorrida
              no RS são consequências dos altos níveis de uso de combustíveis fósseis e aumento da emissão dos gases de
              efeito estufa na terra. Já se sabe que pelo menos 30% dos brasileiros já tiveram prejuízos em casa devido
              ao clima e 3 milhões de pessoas foram impactadas pelas inundações recentes nos RS, atingido inclusive 15
              mil animais que foram abandonados frente a esse desastre.
            </p>
            <p>
              Com esse panorama, o nosso projeto nessa plataforma busca solucionar os gargalos na cadeia de suprimentos
              de doações em casos de emergências e situações de vulnerabilidade, com transparência e certificações
              assegurando que as doações encontrem o caminho mais rápido e eficaz de chegar a destino final que
              solicitar uma demanda específica de produto.
            </p>
          </div>
          <Image src="/voluntarios.jpg" alt="Voluntários" width={500} height={300} />
        </div>
        <div className="section">
          <div className="section-text">
            <p>
              Visando sanar situações emergenciais e carência de recurso,o nosso diferencial é entregar certificação,
              transparência e rastreabilidade durante toda a cadeia de suprimentos de doação de diferentes produtos.
              Além de otimizar as entregas de doações de forma rápida, eficaz e sem desperdícios.
            </p>
            <br />

            <p>
              De maneira geral, o nosso projeto prevê que as doações serão separadas como forma de kits antes de serem
              entregues:
              <br />
              Kits limpeza - Candida, sabão em pó...
              <br />
              Kits higiene pessoal - escova de dente, absorvente...
              <br />
              Kit de móveis - Fogão, Geladeira, Cama, Colchão...
              <br />
              Seguindo a cadeia de logística de transporte e chegada ao destino final com rastreabilidade e
              assertividade.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sobre;
