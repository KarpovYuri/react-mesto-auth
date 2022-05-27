import { useState } from 'react';


export default function Login({ onLogin }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


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
        className="auth-form__field"
        placeholder="Email"
        type="email"
        name="email"
        id="emailInput"
        autoComplete="off"
      />
      <input
        value={password || ''}
        onChange={handleChangePassword}
        className="auth-form__field"
        placeholder="Пароль"
        type="password"
        name="password"
        id="passwordInput"
        autoComplete="off"
      />
      <button className="auth-form__btn" type="submit" aria-label="Кнопка входа">Войти</button>
    </form>
  )

}
