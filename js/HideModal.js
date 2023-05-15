let modal = document.querySelector(".modal")
let btn = document.querySelector(".modal-container__btn-1");


btn.addEventListener("click",hideModal);
function hideModal(event) {
    modal.classList.remove("open");
    event.preventDefault();
}
