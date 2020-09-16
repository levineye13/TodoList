import { TodoList } from "./TodoList.js";
import { TodoListForm } from "./TodoListForm.js";
import { TodoListItem } from "./TodoListItem.js";

const todoListArray = [
  "Погулять с Рэем",
  "Помыть посуду",
  "Заняться программированием",
  "Поиграть на гитаре",
];

const pageElement = document.querySelector(".page");
const createTodoListForm = (...arg) => new TodoListForm(...arg);
const createTodoListItem = (...arg) => new TodoListItem(...arg);
const todoList = new TodoList(
  todoListArray,
  createTodoListForm,
  createTodoListItem
);
todoList.render(pageElement);

// const todoList = new TodoList("#todolist-template");
// todoList.render(pageElement);

// const todoListForm = new TodoListForm("#todolist-form-template");
// const todoListContainer = document.querySelector(".todolist");
// todoListForm.render(todoListContainer);

// todoListArray.forEach((todoItem) => {
//   new TodoListItem("#todolist-item-template").render(
//     todoListContainer,
//     todoItem
//   );
// });
