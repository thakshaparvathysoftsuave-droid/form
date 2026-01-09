export default function ContactInfo({ setData }) {

  const handle = (e) =>
    setData((p) => ({
      ...p,
      contactInfo: {
        ...p.contactInfo,
        [e.target.name]: e.target.value
      }
    }));

  return (
    <div className="card">
      <h2>Contact Information</h2>

      <input
        name="email"
        placeholder="Email"
        onChange={handle}
      />

      <input
        name="mobile"
        placeholder="Mobile Number"
        onChange={handle}
      />

      <input
        name="alternateMobile"
        placeholder="Alternate Mobile Number"
        onChange={handle}
      />

      <input
        name="office"
        placeholder="Office Number"
        onChange={handle}
      />
    </div>
  );
}

