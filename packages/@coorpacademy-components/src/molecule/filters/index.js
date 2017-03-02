import React, {PropTypes} from 'react';
import Select from '../../atom/select';
import SelectMultiple from '../../molecule/select-multiple';
import RangeSlider from '../../molecule/range-slider';
import style from './style.css';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleOnClick() {
    this.setState({opened: !this.state.opened});
  }

  render() {
    const {
      timer,
      select,
      selectMultiple
    } = this.props;

    const isActive = this.state.opened === true;
    const filtersActive = this.state.opened === true;
    const sortingActive = this.state.opened === true;

    return (
      <div className={style.search}>
        <div className={filtersActive ? style.activeDefault : style.default}>
          <div
            className={style.title}
            onClick={this.handleOnClick}
          >
            Filters
          </div>
        </div>
        <div
          className={sortingActive ? style.activeWrapperSortBy : style.wrapperSortBy}
        >
          <div
            className={style.title}
            onClick={this.handleOnClick}
          >
            sort by
          </div>
        </div>
        <div className={isActive ? style.activeWrapperFilters : style.wrapperFilters} >
          <div className={style.wrapper}>
            <Select {...select} />
            <div className={style.toggle}>
              <RangeSlider {...timer} />
            </div>
            <SelectMultiple {...selectMultiple} />
            <Select {...select} />
          </div>
          <div
            className={style.CTAfilter}
            onClick={this.handleOnClick}
          >
            Filter
          </div>
        </div>
        <div className={style.sorting}>
          <div className={style.mainTitle}>Catalog</div>
          <div className={style.select}>
            <div className={style.title}>sort by</div>
            <Select {...select} />
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
