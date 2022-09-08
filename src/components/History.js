import Component from '../core/Component';

import '../style/history.css';

export default class History extends Component {
  template() {
    const { numbers, results } = this.props;

    let element = `
      <div id='history-wrapper'>
        <table id='history-table'>
          <colgroup>
            <col width='50%'/>
            <col width='50%'/>
          </colgroup>
          <thead>
            <th>입력</th>
            <th>결과</th>
          </thead>
    `;

    numbers.forEach((number, i) => {
      element += `
        <tr>
          <td>${number}</td>
          <td>${results[i]}</td>
        </tr>
      `;
    });

    element += '</table></div>';

    return element;
  }
}
