import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState<{ type: string; message: string } | null>(null);

  const navigate = useNavigate(); // Hook para redirigir al usuario

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "admin123") {
      setAlert({
        type: "success",
        message: "¡Inicio de sesión exitoso! Redirigiendo...",
      });

      // Redirigir al dashboard después de un breve retraso
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000); // 2 segundos para mostrar el mensaje
    } else {
      setAlert({
        type: "danger",
        message: "Credenciales incorrectas. Por favor, inténtalo de nuevo.",
      });
    }

    setTimeout(() => setAlert(null), 3000);
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

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
          <i className="fas fa-user-circle text-primary"></i> Iniciar Sesión
        </h3>
        <form onSubmit={handleLogin}>
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

          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Tu contraseña"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className={`btn w-100 ${isFormValid ? "btn-primary" : "btn-secondary"}`}
            style={{
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: isFormValid ? "pointer" : "not-allowed",
            }}
            disabled={!isFormValid}
          >
            <i className="fas fa-sign-in-alt me-2"></i> Iniciar Sesión
          </button>

          <div className="text-center mt-3">
            <a
              href="/forgot-password"
              className="text-decoration-none text-secondary"
            >
              <i className="fas fa-question-circle me-1"></i> ¿Olvidaste tu
              contraseña?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
