import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import join from 'lodash/fp/join';
import filter from 'lodash/fp/filter';
import get from 'lodash/fp/get';
import ArrowDown from '@coorpacademy/nova-icons/composition/navigation/arrow-down';
import TitledCheckbox from '../titled-checkbox';
import Provider from '../../atom/provider';
import style from './style.css';

class SelectMultiple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.closeHandle = this.closeHandle.bind(this);
  }

  componentWillMount() {
    document.addEventListener('click', this.closeHandle);
    document.addEventListener('touchstart', this.closeHandle);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeHandle);
    document.removeEventListener('touchstart', this.closeHandle);
  }

  handleOnClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({opened: !this.state.opened});
  }

  closeHandle(e) {
    if (!this.node.contains(e.target)) {
      this.setState({opened: false});
    }
  }

  render() {
    const {skin} = this.context;
    const defaultColor = get('common.primary', skin);
    const black = get('common.black', skin);
    const {title, options, onChange} = this.props;

    const handleChange = e => onChange(e);

    const lines = map.convert({cap: false})((choice, i) => {
      return (
        <li key={i} className={style.choice}>
          <TitledCheckbox onToggle={handleChange} choice={choice} background={defaultColor} />
        </li>
      );
    }, options);
    const selection = pipe(filter({selected: true}), map('name'), join(', '))(options);
    const titleView = title && <span className={style.title}>{title}</span>;
    const isActive = this.state.opened === true;
    return (
      <div className={style.default} ref={node => (this.node = node)}>
        {titleView}
        <div className={style.select} title={selection} onClick={this.handleOnClick}>
          {selection}
          <ArrowDown color={black} className={style.arrow} />
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
