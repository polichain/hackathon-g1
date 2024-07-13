import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

const Doacoes = () => {
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
          <br />
          <label htmlFor="status">Filtrar por status:</label>
          <br />
          <select id="status" value={selectedStatus} onChange={handleStatusChange}>
            <option value="Urgência">Urgência</option>
            <option value="Sanada">Sanada</option>
            <option value="Em transporte">Em transporte</option>
            <option value="Esperando retirada">Esperando retirada</option>
            <option value="Recebida">Recebida</option>
            <option value="Em estoque">Em estoque</option>
          </select>
        </div>
        <div className="donations-list">
          <br />
          <h2>Status das doações: {selectedStatus}</h2>
          {/* Aqui você mapeia as doações com base no status selecionado */}
        </div>
      </main>
    </div>
  );
};

export default Doacoes;
