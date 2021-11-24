import React, {useState, useEffect, useRef, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {map, pipe, join, filter, get, set, keys, isEmpty} from 'lodash/fp';
import {
  NovaCompositionNavigationArrowDown as ArrowDown,
  NovaSolidStatusClose as ErrorIcon,
  NovaCompositionCoorpacademyInformationIcon as InfoIcon
} from '@coorpacademy/nova-icons';
import TitledCheckbox from '../titled-checkbox';
import Provider from '../../atom/provider';
import Checkbox from '../../atom/input-checkbox';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const themeStyle = {
  setup: style.setup,
  cockpit: style.cockpit,
  sidebar: style.sidebar,
  coorpmanager: style.coorpmanager
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

const CMMultipleView = ({multiple, choice, onChange}) => {
  const handleChange = useCallback(
    checked => {
      if (!multiple) {
        return onChange(choice);
      }
      return onChange({...choice, selected: checked});
    },
    [onChange, choice]
  );

  return multiple ? (
    <div className={style.item}>
      <Checkbox
        type="checkbox"
        titleStyle={'default'}
        checked={choice.selected}
        onChange={handleChange}
        title={choice.name}
      />
    </div>
  ) : (
    <span className={style.item} onClick={handleChange} title={choice.name}>
      {choice.name}
    </span>
  );
};

const SelectMultiple = (
  {
    title,
    options,
    theme,
    placeholder,
    description,
    hint,
    multiple,
    onChange,
    onError,
    modified = false,
    required = false,
    error = '',
    disabled = false
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

    if (!disabled) {
      updateIsOpened(prev => !prev);
    }
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

  const isCMTheme = theme === 'coorpmanager';

  const lines = map.convert({cap: false})((choice, i) => {
    return (
      <li key={i} className={style.choice}>
        {isCMTheme ? (
          <CMMultipleView multiple={multiple} choice={{...choice, i}} onChange={handleChange} />
        ) : (
          <TitledCheckbox
            onToggle={handleChange}
            choice={{...choice, i}}
            background={defaultColor}
          />
        )}
      </li>
    );
  }, options);

  const selection = pipe(filter({selected: true}), map('name'), join(', '))(options);

  const _title = title && `${title}${required ? ' *' : ''}`;

  const isActive = isOpened === true;

  const titleView = title ? (
    <span
      className={classnames(
        style.title,
        isCMTheme && selection && style.titleWithSelection,
        isCMTheme && isEmpty(selection) && style.noValue,
        isActive && style.active
      )}
    >
      {_title}
      {isCMTheme ? (
        <div className={style.infoIconWrapper}>
          <InfoIcon className={style.infoIcon} />
          <div className={style.descriptionLabel}>{description}</div>
        </div>
      ) : null}
    </span>
  ) : null;

  const hintView =
    isCMTheme && !isActive ? (
      <div
        className={style.hint}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: error || hint}}
      />
    ) : null;

  const mainClass = theme ? themeStyle[theme] : style.default;
  const showPlaceholder = isCMTheme && isActive;
  const behaviourClassName = getClassState(
    style.default,
    style.modified,
    style.error,
    modified,
    error
  );

  const errorIconView = error ? <ErrorIcon onClick={onError} className={style.errorIcon} /> : null;

  return (
    <div
      className={classnames(mainClass, behaviourClassName, disabled && style.disabled)}
      ref={nodeRef}
    >
      <label>
        {!isCMTheme && titleView}
        <div className={style.select} title={selection || placeholder} onClick={handleOnClick}>
          {isCMTheme && titleView}
          <span
            className={classnames(
              style.selection,
              isCMTheme && isEmpty(selection) && style.noselection
            )}
          >
            {selection || !isCMTheme || (showPlaceholder && placeholder) || null}
          </span>
          {isCMTheme ? (
            <div className={style.iconsWrapper}>
              <div className={style.flex}>{errorIconView}</div>
              <div className={classnames(style.flex, isActive && style.clicked)}>
                <ArrowDown
                  color={black}
                  className={classnames(style.arrow, {[style.down]: isActive})}
                />
              </div>
            </div>
          ) : (
            <ArrowDown
              color={black}
              className={classnames(style.arrow, {[style.down]: isActive})}
            />
          )}
        </div>
        <div className={classnames(style.choices, isActive && style.activeChoices)}>
          <ul className={style.list}>{lines}</ul>
        </div>
      </label>
      {!isCMTheme ? <div className={style.description}>{description}</div> : null}
      {hintView}
    </div>
  );
};

SelectMultiple.contextTypes = {
  skin: Provider.childContextTypes.skin
};

CMMultipleView.propTypes = {
  multiple: PropTypes.bool,
  choice: TitledCheckbox.propTypes.choice,
  onChange: PropTypes.func
};

SelectMultiple.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  description: PropTypes.string,
  hint: PropTypes.string,
  options: PropTypes.arrayOf(TitledCheckbox.propTypes.choice),
  onChange: PropTypes.func,
  onError: PropTypes.func,
  multiple: PropTypes.bool,
  modified: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  theme: PropTypes.oneOf(keys(themeStyle))
};

export default SelectMultiple;
