import React from 'react';
import {map, size, pipe, filter, flatMap, toString} from 'lodash/fp';
import FilterChip from '../../organism/filter-chip';
import FilterCheckboxAndSearch from '../../organism/filter-checkbox-and-search';
import Title from '../../atom/title';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import {WebContextValues} from '../../atom/provider/web-context';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import Chip from '../../atom/chip';
import {COLORS} from '../../variables/colors';
import FilterSwitch from '../../organism/filter-switch';
import {FilterCheckboxAndSearchOptions} from '../../organism/filter-checkbox-and-search/props-types';
import {FilterChipOptionsProps} from '../../organism/filter-chip/prop-types';
import {FilterSwitchOptionsProps} from '../../organism/filter-switch/prop-types';
import style from './style.css';
import propTypes, {MultiFilterPanelProps, FilterOptionsProps} from './prop-types';

type SelectedFilter =
  | FilterChipOptionsProps
  | FilterSwitchOptionsProps
  | FilterCheckboxAndSearchOptions;

// @ts-expect-error convert is not recognized by the types
const uncappedMap = map.convert({cap: false});

const CLEAR_ALL_BUTTON_STYLE = {fontWeight: 'normal', padding: 0};
const FilterSeparator = <div className={style.filterSeparator} />;

const buildFilters = (filterOptions: FilterOptionsProps) => {
  const {type, options} = filterOptions;
  switch (type) {
    case 'chip':
      return <FilterChip {...options} />;
    case 'checkbox':
      return <FilterCheckboxAndSearch {...options} />;
    case 'switch':
      return <FilterSwitch {...options} />;
    default:
      return null;
  }
};

const buildAllSelectedFilterChips = (
  selectedFilters: SelectedFilter[],
  onRemoveSelectedFilter: (label: string) => void
) => {
  return (
    <div className={style.selectedFiltersContainer} data-testid="selected-filters-container">
      {selectedFilters.map((filterItem: SelectedFilter) => {
        const {label} = filterItem;

        function handleClick() {
          return onRemoveSelectedFilter(label);
        }

        return (
          <Chip
            key={label}
            onClick={handleClick}
            text={label}
            textColor={COLORS.neutral_500}
            backgroundColor={COLORS.cm_grey_150}
            customIcon={'xmark'}
            customStyle={{height: '28px', padding: '4px 8px'}}
          />
        );
      })}
    </div>
  );
};

const MultiFilterPanel = (props: MultiFilterPanelProps, context: WebContextValues) => {
  const {title, onClearAll, options, onRemoveSelectedFilter = false} = props;
  const translate = GetTranslateFromContext(context);
  const allSelectedFilters: SelectedFilter[] = pipe(
    map('options'),
    flatMap('options'),
    filter(filterOptions => filterOptions.selected || filterOptions.value === true)
  )(options);
  const hasSelectedFilters = size(allSelectedFilters) > 0;
  const filters = uncappedMap((filterOptions: FilterOptionsProps, i: number) => {
    const isLastItem = i + 1 === size(options);

    return (
      <div key={i}>
        {buildFilters(filterOptions)}
        {isLastItem ? null : FilterSeparator}
      </div>
    );
  }, options);
  return (
    <>
      <div className={style.header}>
        <div className={style.titleContainer}>
          <Title title={title} type="form-group" titleSize="standard-light-weight" />
          {hasSelectedFilters ? (
            <Tag label={toString(size(allSelectedFilters))} type="info" size="S" />
          ) : null}
        </div>
        {hasSelectedFilters ? (
          <div className={style.buttonContainer}>
            <ButtonLink
              customStyle={CLEAR_ALL_BUTTON_STYLE}
              label={translate('clear_all')}
              type="text"
              data-name="filters-all-clear-button"
              aria-label="filters all clear button"
              onClick={onClearAll}
              hoverColor={COLORS.primary_600}
            />
          </div>
        ) : null}
      </div>
      {onRemoveSelectedFilter && hasSelectedFilters ? (
        <>
          <div>{buildAllSelectedFilterChips(allSelectedFilters, onRemoveSelectedFilter)}</div>
          {FilterSeparator}
        </>
      ) : null}
      {filters}
    </>
  );
};

MultiFilterPanel.propTypes = propTypes;

MultiFilterPanel.contextTypes = {
  translate: Provider.childContextTypes.translate
};

export default MultiFilterPanel;
