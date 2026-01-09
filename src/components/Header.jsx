// Header.jsx
import { useState } from "react";

export default function Header({ onSave, onCancel }) {
  const [activeTab, setActiveTab] = useState("USERS"); // default active tab

  const tabs = ["USERS", "ROLES", "TERRITORIES", "ACCESS LOGS"];

  return (
    <div className="header-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1 className="page-title">User Details Management</h1>

      <div className="header-right" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {/* Tabs */}
        <div className="tabs" style={{ display: "flex", gap: "10px" }}>
          {tabs.map(tab => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "5px 15px",
                border: "none",
                borderBottom: activeTab === tab ? "3px solid #2563eb" : "3px solid transparent",
                background: "none",
                cursor: "pointer",
                fontWeight: activeTab === tab ? "600" : "400",
                color: activeTab === tab ? "#2563eb" : "#555"
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className="header-buttons" style={{ display: "flex", gap: "10px" }}>
          <button className="save-btn" onClick={onSave} style={{ background: "#2563eb", color: "#fff", padding: "6px 12px", border: "none", borderRadius: "4px" }}>
            Save Changes
          </button>
          <button className="cancel-btn" onClick={onCancel} style={{ background: "#f3f4f6", color: "#111", padding: "6px 12px", border: "1px solid #ccc", borderRadius: "4px" }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

