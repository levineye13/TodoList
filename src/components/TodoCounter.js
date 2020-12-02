export default class TodoCounter {
  static _templateTodoCounter = document.querySelector(
    '#todolist-counter-template'
  ).content;

  constructor({ initialState }) {
    this._numberTodos = initialState;
  }

  addTodos(state) {
    this._view.querySelector('.todolist__number').textContent = state;
  }

  removeTodos(state) {
    this._view.querySelector('.todolist__number').textContent = state;
  }

  getView() {
    this._view = TodoCounter._templateTodoCounter.cloneNode(true).children[0];

    this._view.querySelector(
      '.todolist__number'
    ).textContent = this._numberTodos;

    return this._view;
  }
}
