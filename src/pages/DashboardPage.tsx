import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";

const DashboardPage: React.FC = () => {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="d-none d-md-block col-md-3 col-lg-2 bg-light border-end p-0">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="col-12 col-md-9 col-lg-10">
        <Navbar />
        <div className="container mt-4">
          <h1>Bienvenido al Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
