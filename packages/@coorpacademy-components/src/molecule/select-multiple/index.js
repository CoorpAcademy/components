import React, {PropTypes} from 'react';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import filter from 'lodash/fp/filter';
import find from 'lodash/fp/find';
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

  handleOnClick() {
    this.setState({opened: !this.state.opened});
  }

  render() {
    const {
      selection,
      choices,
      onToggle
    } = this.props;

    const lines = choices.map((choice, i) => {
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
    });

    const isActive = this.state.opened === true;

    return (
      <div className={style.default}>
        <div className={style.select}
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
  selection: PropTypes.array,
  choices: PropTypes.array,
  onClick: PropTypes.func,
  onToggle: PropTypes.func
};

export default SelectMultiple;
