import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';
import style from './style.css';

const ToolTip = ({name, color}, context) => {
  return (
    <ReactTooltip
      id={name}
      className={style.toolTip}
      data-event-off="click"
      place="top"
      effect="solid"
      type="light"
      delayShow={100}
      delayHide={1000}
    >
      <p
        className={style.toolTipContent}
        style={{
          color
        }}
      >
        {name}
      </p>
    </ReactTooltip>
  );
};

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.initWrapper = this.initWrapper.bind(this);
  }

  componentDidMount() {
    if (this.props.show) {
      ReactTooltip.show(this.element);
      setTimeout(
        function() {
          ReactTooltip.hide(this.element);
        }.bind(this),
        2000
      );
    }
  }

  initWrapper(element) {
    this.element = element;
  }

  render() {
    return (
      <div
        data-tip
        data-for={this.props.name}
        ref={this.initWrapper}
        className={style.avatar}
        style={{
          backgroundColor: `${this.props.color}`
        }}
      >
        <ToolTip name={this.props.name} color={this.props.color} />
        <div className={style.initial}>{this.props.initial}</div>
      </div>
    );
  }
}

export default Avatar;
