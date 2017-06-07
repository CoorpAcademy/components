import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  render() {
    const {title, content} = this.props;

    return (
      <div>
        <div className={style.title} onClick={this.handleOnClick}>
          <h3>{title}</h3>
          <span className={this.state.expanded ? style.up : style.down} />
        </div>
        <div className={this.state.expanded ? style.container : style.none}>
          {content}
        </div>
      </div>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

export default Accordion;
