import React, { useState } from 'react';
import PopupWhithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import useValidation from "../hooks/useValidation";


function EditProfilePopup({ isOpen, onClose, onUpdateUser, isRenderLoading }) {

  // Созданиее стейт переменных для валидации
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const {
    inputNameValid,
    inputNameError,
    inputNameTouched
  } = useValidation(name, { isEmpty: true, minLength: 5, maxLength: 40 }, 'Name');
  const {
    inputDescriptionValid,
    inputDescriptionError,
    inputDescriptionTouched
  } = useValidation(description, { isEmpty: true, minLength: 5, maxLength: 50 }, 'Description');


  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);


  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);


  // Установка имени пользователя
  function handleChangeName(event) {
    setName(event.target.value);
  }


  // Установка информации о пользователи
  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }


  function handleSubmit(event) {
    // Запрещаем браузеру переходить по адресу формы
    event.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });

  }


  return (
    <PopupWhithForm
      name="profile"
      title="Редактировать профиль"
      labelText="сохранения данных профиля"
      buttonText={isRenderLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formValid={inputNameValid && inputDescriptionValid}
    >
      <input
        value={name || ''}
        onChange={handleChangeName}
        type="text"
        placeholder="Имя"
        className={`popup__field ${!inputNameValid && inputNameTouched && 'popup__field_type_error'}`}
        id="nameInput"
        name="name"
        autoComplete="off"
      />
      <span className={`popup__input-error ${!inputNameValid && inputNameTouched && 'popup__input-error_active'}`}>
        {inputNameError}
      </span>
      <input
        value={description || ''}
        onChange={handleChangeDescription}
        type="text"
        placeholder="О себе"
        className={`popup__field ${!inputDescriptionValid && inputDescriptionTouched && 'popup__field_type_error'}`}
        id="aboutInput"
        name="about"
        autoComplete="off"
      />
      <span className={`popup__input-error ${!inputDescriptionValid && inputDescriptionTouched && 'popup__input-error_active'}`}>
        {inputDescriptionError}
      </span>
    </PopupWhithForm>
  )
}


export default EditProfilePopup;
