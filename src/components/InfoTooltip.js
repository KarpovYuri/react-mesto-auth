import React from "react";
import useEscClose from "../hooks/useEscClose";


function InfoTooltip({ isOpen, onClose, regStatus }) {

  // Закрытие попапов по Escape
  useEscClose(isOpen, onClose);

  return (
    <article className={`popup ${isOpen && 'popup_opened'}`}>
      <div onClick={onClose} className="popup__overlay"></div>
      <div className="popup__container popup__container_show_form">
        <div
          className={`popup__reg-status ${regStatus ? 'popup__reg-status_success' : 'popup__reg-status_fail'}`}
        >
        </div>
        <h2 className="popup__title popup__title_bottom">
          {regStatus ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}
        </h2>
        <button
          type="button"
          aria-label="Кнопка закрытия окна"
          className="popup__close-button fade-opacity"
          onClick={onClose}>
        </button>
      </div>
    </article>
  )
}


export default InfoTooltip;
