const buttonAuth = document.querySelector('.button-add__button');
const modalAuth = document.querySelector('.modal-auth');
const modal = document.querySelector(".todo-list");



const toggleModalAuth = function () {
	modalAuth.classList.toggle('is-open');
	if (modalAuth.classList.contains("is-open")) {
		disableScroll();
	}
	else {
		enableScroll();
	}
}

buttonAuth.addEventListener('click', toggleModalAuth);

const toggleModal = function () {
	modal.classList.toggle("is-open");
}
