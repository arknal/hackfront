import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CurrentUserContext } from "./../contexts/CurrentUserContext";
import Menu from "./Menu";

function ProtectedMenu(props) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();

  const config = {};

  if (!currentUser._id) {
    switch (location.pathname) {
      case "/sign-in":
        config.link = "/sign-up";
        config.text = "Регистрация";
        break;
      default:
        config.link = "/sign-in";
        config.text = "Войти";
        break;
    }
  }

  return !currentUser._id && !props.burger ? (
    <nav className="menu">
      <Link to='/' className="menu__item">
        Главная
      </Link>
      <Link to='/faq' className="menu__item">
        FAQ
      </Link>
      <Link to={config.link} className="menu__item header__btn">
        {config.text}
      </Link>
    </nav>
  ) : (
    <Menu {...props} />
  );
}

export default ProtectedMenu;
