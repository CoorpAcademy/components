import PropTypes from 'prop-types';
import {Props as ExpandibleErrorsTableProps} from '../expandible-errors-table/types';

const columnProptypes = PropTypes.shape({
  title: PropTypes.string.isRequired
});

const rowProptypes = PropTypes.shape({
  fields: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.shape({icon: PropTypes.string})])
  )
});

export const propTypes = {
  columns: PropTypes.arrayOf(columnProptypes),
  rows: PropTypes.arrayOf(rowProptypes),
  ariaDescribedby: PropTypes.string,
  nested: PropTypes.string,
  bulletPointMenuButton: PropTypes.shape({
    buttonAriaLabel: PropTypes.string,
    menuAriaLabel: PropTypes.string,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        'data-name': PropTypes.string,
        label: PropTypes.string,
        type: PropTypes.string,
        onClick: PropTypes.func
      })
    ),
    onClick: PropTypes.func
  })
};

export type BulletPointMenuButton = {
  buttonAriaLabel: string;
  menuAriaLabel: string;
  buttons: {
    'data-name': string;
    label: string;
    type: string;
    onClick: () => void;
  }[];
  onClick: () => void;
  menuButtonClassName: string;
  menuClassName: string;
};
export type Column = {title: string};
export type Row = {
  fields: (
    | string
    | {icon: 'no-answer' | 'right' | 'wrong' | 'valid' | 'invalid' | 'errors-number'; value: string}
  )[];
  'expandible-errors-table': ExpandibleErrorsTableProps;
};
export type Columns = Column[];
export type Rows = Row[];

export type Props = {
  columns: Columns;
  rows?: Rows;
  ariaDescribedby?: string;
  bulletPointMenuButton: BulletPointMenuButton;
};

export type ExpandState = {[key: number]: boolean};
