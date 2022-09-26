import Button from "../Button";
import Logo from "../Logo";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <div className="container__header">
        <Logo />
        <Button name={"Inicio"} />
      </div>
    </header>
  );
};

export default Header;
