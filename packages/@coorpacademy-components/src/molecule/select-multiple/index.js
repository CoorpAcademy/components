import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {map, pipe, join, filter, get, set} from 'lodash/fp';
import {NovaCompositionNavigationArrowDown as ArrowDown} from '@coorpacademy/nova-icons';
import TitledCheckbox from '../titled-checkbox';
import Provider from '../../atom/provider';
import style from './style.css';

const themeStyle = {
  setup: style.setup
};

class SelectMultiple extends React.Component {
  state = {
    opened: false
  };

  componentWillMount() {
    if (typeof document !== 'undefined') {
      document.addEventListener('click', this.closeHandle);
      document.addEventListener('touchstart', this.closeHandle);
    }
  }

  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      document.removeEventListener('click', this.closeHandle);
      document.removeEventListener('touchstart', this.closeHandle);
    }
  }

  handleOnClick = e => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({opened: !this.state.opened});
  };

  closeHandle = e => {
    if (!this.node.contains(e.target)) {
      this.setState({opened: false});
    }
  };

  set choices(choice) {
    const choices = set(`[${choice.i}].selected`, !choice.selected, this._choices);

    this._choices = choices.filter(c => c.selected);
  }

  get choices() {
    return this._choices;
  }

  handleChange = choice => {
    const {multiple, onChange} = this.props;
    // if multiple prop is turned on
    // we return all selected choices
    if (multiple) {
      this.choices = choice;

      return onChange(this.choices);
    }

    return onChange(choice);
  };

  render() {
    const {skin} = this.context;
    const defaultColor = get('common.primary', skin);
    const black = get('common.black', skin);
    const {title, options, theme} = this.props;

    this._choices = options;

    const lines = map.convert({cap: false})((choice, i) => {
      return (
        <li key={i} className={style.choice}>
          <TitledCheckbox
            onToggle={this.handleChange}
            choice={{...choice, i}}
            background={defaultColor}
          />
        </li>
      );
    }, options);
    const selection = pipe(
      filter({selected: true}),
      map('name'),
      join(', ')
    )(options);
    const titleView = title && <span className={style.title}>{title}</span>;
    const isActive = this.state.opened === true;
    const mainClass = classnames(theme ? themeStyle[theme] : style.default);

    return (
      <div className={mainClass} ref={node => (this.node = node)}>
        {titleView}
        <div className={style.select} title={selection} onClick={this.handleOnClick}>
          {selection}
          <ArrowDown color={black} className={classnames(style.arrow, {[style.down]: isActive})} />
        </div>
        <div className={isActive ? style.activeChoices : style.choices}>
          <ul className={style.list}>{lines}</ul>
        </div>
      </div>
    );
  }
}

const SelectOptionPropTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  selected: PropTypes.bool
};

SelectMultiple.contextTypes = {
  skin: Provider.childContextTypes.skin
};

SelectMultiple.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape(SelectOptionPropTypes)),
  onChange: PropTypes.func
};
export default SelectMultiple;
