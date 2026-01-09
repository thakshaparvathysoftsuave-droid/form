export default function UserInfo({ setData }) {

  const handle = (e) =>
    setData((p) => ({
      ...p,
      userInfo: {
        ...p.userInfo,
        [e.target.name]: e.target.value
      }
    }));

  const handleImage = (e) => {
    setData((p) => ({
      ...p,
      userInfo: {
        ...p.userInfo,
        profileImage: e.target.files[0]
      }
    }));
  };

  return (
    <div className="section">
      <h2>User Information</h2>

      <div
        className="user-row"
        style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
      >
        {/* Profile Upload Box */}
        <div
          className="profile-box"
          style={{
            width: "110px",
            height: "140px",
            border: "2px dashed #bbb",
            borderRadius: "6px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            color: "#666",
          }}
        >
          <div style={{ fontSize: "32px" }}>👤</div>
          <label style={{ cursor: "pointer", marginTop: "6px" }}>
            Upload
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              style={{ display: "none" }}
            />
          </label>
        </div>

        {/* Form Grid */}
        <div
          className="form-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            flex: 1,
          }}
        >
          <input name="firstName" placeholder="First Name" onChange={handle} />
          <input name="lastName" placeholder="Last Name" onChange={handle} />

          <input name="username" placeholder="Username" onChange={handle} />
          <input name="employeeId" placeholder="Employee ID" onChange={handle} />

          <select name="status" onChange={handle}>
            <option value="">Account Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <input name="email" type="email" placeholder="Email Address" onChange={handle} />
          <input name="phone" type="tel" placeholder="Phone Number" onChange={handle} />

          <input name="department" placeholder="Department" onChange={handle} />
          <input name="role" placeholder="Role" onChange={handle} />

          <input name="dateOfJoining" type="date" onChange={handle} />
        </div>
      </div>
    </div>
  );
}
