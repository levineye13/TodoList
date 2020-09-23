class TodoList {
  static _templateTodoList = document.querySelector('#todolist-template')
    .content;

  constructor(
    todoListArray,
    createTodoListForm,
    createFormValidator,
    createTodoListItem
  ) {
    this._todoListArray = todoListArray;
    this._createTodoListForm = createTodoListForm;
    this._createFormValidator = createFormValidator;
    this._createTodoListItem = createTodoListItem;
  }

  _addTodoItem = (text) => {
    this._createTodoListItem(text, this._addTodoItem).render(this._view);
  };

  render = (container) => {
    this._view = TodoList._templateTodoList.cloneNode(true).children[0];
    this._createTodoListForm(this._addTodoItem).render(this._view);
    this._createFormValidator(
      this._view.querySelector('.todolist__form')
    ).enableValidation();
    this._todoListArray.forEach((todoListItem) =>
      this._addTodoItem(todoListItem)
    );
    container.append(this._view);
  };
}

export { TodoList };
