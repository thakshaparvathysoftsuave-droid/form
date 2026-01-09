import { useState } from "react";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import JobAssignment from "./components/JobAssignment";
import ContactInfo from "./components/ContactInfo";
import RoleInfo from "./components/RoleInfo";
import AddressDetails from "./components/AddressDetails";
import ActivityHistory from "./components/ActivityHistory";

export default function App() {
  const [data, setData] = useState({});

  // SAVE BUTTON LOGIC
  const handleSave = (e) => {
    e.preventDefault(); // page reload stop

    console.log("Saved Data 👉", data);

    // later backend ku
    // axios.post("/api/save", data);
    alert("Data saved successfully ✅");
  };

  // CANCEL BUTTON LOGIC
  const handleCancel = () => {
    setData({});
  };

  return (
    <form onSubmit={handleSave}>
      <div
        className="app-container"
        style={{ padding: "20px", backgroundColor: "#e6ecff" }}
      >
        <Header />

        {/* Top Section */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <div style={{ flex: 2 }}>
            <UserInfo setData={setData} data={data} />
          </div>
          <div style={{ flex: 1 }}>
            <JobAssignment setData={setData} data={data} />
          </div>
        </div>

        {/* Middle Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <ContactInfo setData={setData} data={data} />
          <RoleInfo setData={setData} data={data} />
          <AddressDetails setData={setData} data={data} />
        </div>

        {/* Bottom Section */}
        <div style={{ marginTop: "20px" }}>
          <ActivityHistory data={data} />
        </div>

        {/* BUTTONS */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <button type="submit" className="btn-primary">
            Save Changes
          </button>

          <button
            type="button"
            className="btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}






