import Header from "./components/Header";
import UserInformation from "./components/UserInformation";
import JobAssignment from "./components/JobAssignment";
import ContactInformation from "./components/ContactInformation";
import RoleInformation from "./components/RoleInformation";
import AddressDetails from "./components/AddressDetails";
import ActivityHistory from "./components/ActivityHistory";

export default function App() {
  return (
    <div className="app">
      <Header />

      <div className="card">
        <UserInformation />
        <JobAssignment />
        <ContactInformation />
        <RoleInformation />
        <AddressDetails />
        <ActivityHistory />

        <div className="actions">
          <button className="save">Save Changes</button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}
