export default class Component {
  state;

  target;

  props;

  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.initialize();
    this.render();
  }

  mounted() {}

  initialize() {}

  template() {
    return '';
  }

  render() {
    this.target.innerHTML = this.template();
    this.setEvent();
    this.mounted();
  }

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
