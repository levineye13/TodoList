export default class TodoListForm {
  static _templateTodoListForm = document.querySelector(
    '#todolist-form-template'
  ).content;

  constructor() {}

  getView() {
    this._view = TodoListForm._templateTodoListForm.cloneNode(true).children[0];

    return this._view;
  }
}
