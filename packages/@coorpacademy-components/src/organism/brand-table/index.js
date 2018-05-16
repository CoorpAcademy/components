import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../molecule/table';
import Pagination from '../../molecule/pagination';
import Search from '../../molecule/search';
import Loader from '../../atom/loader';
import Link from '../../atom/link';
import style from './style.css';

const BrandTable = props => {
  const {createHref, pagination, search, rows = [], columns = [], isPending, emptyValue} = props;

  const pendingView = (
    <div className={style.loading}>
      <Loader />
    </div>
  );

  const tableView =
    rows.length > 0 ? (
      <Table rows={rows} columns={columns} />
    ) : (
      <div className={style.empty}>{emptyValue}</div>
    );

  return (
    <div className={style.wrapper}>
      <div className={style.headerWrapper}>
        <div className={style.create}>
          <Link href={createHref}>+</Link>
        </div>
        <div className={style.searchWrapper}>
          <Search {...search} />
        </div>
        <div>
          <Pagination {...pagination} />
        </div>
      </div>
      <div>{isPending ? pendingView : tableView}</div>
      <div />
    </div>
  );
};

BrandTable.propTypes = {
  createHref: Link.propTypes.href.isRequired,
  search: PropTypes.shape(Search.propTypes),
  pagination: PropTypes.shape(Pagination.propTypes),
  emptyValue: PropTypes.string.isRequired,
  isPending: PropTypes.bool,
  rows: Table.propTypes.rows,
  columns: Table.propTypes.columns
};

export default BrandTable;
