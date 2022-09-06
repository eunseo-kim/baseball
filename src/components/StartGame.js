import Component from '../core/Component';

export default class StartGame extends Component {
  template() {
    return `
      <button
        id='start-button'
        type='button'
      >
      시작하기
      </button>    
    `;
  }

  setEvent() {
    const { startGame } = this.props;
    const startButton = document.getElementById('start-button');

    startButton.addEventListener('click', startGame);
  }
}
