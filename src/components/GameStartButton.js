import Component from '../core/Component';

export default class GameStartButton extends Component {
  template() {
    return `
      <button
        id='start-button'
        type='button'
      >
      Start Game!
      </button>    
    `;
  }

  setEvent() {
    const { startGame } = this.props;
    const startButton = document.getElementById('start-button');

    startButton.addEventListener('click', startGame);
  }
}
