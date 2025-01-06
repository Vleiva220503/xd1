import React, { useState } from "react";
import Navbar from "../components/Dashboard/Navbar";
import UserTable from "../components/Dashboard/UserTable";
import UserForm from "../components/Dashboard/UserForm";
import Sidebar from "../components/Dashboard/Sidebar"; // Importamos el Sidebar
import { User } from "../types/user";

const UserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Admin", email: "admin@example.com", password: "admin123", role: "admin", active: true },
    { id: 2, name: "User", email: "user@example.com", password: "user123", role: "user", active: true },
  ]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isFormVisible, setFormVisible] = useState(false);

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
          <button className="btn btn-success mb-3" onClick={() => setFormVisible(true)}>
            Crear Usuario
          </button>
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
