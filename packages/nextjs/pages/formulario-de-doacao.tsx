import React, { useState } from "react";
import { useRouter } from "next/router";
import { Header } from "~~/components/Header";

// Ajuste o caminho conforme necessário

const FormularioDeDoacao: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    cnpj: "",
    telefone: "",
    itens: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você deve integrar com o contrato inteligente ou backend para processar os dados do formulário
    console.log(formData);
    router.push("/thank-you"); // Redireciona para uma página de agradecimento ou volta para a lista
  };

  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <h1 className="centered-title">Formulario de Doação</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="cnpj">CNPJ</label>
              <input type="text" id="cnpj" name="cnpj" value={formData.cnpj} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="itens">Itens a serem doados</label>
              <textarea id="itens" name="itens" value={formData.itens} onChange={handleChange} required />
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
