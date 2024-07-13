"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

export const Header = () => {
  return (
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
  );
};
