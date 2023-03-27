// External Imports
import { Link } from "react-router-dom";

// Internal Imports
import Logo from "./Logo";
import PrimaryButton from "./Buttons/PrimaryButton";

const NavbarItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/status",
    title: "Live Status",
  },
  {
    path: "/history",
    title: "History",
  },
];

const NavItem = (props) => {
  return (
    <Link to={props.path}>
      <p className="nav-link">{props.title}</p>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar center justify-between">
      <Logo style={{ color: "var(--secondary)" }} />
      <div className="center links-container">
        {NavbarItems.map((navbarItem, index) => (
          <NavItem key={index} {...navbarItem} />
        ))}
      </div>
      <PrimaryButton label={"Login"} link={"/login"} />
    </nav>
  );
};

export default Navbar;
