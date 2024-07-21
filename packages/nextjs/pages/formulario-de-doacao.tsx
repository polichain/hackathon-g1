import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Header } from "~~/components/Header";

const generateTokenData = (donorName: string) => {
  return {
    network: "LaChain",
    type: "Donation token",
    name: donorName,
    hash: Math.random().toString(36).substr(2),
    logo: "/about_img.png",
  };
};

const requests = [
  {
    id: 1,
    beneficiary: "Maria Aparecida",
    description: "Necessita de 50 pacotes de fraldas do tamanho P",
  },
  {
    id: 7,
    beneficiary: "Joao Vinicius",
    description: "Precisa-se de 25 cobertores",
  },
];

const FormularioDeDoacao: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState({
    doador: "",
    beneficiario: "",
    descricao: "",
  });
  const [tokenData, setTokenData] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const request = requests.find(req => req.id === Number(id));
      if (request) {
        setFormData({
          ...formData,
          beneficiario: request.beneficiary,
          descricao: request.description,
        });
      }
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTokenData = generateTokenData(formData.doador);
    setTokenData(newTokenData);
  };

  const handleClosePopup = () => {
    setTokenData(null);
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
              <h2>Beneficiário: {formData.beneficiario}</h2>
            </div>
            <div className="form-group">
              <h2>Descrição: {formData.descricao}</h2>
            </div>
            <div className="form-group">
              <label htmlFor="doador">Doador</label>
              <input type="text" id="doador" name="doador" value={formData.doador} onChange={handleChange} required />
            </div>
            <button type="submit" className="cta-button">
              Enviar
            </button>
          </form>
        </div>
        {tokenData && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="popup-content bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl">Recibo da Doação</h2>
                <button className="text-gray-600 hover:text-gray-800" onClick={handleClosePopup}>
                  &times;
                </button>
              </div>
              <img src={tokenData.logo} alt="Token" className="token-image mx-auto mb-4" />
              <p>
                <strong>Network:</strong> {tokenData.network}
              </p>
              <p>
                <strong>Token Type:</strong> {tokenData.type}
              </p>
              <p>
                <strong>Token Name:</strong> {tokenData.name}
              </p>
              <p>
                <strong>Transaction Hash:</strong> {tokenData.hash}
              </p>
              <div className="flex justify-end mt-4">
                <button className="btn btn-secondary mr-2" onClick={handleClosePopup}>
                  Voltar
                </button>
                <button className="btn donate-button mt-4" onClick={() => alert("Token Guardado")}>
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default FormularioDeDoacao;
