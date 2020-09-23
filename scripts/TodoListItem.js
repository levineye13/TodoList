class TodoListItem {
  static _templateTodoListItem = document.querySelector(
    '#todolist-item-template'
  ).content;

  constructor(text, addItem) {
    this._text = text;
    this._addItem = addItem;
  }

  _handleCopyButton = () => {
    this._addItem(this._text);
  };

  _handleDeleteButton = () => {
    this._item.remove();
  };

  _setEventListeners = () => {
    this._item
      .querySelector('.todolist__copy')
      .addEventListener('click', this._handleCopyButton);
    this._item
      .querySelector('.todolist__del')
      .addEventListener('click', this._handleDeleteButton);
  };

  render = (container) => {
    this._item = TodoListItem._templateTodoListItem.cloneNode(true).children[0];
    this._item.querySelector('.todolist__text').textContent = this._text;
    this._setEventListeners();

    container.append(this._item);
  };
}

export { TodoListItem };
