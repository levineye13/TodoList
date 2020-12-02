import { createStore } from 'redux';
import Displayer from './../components/Displayer.js';
import TodoList from '../components/TodoList.js';
import TodoListForm from '../components/TodoListForm.js';
import TodoCounter from '../components/TodoCounter.js';
import TodoListFormValidation from '../components/TodoListFormValidation.js';
import TodoListItem from '../components/TodoListItem.js';
import { todoListArray } from './../utils/constants.js';
import { counterReducer } from '../redux/reducers/counterReducer.js';
import { increment, decrement } from '../redux/actions/counter.js';
import './index.css';

const store = createStore(counterReducer);

const createTodoItemView = ({ text, container }) => {
  const todoItem = new TodoListItem({
    text,
    handleCopy: () => {
      store.dispatch(increment());
      todoCounter.addTodos(store.getState());
      displayer.renderItem(todoItem.getView(), container);
    },
    handleDelete: () => {
      store.dispatch(decrement());
      todoCounter.removeTodos(store.getState());
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
    store.dispatch(increment());
    todoCounter.addTodos(store.getState());
    displayer.renderItem(todoItemView, todoListView);
  },
});
const todoFormView = todoForm.getView();
displayer.renderItem(todoFormView, todoListView);

const todoCounter = new TodoCounter({ initialState: store.getState() });
displayer.renderItem(todoCounter.getView(), todoListView);

displayer.renderItemList(todoListArray, todoListView);

const formValidator = new TodoListFormValidation(todoFormView);
formValidator.enableValidation();
