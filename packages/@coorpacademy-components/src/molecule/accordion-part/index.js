import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open || false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    if (this.props.onToggle) {
      this.props.onToggle();
    }

    if (!this.props.openable) {
      return;
    }

    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    const {title, content} = this.props;

    return (
      <div>
        <div className={style.title} onClick={this.handleOnClick}>
          <h3>{title}</h3>
          <span className={this.state.open ? style.up : style.down} />
        </div>
        <div className={this.state.open ? style.container : style.none}>
          {content}
        </div>
      </div>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  open: PropTypes.bool,
  openable: PropTypes.bool,
  onToggle: PropTypes.func
};

export default Accordion;
