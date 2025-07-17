import React from 'react';
import {filter, pipe, size, toString} from 'lodash/fp';
import Title from '../../atom/title';
import InputSwitch from '../../atom/input-switch';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import {WebContextValues} from '../../atom/provider/web-context';
import propTypes, {FilterSwitchProps} from './prop-types';
import style from './style.css';

const FilterSwitch = (props: FilterSwitchProps, context: WebContextValues) => {
  const {title, onClear, options} = props;
  const selectedFiltersCount = pipe(filter({value: true}), size)(options);
  const hasSelectedFilters = selectedFiltersCount > 0;
  const translate = GetTranslateFromContext(context);

  return (
    <div>
      <div className={style.header}>
        <div className={style.titleContainer}>
          <Title title={title} />
          {hasSelectedFilters ? (
            <Tag label={toString(selectedFiltersCount)} type="info" size="S" />
          ) : null}
        </div>
        {hasSelectedFilters ? (
          <div className={style.buttonContainer}>
            <ButtonLink
              customStyle={{fontWeight: 'normal', padding: 0}}
              label={translate('clear')}
              type="text"
              data-name="filter-chip-clear-button"
              aria-label="filter chip clear button"
              onClick={onClear}
            />
          </div>
        ) : null}
      </div>
      <div className={style.optionsContainer}>
        {options.map(optionItem => {
          const {label, value, onChange, ariaLabel} = optionItem;
          return (
            <div key={label} className={style.switchOption}>
              <InputSwitch
                title={label}
                value={value}
                theme={'newMooc'}
                onChange={onChange}
                aria-label={ariaLabel}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

FilterSwitch.propTypes = propTypes;

FilterSwitch.contextTypes = {
  translate: Provider.childContextTypes.translate
};

export default FilterSwitch;
