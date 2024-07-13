import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

/* aqui fingi ter doações */

const needs = [
  { id: 1, beneficiary: "Maria aparecida", description: "Need description", status: "Ativa", requiresTransport: true },
];

const donations = [
  { needId: 1, donor: "João da SIlva", delivered: false, carrier: "Super fast", transitStartTime: 1714444878 },
];

const urgentStatuses = ["Ativa"];

const QueroDoar = () => {
  const [selectedStatus] = useState("Urgência (precisando de ajuda)");

  return (
    <div className="page-container">
      <header className="header">
        <div className="logo-container">
          <Link href="/sobre" passHref>
            <Image src={logo} alt="Logo" className="logo" width={50} height={50} />
          </Link>
        </div>
        <nav className="nav">
          <br />

          <Link href="/por-que-doar" passHref>
            <div>Por que doar</div>
          </Link>
          <Link href="/sobre" passHref>
            <div>Sobre nós</div>
          </Link>
          <Link href="/doacoes" passHref>
            <div>Doações</div>
          </Link>
          <Link href="/quero-doar" passHref>
            <button className="donate-button">Quero Doar</button>
          </Link>
        </nav>
      </header>
      <main>
        <br />
        <h1 className="centered-title">Doações com Urgência</h1>
        <div className="filter-container"></div>
        <br />
        <div className="donations-list">
          <br />

          <h2>Doações com status: {selectedStatus}</h2>

          {/* Mapeia as doações com base no status selecionado */}

          {donations
            .filter(donation => needs.find(need => need.id === donation.needId && urgentStatuses.includes(need.status)))
            .map(donation => (
              <div key={donation.needId}>
                <br />
                <p>Doação de: {donation.donor}</p>
                <p>Status: {selectedStatus}</p>
                <p>Entregue: {donation.delivered ? "Sim" : "Não"}</p>
                <p>Transportadora: {donation.carrier}</p>
                <p>Data de Início do Transporte: {new Date(donation.transitStartTime * 1000).toLocaleDateString()}</p>
              </div>
            ))}
          {donations
            .filter(donation => needs.find(need => need.id === donation.needId && urgentStatuses.includes(need.status)))
            .map(donation => (
              <div key={donation.needId}>
                <br />
                <p>Doação de: {donation.donor}</p>
                <p>Status: {selectedStatus}</p>
                <p>Entregue: {donation.delivered ? "Sim" : "Não"}</p>
                <p>Transportadora: {donation.carrier}</p>
                <p>Data de Início do Transporte: {new Date(donation.transitStartTime * 1000).toLocaleDateString()}</p>
              </div>
            ))}
          {donations
            .filter(donation => needs.find(need => need.id === donation.needId && urgentStatuses.includes(need.status)))
            .map(donation => (
              <div key={donation.needId}>
                <br />
                <p>Doação de: {donation.donor}</p>
                <p>Status: {selectedStatus}</p>
                <p>Entregue: {donation.delivered ? "Sim" : "Não"}</p>
                <p>Transportadora: {donation.carrier}</p>
                <p>Data de Início do Transporte: {new Date(donation.transitStartTime * 1000).toLocaleDateString()}</p>
              </div>
            ))}
          {donations
            .filter(donation => needs.find(need => need.id === donation.needId && urgentStatuses.includes(need.status)))
            .map(donation => (
              <div key={donation.needId}>
                <br />
                <p>Doação de: {donation.donor}</p>
                <p>Status: {selectedStatus}</p>
                <p>Entregue: {donation.delivered ? "Sim" : "Não"}</p>
                <p>Transportadora: {donation.carrier}</p>
                <p>Data de Início do Transporte: {new Date(donation.transitStartTime * 1000).toLocaleDateString()}</p>
              </div>
            ))}
          {donations
            .filter(donation => needs.find(need => need.id === donation.needId && urgentStatuses.includes(need.status)))
            .map(donation => (
              <div key={donation.needId}>
                <br />
                <p>Doação de: {donation.donor}</p>
                <p>Status: {selectedStatus}</p>
                <p>Entregue: {donation.delivered ? "Sim" : "Não"}</p>
                <p>Transportadora: {donation.carrier}</p>
                <p>Data de Início do Transporte: {new Date(donation.transitStartTime * 1000).toLocaleDateString()}</p>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default QueroDoar;
