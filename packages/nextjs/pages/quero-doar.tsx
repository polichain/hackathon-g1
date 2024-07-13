import React, { useState } from "react";
import { Header } from "~~/components/Header";

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
    description: "Família perdeu a casa em uma enchente e precisa de alimentos e roupas.",
    status: "Ativa",
    requiresTransport: true,
  },
  {
    id: 2,
    beneficiary: "Carlos Souza",
    description: "Deslizamento de terra destruiu a residência, necessitando móveis e utensílios domésticos.",
    status: "Ativa",
    requiresTransport: true,
  },
  {
    id: 3,
    beneficiary: "Ana Paula",
    description: "Incêndio florestal deixou a comunidade sem acesso a água potável e produtos de higiene.",
    status: "Ativa",
    requiresTransport: true,
  },
];

const donations: Donation[] = [
  { needId: 1, donor: "João da Silva", delivered: false, carrier: "Super Fast", transitStartTime: 1714444878 },
  {
    needId: 2,
    donor: "Mariana Ferreira",
    delivered: false,
    carrier: "Transporte Seguro",
    transitStartTime: 1714544878,
  },
  { needId: 3, donor: "Pedro Oliveira", delivered: false, carrier: "Entrega Rápida", transitStartTime: 1714644878 },
];

const urgentStatuses = ["Ativa"];

const QueroDoar: React.FC = () => {
  const [selectedStatus] = useState("Urgência (precisando de ajuda)");

  return (
    <div className="page-container">
      <Header />
      <main>
        <br />
        <h1 className="centered-title">Doações com Urgência</h1>
        <div className="donations-list">
          <h2>Doações com status: {selectedStatus}</h2>
          {donations
            .filter(donation => needs.some(need => need.id === donation.needId && urgentStatuses.includes(need.status)))
            .map(donation => {
              const need = needs.find(need => need.id === donation.needId);
              if (!need) return null;
              return (
                <div key={donation.needId} className="donation-item">
                  <p>Beneficiário: {need.beneficiary}</p>
                  <p>Descrição: {need.description}</p>
                  <p>Doação de: {donation.donor}</p>
                  <p>Status: {selectedStatus}</p>
                  <p>Entregue: {donation.delivered ? "Sim" : "Não"}</p>
                  <p>Transportadora: {donation.carrier}</p>
                  <p>Data de Início do Transporte: {new Date(donation.transitStartTime * 1000).toLocaleDateString()}</p>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default QueroDoar;
