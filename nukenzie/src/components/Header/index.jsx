import Button from "../Button";
import Logo from "../Logo";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <div className="container__header">
        <Logo />
        <Button />
      </div>
    </header>
  );
};

export default Header;
