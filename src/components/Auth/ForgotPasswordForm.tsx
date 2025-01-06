import React, { useState } from "react";

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Se ha enviado un enlace de recuperación a ${email}`);
  };

  return (
    <div className="card shadow-sm p-4" style={{ maxWidth: "400px", margin: "auto", borderRadius: "8px" }}>
      <h3 className="text-center mb-4">Recuperar Contraseña</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Enviar Enlace
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
