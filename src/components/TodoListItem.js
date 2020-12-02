export default class TodoListItem {
  static _templateTodoListItem = document.querySelector(
    '#todolist-item-template'
  ).content;

  constructor({ text, handleCopy, handleDelete }) {
    this._text = text;
    this._handleCopy = handleCopy;
    this._handleDelete = handleDelete;
  }

  _handleCopyClick() {
    this._handleCopy();
  }

  _handleDeleteClick({ target }) {
    this._todos = target.closest('.todolist__item');
    this._todos.remove();
    this._handleDelete();
  }

  _setEventListeners() {
    this._view
      .querySelector('.todolist__copy')
      .addEventListener('click', this._handleCopyClick.bind(this));
    this._view
      .querySelector('.todolist__del')
      .addEventListener('click', this._handleDeleteClick.bind(this));
  }

  getView() {
    this._view = TodoListItem._templateTodoListItem.cloneNode(true).children[0];
    this._view.querySelector('.todolist__text').textContent = this._text;

    this._setEventListeners();

    return this._view;
  }
}
