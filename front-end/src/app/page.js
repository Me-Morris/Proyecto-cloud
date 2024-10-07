import Appname from "./components/appname";
import Addcontact from "./components/addcontact";
import ContactList from "./components/ContactList"; 

export default function Home() {
  return (
    <div className="bg-neutral-900 m-5">
      <Appname />
      <Addcontact />
      <ContactList /> {/* Asegúrate de usar ContactList aquí */}
    </div>
  );
}
