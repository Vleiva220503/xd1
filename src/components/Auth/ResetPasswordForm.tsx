import React, { useState } from "react";

interface ResetPasswordFormProps {
  onSubmit: (password: string) => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onSubmit }) => {
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState<{ type: string; message: string } | null>(
    null
  );

  const isPasswordValid = (password: string) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPasswordValid(password)) {
      setAlert({
        type: "danger",
        message:
          "La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y un carácter especial.",
      });
      return;
    }
    setAlert({
      type: "success",
      message: "Contraseña restablecida con éxito.",
    });
    setTimeout(() => setAlert(null), 3000);
    onSubmit(password);
  };

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
        margin: "0",
        padding: "0",
      }}
    >
      {/* Alerta */}
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

      {/* Formulario */}
      <div
        className="card p-4 shadow-lg"
        style={{
          maxWidth: "400px",
          width: "100%",
          borderRadius: "16px",
          backgroundColor: "#ffffff",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          className="text-center mb-4"
          style={{ fontWeight: "bold", color: "#333" }}
        >
          <i className="fas fa-lock text-primary"></i> Restablecer Contraseña
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label">
              <i className="fas fa-key me-2 text-secondary"></i> Nueva Contraseña
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="fas fa-key"></i>
              </span>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Introduce tu nueva contraseña"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className={`btn w-100 ${
              isPasswordValid(password) ? "btn-primary" : "btn-secondary"
            }`}
            style={{
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: isPasswordValid(password) ? "pointer" : "not-allowed",
            }}
            disabled={!isPasswordValid(password)}
          >
            <i className="fas fa-redo-alt me-2"></i> Restablecer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
