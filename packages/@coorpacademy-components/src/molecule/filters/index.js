import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import ArrowDown from '@coorpacademy/nova-icons/composition/navigation/arrow-down';
import Select from '../../atom/select';
import Provider from '../../atom/provider';
import RangeSlider from '../../atom/range';
import style from './style.css';

class Filters extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      filter: !!props.openFilters,
      sorted: !!props.openSorts,
      animated: false
    };
    this.handleOpenFilter = this.handleOpenFilter.bind(this);
    this.handleOpenSort = this.handleOpenSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleOpenFilter() {
    const newValue = !this.state.filter;

    this.setState({
      filter: newValue,
      sorted: false,
      animated: true
    });

    if (this.props.onToggleFilters) {
      this.props.onToggleFilters(newValue);
    }
  }

  handleOpenSort() {
    const newValue = !this.state.sorted;

    this.setState({
      sorted: newValue,
      filter: false,
      animated: true
    });

    if (this.props.onToggleSorts) {
      this.props.onToggleSorts(newValue);
    }
  }

  handleSearch() {
    this.setState({
      sorted: false,
      filter: false,
      animated: true
    });
    if (this.props.onSearch) {
      this.props.onSearch();
    }
  }

  render() {
    const {
      timer,
      thematic,
      authors,
      sorting,
      courses,
      filterCTALabel,
      filterTabLabel,
      sortCTALabel,
      sortTabLabel,
      filters
    } = this.props;

    const buildFilter = (filter, index) => {
      const {type, fieldName} = filter;
      switch (type) {
        case 'select':
          return (
            <div
              data-name="choice"
              data-filter-type={fieldName}
              className={style.choice}
              key={index}
            >
              <Select {...filter} />
            </div>
          );
        case 'range':
          return (
            <div
              data-name="choice"
              data-filter-type={fieldName}
              className={style.timerWrapper}
              key={index}
            >
              <label>
                <span className={style.timerTitle}>{filter.title}</span>
                <p className={style.timerSubtitle}>{filter.subtitle}</p>
                <RangeSlider {...filter} />
              </label>
            </div>
          );
      }
    };
    const {skin} = this.context;
    const defaultColor = get('common.primary', skin);
    const darkColor = get('common.dark', skin);
    const filtersActive = this.state.filter === true;
    const sortingActive = this.state.sorted === true;
    const animated = this.state.animated === true;

    const filtersList = map.convert({cap: false})(buildFilter, filters);
    const coursesView = courses !== undefined
      ? <div data-name="choice" data-filter-type="Cursus" className={style.choice}>
          <Select {...courses} />
        </div>
      : null;

    const thematicView = thematic !== undefined
      ? <div data-name="choice" data-filter-type="Collection" className={style.choice}>
          <Select {...thematic} />
        </div>
      : null;

    const timerView = timer !== undefined
      ? <div data-name="choice" data-filter-type="Time" className={style.timerWrapper}>
          <label>
            <span className={style.timerTitle}>{timer.title}</span>
            <p className={style.timerSubtitle}>{timer.subtitle}</p>
            <RangeSlider {...timer} />
          </label>
        </div>
      : null;

    const authorsView = authors !== undefined
      ? <div data-name="choice" data-filter-type="Author" className={style.choice}>
          <Select {...authors} />
        </div>
      : null;

    const sortView = sorting !== undefined
      ? <div data-name="choice" className={style.select}>
          <Select {...sorting} />
        </div>
      : null;

    const emptyFilters =
      thematic === undefined &&
      timer === undefined &&
      courses === undefined &&
      authors === undefined &&
      isEmpty(filters);

    return (
      <div data-name="search" className={style.search} data-animated={animated}>
        <div
          data-name="filter"
          data-open={filtersActive}
          className={filtersActive ? style.activeDefault : style.default}
        >
          <div className={style.title} data-name="filterButton" onClick={this.handleOpenFilter}>
            {filterTabLabel}
            <div className={style.arrow}>
              <ArrowDown color={darkColor} />
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
              <ArrowDown color={darkColor} />
            </div>
          </div>
        </div>
        <div
          data-name="filterWrapper"
          className={filtersActive ? style.activeWrapperFilters : style.wrapperFilters}
        >
          <div className={emptyFilters ? style.wrapperNone : style.wrapper}>
            {thematicView}
            {coursesView}
            {timerView}
            {authorsView}
            {filtersList}
          </div>
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

Filters.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Filters.propTypes = {
  filterCTALabel: PropTypes.string,
  filterTabLabel: PropTypes.string,
  sortCTALabel: PropTypes.string,
  sortTabLabel: PropTypes.string,
  openFilters: PropTypes.bool,
  openSorts: PropTypes.bool,
  thematic: PropTypes.shape(Select.propTypes),
  timer: PropTypes.shape(RangeSlider.propTypes),
  courses: PropTypes.shape(Select.propTypes),
  authors: PropTypes.shape(Select.propTypes),
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['select', 'range']).required
    })
  ),
  sorting: PropTypes.shape(Select.propTypes),
  onSearch: PropTypes.func,
  onToggleFilters: PropTypes.func,
  onToggleSorts: PropTypes.func
};

export default Filters;
