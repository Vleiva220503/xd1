import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {

  return (
    <div className="d-flex flex-column bg-light vh-100 p-3" id="sidebar">
      
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
        <li>
          <Link to="/" className="nav-link">
          Cerrar Sesión
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
