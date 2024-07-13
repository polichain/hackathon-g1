import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

const Sobre = () => {
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
        <h1 className="centered-title">Sobre o Projeto</h1>
        <div className="section">
          <div className="section-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien elit. In malesuada semper mi,
              nec consectetur velit aliquet vel. Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien elit. In malesuada semper mi,
              nec consectetur velit aliquet vel. Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien elit. In malesuada semper mi,
              nec consectetur velit aliquet vel. Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien elit. In malesuada semper mi,
              nec consectetur velit aliquet vel. Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien elit. In malesuada semper mi,
              nec consectetur velit aliquet vel. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <Image src="/voluntarios.jpg" alt="Voluntários" width={500} height={300} />
        </div>
        <div className="section">
          <div className="section-text">
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien elit. In malesuada semper mi,
              nec consectetur velit aliquet vel. Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien elit. In malesuada semper mi,
              nec consectetur velit aliquet vel. Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien elit. In malesuada semper mi,
              nec consectetur velit aliquet vel. Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien elit. In malesuada semper mi,
              nec consectetur velit aliquet vel. Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel sapien elit. In malesuada semper mi,
              nec consectetur velit aliquet vel. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sobre;
