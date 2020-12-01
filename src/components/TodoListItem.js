export default class TodoListItem {
  static _templateTodoListItem = document.querySelector(
    '#todolist-item-template'
  ).content;

  constructor() {}

  _setEventListeners() {}

  getView(text) {
    this._view = TodoListItem._templateTodoListItem.cloneNode(true).children[0];
    this._view.querySelector('.todolist__text').textContent = text;

    this._setEventListeners();

    return this._view;
  }
}
