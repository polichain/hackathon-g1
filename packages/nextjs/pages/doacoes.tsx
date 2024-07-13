import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

interface Need {
  id: number;
  beneficiary: string;
  description: string;
  status: string;
  requiresTransport: boolean;
}

interface Donation {
  needId: number;
  donor: string;
  delivered: boolean;
  carrier: string;
  transitStartTime: number;
}

const needs: Need[] = [
  {
    id: 1,
    beneficiary: "Maria Aparecida",
    description: "Necessita de fraldas de todos os tamanhos",
    status: "Urgência",
    requiresTransport: true,
  },
  {
    id: 2,
    beneficiary: "João da Silva",
    description: "Necessita de 10 colchões",
    status: "Sanada",
    requiresTransport: false,
  },
  {
    id: 3,
    beneficiary: "Alice de Oliveira",
    description: "Necessita de 100L de água e 200kg de alimento",
    status: "Em transporte",
    requiresTransport: true,
  },
  {
    id: 4,
    beneficiary: "Artur Calixto",
    description: "Necessita de 200L de água",
    status: "Esperando retirada",
    requiresTransport: false,
  },
  {
    id: 5,
    beneficiary: "Willian de Azevedo",
    description: "Necessita de 230kg de alimento e 4 pacotes de fraldas geriátricas",
    status: "Recebida",
    requiresTransport: true,
  },
  {
    id: 6,
    beneficiary: "Evandro Souza",
    description: "Necessita de remédios para pressão alta e diabetes",
    status: "Em estoque",
    requiresTransport: false,
  },
];

const donations: Donation[] = [
  { needId: 1, donor: "Empresa F", delivered: false, carrier: "Transportadora A", transitStartTime: 1714458178 },
  { needId: 2, donor: "Empresa E", delivered: true, carrier: "Transportadora B", transitStartTime: 1714588878 },
  { needId: 3, donor: "Empresa D", delivered: false, carrier: "Transportadora C", transitStartTime: 1714669848 },
  { needId: 4, donor: "Empresa C", delivered: true, carrier: "Transportadora D", transitStartTime: 1714574878 },
  { needId: 5, donor: "Empresa B", delivered: false, carrier: "Transportadora E", transitStartTime: 1714388742 },
  { needId: 6, donor: "Empresa A", delivered: true, carrier: "Transportadora F", transitStartTime: 1714296541 },
];

const statuses = ["Urgência", "Sanada", "Em transporte", "Esperando retirada", "Recebida", "Em estoque"];

const DonationContainer: React.FC<{ donation: Donation; need: Need }> = ({ donation, need }) => (
  <div className="donation-item">
    <p>Beneficiário: {need.beneficiary}</p>
    <p>Descrição: {need.description}</p>
    <p>Status: {need.status}</p>
    <p>Doação de: {donation.donor}</p>
    <p>Entregue: {donation.delivered ? "Sim" : "Não"}</p>
    <p>Transportadora: {donation.carrier}</p>
    <p>Data de Início do Transporte: {new Date(donation.transitStartTime * 1000).toLocaleDateString()}</p>
  </div>
);

const Doacoes: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState("Urgência");

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className="page-container">
      <header className="header">
        <div className="logo-container">
          <Link href="/sobre" passHref>
            <Image src={logo} alt="Logo" className="logo" width={50} height={50} />
          </Link>
          <span className="project-title">Corrente do bem</span>
        </div>
        <nav className="nav">
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
        <h1 className="centered-title">Necessidade de ajuda</h1>
        <div className="filter-container">
          <div className="section-text">
            <label htmlFor="status">Filtrar por status:</label>
            <select id="status" value={selectedStatus} onChange={handleStatusChange}>
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="donations-list">
          <br />
          <h2>Doações com status: {selectedStatus}</h2>
          {donations
            .filter(donation => {
              const need = needs.find(need => need.id === donation.needId && need.status === selectedStatus);
              return need !== undefined;
            })
            .map(donation => {
              const need = needs.find(need => need.id === donation.needId)!;
              return <DonationContainer key={donation.needId} donation={donation} need={need} />;
            })}
        </div>
      </main>
    </div>
  );
};

export default Doacoes;
