class TodoListForm {
  static _templateTodoListForm = document.querySelector(
    "#todolist-form-template"
  ).content;

  constructor(addItem) {
    this._addItem = addItem;
  }

  _handleSubmit = (evt) => {
    const text = this._form.querySelector(".todolist__input").value;
    this._addItem(text);
  };

  _setEventListeners = () => {
    this._form.addEventListener("submit", this._handleSubmit);
  };

  render = (container) => {
    this._form = TodoListForm._templateTodoListForm.cloneNode(true).children[0];

    this._setEventListeners(this._form);

    container.append(this._form);
  };
}

export { TodoListForm };
