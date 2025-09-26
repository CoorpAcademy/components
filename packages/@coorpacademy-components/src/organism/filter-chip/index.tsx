import React from 'react';
import {filter, getOr, map, pipe, size, toString} from 'lodash/fp';
import {convert} from 'css-color-function';
import Chip from '../../atom/chip';
import Title from '../../atom/title';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import {WebContextValues} from '../../atom/provider/web-context';
import {COLORS} from '../../variables/colors';
import propTypes, {FilterChipProps} from './prop-types';
import style from './style.css';

const FilterChip = (props: FilterChipProps, context: WebContextValues) => {
  const {skin} = context;
  const primaryColor = getOr(COLORS.cm_grey_700, 'common.primary', skin);
  const {options, titleAriaLabel, title, onClear} = props;
  const selectedFiltersCount = pipe(filter({selected: true}), size)(options);
  const hasSelectedFilters = selectedFiltersCount > 0;
  const translate = GetTranslateFromContext(context);
  return (
    <>
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
        {map(({icon, label, onClick, textColor, type, selected, customIcon}) => {
          function handleClick() {
            onClick(type);
          }
          return (
            <Chip
              leftIcon={icon}
              text={label}
              textColor={textColor}
              key={label}
              backgroundColor="skin"
              selected={selected}
              onClick={handleClick}
              customIcon={customIcon}
            />
          );
        }, options)}
      </div>
    </>
  );
};

FilterChip.propTypes = propTypes;

FilterChip.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

export default FilterChip;
