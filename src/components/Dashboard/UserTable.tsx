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
        border: "1px solid #E5E7EB",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        overflowX: "auto",
      }}
    >
      <table
        className="table table-hover align-middle text-center"
        style={{
          backgroundColor: "#FFFFFF",
          minWidth: "700px", // Ancho mínimo para que los datos se muestren correctamente
        }}
      >
        <thead
          style={{
            backgroundColor: "#00aae4",
            color: "#FFFFFF",
          }}
        >
          <tr>
            <th style={{ verticalAlign: "middle" }}>Nombre</th>
            <th style={{ verticalAlign: "middle" }}>Email</th>
            <th style={{ verticalAlign: "middle" }}>Rol</th>
            <th style={{ verticalAlign: "middle" }}>Estado</th>
            <th style={{ verticalAlign: "middle" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F5F5F5",
              }}
            >
              <td style={{ verticalAlign: "middle" }}>{user.name}</td>
              <td style={{ verticalAlign: "middle" }}>{user.email}</td>
              <td style={{ verticalAlign: "middle" }}>{user.role}</td>
              <td style={{ verticalAlign: "middle" }}>
                <span
                  className="badge"
                  style={{
                    backgroundColor: user.active ? "#A3E635" : "#F87171",
                    color: "#FFFFFF",
                    padding: "5px 10px",
                    borderRadius: "15px",
                    fontWeight: "bold",
                  }}
                >
                  {user.active ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td style={{ verticalAlign: "middle" }}>
                <div className="d-flex justify-content-center gap-2">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => onEdit(user)}
                    title="Editar"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="bi bi-pencil-square" style={{ fontSize: "1.2rem" }}></i>
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelete(user.id)}
                    title="Eliminar"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="bi bi-trash" style={{ fontSize: "1.2rem" }}></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
