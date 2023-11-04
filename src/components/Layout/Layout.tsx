import Sidebar from "../sidebar/Sidebar";
import NavbarApp from "../navbar/NavbarApp";

const Layout = () => {
  return (
    <div className="app-content grid grid-cols-dash">
      <Sidebar />
      <NavbarApp />
    </div>
  );
};

export default Layout;
