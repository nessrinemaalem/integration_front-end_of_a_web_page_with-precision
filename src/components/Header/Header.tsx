import "./Header.scss";
import logo from "../../assets/logo-sporteasy.svg";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
    </header>
  );
};
