import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';
import {NovaCompositionNavigationArrowDown as ArrowDown} from '@coorpacademy/nova-icons';
import Select from '../../atom/select';
import Provider from '../../atom/provider';
import style from './style.css';
import FiltersWrapper from './filters-wrapper';

class Filters extends React.Component {
  static propTypes = {
    filterCTALabel: PropTypes.string,
    filterTabLabel: PropTypes.string,
    sortCTALabel: PropTypes.string,
    sortTabLabel: PropTypes.string,
    openFilters: PropTypes.bool,
    openSorts: PropTypes.bool,
    filters: FiltersWrapper.propTypes.filters,
    sorting: PropTypes.shape(Select.propTypes),
    onSearch: PropTypes.func,
    onToggleFilters: PropTypes.func,
    onToggleSorts: PropTypes.func,
    moreSortAriaLabel: PropTypes.string,
    moreFilterAriaLabel: PropTypes.string
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  constructor(props) {
    super(props);
    this.state = {
      filter: !!props.openFilters,
      sorted: !!props.openSorts
    };
    this.handleOpenFilter = this.handleOpenFilter.bind(this);
    this.handleOpenSort = this.handleOpenSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleOpenFilter() {
    const {filter} = this.state;
    const {onToggleFilters} = this.props;

    const newValue = !filter;

    this.setState({
      filter: newValue,
      sorted: false
    });

    if (onToggleFilters) {
      onToggleFilters(newValue);
    }
  }

  handleOpenSort() {
    const {sorted} = this.state;
    const {onToggleSorts} = this.props;

    const newValue = !sorted;

    this.setState({
      sorted: newValue,
      filter: false
    });

    if (onToggleSorts) onToggleSorts(newValue);
  }

  handleSearch() {
    const {onSearch} = this.props;
    this.setState({
      sorted: false,
      filter: false
    });
    if (onSearch) onSearch();
  }

  render() {
    const {
      sorting,
      filterCTALabel,
      filterTabLabel,
      sortCTALabel,
      sortTabLabel,
      filters,
      moreFilterAriaLabel,
      moreSortAriaLabel
    } = this.props;
    const {filter, sorted} = this.state;
    const {skin} = this.context;

    const defaultColor = get('common.primary', skin);
    const darkColor = get('common.dark', skin);
    const filtersActive = filter === true;
    const sortingActive = sorted === true;

    const sortView =
      sorting !== undefined ? (
        <div data-name="choice" className={style.select}>
          <Select {...sorting} />
        </div>
      ) : null;

    return (
      <div data-name="search" className={style.search}>
        <div
          data-name="filter"
          data-open={filtersActive}
          className={filtersActive ? style.activeDefault : style.default}
        >
          <div className={style.title} data-name="filterButton" onClick={this.handleOpenFilter}>
            {filterTabLabel}
            <div className={style.arrow}>
              <ArrowDown color={darkColor} height={14} aria-label={moreFilterAriaLabel} />
            </div>
          </div>
        </div>
        <div
          data-name="sortBy"
          data-open={sortingActive}
          className={sortingActive ? style.activeWrapperSortBy : style.wrapperSortBy}
        >
          <div className={style.title} data-name="sortButton" onClick={this.handleOpenSort}>
            {sortTabLabel}
            <div className={style.arrow}>
              <ArrowDown color={darkColor} height={14} aria-label={moreSortAriaLabel} />
            </div>
          </div>
        </div>
        <div
          data-name="filterWrapper"
          className={filtersActive ? style.activeWrapperFilters : style.wrapperFilters}
        >
          <FiltersWrapper className={style.wrapper} filters={filters} />
          <div
            data-name="cta"
            className={style.CTAfilter}
            style={{
              backgroundColor: defaultColor
            }}
            onClick={this.handleSearch}
          >
            {filterCTALabel}
          </div>
        </div>
        <div
          data-name="sortWrapper"
          className={sortingActive ? style.activeSorting : style.sorting}
        >
          {sortView}
          <div
            data-name="cta"
            className={style.CTAfilter}
            style={{
              backgroundColor: defaultColor
            }}
            onClick={this.handleSearch}
          >
            {sortCTALabel}
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
