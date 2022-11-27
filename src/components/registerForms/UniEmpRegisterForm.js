import { Link } from "react-router-dom";
import { useState } from 'react';
import { userController } from '../../controllers/userController';
import { useHistory } from 'react-router-dom';

function UniEmpRegisterForm(props) {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    partName: '',
    isAdmin: true
  })

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    userController
      .register(state)
      .then(() => {
        alert('Вы успешно зарегистрировались!');
        history.push('/sign-in');
      })
      .catch(e => console.log(e))
      .finally(() => setIsLoading(false))
  }

  return (
    <form className="form login__form" onSubmit={handleSubmit}>
      <h2 className="form__title form__title_text-align_center">
        Регистрация для сотрудников университета
      </h2>
      <div className="form__field">
        <input
          required
          value={state.lastName}
          onChange={(e) => setState({...state, lastName: e.target.value})}
          className="form__input"
          placeholder="Фамилия"
        />
        <span className="form__error last-name-error"></span>
      </div>
      <div className="form__field">
        <input
          required
          value={state.firstName}
          onChange={(e) => setState({...state, firstName: e.target.value})}
          className="form__input"
          placeholder="Имя"
        />
        <span className="form__error first-name-error"></span>
      </div>

      <div className="form__field">
        <input
          required
          value={state.patrName}
          onChange={(e) => setState({...state, patrName: e.target.value})}
          className="form__input"
          placeholder="Отчество"
        />
        <span className="form__error first-name-error"></span>
      </div>
      <div className="form__field">
        <input
          required
          value={state.email}
          onChange={(e) => setState({...state, email: e.target.value})}
          type="email"
          className="form__input"
          placeholder="Электронная почта"
        />
        <span className="form__error email-error"></span>
      </div>
      <div className="form__field">
        <input
          required
          value={state.password}
          onChange={(e) => setState({...state, password: e.target.value})}
          type="password"
          className="form__input"
          placeholder="Пароль"
        />
        <span className="form__error password-error"></span>
      </div>
      <button
        className="form__submit-btn login__btn"
        type="submit"
      >
        {isLoading ? "Регистрация..." : "Зарегистрироваться"}
      </button>
      <Link to="/sign-in" className="login__link">
        Есть аккаунт? Войти
      </Link>
    </form>
  );
}

export default UniEmpRegisterForm;