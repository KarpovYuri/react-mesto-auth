import { useState } from 'react';
import useValidation from "../hooks/useValidation";


export default function Login({ onLogin }) {

  // Созданиее стейт переменных для валидации
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    inputEmailValid,
    inputEmailError,
    inputEmailTouched
  } = useValidation(email, { isEmpty: true, isEmail: true }, 'Email');
  const {
    inputPasswordValid,
    inputPasswordError,
    inputPasswordTouched
  } = useValidation(password, { isEmpty: true, minLength: 5 }, 'Password');


  // Устанавливаем Email пользователя
  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }


  // Устанавливаем пароль пользователя
  function handleChangePassword(event) {
    setPassword(event.target.value);
  }


  function handleSubmit(event) {
    // Запрещаем браузеру переходить по адресу формы
    event.preventDefault();
    onLogin(email, password);
  }


  return (
    <form
      className="auth-form"
      onSubmit={handleSubmit}
      name="signInForm"
      noValidate
    >
      <h2 className="auth-form__title">Вход</h2>
      <input
        value={email || ''}
        onChange={handleChangeEmail}
        className={`auth-form__field ${!inputEmailValid && inputEmailTouched && 'auth-form__field_type_error'}`}
        placeholder="Email"
        type="email"
        name="email"
        id="emailInput"
        autoComplete="off"
      />
      <span className={`auth-form__input-error ${!inputEmailValid && inputEmailTouched && 'auth-form__input-error_active'}`}>
        {inputEmailError}
      </span>
      <input
        value={password || ''}
        onChange={handleChangePassword}
        className={`auth-form__field ${!inputPasswordValid && inputPasswordTouched && 'auth-form__field_type_error'}`}
        placeholder="Пароль"
        type="password"
        name="password"
        id="passwordInput"
        autoComplete="off"
      />
      <span className={`auth-form__input-error ${!inputPasswordValid && inputPasswordTouched && 'auth-form__input-error_active'}`}>
        {inputPasswordError}
      </span>
      <button className="auth-form__btn" type="submit" aria-label="Кнопка входа">Войти</button>
    </form>
  )

}
