export default function RoleInformation() {
  return (
    <section className="section">
      <h2>Role Information</h2>

      <div className="checkbox-group">
        <label><input type="checkbox" /> Administrator</label>
        <label><input type="checkbox" /> Allow Access to Quotes</label>
        <label><input type="checkbox" /> Allow Access to Submittals</label>
        <label><input type="checkbox" /> Allow Access to Financials</label>
        <label><input type="checkbox" /> Allow Access to Releases</label>
      </div>
    </section>
  );
}
