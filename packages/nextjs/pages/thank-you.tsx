import React from "react";
import { useRouter } from "next/router";
import { Header } from "~~/components/Header";

const ThankYou: React.FC = () => {
  const router = useRouter();

  const handleReturn = () => {
    router.push("/");
  };

  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <h1 className="centered-title">Obrigado pela sua doação!</h1>
        <p className="centered-paragraph">Sua doação foi recebida com sucesso. Agradecemos muito pelo seu apoio.</p>
        <button onClick={handleReturn} className="cta-button">
          Voltar à página inicial
        </button>
      </main>
    </div>
  );
};

export default ThankYou;
