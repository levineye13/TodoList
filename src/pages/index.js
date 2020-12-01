import Displayer from './../components/Displayer.js';
import TodoList from '../components/TodoList.js';
import TodoListForm from '../components/TodoListForm.js';
import TodoListFormValidation from '../components/TodoListFormValidation.js';
import TodoListItem from '../components/TodoListItem.js';
import { todoListArray } from './../utils/constants.js';
import './index.css';

const pageElement = document.querySelector('.page');
const displayer = new Displayer({
  renderer: (item, container) => {
    const todoItem = new TodoListItem();
    const todoItemView = todoItem.getView(item);
    displayer.renderItem(todoItemView, container);
  },
});

const todoList = new TodoList();
const todoListView = todoList.getView();
displayer.renderItem(todoListView, pageElement);

const todoForm = new TodoListForm();
const todoFormView = todoForm.getView();
displayer.renderItem(todoFormView, todoListView);

displayer.renderItemList(todoListArray, todoListView);

const formValidator = new TodoListFormValidation(
  todoFormView
).enableValidation();
