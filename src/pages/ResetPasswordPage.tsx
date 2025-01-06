import React from "react";
import ResetPasswordForm from "../components/Auth/ResetPasswordForm";

const ResetPasswordPage: React.FC = () => {
  // Manejo del envío de la nueva contraseña
  const handleResetPassword = (password: string) => {
    console.log("Nueva contraseña establecida:", password);
    // Lógica adicional, como llamada a API o redirección, puede ir aquí
    alert("Contraseña restablecida con éxito.");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-4">Restablecer tu Contraseña</h2>
        <ResetPasswordForm onSubmit={handleResetPassword} />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
