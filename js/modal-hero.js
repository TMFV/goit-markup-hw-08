(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-hero]"),
    closeModalBtn: document.querySelector("[data-modal-close-hero]"),
    modalhero: document.querySelector("[data-modal-hero]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-hero-open")
    refs.modalhero.classList.toggle("is-hidden");
  }
})();
