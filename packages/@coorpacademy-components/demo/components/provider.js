import Component from 'inferno-component';

export default class Provider extends Component {
  constructor(props, context) {
    super(props, context);
    this.store = props;
  }

  getChildContext() {
    return this.store;
  }

  render() {
    return this.props.children;
  }
}
