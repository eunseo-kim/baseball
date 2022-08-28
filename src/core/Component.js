export default class Component {
  state = {};

  target;

  props;

  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.render();
  }

  template() {
    return '';
  }

  render() {
    this.target.innerHTML = this.template();
    this.setEvent();
  }

  setEvent() {}
}
