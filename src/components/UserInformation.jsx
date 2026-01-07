export default function UserInformation() {
  return (
    <section className="section">
      <h2>User Information</h2>

      <div className="grid">
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Username" />
        <input placeholder="Employee ID" />

        <select>
          <option value="">Account Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
    </section>
  );
}
