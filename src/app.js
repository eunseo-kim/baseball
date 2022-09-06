import Component from './core/Component';
import InputField from './components/InputField';
import History from './components/History';
import StartGame from './components/StartGame';

import randomNumber from './services/randomNumber';
import calculate from './services/calculate';

export default class App extends Component {
  template() {
    return `
      <div id='game-container'>
        <div id='start-game'></div>
        <div id='input-container'></div>
        <table id='table-container'></table>
      </div>
    `;
  }

  initialize() {
    this.state = {
      gameStarted: false,
      answer: randomNumber(),
      numbers: [],
      results: [],
    };
  }

  mounted() {
    const { gameStarted } = this.state;

    const startGame = document.getElementById('start-game');
    const gameContainer = document.getElementById('game-container');
    const inputContainer = document.getElementById('input-container');
    const tableContainer = document.getElementById('table-container');
    const { numbers, results } = this.state;

    if (gameStarted) {
      new InputField(inputContainer, {
        handleOnInput: this.handleOnInput.bind(this),
        handleClick: this.handleClick.bind(this),
      });
      new History(tableContainer, {
        numbers,
        results,
      });
      return;
    }

    new StartGame(startGame, {
      startGame: this.startGame.bind(this),
    });
  }

  MAX_INPUT_LENGTH = 3;

  checkButtonDisabled($inputButton, inputLength) {
    if (inputLength >= this.MAX_INPUT_LENGTH) {
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
    const newResult = calculate(this.state.answer, value);
    const newState = {
      numbers: [...this.state.numbers, value],
      results: [...this.state.results, newResult],
    };
    this.setState(newState);
  }

  startGame() {
    const newState = { gameStarted: true };
    this.setState(newState);
  }
}
