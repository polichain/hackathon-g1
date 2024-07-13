import React, { useState } from "react";
import { Header } from "~~/components/Header";

interface Request {
  id: number;
  beneficiary: string;
  description: string;
  status: string;
  requiresTransport: boolean;
  donor: string;
  delivered: boolean;
  carrier: string;
  transitStartTime: number;
}

const requests: Request[] = [
  {
    id: 1,
    beneficiary: "Maria Aparecida",
    description: "Necessita de fraldas de todos os tamanhos",
    status: "Urgência",
    requiresTransport: true,
    donor: "Empresa F",
    delivered: false,
    carrier: "Transportadora A",
    transitStartTime: 1714458178,
  },
  {
    id: 2,
    beneficiary: "João da Silva",
    description: "Necessita de 10 colchões",
    status: "Sanada",
    requiresTransport: false,
    donor: "Empresa E",
    delivered: true,
    carrier: "Transportadora B",
    transitStartTime: 1714588878,
  },
  {
    id: 3,
    beneficiary: "Alice de Oliveira",
    description: "Necessita de 100L de água e 200kg de alimento",
    status: "Em transporte",
    requiresTransport: true,
    donor: "Empresa D",
    delivered: false,
    carrier: "Transportadora C",
    transitStartTime: 1714669848,
  },
  {
    id: 4,
    beneficiary: "Artur Calixto",
    description: "Necessita de 200L de água",
    status: "Esperando retirada",
    requiresTransport: false,
    donor: "Empresa C",
    delivered: true,
    carrier: "Transportadora D",
    transitStartTime: 1714574878,
  },
  {
    id: 5,
    beneficiary: "Willian de Azevedo",
    description: "Necessita de 230kg de alimento e 4 pacotes de fraldas geriátricas",
    status: "Recebida",
    requiresTransport: true,
    donor: "Empresa B",
    delivered: false,
    carrier: "Transportadora E",
    transitStartTime: 1714388742,
  },
  {
    id: 6,
    beneficiary: "Evandro Souza",
    description: "Necessita de remédios para pressão alta e diabetes",
    status: "Em estoque",
    requiresTransport: false,
    donor: "Empresa A",
    delivered: true,
    carrier: "Transportadora F",
    transitStartTime: 1714296541,
  },
];

const Popup: React.FC<{ request: Request | null; onClose: () => void }> = ({ request, onClose }) => {
  if (!request) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="popup-content bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl mb-4">Detalhes da Doação</h2>
        <p>Beneficiário: {request.beneficiary}</p>
        <p>Descrição: {request.description}</p>
        <p>Status: {request.status}</p>
        <p>Doação de: {request.donor}</p>
        <p>Entregue: {request.delivered ? "Sim" : "Não"}</p>
        <p>Transportadora: {request.carrier}</p>
        <p>Data de Início do Transporte: {new Date(request.transitStartTime * 1000).toLocaleDateString()}</p>
        {request.status === "Urgência" && <button className="btn btn-primary mt-4">Doar</button>}
        <button className="btn btn-secondary mt-4" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

const DonationContainer: React.FC<{ request: Request; onClick: () => void }> = ({ request, onClick }) => (
  <div className="donation-item cursor-pointer p-4 border-b border-gray-200" onClick={onClick}>
    <p>Beneficiário: {request.beneficiary}</p>
    <p>Descrição: {request.description}</p>
    <p>Status: {request.status}</p>
  </div>
);

const Doacoes: React.FC = () => {
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const selectedStatus = "Urgência";

  const handleRequestClick = (request: Request) => {
    setSelectedRequest(request);
  };

  const handleClosePopup = () => {
    setSelectedRequest(null);
  };

  return (
    <div className="page-container">
      <Header />
      <main>
        <br />
        <h1 className="centered-title">Necessidade de ajuda</h1>
        <div className="donations-list">
          <br />
          <h2>Demandas que precisam de você</h2>
          {requests
            .filter(request => request.status === selectedStatus)
            .map(request => (
              <DonationContainer key={request.id} request={request} onClick={() => handleRequestClick(request)} />
            ))}
        </div>
      </main>
      {selectedRequest && <Popup request={selectedRequest} onClose={handleClosePopup} />}
    </div>
  );
};

export default Doacoes;
