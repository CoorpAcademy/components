import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../molecule/table';
import Pagination from '../../molecule/pagination';
import Search from '../../molecule/search';
import Loader from '../../atom/loader';
import Link from '../../atom/link';
import style from './style.css';

const BrandTable = props => {
  const {
    createHref,
    pagination,
    search,
    rows = [],
    columns = [],
    isPending,
    emptyValue
  } = props;

  const pendingView = (
    <div className={style.loading}>
      <Loader />
    </div>
  );

  const tableView = rows.length > 0 ? (
    <Table
      rows={rows}
      columns={columns}
    />
  ) : (
    <div className={style.empty}>
      {emptyValue}
    </div>
  );

  return (
    <div className={style.wrapper}>
      <div className={style.headerWrapper}>
        <div className={style.create}>
          <Link href={createHref}>+</Link>
        </div>
        <div className={style.search}>
          <Search {...search} />
        </div>
        <div className={style.pagination}>
          <Pagination {...pagination} />
        </div>
      </div>
      <div className={style.tableWrapper}>
        {isPending ? pendingView : tableView}
      </div>
      <div className={style.footerWrapper} />
    </div>
  );
};

BrandTable.propTypes = {
  createHref: PropTypes.string.isRequired,
  search: PropTypes.shape({
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }),
  pagination: PropTypes.shape({
    value: PropTypes.string.isRequired,
    nextHref: PropTypes.string,
    previousHref: PropTypes.string
  }),
  emptyValue: PropTypes.string.isRequired,
  isPending: PropTypes.bool,
  rows: PropTypes.array,
  columns: PropTypes.array
};

export default BrandTable;
