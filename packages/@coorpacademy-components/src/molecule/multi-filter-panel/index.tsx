import React from 'react';
import {map, size, pipe, filter, flatMap, toString, concat} from 'lodash/fp';
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
import propTypes, {MultiFilterPanelProps, FilterOptionsProps, SelectedFilter} from './prop-types';
import style from './style.css';

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

const buildSelectedFilterChips = (
  selectedFilters: SelectedFilter[],
  onRemoveSelectedFilter?: (filterId: string) => void
) => {
  return (
    <div className={style.selectedFiltersContainer} data-testid="selected-filters-container">
      {selectedFilters.map((filterItem: SelectedFilter, index: number) => {
        const {label} = filterItem;
        return (
          <Chip
            key={index}
            onClick={onRemoveSelectedFilter}
            text={label}
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
  const {title, onClearAll, options, showSelectedFilters = false, onRemoveSelectedFilter} = props;
  // eslint-disable-next-line no-console
  console.log('🚀 ~ index.tsx:34 ~ MultiFilterPanel ~ showSelectedFilters:', showSelectedFilters);
  const translate = GetTranslateFromContext(context);
  const allSelectedFilters = pipe(
    map('options'),
    flatMap('options'),
    filter({selected: true})
  )(options) as SelectedFilter[];
  const allSwitchFilters = pipe(
    map('options'),
    flatMap('options'),
    filter({value: true})
  )(options) as SelectedFilter[];
  const allCombinedFilters = concat(allSwitchFilters)(allSelectedFilters);
  // eslint-disable-next-line no-console
  console.log('🚀 ~ index.tsx:76 ~ MultiFilterPanel ~ allCombinedFilters:', allCombinedFilters);
  const hasSelectedFilters = size(allCombinedFilters) > 0;
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
            <Tag label={toString(size(allCombinedFilters))} type="info" size="S" />
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
            />
          </div>
        ) : null}
      </div>
      {showSelectedFilters && hasSelectedFilters ? (
        <>
          <div>{buildSelectedFilterChips(allCombinedFilters, onRemoveSelectedFilter)}</div>
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
