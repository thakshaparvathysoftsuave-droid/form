import { useNavigate } from "react-router-dom";

export default function DashboardUsers() {
  const navigate = useNavigate();

  // dummy data (later backend la irunthu varum)
  const users = [
    { id: 1, name: "John Doe", role: "Admin", email: "john@test.com" },
    { id: 2, name: "Sara Smith", role: "Employee", email: "sara@test.com" },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>User Details Management</h2>

        <button
          onClick={() => navigate("/add-user")}
          style={btnPrimary}
        >
          + Add User
        </button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td style={{ textAlign: "center" }}>
                <button
                  style={btnEdit}
                  onClick={() => navigate(`/edit-user/${u.id}`)}
                >
                  Edit
                </button>

                <button style={btnDelete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ===== styles (local – no CSS conflict) ===== */
const tableStyle = {
  width: "100%",
  marginTop: "20px",
  borderCollapse: "collapse",
  background: "#fff",
};

const btnPrimary = {
  padding: "10px 16px",
  borderRadius: "8px",
  border: "none",
  background: "#2563eb",
  color: "#fff",
  cursor: "pointer",
};

const btnEdit = {
  padding: "6px 10px",
  marginRight: "8px",
  borderRadius: "6px",
  border: "none",
  background: "#22c55e",
  color: "#fff",
  cursor: "pointer",
};

const btnDelete = {
  padding: "6px 10px",
  borderRadius: "6px",
  border: "none",
  background: "#ef4444",
  color: "#fff",
  cursor: "pointer",
};
