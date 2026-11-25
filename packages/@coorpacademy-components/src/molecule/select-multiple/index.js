import React, {useState, useEffect, useRef, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {map, pipe, join, filter, get, set, keys, isEmpty, uniqueId} from 'lodash/fp';
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

const choiceType = PropTypes.shape({
  selected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  rightLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  warning: PropTypes.bool
});

export const useChoices = options => {
  const choicesRef = {current: options};

  const getChoices = () => {
    return choicesRef.current;
  };

  const setChoices = choice => {
    const choices = set(`[${choice.i}].selected`, !choice.selected, getChoices());

    choicesRef.current = choices.filter(c => c.selected);
  };

  return [getChoices, setChoices];
};

const CMMultipleView = ({multiple, choice, onChange, accessible}) => {
  const handleChange = useCallback(() => {
    return onChange(choice);
  }, [onChange, choice]);
  // Keep search focused until the label activates its associated checkbox.
  const handleMouseDown = useCallback(event => event.preventDefault(), []);

  return multiple ? (
    <div
      onMouseDown={accessible ? handleMouseDown : undefined}
      className={classnames(
        style.item,
        choice.rightLabel !== undefined && style.countedItem,
        choice.warning && style.warningItem
      )}
    >
      <Checkbox
        theme={accessible ? 'coorpmanager' : 'default'}
        titleStyle="inherit"
        checked={choice.selected}
        onChange={handleChange}
        noLabelMargins={!accessible}
        title={choice.name}
      />
      {choice.rightLabel !== undefined ? (
        <span className={style.choiceCount}>{choice.rightLabel}</span>
      ) : null}
    </div>
  ) : (
    <span className={style.item} title={choice.name} data-name={`${choice.name}-language`}>
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
    error = '',
    disabled = false,
    'aria-label': ariaLabel,
    search,
    selectionLabel,
    dropdownClassName
  },
  {skin}
) => {
  const [isOpened, updateIsOpened] = useState(false);
  const [getChoices, setChoices] = useChoices(options);
  const nodeRef = useRef(null);
  const triggerRef = useRef(null);
  const [listId] = useState(() => (ariaLabel ? uniqueId('select-options-') : undefined));
  const handleSearch = useCallback(event => search.onChange(event.target.value), [search]);
  const handleKeyDown = useCallback(
    event => {
      if (!ariaLabel || disabled) return;
      const target = event.target;
      if (event.key === 'Escape' && isOpened) {
        event.preventDefault();
        event.stopPropagation();
        updateIsOpened(false);
        triggerRef.current.focus();
        return;
      }
      if (
        target === triggerRef.current &&
        ['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)
      ) {
        event.preventDefault();
        updateIsOpened(true);
        return;
      }
      if (!isOpened) return;
      if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
        event.preventDefault();
        const items = [
          ...nodeRef.current.querySelectorAll('[role="option"], input[type="checkbox"]')
        ];
        const index = items.indexOf(target);
        const initial = event.key === 'ArrowDown' ? -1 : items.length;
        const currentIndex = index === -1 ? initial : index;
        const next = currentIndex + (event.key === 'ArrowDown' ? 1 : -1);
        items[(next + items.length) % items.length]?.focus();
      }
      if (target.getAttribute('role') === 'option' && ['Enter', ' '].includes(event.key)) {
        event.preventDefault();
        target.click();
      }
    },
    [ariaLabel, disabled, isOpened]
  );
  const handleBlur = useCallback(
    event => {
      if (ariaLabel && !nodeRef.current.contains(event.relatedTarget)) updateIsOpened(false);
    },
    [ariaLabel]
  );
  useEffect(() => {
    if (!isOpened || !ariaLabel) return;
    const node = nodeRef.current;
    const initial =
      node.querySelector('[data-name="select-search"]') ||
      node.querySelector('[role="option"][aria-selected="true"], input[type="checkbox"]:checked') ||
      node.querySelector('[role="option"], input[type="checkbox"]');
    initial?.focus();
  }, [isOpened, ariaLabel]);
  useEffect(() => {
    if (disabled) updateIsOpened(false);
  }, [disabled]);

  const defaultColor = get('common.primary', skin);
  const black = get('common.black', skin);

  const handleOnClick = useCallback(
    e => {
      if (disabled) return;

      e.preventDefault();
      e.stopPropagation();

      updateIsOpened(prev => !prev);
    },
    [disabled]
  );

  const closeHandle = useCallback(e => {
    if (nodeRef && nodeRef.current && !nodeRef.current.contains(e.target)) {
      updateIsOpened(false);
    }
  }, []);

  const handleChange = useCallback(
    choice => {
      if (disabled) return undefined;
      // if multiple prop is turned on
      // we return all selected choices
      if (multiple) {
        setChoices(choice);
        return onChange(getChoices());
      }
      updateIsOpened(false);
      if (ariaLabel) triggerRef.current.focus();
      return onChange(choice);
    },
    [multiple, onChange, setChoices, getChoices, disabled, ariaLabel]
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

  const handleOnClickOnListElement = choice => () => handleChange(choice);

  const lines = map.convert({cap: false})((choice, i) => {
    if (search && !choice.name.toLowerCase().includes(search.value.toLowerCase())) return null;
    return (
      <li
        key={i}
        className={style.choice}
        role={ariaLabel && !multiple ? 'option' : undefined}
        aria-selected={ariaLabel && !multiple ? choice.selected : undefined}
        tabIndex={ariaLabel && !multiple ? -1 : undefined}
        onClick={isCMTheme && !multiple ? handleOnClickOnListElement({...choice, i}) : null}
      >
        {isCMTheme ? (
          <CMMultipleView
            accessible={!!ariaLabel}
            multiple={multiple}
            choice={{...choice, i}}
            onChange={handleChange}
          />
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

  const selection =
    selectionLabel || pipe(filter({selected: true}), map('name'), join(', '))(options);
  const Wrapper = ariaLabel ? 'div' : 'label';
  const triggerRole = multiple ? 'button' : 'combobox';
  const optionsRole = multiple ? 'group' : 'listbox';

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
      {title}
      {description && isCMTheme ? (
        <div className={style.infoIconWrapper}>
          <InfoIcon className={style.infoIcon} />
          <div className={style.descriptionLabel}>{description}</div>
        </div>
      ) : null}
    </span>
  ) : null;

  const hintView = isCMTheme ? (
    <div
      className={classnames(style.hint, isActive && style.hideHint)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: error || hint}}
    />
  ) : null;

  const mainClass = theme ? themeStyle[theme] : style.defaultStyle;
  const showPlaceholder = isCMTheme && isActive;
  const behaviourClassName = getClassState(
    style.defaultStyle,
    style.modified,
    style.error,
    modified,
    error
  );

  const errorIconView = error ? <ErrorIcon onClick={onError} className={style.errorIcon} /> : null;

  return (
    <div
      className={classnames(
        mainClass,
        behaviourClassName,
        disabled && style.disabled,
        ariaLabel && style.keyboard
      )}
      ref={nodeRef}
      onKeyDown={ariaLabel ? handleKeyDown : undefined}
      onBlur={ariaLabel ? handleBlur : undefined}
    >
      <Wrapper>
        {!isCMTheme && titleView}
        <div
          className={style.select}
          ref={triggerRef}
          role={ariaLabel ? triggerRole : undefined}
          tabIndex={ariaLabel && !disabled ? 0 : undefined}
          aria-label={ariaLabel}
          aria-controls={listId}
          aria-expanded={ariaLabel ? isOpened : undefined}
          aria-disabled={ariaLabel ? disabled : undefined}
          aria-haspopup={ariaLabel && !multiple ? 'listbox' : undefined}
          title={selection || placeholder}
          data-name={`select-languages`}
          onClick={handleOnClick}
        >
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
                  style={{color: black}}
                  className={classnames(style.arrow, {[style.down]: isActive})}
                />
              </div>
            </div>
          ) : (
            <ArrowDown
              style={{color: black}}
              className={classnames(style.arrow, {[style.down]: isActive})}
            />
          )}
        </div>
        <div
          hidden={ariaLabel && !isOpened ? true : undefined}
          className={classnames(
            style.choices,
            dropdownClassName,
            isActive && style.activeChoices,
            search && style.searchable
          )}
        >
          {search ? (
            <div className={style.searchContainer}>
              <input
                data-name="select-search"
                className={style.searchInput}
                aria-label={search.label}
                placeholder={search.label}
                value={search.value}
                onChange={handleSearch}
              />
            </div>
          ) : null}
          <ul
            className={style.list}
            id={listId}
            role={ariaLabel ? optionsRole : undefined}
            aria-label={ariaLabel}
          >
            {lines}
          </ul>
          {search &&
          !options.some(choice =>
            choice.name.toLowerCase().includes(search.value.toLowerCase())
          ) ? (
            <p className={style.emptyResults}>{search.emptyLabel}</p>
          ) : null}
        </div>
      </Wrapper>
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
  choice: choiceType,
  accessible: PropTypes.bool,
  onChange: PropTypes.func
};

SelectMultiple.propTypes = {
  'aria-label': PropTypes.string,
  selectionLabel: PropTypes.string,
  search: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    emptyLabel: PropTypes.string,
    onChange: PropTypes.func.isRequired
  }),
  title: PropTypes.string,
  placeholder: PropTypes.string,
  description: PropTypes.string,
  hint: PropTypes.string,
  dropdownClassName: PropTypes.string,
  options: PropTypes.arrayOf(choiceType),
  onChange: PropTypes.func,
  onError: PropTypes.func,
  multiple: PropTypes.bool,
  modified: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  theme: PropTypes.oneOf(keys(themeStyle))
};

export default SelectMultiple;
