import React, { useState } from "react";
import { Header } from "~~/components/Header";

// import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

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

const RequestContainer: React.FC<{ request: Request }> = ({ request }) => (
  <div className="request-item">
    <p>Beneficiário: {request.beneficiary}</p>
    <p>Descrição: {request.description}</p>
    <p>Status: {request.status}</p>
    <p>Doação de: {request.donor}</p>
    <p>Entregue: {request.delivered ? "Sim" : "Não"}</p>
    <p>Transportadora: {request.carrier}</p>
    <p>Data de Início do Transporte: {new Date(request.transitStartTime * 1000).toLocaleDateString()}</p>
  </div>
);

const Doacoes: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const [requests] = useState<Request[]>([]);
  // const [requestCountFront] = useState<number | undefined>(undefined);

  // const { data: getRequestCount }  = useScaffoldReadContract({
  //   contractName: "DonationPlatform",
  //   functionName: "getRequestCount",
  // });

  // useEffect(() => {
  //   if (getRequestCount !== undefined) {
  //     setRequestCountFront(Number(getRequestCount));
  //   }
  // }, [getRequestCount]);

  // useEffect(() => {
  //   if (requestCountFront !== undefined) {
  //     fetchRequests(requestCountFront);
  //   }
  // }, [requestCountFront]);

  // const fetchRequests = (count: number) => {
  //   const requestPromises = [];
  //   for (let i = 0; i < count; i++) {
  //     const { data: requestData } = useScaffoldReadContract({
  //       contractName: "DonationPlatform",
  //       functionName: "getRequest",
  //       args: [BigInt(i)],
  //     });
  //     requestPromises.push(requestData);
  //   }
  //   Promise.all(requestPromises).then((requestsData) => {
  //     const formattedRequests = requestsData
  //       .filter((data) => data !== undefined)
  //       .map((data) => formatRequestData(data as string));
  //     setRequests(formattedRequests);
  //   });
  // };

  // const formatRequestData = (data: string): Request => {
  //   const dataArray = data.split(",");
  //   return {
  //     id: parseInt(dataArray[0]),
  //     beneficiary: dataArray[1],
  //     description: dataArray[2],
  //     status: getStatusName(parseInt(dataArray[3])),
  //     requiresTransport: dataArray[4] === "true",
  //     donor: dataArray[5],
  //     delivered: dataArray[6] === "true",
  //     carrier: dataArray[7],
  //     transitStartTime: parseInt(dataArray[8]),
  //   };
  // };

  // const getStatusName = (statusIndex: number): string => {
  //   switch (statusIndex) {
  //     case 0:
  //       return "Pending";
  //     case 1:
  //       return "Verified";
  //     case 2:
  //       return "Donated";
  //     case 3:
  //       return "WaitingForPickup";
  //     case 4:
  //       return "InTransit";
  //     case 5:
  //       return "Delivered";
  //     default:
  //       return "Unknown";
  //   }
  // };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className="page-container">
      <Header />
      <main>
        <br />
        <h1 className="centered-title">Demandas e doações</h1>
        <div className="filter-container">
          <div className="section-text">
            <label htmlFor="status">Filtrar por status:</label>
            <select id="status" value={selectedStatus} onChange={handleStatusChange}>
              {["Pending", "Verified", "Donated", "WaitingForPickup", "InTransit", "Delivered"].map(status => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="requests-list">
          <br />
          {requests
            .filter(request => request.status === selectedStatus)
            .map(request => (
              <RequestContainer key={request.id} request={request} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Doacoes;
