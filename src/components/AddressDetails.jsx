import React from "react";

export default function AddressDetails({ setData }) {
  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="card">
      <h2>Address Details</h2>

      <input
        type="text"
        name="street"
        placeholder="Street Address"
        onChange={handleChange}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={handleChange}
      />

      {/* ✅ Extra field */}
      <input
        type="text"
        name="state"
        placeholder="State"
        onChange={handleChange}
      />

      <input
        type="text"
        name="zip"
        placeholder="Zip Code"
        onChange={handleChange}
      />
    </div>
  );
}

