import React, { useState } from "react";
import { useRouter } from "next/router";
import { Header } from "~~/components/Header";

// Ajuste o caminho conforme necessário

const FormularioDeDoacao: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    doador: "", // Correção: adicionado o campo 'doador'
    beneficiario: "",
    endereco: "",
    itens: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    router.push("/thank-you");
  };

  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <h1 className="centered-title">Formulario de Doação</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h2>Beneficiário: Maria Aparecida</h2>
            </div>
            <div className="form-group">
              <h2>Descrição: Necessita de 50 pacotes de fraldas do tamanho P</h2>
            </div>
            <div className="form-group">
              <label htmlFor="doador">Doador</label>
              <input
                type="text"
                id="doador"
                name="doador"
                value={formData.doador} // Correção: usar 'formData.doador' ao invés de 'formData.endereco'
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="cta-button">
              Enviar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default FormularioDeDoacao;
