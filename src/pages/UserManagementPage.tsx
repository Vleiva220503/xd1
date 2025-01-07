import React, { useState } from "react";
import Navbar from "../components/Dashboard/Navbar";
import UserTable from "../components/Dashboard/UserTable";
import UserForm from "../components/Dashboard/UserForm";
import Sidebar from "../components/Dashboard/Sidebar";
import { User } from "../types/user";

const UserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Admin", email: "admin@example.com", password: "admin123", role: "admin", active: true },
    { id: 2, name: "User", email: "user@example.com", password: "user123", role: "user", active: true },
  ]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleFormSubmit = (user: User | Omit<User, "id">) => {
    if ("id" in user) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      const newUser: User = { ...user, id: Date.now(), active: user.active ?? true };
      setUsers([...users, newUser]);
    }
    setEditingUser(null);
    setFormVisible(false);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleEditClick = (user: User) => {
    setEditingUser(user);
    setFormVisible(true);
  };

  const handleCancel = () => {
    setEditingUser(null);
    setFormVisible(false);
  };

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div
        className={`col-12 col-md-3 col-lg-2 bg-light border-end p-0 position-fixed h-100 ${
          isSidebarOpen ? "d-block" : "d-none d-md-block"
        }`}
        style={{ zIndex: 1050 }}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="col-12 col-md-9 col-lg-10 offset-md-3 offset-lg-2">
        <Navbar />

        {/* Botón de menú (icono de hamburguesa), solo visible si el sidebar está cerrado */}
        <div className="d-flex justify-content-between align-items-center mt-2">
          {!isSidebarOpen && (
            <button
              className="btn btn-light d-md-none"
              onClick={handleToggleSidebar}
              style={{
                fontSize: "1.5rem",
                zIndex: 1100,
              }}
            >
              <i className="fas fa-bars"></i> {/* Icono de menú (FontAwesome) */}
            </button>
          )}
          <button className="btn btn-success" onClick={() => setFormVisible(true)}>
            Crear Usuario
          </button>
        </div>

        <div className="container mt-4">
          {isFormVisible && (
            <UserForm
              user={editingUser || undefined}
              onSubmit={handleFormSubmit}
              onCancel={handleCancel}
            />
          )}
          <UserTable users={users} onEdit={handleEditClick} onDelete={handleDeleteUser} />
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
