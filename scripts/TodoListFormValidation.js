class TodoListFormValidation {
  constructor(formElement) {
    this._formElement = formElement;
  }

  _showInputError = (invalidInput) => {
    const submitButton = this._formElement.querySelector(".todolist__submit");

    this._formElement.querySelector(".todolist__error").textContent =
      invalidInput.currentInput.validationMessage;
    submitButton.setAttribute("disabled", "");
    submitButton.classList.add("todolist__submit_inactive");
  };

  _hideInputError = () => {
    const submitButton = this._formElement.querySelector(".todolist__submit");

    submitButton.removeAttribute("disabled");
    submitButton.classList.remove("todolist__submit_inactive");
    this._formElement.querySelector(".todolist__error").textContent = "";
  };

  _hasInvalidInput = (inputList) => {
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
  };

  _handleInvalidInput = (inputList) => {
    const invalidInput = this._hasInvalidInput(inputList);

    if (!invalidInput.stateValidInput) {
      this._showInputError(invalidInput);
    } else {
      this._hideInputError();
    }
  };

  _handleSubmitForm = (evt) => {
    evt.preventDefault();
  };

  _setEventListeners = () => {
    const inputList = Array.from(
      this._formElement.querySelectorAll(".todolist__input")
    );
    this._handleInvalidInput(inputList);
    this._formElement.addEventListener("submit", this._handleSubmitForm);
    this._formElement.addEventListener("input", (evt) =>
      this._handleInvalidInput(inputList)
    );
  };

  enableValidation = () => {
    this._setEventListeners();
  };
}

export { TodoListFormValidation };
