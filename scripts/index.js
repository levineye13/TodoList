import { TodoList } from "./TodoList.js";
import { TodoListForm } from "./TodoListForm.js";
import { TodoListFormValidation } from "./TodoListFormValidation.js";
import { TodoListItem } from "./TodoListItem.js";

const todoListArray = [
  "Погулять с Рэем",
  "Помыть посуду",
  "Заняться программированием",
  "Поиграть на гитаре",
];

const pageElement = document.querySelector(".page");
const createTodoListForm = (...arg) => new TodoListForm(...arg);
const createFormValidator = (...arg) => new TodoListFormValidation(...arg);
const createTodoListItem = (...arg) => new TodoListItem(...arg);
const todoList = new TodoList(
  todoListArray,
  createTodoListForm,
  createFormValidator,
  createTodoListItem
);
todoList.render(pageElement);
