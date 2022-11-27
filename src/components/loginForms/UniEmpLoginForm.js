import { Link } from "react-router-dom";
import { useState } from 'react';
import { userController } from '../../controllers/userController';

function UniEmpLoginForm(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  function handleEmailChange(event) {
    setState({...state, email: event.target.value})
  }

  function handlePasswordChange(event) {
    setState({...state, password: event.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    userController
      .login(state)
      .then(({ token }) => {
        localStorage.setItem('token', token);
        userController.getUserInfo()
          .then(({ user }) => props.onLogin({ ...user, type: 'user' }))
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
      .finally(() => setIsLoading(false))
  }

  return (
    <form className="form login__form" onSubmit={handleSubmit}>
      <h2 className="form__title form__title_text-align_center">
        Вход для сотрудников университета
      </h2>
      <div className="form__field">
        <input
          required
          value={state.email}
          onChange={handleEmailChange}
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
          onChange={handlePasswordChange}
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
        {isLoading ? "Вход..." : "Войти"}
      </button>
      <Link to="/sign-up" className="login__link">
        Нет аккаунта? Зарегистрироваться
      </Link>
    </form>
  );
}

export default UniEmpLoginForm;