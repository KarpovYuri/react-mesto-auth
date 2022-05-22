import React from "react";
import useEscClose from "../hooks/useEscClose";

function ImagePopup({ isOpen, card, onClose, closeAllPopups }) {

  // Закрытие попапов по Escape
  useEscClose(isOpen, closeAllPopups);

  return (
    <article className={`popup ${isOpen && 'popup_opened'}`}>
      <div onClick={onClose} className="popup__overlay popup__overlay_theme_dark"></div>
      <div className="popup__container popup__container_show_image">
        <img
          src={card.link}
          alt={card.name}
          className="popup__image"
        />
        <p className="popup__signature">{card.name}</p>
        <button
          type="button"
          aria-label="Кнопка закрытия окна"
          className="popup__close-button fade-opacity"
          onClick={onClose}>
        </button>
      </div>
    </article>
  );

}


export default ImagePopup;
