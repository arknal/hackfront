import { Link } from "react-router-dom";
import { useState } from 'react';
import { companyController } from '../../controllers/companyController';
import { useHistory } from 'react-router-dom';

function PartnerRegisterForm(props) {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [state, setState] = useState({
    inn: '',
    title: '',
    email: '',
    password: '',
  })

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    companyController
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
        Регистрация для партнеров
      </h2>
      <div className="form__field">
        <input
          required
          value={state.inn}
          onChange={(e) => setState({ ...state, inn: e.target.value })}
          className="form__input"
          placeholder="ИНН"
        />
        <span className="form__error last-name-error"></span>
      </div>
      <div className="form__field">
        <input
          required
          value={state.title}
          onClick={(e) => {
            companyController.checkInn(state.inn)
              .then((res) => {
                setState({...state, title: res.suggestions[0].data.name.short_with_opf})
              })
          }}
          onChange={(e) => setState({ ...state, title: e.target.value })}
          className="form__input"
          placeholder="Название"
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

export default PartnerRegisterForm;