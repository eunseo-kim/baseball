import Component from '../core/Component';

export default class History extends Component {
  template() {
    const { numbers, results } = this.props;

    let element = `
      <th>입력</th>
      <th>결과</th>
    `;

    numbers.forEach((number, i) => {
      element += `
        <tr>
          <td>${number}</td>
          <td>${results[i]}</td>
        </tr>
      `;
    });

    return element;
  }
}
