import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

const statuses = ["Ativa", "Inativa", "Em transporte", "Esperando retirada", "Recebida", "Em estoque"];

const Doacoes = () => {
  const [selectedStatus, setSelectedStatus] = useState("Ativa");

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className="page-container">
      <header className="header">
        <div className="logo-container">
          <Image src={logo} alt="Logo" className="logo" width={50} height={50} />
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
          <button className="donate-button">Quero Doar</button>
        </nav>
      </header>
      <main className="main-content">
        <h1 className="centered-title">Doações</h1>
        <div className="filter-container">
          <label htmlFor="status">Filtrar por status:</label>
          <select id="status" value={selectedStatus} onChange={handleStatusChange}>
            {statuses.map(status => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="donations-list">
          <br />
          <h2>Doações com status: {selectedStatus}</h2>
          {/* Aqui você mapeia as doações com base no status selecionado */}
        </div>
      </main>
    </div>
  );
};

export default Doacoes;
