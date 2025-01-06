import React from "react";
import { User } from "../../types/user";

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onEdit, onDelete }) => {
  return (
    <div
      className="table-responsive"
      style={{
        border: "1px solid #E5E7EB", // Borde gris claro
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <table
        className="table table-hover align-middle"
        style={{
          backgroundColor: "#FFFFFF", // Fondo blanco
        }}
      >
        <thead
          style={{
            backgroundColor: "#00aae4", // Gris oscuro suave
            color: "#FFFFFF", // Texto blanco
            textAlign: "center",
          }}
        >
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5", // Alternancia entre blanco y gris claro
              }}
            >
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="text-center">
                <span
                  className={`badge`}
                  style={{
                    backgroundColor: user.active ? "#A3E635" : "#F87171", // Verde para activo, rojo para inactivo
                    color: "#FFFFFF", // Texto blanco
                    padding: "5px 10px",
                    borderRadius: "15px",
                    fontWeight: "bold",
                  }}
                >
                  {user.active ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td className="text-center">
                <button
                  className="btn btn-link p-0 text-primary me-2"
                  onClick={() => onEdit(user)}
                  title="Editar"
                >
                  <i
                    className="bi bi-pencil-square"
                    style={{
                      fontSize: "1.2rem",
                      color: "#2563EB", // Azul profesional
                    }}
                  ></i>
                </button>
                <button
                  className="btn btn-link p-0 text-danger"
                  onClick={() => onDelete(user.id)}
                  title="Eliminar"
                >
                  <i
                    className="bi bi-trash"
                    style={{
                      fontSize: "1.2rem",
                      color: "#DC2626", // Rojo profesional
                    }}
                  ></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
