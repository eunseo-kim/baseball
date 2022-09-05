import Component from '../core/Component';

export default class History extends Component {
  template() {
    const { numbers } = this.props;

    let element = `
      <th>입력</th>
      <th>결과</th>
    `;

    numbers.forEach((number) => {
      element += `
        <tr>
          <td>${number}</td>
        </tr>
      `;
    });

    return element;
  }
}
