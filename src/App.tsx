import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import UserManagementPage from "./pages/UserManagementPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/users" element={<UserManagementPage />} />
      </Routes>
    </Router>
  );
};

export default App;
