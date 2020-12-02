export default class TodoCounter {
  static _templateTodoCounter = document.querySelector(
    '#todolist-counter-template'
  ).content;

  constructor({ todosList }) {
    this._numberTodos = todosList.length;
  }

  addTodos() {
    this._numberTodos++;
    this._view.querySelector(
      '.todolist__number'
    ).textContent = this._numberTodos;
  }

  removeTodos() {
    this._numberTodos--;
    this._view.querySelector(
      '.todolist__number'
    ).textContent = this._numberTodos;
  }

  getView() {
    this._view = TodoCounter._templateTodoCounter.cloneNode(true).children[0];

    this._view.querySelector(
      '.todolist__number'
    ).textContent = this._numberTodos;

    return this._view;
  }
}
