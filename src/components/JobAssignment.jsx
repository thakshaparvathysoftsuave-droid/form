export default function JobAssignment({ setData }) {

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      jobAssignment: {
        ...prev.jobAssignment,
        [e.target.name]: e.target.value,
      },
    }));
  };

  return (
    <div className="section">
      <h2>Job Assignment</h2>

      <div className="field">
        <label>Primary Role</label>
        <select name="primaryRole" onChange={handleChange} defaultValue="">
          <option value="" disabled>Select Primary Role</option>
          <option>Admin</option>
          <option>Manager</option>
          <option>User</option>
        </select>
      </div>

      <div className="field">
        <label>Division</label>
        <select name="division" onChange={handleChange} defaultValue="">
          <option value="" disabled>Select Division</option>
          <option>Sales</option>
          <option>Engineering</option>
          <option>HR</option>
        </select>
      </div>

      <div className="field">
        <label>Territory</label>
        <select name="territory" onChange={handleChange} defaultValue="">
          <option value="" disabled>Select Territory</option>
          <option>North</option>
          <option>South</option>
          <option>East</option>
          <option>West</option>
        </select>
      </div>

      <div className="field">
        <label>Timezone</label>
        <select name="timezone" onChange={handleChange} defaultValue="">
          <option value="" disabled>Select Timezone</option>
          <option>GMT +5:30</option>
          <option>GMT +0</option>
          <option>GMT -5</option>
        </select>
      </div>

      <div className="field">
        <label>Work Location</label>
        <select name="workLocation" onChange={handleChange} defaultValue="">
          <option value="" disabled>Select Location</option>
          <option>Chennai</option>
          <option>Bangalore</option>
          <option>Remote</option>
        </select>
      </div>
    </div>
  );
}

