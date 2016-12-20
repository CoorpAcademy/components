import React from 'react';
import {checker, createValidate} from '../../util/validation';
import Table from '../../molecule/table';
import Pagination from '../../molecule/pagination';
import Search from '../../molecule/search';
import Loader from '../../atom/loader';
import Link from '../../atom/link';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    createHref: checker.string,
    search: checker.shape({
      value: checker.string.optional,
      placeholder: checker.string,
      onChange: checker.func
    }).optional,
    pagination: checker.shape({
      value: checker.string,
      nextHref: checker.string.optional,
      previousHref: checker.string.optional
    }).optional,
    displayOptions: checker.shape({
      value: checker.string,
      values: checker.array,
      onChange: checker.func
    }),
    emptyValue: checker.string,
    isPending: checker.bool.optional,
    rows: checker.array.optional,
    columns: checker.array.optional
  }),
  children: checker.none
});

const BrandTable = ({children, ...props}) => {
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
      <Loader/>
    </div>
  );

  const tableView = rows.length > 0 ? (
    <Table rows={rows} columns={columns} />
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
      <div className={style.footerWrapper}>
      </div>
    </div>
  );
};

BrandTable.validate = createValidate(conditions);
export default BrandTable;
