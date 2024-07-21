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

// const [requestCountFront] = useState<number | undefined>(undefined);

//   const { data: getRequestCount }  = useScaffoldReadContract({
//     contractName: "DonationPlatform",
//     functionName: "getRequestCount",
//   });

//   useEffect(() => {
//     if (getRequestCount !== undefined) {
//       setRequestCountFront(Number(getRequestCount));
//     }
//   }, [getRequestCount]);

//   useEffect(() => {
//     if (requestCountFront !== undefined) {
//       fetchRequests(requestCountFront);
//     }
//   }, [requestCountFront]);

const statuses = ["Urgência", "Sanada", "Em transporte", "Esperando retirada", "Recebida", "Em estoque"];

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
  const [selectedStatus, setSelectedStatus] = useState("Urgência");

  const handleRequestClick = (request: Request) => {
    setSelectedRequest(request);
  };

  const handleClosePopup = () => {
    setSelectedRequest(null);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className="page-container">
      <Header />
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
