import Component from './core/Component';
import InputField from './components/InputField';
import History from './components/History';
import GameStartButton from './components/GameStartButton';
import GameRestartButton from './components/GameRestartButton';

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
      tryCount: 0,
      gameStarted: false,
      gameFinished: false,
      answer: randomNumber(),
      numbers: [],
      results: [],
    };
  }

  mounted() {
    const {
      gameStarted, gameFinished, tryCount, answer,
    } = this.state;

    const startGame = document.getElementById('start-game');
    const inputContainer = document.getElementById('input-container');
    const tableContainer = document.getElementById('table-container');
    const { numbers, results } = this.state;

    if (gameFinished) {
      new GameRestartButton(startGame, {
        restartGame: this.restartGame.bind(this),
        tryCount,
        answer,
      });
      return;
    }

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

    new GameStartButton(startGame, {
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
    const { tryCount } = this.state;
    const { gameFinished, result } = calculate(this.state.answer, value);

    const newState = {
      numbers: [...this.state.numbers, value],
      results: [...this.state.results, result],
      gameFinished,
      tryCount: tryCount + 1,
    };
    this.setState(newState);
  }

  startGame() {
    const newState = { gameStarted: true };
    this.setState(newState);
  }

  restartGame() {
    const newState = { gameFinished: false, gameStarted: true };
    this.initialize();
    this.setState(newState);
  }
}
