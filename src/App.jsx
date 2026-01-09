import "./App.css";
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
  const [resetKey, setResetKey] = useState(0); // 🔑 important

  const handleSave = () => {
    console.log("Saved Data:", data);

    alert("Data Saved Successfully ✅");
  };

  const handleCancel = () => {
    setData({});
    setResetKey(prev => prev + 1); // 🔥 force form reset

    alert("Changes Cancelled ❌");
  };

  return (
    <div className="app" key={resetKey}>
      <Header onSave={handleSave} onCancel={handleCancel} />

      {/* ===== TOP SECTION ===== */}
      <div className="top-row">
        <div className="left-column">
          <UserInfo setData={setData} />
          <ActivityHistory />
        </div>

        <JobAssignment setData={setData} />
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="bottom-grid">
        <ContactInfo setData={setData} />
        <RoleInfo setData={setData} />
        <AddressDetails setData={setData} />
      </div>
    </div>
  );
}

