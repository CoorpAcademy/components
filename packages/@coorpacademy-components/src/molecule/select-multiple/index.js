import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {map, pipe, join, filter, get, set} from 'lodash/fp';
import {NovaCompositionNavigationArrowDown as ArrowDown} from '@coorpacademy/nova-icons';
import TitledCheckbox from '../titled-checkbox';
import Provider from '../../atom/provider';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const themeStyle = {
  setup: style.setup,
  cockpit: style.cockpit,
  sidebar: style.sidebar
};

class SelectMultiple extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    description: PropTypes.string,
    options: PropTypes.arrayOf(TitledCheckbox.propTypes.choice),
    onChange: PropTypes.func,
    multiple: PropTypes.bool,
    theme: PropTypes.string,
    modified: PropTypes.bool,
    required: PropTypes.bool,
    error: PropTypes.bool
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };

    this.node = null;
    this.setNode = el => (this.node = el);
  }

  componentDidMount() {
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
    const {opened} = this.state;
    e.preventDefault();
    e.stopPropagation();

    this.setState({opened: !opened});
  };

  closeHandle = e => {
    if (this.node && !this.node.contains(e.target)) {
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
    const {
      title,
      options,
      theme,
      placeholder,
      description,
      modified = false,
      required = false,
      error = false
    } = this.props;
    const {opened} = this.state;

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
    const selection = pipe(filter({selected: true}), map('name'), join(', '))(options);

    const _title = title && `${title}${required ? ' *' : ''}`;

    const titleView = title ? <span className={style.title}>{_title} </span> : null;
    const isActive = opened === true;
    const mainClass = theme ? themeStyle[theme] : style.default;
    const behaviourClassName = getClassState(
      style.default,
      style.modified,
      style.error,
      modified,
      error
    );

    return (
      <div className={classnames(mainClass, behaviourClassName)} ref={this.setNode}>
        <label>
          {titleView}
          <div
            className={style.select}
            title={selection || placeholder}
            onClick={this.handleOnClick}
          >
            {selection || placeholder}
            <ArrowDown
              color={black}
              className={classnames(style.arrow, {[style.down]: isActive})}
            />
          </div>
          <div className={isActive ? style.activeChoices : style.choices}>
            <ul className={style.list}>{lines}</ul>
          </div>
        </label>
        <div className={style.description}>{description}</div>
      </div>
    );
  }
}

export default SelectMultiple;
