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
      select,
      selectMultiple
    } = this.props;

    const isActive = this.state.opened === true;
    const filtersActive = this.state.filter === true;
    const sortingActive = this.state.sorted === true;

    return (
      <div className={style.search}>
        <div className={filtersActive ? style.activeDefault : style.default}>
          <div
            className={style.title}
            onClick={this.handleOpenFilter}
          >
            Filters
          </div>
        </div>
        <div
          className={sortingActive ? style.activeWrapperSortBy : style.wrapperSortBy}
        >
          <div
            className={style.title}
            onClick={this.handleOpenSort}
          >
            sort by
          </div>
        </div>
        <div className={filtersActive ? style.activeWrapperFilters : style.wrapperFilters} >
          <div className={style.wrapper}>
            <div className={style.choice}><Select {...select} /></div>
            <div className={style.choice}><RangeSlider {...timer} /></div>
            <div className={style.choice}><SelectMultiple {...selectMultiple} /></div>
            <div className={style.choice}><Select {...select} /></div>
          </div>
          <div
            className={style.CTAfilter}
            onClick={this.handleOpenFilter}
          >
            Filter
          </div>
        </div>
        <div className={sortingActive ? style.activeSorting : style.sorting} >
          <div className={style.mainTitle}>Catalog</div>
          <div className={style.select} >
            <Select {...select} />
          </div>
          <div
            className={style.CTAfilter}
            onClick={this.handleOpenSort}
          >
            Sort
          </div>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  select: PropTypes.object,
  selectMultiple: PropTypes.object
};

export default Filters;
