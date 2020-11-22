"use strict";

var buttonAuth = document.querySelector('.button-add__button');
var NotTasks = document.querySelector('.todo-list__not');
var modalCloseAuth = document.querySelector('.buttons__close');
var modalAddAuth = document.querySelector('.buttons__add');
var modalAuth = document.querySelector('.modal-auth');
var modal = document.querySelector('.todo-list');
var TaskInput = document.querySelector('.modal-auth__input');
var TaskEdit = document.querySelector('.header__button');
var ToDoListItem = document.querySelector('.todo-list-item');

var toggleModalAuth = function toggleModalAuth() {
  TaskInput.style.borderColor = '';
  TaskInput.value = '';
  modalAuth.classList.toggle('is-open');

  if (modalAuth.classList.contains("is-open")) {
    disableScroll();
  } else {
    enableScroll();
  }
};

var modalAddTask = function modalAddTask() {
  if (TaskInput.value.trim()) {
    TaskEdit.style.visibility = 'visible';
    var Task = new Object();
    Task.Tasktext = TaskInput.value;
    var itemTask = "\n\t\t<label class=\"todo-list-item todo-list__label\">\n\t\t\t<input  class=\"todo-list-item__checkbox \" type=\"checkbox\">\n\t\t\t<span>".concat(Task.Tasktext, "</span> \n\t\t</label> \n\t\t\t");
    modal.insertAdjacentHTML('afterbegin', itemTask);
    NotTasks.remove();
    modalAuth.classList.toggle('is-open');

    if (!NotTasks) {}
  } else {
    TaskInput.style.borderColor = '#ff0000';
    TaskInput.value = '';
  }
};

var modalEditTask = function modalEditTask() {
  if (TaskEdit.innerHTML == "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C") {
    TaskEdit.textContent = "Править";
  } else {
    TaskEdit.textContent = "Отменить";
  }
};

var toggleModal = function toggleModal() {
  modal.classList.toggle("is-open");
};

buttonAuth.addEventListener('click', toggleModalAuth);
modalCloseAuth.addEventListener('click', toggleModalAuth);
modalAddAuth.addEventListener('click', modalAddTask);
TaskEdit.addEventListener('click', modalEditTask);