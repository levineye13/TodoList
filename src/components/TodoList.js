export default class TodoList {
  static _templateTodoList = document.querySelector('#todolist-template')
    .content;

  constructor() {}

  getView() {
    this._view = TodoList._templateTodoList.cloneNode(true).children[0];

    return this._view;
  }
}
