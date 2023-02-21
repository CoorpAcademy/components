import PropTypes from 'prop-types';

const columnProptypes = PropTypes.shape({
  title: PropTypes.string.isRequired
});

const rowProptypes = PropTypes.shape({
  fields: PropTypes.arrayOf(PropTypes.string)
});

export const propTypes = {
  columns: PropTypes.arrayOf(columnProptypes),
  rows: PropTypes.arrayOf(rowProptypes),
  ariaDescribedby: PropTypes.string
};

export type Column = {title: string};
export type Row = {fields: string[]};
export type Columns = [Column, Column];
export type Rows = Row[];

export type Props = {
  columns: Columns;
  rows: Rows;
  ariaDescribedby?: string;
};
