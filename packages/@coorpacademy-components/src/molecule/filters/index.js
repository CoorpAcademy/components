import React, {PropTypes} from 'react';
import Select from '../../atom/select';
import SelectMultiple from '../../molecule/select-multiple';
import RangeSlider from '../../molecule/range-slider';
import shallowCompare from '../../util/shallow-compare';
import style from './style.css';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      filter: false,
      sorted: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOpenFilter = this.handleOpenFilter.bind(this);
    this.handleOpenSort = this.handleOpenSort.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleOnClick() {
    this.setState({opened: !this.state.opened});
  }

  handleOpenFilter() {
    this.setState({
      filter: !this.state.filter,
      sorted: false
    });
  }

  handleOpenSort() {
    this.setState({
      sorted: !this.state.sorted,
      filter: false
    });
  }

  render() {
    const {
      timer,
      thematic,
      authors,
      sorting,
      select,
      selectMultiple,
      ctalabelfilter,
      ctalabelsort
    } = this.props;

    const isActive = this.state.opened === true;
    const filtersActive = this.state.filter === true;
    const sortingActive = this.state.sorted === true;

    const listMultipleView = selectMultiple !== undefined ? (
      <div className={style.choice}>
        <SelectMultiple {...selectMultiple} />
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

    const emptyFilters = select === undefined && selectMultiple === undefined;

    return (
      <div className={style.search}>
        <div className={filtersActive ? style.activeDefault : style.default}>
          <div
            className={style.title}
            onClick={this.handleOpenFilter}
          >
            {ctalabelfilter}
          </div>
        </div>
        <div
          className={sortingActive ? style.activeWrapperSortBy : style.wrapperSortBy}
        >
          <div
            className={style.title}
            onClick={this.handleOpenSort}
          >
            {ctalabelsort}
          </div>
        </div>
        <div className={filtersActive ? style.activeWrapperFilters : style.wrapperFilters} >
          <div className={emptyFilters ? style.wrapperNone : style.wrapper}>
            {thematicView}
            {timerView}
            {listMultipleView}
            {authorsView}
          </div>
          <div
            className={style.CTAfilter}
            onClick={this.handleOpenFilter}
          >
            {ctalabelfilter}
          </div>
        </div>
        <div className={sortingActive ? style.activeSorting : style.sorting} >
          <div className={style.mainTitle}>Catalog</div>
          {sortView}
          <div
            className={style.CTAfilter}
            onClick={this.handleOpenSort}
          >
            {ctalabelsort}
          </div>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  thematic: PropTypes.object,
  timer: PropTypes.object,
  authors: PropTypes.object,
  sorting: PropTypes.object,
  select: PropTypes.object,
  selectMultiple: PropTypes.object
};

export default Filters;
