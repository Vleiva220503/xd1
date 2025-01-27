import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState<{ type: string; message: string } | null>(
    null
  );

  const navigate = useNavigate(); // Hook de navegación

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "admin123") {
      setAlert({
        type: "success",
        message: "¡Inicio de sesión exitoso! Redirigiendo...",
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
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
    <div className="d-flex align-items-center justify-content-center container-fluid" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "#f8f9fa" }}>
      {/* Alerta */}
      {alert && (
        <div className={`alert alert-${alert.type} position-absolute mx-2`} style={{ top: "20px", maxWidth: "400px", borderRadius: "8px", padding: "10px 20px", fontWeight: "bold", zIndex: 1000 }}>
          {alert.message}
        </div>
      )}

      <div className="card p-4 shadow-lg mx-auto mx-sm-3" style={{ maxWidth: "400px", width: "100%", borderRadius: "16px", backgroundColor: "#ffffff", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)" }}>
        <h3 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333" }}>
          <i className="fas fa-user-circle text-primary"></i> Iniciar Sesión
        </h3>
        <form onSubmit={handleLogin}>
          {/* Campo de correo */}
          <div className="mb-4">
            <label className="form-label">Correo Electrónico</label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="fas fa-envelope"></i>
              </span>
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ejemplo: usuario@correo.com" required />
            </div>
          </div>

          {/* Campo de contraseña */}
          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="fas fa-lock"></i>
              </span>
              <input type={showPassword ? "text" : "password"} className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Tu contraseña" required />
              <button
                type="button"
                className="btn btn-light border"
                onClick={() => setShowPassword(!showPassword)}
                style={{ borderRadius: "0 0.25rem 0.25rem 0" }}
              >
                <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} text-secondary`}></i>
              </button>
            </div>
          </div>

          {/* Botón de inicio de sesión */}
          <button
            type="submit"
            className={`btn w-100 ${isFormValid ? "btn-primary" : "btn-secondary"}`}
            style={{ borderRadius: "8px", fontWeight: "bold", cursor: isFormValid ? "pointer" : "not-allowed" }}
            disabled={!isFormValid}
          >
            <i className="fas fa-sign-in-alt me-2"></i> Iniciar Sesión
          </button>

          {/* Enlace para restablecer contraseña */}
          <div className="text-center mt-3">
            <button
              type="button"
              className="btn btn-link text-decoration-none text-secondary"
              onClick={() => navigate("/reset-password")} // Navegación con React Router
              style={{ padding: 0 }}
            >
              <i className="fas fa-question-circle me-1"></i> ¿Olvidaste tu contraseña?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
