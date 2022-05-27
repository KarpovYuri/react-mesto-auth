import PopupWhithForm from "./PopupWithForm";


function ConfirmDeletePopup({ isOpen, onClose, onDeleteCard, card, isRenderLoading }) {

  // Удаляем карточку
  function handleSubmit(event) {
    event.preventDefault();
    onDeleteCard(card);
  }


  return (
    <PopupWhithForm
      name="delete"
      title="Вы уверены?"
      labelText="подтверждения удаления карточки"
      buttonText={isRenderLoading ? 'Удаление...' : 'Да'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formValid={true}
    />
  )
}


export default ConfirmDeletePopup;
