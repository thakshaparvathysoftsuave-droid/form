export default function Header() {
  return (
    <header className="header">
      <h1>User Details Management</h1>

      <nav>
        <button className="active">Users</button>
        <button>Roles</button>
        <button>Territories</button>
        <button>Access Logs</button>
      </nav>
    </header>
  );
}
