import React, { useState } from "react";
import PopupWhithForm from "./PopupWithForm";
import useValidation from "../hooks/useValidation";


function AddPlacePopup({ isOpen, onClose, onStop, onAddPlace, isRenderLoading, closeAllPopups }) {

  // Стейты для валидации и очистки формы
  const [placeName, setPlaceName] = useState('');
  const [placeLink, setPlaceLink] = useState('');


  // Запуск валидации
  const {
    inputNameValid,
    inputNameError,
    inputNameTouched } = useValidation(placeName, { isEmpty: true, minLength: 5, maxLength: 30 }, 'Name');
  const {
    inputLinkValid,
    inputLinkError,
    inputLinkTouched } = useValidation(placeLink, { isEmpty: true, isLink: true }, 'Link');


  // Установка названия места
  function handleChangePlaceName(event) {
    setPlaceName(event.target.value);
  }


  // Устанавливаем ссылку на изображение места
  function handleChangePlaceLink(event) {
    setPlaceLink(event.target.value);
  }


  // Добавляем изображение
  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({
      name: placeName,
      link: placeLink,
    })
      .then(() => {
        setPlaceName('');
        setPlaceLink('');
      });
  }


  return (
    <PopupWhithForm
      name="add"
      title="Новое место"
      labelText="создания карточки"
      buttonText={isRenderLoading ? 'Создание...' : 'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onStop={onStop}
      onSubmit={handleSubmit}
      formValid={inputNameValid && inputLinkValid}
      closeAllPopups={closeAllPopups}
    >
      <input
        value={placeName}
        onChange={handleChangePlaceName}
        type="text"
        placeholder="Название"
        className={`popup__field ${!inputNameValid && inputNameTouched && 'popup__field_type_error'}`}
        id="titleInput"
        name="name"
        autoComplete="off"
      />
      <span className={`popup__input-error ${!inputNameValid && inputNameTouched && 'popup__input-error_active'}`}>
        {inputNameError}
      </span>
      <input
        value={placeLink}
        onChange={handleChangePlaceLink}
        type="url"
        placeholder="Ссылка на картинку"
        className={`popup__field ${!inputLinkValid && inputLinkTouched && 'popup__field_type_error'}`}
        id="pictureInput"
        name="link"
        autoComplete="off"
      />
      <span className={`popup__input-error ${!inputLinkValid && inputLinkTouched && 'popup__input-error_active'}`}>
        {inputLinkError}
      </span>
    </PopupWhithForm >
  )

}


export default AddPlacePopup;
