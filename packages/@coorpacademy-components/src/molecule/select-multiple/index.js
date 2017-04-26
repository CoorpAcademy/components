import React from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import map from 'lodash/fp/map';
import TitledCheckbox from '../titled-checkbox';
import style from './style.css';

class SelectMultiple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    const closeHandle = function(clickEvent) {
      const menu = findDOMNode(this._selectMultiple);
      if (menu && !menu.contains(clickEvent.target)) {
        this.setState({opened: false});
      }
    }.bind(this);

    if (this.state.opened) {
      document.addEventListener('click', closeHandle);
      document.addEventListener('touchstart', closeHandle);
    } else {
      document.removeEventListener('click', closeHandle);
      document.removeEventListener('touchstart', closeHandle);
    }
  }

  handleOnClick() {
    this.setState({opened: !this.state.opened});
  }

  render() {
    const {
      title,
      selection,
      choices,
      onToggle
    } = this.props;

    const lines = map.convert({cap: false})((choice, i) => {
      return (
        <li
          className={style.line}
          key={i}
        >
          <TitledCheckbox
            onToggle={onToggle}
            state={choice}
          />
        </li>
      );
    }, choices);

    const isActive = this.state.opened === true;

    return (
      <div className={style.default} // eslint-disable-next-line no-return-assign
        ref={div => this._selectMultiple = div} // eslint-disable-line react/jsx-no-bind
      >
        <div className={style.title}>{title}</div>
        <div className={style.select}
          title={selection}
          onClick={this.handleOnClick}
        >
          {selection}
        </div>
        <div className={isActive ? style.activeChoices : style.choices} >
          <span
            onClick={this.handleOnClick}
            className={style.close}
          />
          <ul className={style.list}>
            {lines}
          </ul>
        </div>
      </div>
    );
  }
}

SelectMultiple.PropTypes = {
  title: PropTypes.string,
  selection: PropTypes.array,
  choices: PropTypes.array,
  onClick: PropTypes.func,
  onToggle: PropTypes.func
};

export default SelectMultiple;
