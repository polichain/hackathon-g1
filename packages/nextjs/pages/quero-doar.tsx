import React, { useState } from "react";
import { useRouter } from "next/router";
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
    id: 7,
    beneficiary: "Joao Vinicius",
    description: "Precisa-se de 25 cobertores",
    status: "Urgência",
    requiresTransport: true,
    donor: "Empresa Y",
    delivered: false,
    carrier: "Transportadora A",
    transitStartTime: 1714458178,
  },
];

const Popup: React.FC<{ request: Request | null; onClose: () => void }> = ({ request, onClose }) => {
  const router = useRouter();

  const handleDoarClick = () => {
    if (request) {
      router.push({
        pathname: "/formulario-de-doacao",
        query: { id: request.id },
      });
    }
  };

  if (!request) return null;

  return (
    <div className="fixed">
      <div className="popup-content">
        <h2 className="text-2xl mb-4">Detalhes da Doação</h2>
        <p>Beneficiário: {request.beneficiary}</p>
        <p>Descrição: {request.description}</p>
        <p>Status: {request.status}</p>
        <p>Entregue: {request.delivered ? "Sim" : "Não"}</p>
        {request.status === "Em transporte" && (
          <>
            <p>Transportadora: {request.carrier}</p>
            <p>Data de Início do Transporte: {new Date(request.transitStartTime * 1000).toLocaleDateString()}</p>
          </>
        )}
        {request.status === "Urgência" && (
          <button className="btn donate-button mt-4" onClick={handleDoarClick}>
            Quero Doar
          </button>
        )}
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
