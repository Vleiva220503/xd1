import React, { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";

const DashboardPage: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div
        className={`col-12 col-md-3 col-lg-2 bg-light border-end p-0 ${
          isSidebarOpen ? "d-block" : "d-none d-md-block"
        }`}
      >
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="col-12 col-md-9 col-lg-10">
        <Navbar />
        {/* Botón para mostrar el sidebar en móviles y botón de salir */}
        <div className="d-flex justify-content-between align-items-center mt-2">
          <button
            className="btn btn-light d-md-none"
            onClick={toggleSidebar}
            style={{
              fontSize: "1.5rem",
              zIndex: 1100,
            }}
          >
            <i className="fas fa-bars"></i> {/* Ícono de menú (hamburguesa) */}
          </button>
        </div>

        <div className="container mt-4">
          <h1>Bienvenido al Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
