import Component from '../core/Component';

export default class GameRestartBurron extends Component {
  template() {
    const { answer, tryCount } = this.props;

    return `
      <div id='answer'>정답은 ${answer}</div>
      <div id='congrats'>축하합니다. ${tryCount}번만에 성공하셨네요</div>
      <button
        id='restart-button'
        type='button'
      >
      다시 시작하기
      </button>
    `;
  }

  setEvent() {
    const { restartGame } = this.props;
    const restartButton = document.getElementById('restart-button');
    restartButton.addEventListener('click', restartGame);
  }
}
