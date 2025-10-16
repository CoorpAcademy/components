import React from 'react';
import {filter, pipe, size, getOr, toString} from 'lodash/fp';
import {convert} from 'css-color-function';
import Title from '../../atom/title';
import InputSwitch from '../../atom/input-switch';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import {WebContextValues} from '../../atom/provider/web-context';
import {COLORS} from '../../variables/colors';
import propTypes, {FilterSwitchProps} from './prop-types';
import style from './style.css';

const FilterSwitch = (props: FilterSwitchProps, context: WebContextValues) => {
  const {skin} = context;
  const primaryColor = getOr(COLORS.cm_primary_blue, 'common.primary', skin);
  const {title, titleAriaLabel, onClear, options} = props;
  const selectedFiltersCount = pipe(filter({value: true}), size)(options);
  const hasSelectedFilters = selectedFiltersCount > 0;
  const translate = GetTranslateFromContext(context);

  return (
    <div>
      <div className={style.header}>
        <div className={style.titleContainer}>
          <Title title={title} ariaLabel={titleAriaLabel} />
          {hasSelectedFilters ? (
            <Tag
              label={toString(selectedFiltersCount)}
              type="info"
              size="S"
              customStyle={{
                color: primaryColor,
                backgroundColor: convert(`color(${primaryColor} lightness(92%))`)
              }}
            />
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
              hoverColor={COLORS.cm_grey_700}
            />
          </div>
        ) : null}
      </div>
      <div className={style.optionsContainer}>
        {options.map(optionItem => {
          const {label, value, onChange, ariaLabel, id} = optionItem;
          // Use provided id or generate fallback id
          const switchId =
            id ||
            `filter-switch-${label
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^a-z0-9-]/g, '')}`;
          return (
            <div key={label} className={style.switchOption}>
              <InputSwitch
                id={switchId}
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
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

export default FilterSwitch;
