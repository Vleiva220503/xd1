import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="d-flex flex-column bg-light vh-100 p-3">
      <h4>Dashboard</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/dashboard/users" className="nav-link">
            Seguridad - Usuarios
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
