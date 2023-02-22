import PropTypes from 'prop-types';
import {Props as ErrorsTableProps} from '../errors-table/types';

const columnProptypes = PropTypes.shape({
  title: PropTypes.string.isRequired
});

const rowProptypes = PropTypes.shape({
  fields: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.shape({icon: PropTypes.string})])
  )
});

export const propTypes = {
  columns: PropTypes.arrayOf(columnProptypes).isRequired,
  rows: PropTypes.arrayOf(rowProptypes),
  ariaDescribedby: PropTypes.string,
  nested: PropTypes.bool
};

export type Column = {title: string};
export type Row = {
  fields: (string | {icon: 'valid' | 'invalid'})[];
  'errors-table'?: ErrorsTableProps;
};
export type Columns = [Column, Column];
export type Rows = Row[];

export type Props = {
  columns: Columns;
  rows?: Rows;
  ariaDescribedby?: string;
  nested?: boolean;
};

export type ExpandState = {[key: number]: boolean};
