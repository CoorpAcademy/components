import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../molecule/table';
import Pagination from '../../molecule/pagination';
import Search from '../../atom/input-search';
import Loader from '../../atom/loader';
import style from './style.css';

const BrandTable = props => {
  const {
    pagination,
    search,
    rows = [],
    columns = [],
    editable,
    isPending,
    emptyValue,
    onRefresh,
    refreshLabel,
    headerTitle = ''
  } = props;

  const pendingView = (
    <div className={style.loading}>
      <Loader />
    </div>
  );

  const tableView =
    rows.length > 0 ? (
      <Table rows={rows} columns={columns} editable={editable} headerTitle={headerTitle} />
    ) : (
      <div className={style.empty}>{emptyValue}</div>
    );
  const paginationView = pagination ? (
    <div>
      <Pagination {...pagination} />
    </div>
  ) : null;
  const searchView = search ? (
    <div className={style.searchWrapper}>
      <Search {...search} />
    </div>
  ) : null;

  const refreshView = onRefresh ? (
    <div className={style.refresh} onClick={onRefresh}>
      🔄 {refreshLabel}
    </div>
  ) : null;

  return (
    <div className={style.wrapper}>
      <div className={style.headerWrapper}>
        {refreshView}
        {searchView}
        {paginationView}
      </div>
      <div>{isPending ? pendingView : tableView}</div>
      <div />
    </div>
  );
};

BrandTable.propTypes = {
  search: PropTypes.shape(Search.propTypes),
  pagination: PropTypes.shape(Pagination.propTypes),
  emptyValue: PropTypes.string.isRequired,
  isPending: PropTypes.bool,
  editable: PropTypes.bool,
  rows: Table.propTypes.rows,
  columns: Table.propTypes.columns,
  onRefresh: PropTypes.func,
  refreshLabel: PropTypes.string,
  headerTitle: PropTypes.string
};

export default BrandTable;
