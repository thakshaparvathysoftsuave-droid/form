export default function ActivityHistory() {
  return (
    <section className="section">
      <h2>Activity History</h2>

      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Activity Type</th>
            <th>Address</th>
            <th>IP Address</th>
            <th>Performed By</th>
          </tr>
        </thead>
        <tbody>
          {/* Data will come from backend later */}
        </tbody>
      </table>
    </section>
  );
}
