import Component from '../core/Component';

import '../style/inputfield.css';

export default class InputField extends Component {
  template() {
    return `
      <div id='input-wrapper'>
        <input 
          id='input-field'
          placeholder='1~9까지의 숫자를 중복없이 3개 입력해주세요.'
        />
        <button
          type='button'
          id='input-button'
          disabled=true
        >
        ENTER
        </button>
      </div>
    `;
  }

  setEvent() {
    const { handleOnInput, handleClick } = this.props;
    const inputField = document.getElementById('input-field');
    const inputButton = document.getElementById('input-button');

    inputField.addEventListener('input', () => handleOnInput(inputField, inputButton));
    inputButton.addEventListener('click', () => handleClick(inputField.value));
  }
}
