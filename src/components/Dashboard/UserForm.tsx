import React, { useState, useEffect } from "react";
import { User } from "../../types/user";

interface UserFormProps {
  user?: User;
  onSubmit: (user: Omit<User, "id">) => void;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Omit<User, "id">>({
    name: "",
    email: "",
    password: "",
    role: "",
    active: true,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      const { id, ...rest } = user;
      setFormData(rest);
    }
  }, [user]);

  const validateForm = () => {
    return (
      formData.name.trim() !== "" &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.password.length >= 6 &&
      formData.role !== ""
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validación básica en tiempo real
    switch (name) {
      case "name":
        setErrors((prev) => ({
          ...prev,
          name: value.trim() === "" ? "El nombre es obligatorio." : "",
        }));
        break;
      case "email":
        setErrors((prev) => ({
          ...prev,
          email: !/\S+@\S+\.\S+/.test(value) ? "Correo no válido." : "",
        }));
        break;
      case "password":
        setErrors((prev) => ({
          ...prev,
          password: value.length < 6 ? "Mínimo 6 caracteres." : "",
        }));
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 mx-auto"
      style={{
        maxWidth: "450px", // Más ancho para mejor estética
        borderRadius: "10px",
        border: "1px solid #dee2e6",
      }}
    >
      <h5 className="text-center mb-4 text-primary">
        <i className="fas fa-user-edit"></i> {user ? "Editar Usuario" : "Crear Usuario"}
      </h5>

      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          placeholder="Ingresa tu nombre"
          required
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Correo Electrónico</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          placeholder="ejemplo@correo.com"
          required
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Contraseña</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          placeholder="Mínimo 6 caracteres"
          required
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Rol</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Seleccionar...</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
        </select>
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          name="active"
          checked={formData.active}
          onChange={(e) =>
            setFormData({ ...formData, active: e.target.checked })
          }
          className="form-check-input"
        />
        <label className="form-check-label">Activo</label>
      </div>

      <div className="d-flex justify-content-between">
        {/* Botón de Cancelar */}
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={onCancel}
        >
          <i className="bi bi-x-circle"></i> Cancelar
        </button>

        {/* Botón Crear/Actualizar */}
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: !validateForm() ? "#c6c6c6" : "#007bff",
            cursor: !validateForm() ? "not-allowed" : "pointer",
            borderColor: !validateForm() ? "#c6c6c6" : "#007bff",
          }}
          disabled={!validateForm()}
        >
          <i className="fas fa-save"></i> {user ? "Actualizar" : "Crear"}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
