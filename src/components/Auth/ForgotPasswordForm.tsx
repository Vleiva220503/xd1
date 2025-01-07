import React, { useState } from "react";

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState<{ type: string; message: string } | null>(null);

  const validateEmail = (email: string): boolean => {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setAlert({
        type: "danger",
        message: "Por favor, ingresa un correo electrónico válido.",
      });
    } else {
      setAlert({
        type: "success",
        message: `Se ha enviado un enlace de recuperación a ${email}`,
      });
    }

    // Limpiar la alerta después de 3 segundos
    setTimeout(() => setAlert(null), 3000);
  };

  const isEmailValid = validateEmail(email); // Verificar si el correo es válido

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#f8f9fa",
      }}
    >
      {alert && (
        <div
          className={`alert alert-${alert.type} position-absolute`}
          style={{
            top: "20px",
            maxWidth: "400px",
            borderRadius: "8px",
            padding: "10px 20px",
            fontWeight: "bold",
            zIndex: 1000,
          }}
        >
          {alert.message}
        </div>
      )}

      <div
        className="card shadow-sm p-4"
        style={{
          maxWidth: "400px",
          borderRadius: "16px",
          backgroundColor: "#ffffff",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333" }}>
          <i className="fas fa-key text-primary"></i> Recuperar Contraseña
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label">Correo Electrónico</label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ejemplo: usuario@correo.com"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className={`btn w-100 ${isEmailValid ? "btn-primary" : "btn-secondary"}`}
            style={{
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: isEmailValid ? "pointer" : "not-allowed",
            }}
            disabled={!isEmailValid} // Deshabilita el botón si el correo no es válido
          >
            <i className="fas fa-paper-plane me-2"></i> Enviar Enlace
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
