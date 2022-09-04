export default class Component {
  state = {
    numbers: [],
  };

  target;

  props;

  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.render();
    this.setEvent();
    this.mounted();
  }

  mounted() {}

  template() {
    return '';
  }

  render() {
    this.target.innerHTML = this.template();
  }

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }
}
