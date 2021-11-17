import React, {useState, useEffect, useRef, useCallback} from 'react';
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

export const useChoices = options => {
  const choicesRef = useRef(options);

  const getChoices = () => {
    return choicesRef.current;
  };

  const setChoices = choice => {
    const choices = set(`[${choice.i}].selected`, !choice.selected, getChoices());

    choicesRef.current = choices.filter(c => c.selected);
  };

  return [getChoices, setChoices];
};

const SelectMultiple = (
  {
    title,
    options,
    theme,
    placeholder,
    description,
    multiple,
    onChange,
    modified = false,
    required = false,
    error = false
  },
  {skin}
) => {
  const [isOpened, updateIsOpened] = useState(false);
  const [getChoices, setChoices] = useChoices(options);
  const nodeRef = useRef(null);

  const defaultColor = get('common.primary', skin);
  const black = get('common.black', skin);

  const handleOnClick = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();

    updateIsOpened(prev => !prev);
  }, []);

  const closeHandle = useCallback(e => {
    if (nodeRef && nodeRef.current && !nodeRef.current.contains(e.target)) {
      updateIsOpened(false);
    }
  }, []);

  const handleChange = useCallback(
    choice => {
      // if multiple prop is turned on
      // we return all selected choices
      if (multiple) {
        setChoices(choice);

        return onChange(getChoices());
      }

      return onChange(choice);
    },
    [setChoices, multiple, onChange]
  );

  useEffect(() => {
    document.addEventListener('click', closeHandle);
    document.addEventListener('touchstart', closeHandle);

    return () => {
      document.removeEventListener('click', closeHandle);
      document.removeEventListener('touchstart', closeHandle);
    };
  }, [closeHandle]);

  const lines = map.convert({cap: false})((choice, i) => {
    return (
      <li key={i} className={style.choice}>
        <TitledCheckbox onToggle={handleChange} choice={{...choice, i}} background={defaultColor} />
      </li>
    );
  }, options);

  const selection = pipe(filter({selected: true}), map('name'), join(', '))(options);

  const _title = title && `${title}${required ? ' *' : ''}`;

  const titleView = title ? <span className={style.title}>{_title} </span> : null;
  const isActive = isOpened === true;
  const mainClass = theme ? themeStyle[theme] : style.default;
  const behaviourClassName = getClassState(
    style.default,
    style.modified,
    style.error,
    modified,
    error
  );

  return (
    <div className={classnames(mainClass, behaviourClassName)} ref={nodeRef}>
      <label>
        {titleView}
        <div className={style.select} title={selection || placeholder} onClick={handleOnClick}>
          {selection || placeholder}
          <ArrowDown color={black} className={classnames(style.arrow, {[style.down]: isActive})} />
        </div>
        <div className={isActive ? style.activeChoices : style.choices}>
          <ul className={style.list}>{lines}</ul>
        </div>
      </label>
      <div className={style.description}>{description}</div>
    </div>
  );
};

SelectMultiple.contextTypes = {
  skin: Provider.childContextTypes.skin
};

SelectMultiple.propTypes = {
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

export default SelectMultiple;
