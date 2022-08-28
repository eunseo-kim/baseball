import Component from './core/Component';

export default class App extends Component {
  INPUT_NUMBER_LENGTH = 3;

  template() {
    return `
      <div id='input-container'>
        <input 
          type='number'
          id='input-field'
          placeholder='1~9까지의 숫자를 중복없이 3개 입력해주세요.'
        />
        <button
          type='button'
          id='input-button'
          disabled=true
        >
          입력
        </button>
      </div>
    `;
  }

  setEvent() {
    const inputField = document.getElementById('input-field');
    const inputButton = document.getElementById('input-button');

    const checkButtonDisabled = (inputLength) => {
      if (inputLength === this.INPUT_NUMBER_LENGTH) {
        inputButton.disabled = false;
      } else {
        inputButton.disabled = true;
      }
    };

    const checkInputValidation = ({ value, currentInput, previousInput }) => {
      if (value.length > this.INPUT_NUMBER_LENGTH
          || previousInput.includes(currentInput)
          || currentInput === '0'
      ) { inputField.value = previousInput; }
    };

    const handleOnInput = () => {
      const { value } = inputField;
      const currentInput = inputField.value.substr(-1);
      const previousInput = value.substr(0, value.length - 1);

      checkInputValidation({ value, currentInput, previousInput });
      checkButtonDisabled(inputField.value.length);
    };

    const handleClick = () => {};

    inputField.addEventListener('input', handleOnInput);
    inputButton.addEventListener('click', handleClick);
  }
}
