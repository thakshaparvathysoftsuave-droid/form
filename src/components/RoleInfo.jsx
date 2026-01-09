import React from "react";

const RolesCheckbox = () => {
  const roles = ["Admin", "Employee", "Manager", "Supervisor"]; // extra role added

  return (
    <div style={styles.container}>
      <div style={styles.title}>Role Information</div>

      <div style={styles.grid}>
        {roles.map((role) => (
          <React.Fragment key={role}>
            {/* TEXT */}
            <span style={styles.text}>{role}</span>

            {/* CHECKBOX */}
            <input type="checkbox" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    width: "300px",
  },
  title: {
    fontWeight: "600",
    marginBottom: "12px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 40px", // 👈 text | checkbox
    rowGap: "10px",
    alignItems: "center",
  },
  text: {
    fontSize: "14px",
  },
};

export default RolesCheckbox;
