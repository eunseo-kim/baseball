import Component from '../core/Component';

export default class GameRestartBurron extends Component {
  template() {
    const { answer, tryCount } = this.props;

    return `
      <div id='answer'>The answer is [${answer}]</div>
      <div id='congrats'>Number of Attempts: ${tryCount}</div>
      <button
        id='restart-button'
        type='button'
      >
      Restart
      </button>
    `;
  }

  setEvent() {
    const { restartGame } = this.props;
    const restartButton = document.getElementById('restart-button');
    restartButton.addEventListener('click', restartGame);
  }
}
