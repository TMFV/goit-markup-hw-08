(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open1]"),
    closeModalBtn: document.querySelector("[data-modal-close1]"),
    modal1: document.querySelector("[data-modal1]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open1")
    refs.modal1.classList.toggle("is-hidden");
  }
})();
