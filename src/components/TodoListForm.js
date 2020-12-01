export default class TodoListForm {
  static _templateTodoListForm = document.querySelector(
    '#todolist-form-template'
  ).content;

  constructor({ handleSubmit }) {
    this._handleSubmit = handleSubmit;
  }

  _handleSubmitForm() {
    this._value = this._view.querySelector('.todolist__input').value;
    this._view.reset();
    this._handleSubmit(this._value);
  }

  _setEventListeners() {
    this._view.addEventListener('submit', this._handleSubmitForm.bind(this));
  }

  getView() {
    this._view = TodoListForm._templateTodoListForm.cloneNode(true).children[0];

    this._setEventListeners();

    return this._view;
  }
}
