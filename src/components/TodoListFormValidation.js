export default class TodoListFormValidation {
  constructor(formElement) {
    this._formElement = formElement;
  }

  _showInputError = (invalidInput) => {
    this._formElement.querySelector('.todolist__error').textContent =
      invalidInput.currentInput.validationMessage;
    this._formElement.elements.todo_input.classList.add(
      'todolist__input_error'
    );
  };

  _hideInputError() {
    this._formElement.querySelector('.todolist__error').textContent = '';
    this._formElement.elements.todo_input.classList.remove(
      'todolist__input_error'
    );
  }

  _hasInvalidInput(inputList) {
    return inputList.reduce((prevInput, currentInput) => {
      if (!currentInput.validity.valid) {
        return {
          currentInput,
          stateValidInput: false,
        };
      } else {
        return {
          currentInput,
          stateValidInput: true,
        };
      }
    }, {});
  }

  _handleInvalidInput(inputList) {
    const invalidInput = this._hasInvalidInput(inputList);

    if (!invalidInput.stateValidInput) {
      this._showInputError(invalidInput);
    } else {
      this._hideInputError();
    }
  }

  _toggleButtonState(inputList) {
    const submitButton = this._formElement.querySelector('.todolist__submit');
    const invalidInput = this._hasInvalidInput(inputList);

    if (!invalidInput.stateValidInput) {
      submitButton.setAttribute('disabled', '');
      submitButton.classList.add('todolist__submit_inactive');
    } else {
      submitButton.removeAttribute('disabled');
      submitButton.classList.remove('todolist__submit_inactive');
    }
  }

  _handleSubmitForm(evt, inputList) {
    evt.preventDefault();
    this._toggleButtonState(inputList);
  }

  _setEventListeners() {
    const inputList = Array.from(
      this._formElement.querySelectorAll('.todolist__input')
    );

    this._toggleButtonState(inputList);
    this._formElement.addEventListener('submit', (evt) =>
      this._handleSubmitForm(evt, inputList)
    );
    this._formElement.addEventListener('input', (evt) => {
      this._handleInvalidInput(inputList);
      this._toggleButtonState(inputList);
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
