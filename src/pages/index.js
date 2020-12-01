import Displayer from './../components/Displayer.js';
import TodoList from '../components/TodoList.js';
import TodoListForm from '../components/TodoListForm.js';
import TodoListFormValidation from '../components/TodoListFormValidation.js';
import TodoListItem from '../components/TodoListItem.js';
import { todoListArray } from './../utils/constants.js';
import './index.css';

const createTodoItemView = ({ text, container }) => {
  const todoItem = new TodoListItem({
    text,
    handleCopy: () => {
      displayer.renderItem(todoItem.getView(), container);
    },
  });
  return todoItem.getView();
};

const pageElement = document.querySelector('.page');

const displayer = new Displayer({
  renderer: (item, container) => {
    const todoItemView = createTodoItemView({ text: item, container });
    displayer.renderItem(todoItemView, container);
  },
});

const todoList = new TodoList();
const todoListView = todoList.getView();
displayer.renderItem(todoListView, pageElement);

const todoForm = new TodoListForm({
  handleSubmit: (value) => {
    const todoItemView = createTodoItemView({
      text: value,
      container: todoListView,
    });
    console.log(todoItemView);
    displayer.renderItem(todoItemView, todoListView);
  },
});
const todoFormView = todoForm.getView();
displayer.renderItem(todoFormView, todoListView);

displayer.renderItemList(todoListArray, todoListView);

const formValidator = new TodoListFormValidation(
  todoFormView
).enableValidation();
