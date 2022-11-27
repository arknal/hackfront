import { Link } from 'react-router-dom';

function Menu(props) {

  return props.burger ? (
    <nav
      className={`header__burger-menu${
        props.isActive ? " header__burger-menu_active" : ""
      }`}
    >
      <Link to='/' className="menu__item">
        Главная
      </Link>
      <Link to='/faq' className="menu__item">
        FAQ
      </Link>
      <Link to='/cabinet' className="menu__item">
        Личный кабинет
      </Link>
      <button type="button" className="menu__logout" onClick={props.onSignout}>
        Выйти
      </button>
    </nav>
  ) : (
      <nav className="menu">
      <Link to='/' className="menu__item">
        Главная
      </Link>
      <Link to='/faq' className="menu__item">
        FAQ
      </Link>
      <Link to='/cabinet' className="menu__item">
        Личный кабинет
      </Link>
      <button type="button" className="menu__logout" onClick={props.onSignout}>
        Выйти
      </button>
    </nav>
  );
}

export default Menu;
