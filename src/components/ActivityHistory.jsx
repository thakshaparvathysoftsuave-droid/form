import React from "react";

export default function ActivityHistory({ activities = [] }) {
  return (
    <div className="card">
      <h3>Activity History</h3>

      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Date</th>
            <th>User</th>
          </tr>
        </thead>

        <tbody>
          {activities.length > 0 ? (
            activities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.action}</td>
                <td>{activity.date}</td>
                <td>{activity.user}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No activity found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
