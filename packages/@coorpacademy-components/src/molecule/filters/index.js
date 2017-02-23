import React, {PropTypes} from 'react';
import Select from '../../atom/select';
import style from './style.css';

function Filters(props) {
  const {
    select
  } = props;

  return (
    <div>
      <div className={style.default}>
        <div className={style.title}>Filters</div>
        <div className={style.wrapperFilters}>
          <Select {...select} />
          <div className={style.toggle} />
          <Select {...select} />
          <Select {...select} />
        </div>
      </div>
      <div className={style.wrapperSortBy}>
        <div className={style.title}>sort by</div>
        <div className={style.sorting}>
          <div className={style.mainTitle}>Catalog</div>
          <div className={style.select}>
            <div className={style.title}>sort by</div>
            <Select {...select} />
          </div>
        </div>
      </div>
    </div>
  );
}

Filters.propTypes = {
  select: PropTypes.string
};

export default Filters;
