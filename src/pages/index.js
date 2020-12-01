import { TodoList } from '../components/TodoList.js';
import { TodoListForm } from '../components/TodoListForm.js';
import { TodoListFormValidation } from '../components/TodoListFormValidation.js';
import { TodoListItem } from '../components/TodoListItem.js';
import { todoListArray } from './../utils/constants.js';

const pageElement = document.querySelector('.page');
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
