class TodoListItem {
  static _templateTodoListItem = document.querySelector(
    "#todolist-item-template"
  ).content;

  constructor(text, addItem) {
    this._text = text;
    this._addItem = addItem;
  }

  render = (container) => {
    this._item = TodoListItem._templateTodoListItem.cloneNode(true).children[0];
    this._item.querySelector(".todolist__text").textContent = this._text;
    container.append(this._item);
  };
}

export { TodoListItem };
