import Header from "./components/Header";
import UserInfo from "./components/UserInformation";
import ContactInfo from "./components/ContactInformation";
import RoleInfo from "./components/RoleInformation";
import AddressDetails from "./components/AddressDetails";
import ActivityHistory from "./components/ActivityHistory";
import JobAssignment from "./components/JobAssignment";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="card">
        <UserInfo />

        <div className="grid-3">
          <ContactInfo />
          <RoleInfo />
          <AddressDetails />
        </div>

        <ActivityHistory />
        <JobAssignment/>
      </div>
    </div>
  );
}

export default App;