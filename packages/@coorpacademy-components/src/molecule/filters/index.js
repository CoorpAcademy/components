import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Select from '../../atom/select';
import RangeSlider from '../../molecule/range-slider';
import shallowCompare from '../../util/shallow-compare';
import {hoverFill} from '../../atom/button/hover-fill.css';
import style from './style.css';

class Filters extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      filter: !!props.openFilters,
      sorted: !!props.openSorts
    };
    this.handleOpenFilter = this.handleOpenFilter.bind(this);
    this.handleOpenSort = this.handleOpenSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleOpenFilter() {
    const newValue = !this.state.filter;

    this.setState({
      filter: newValue,
      sorted: false
    });

    if (this.props.onToggleFilters) {
      this.props.onToggleFilters(newValue);
    }
  }

  handleOpenSort() {
    const newValue = !this.state.sorted;

    this.setState({
      sorted: newValue,
      filter: false
    });

    if (this.props.onToggleSorts) {
      this.props.onToggleSorts(newValue);
    }
  }

  handleSearch() {
    this.setState({
      sorted: false,
      filter: false
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
      sortTabLabel
    } = this.props;
    const {skin} = this.context;
    const defaultColor = getOr('#00B0FF', 'common.primary', skin);
    const filtersActive = this.state.filter === true;
    const sortingActive = this.state.sorted === true;

    const coursesView = courses !== undefined ? (
      <div className={style.choice}>
        <Select {...courses} />
      </div>
    ) : null;

    const thematicView = thematic !== undefined ? (
      <div className={style.choice}>
        <Select {...thematic} />
      </div>
    ) : null;

    const timerView = timer !== undefined ? (
      <div className={style.choice}>
        <RangeSlider {...timer} />
      </div>
    ) : null;

    const authorsView = authors !== undefined ? (
      <div className={style.choice}>
        <Select {...authors} />
      </div>
    ) : null;

    const sortView = sorting !== undefined ? (
      <div className={style.select} >
        <Select {...sorting} />
      </div>
    ) : null;

    const emptyFilters = thematic === undefined && timer === undefined &&
                         courses === undefined && authors === undefined;

    return (
      <div className={style.search}>
        <div className={filtersActive ? style.activeDefault : style.default}>
          <div
            className={style.title}
            style={{
              color: defaultColor
            }}
            onClick={this.handleOpenFilter}
          >
            {filterTabLabel}
          </div>
        </div>
        <div
          className={sortingActive ? style.activeWrapperSortBy : style.wrapperSortBy}
        >
          <div
            className={style.title}
            style={{
              color: defaultColor
            }}
            onClick={this.handleOpenSort}
          >
            {sortTabLabel}
          </div>
        </div>
        <div className={filtersActive ? style.activeWrapperFilters : style.wrapperFilters} >
          <div className={emptyFilters ? style.wrapperNone : style.wrapper}>
            {thematicView}
            {coursesView}
            {timerView}
            {authorsView}
          </div>
          <div
            className={`${style.CTAfilter} ${hoverFill}`}
            style={{
              backgroundColor: defaultColor
            }}
            onClick={this.handleSearch}
          >
            {filterCTALabel}
          </div>
        </div>
        <div className={sortingActive ? style.activeSorting : style.sorting} >
          {sortView}
          <div
            className={`${style.CTAfilter} ${hoverFill}`}
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
  skin: PropTypes.object
};

Filters.propTypes = {
  filterCTALabel: PropTypes.string,
  filterTabLabel: PropTypes.string,
  sortCTALabel: PropTypes.string,
  sortTabLabel: PropTypes.string,
  openFilters: PropTypes.bool,
  openSorts: PropTypes.bool,
  thematic: PropTypes.object,
  timer: PropTypes.object,
  courses: PropTypes.object,
  authors: PropTypes.object,
  sorting: PropTypes.object,
  onSearch: PropTypes.func,
  onToggleFilters: PropTypes.func,
  onToggleSorts: PropTypes.func
};

export default Filters;
