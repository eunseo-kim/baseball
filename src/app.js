import Component from './core/Component';
import InputField from './components/InputField';

export default class App extends Component {
  template() {
    return `
      <div id='input-container'></div>
    `;
  }

  mounted() {
    const inputContainer = document.getElementById('input-container');
    new InputField(inputContainer, {
      handleOnInput: this.handleOnInput.bind(this),
      handleClick: this.handleClick.bind(this),
    });
  }

  MAX_INPUT_LENGTH = 3;

  checkButtonDisabled($inputButton, inputLength) {
    if (inputLength === this.MAX_INPUT_LENGTH) {
      $inputButton.disabled = false;
      return;
    }
    $inputButton.disabled = true;
  }

  checkInputValidation($inputField, currentInput, previousInput) {
    const { value } = $inputField;
    if (!parseInt(currentInput, 10)
        || value.length > this.MAX_INPUT_LENGTH
        || previousInput.includes(currentInput)
        || currentInput === '0'
    ) { $inputField.value = previousInput; }
  }

  handleOnInput($inputField, $inputButton) {
    const { value } = $inputField;
    const currentInput = value.substr(-1);
    const previousInput = value.substr(0, value.length - 1);

    this.checkInputValidation($inputField, currentInput, previousInput);
    this.checkButtonDisabled($inputButton, value.length);
  }

  handleClick(value) {
    const newState = { numbers: [...this.state.numbers, value] };
    this.setState(newState);
  }
}
