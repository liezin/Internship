const buttonAuth = document.querySelector('.button-add__button');
const NotTasks = document.querySelector('.todo-list__not');
const modalCloseAuth = document.querySelector('.buttons__close');
const modalAddAuth = document.querySelector('.buttons__add');
const modalAuth = document.querySelector('.modal-auth');
const modal = document.querySelector('.todo-list');
const TaskInput = document.querySelector('.modal-auth__input');
const TaskEdit = document.querySelector('.header__button');
const ToDoListItem = document.querySelector('.todo-list-item');



const toggleModalAuth = function () {
	TaskInput.style.borderColor = '';
	TaskInput.value = '';
	modalAuth.classList.toggle('is-open');
	if (modalAuth.classList.contains("is-open")) {
		disableScroll();
	}
	else {
		enableScroll();
	}
}
const modalAddTask = function () {
	
	if(TaskInput.value.trim()){
		TaskInput.textContent = '';
		let Task = new Object();
		Task.Tasktext = TaskInput.value;	
		const itemTask = `
		<label class="todo-list-item todo-list__label">
			<input  class="todo-list-item__checkbox " type="checkbox">
			<span>${Task.Tasktext}</span> 
		</label> 
			`;
			modal.insertAdjacentHTML('afterbegin', itemTask)
		NotTasks.remove();
		modalAuth.classList.toggle('is-open');
	}
	else	{
		TaskInput.style.borderColor = '#ff0000';
		TaskInput.value = '';
	}	
}


const modalEditTask = function () {
	TaskEdit.style.text = "Отменить";
}


const toggleModal = function () {
	modal.classList.toggle("is-open");
}

buttonAuth.addEventListener('click', toggleModalAuth);
modalCloseAuth.addEventListener('click', toggleModalAuth);
modalAddAuth.addEventListener('click', modalAddTask);
TaskEdit.addEventListener('click', modalEditTask);
