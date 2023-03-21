import PropTypes from 'prop-types';
import StatusItem from '../../atom/status-item';
import ButtonLink from '../../atom/button-link';
import BulletPointMenuButton from '../bullet-point-menu-button';
import {BulletPointMenuButtonProps} from '../bullet-point-menu-button/types';
import {ButtonLinkProps} from '../../atom/button-link/types';
import {StatusItemProps} from '../../atom/status-item/types';
import {Props as ErrorsTableProps} from '../errors-table/types';
import {Props as BulkProgressBarProps} from '../bulk-progress-bar/types';

const columnProptypes = PropTypes.shape({
  title: PropTypes.string.isRequired
});

const rowProptypes = PropTypes.shape({
  fields: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        ...StatusItem.propTypes,
        type: PropTypes.oneOf(['status'])
      })
    ])
  ),
  isRowExpandible: PropTypes.bool,
  lastField: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      ...BulletPointMenuButton.propTypes,
      type: PropTypes.oneOf(['menu'])
    })
  ])
});

export const propTypes = {
  columns: PropTypes.arrayOf(columnProptypes),
  rows: PropTypes.arrayOf(rowProptypes),
  stickyFirstColumn: PropTypes.bool,
  stickyLastColumn: PropTypes.bool,
  columnWidth: PropTypes.string,
  ariaDescribedby: PropTypes.string,
  lastField: PropTypes.oneOfType([
    PropTypes.shape({
      ...ButtonLink.propTypes,
      componentType: PropTypes.oneOf(['button-link'])
    }),
    PropTypes.shape({
      ...BulletPointMenuButton.propTypes,
      componentType: PropTypes.oneOf(['menu'])
    })
  ]),
  isNestedTable: PropTypes.bool
};

export type Field =
  | string
  | (StatusItemProps & {
      componentType: 'status';
    })
  | (BulkProgressBarProps & {
      componentType: 'progress-bar';
    });

export type LastField =
  | (ButtonLinkProps & {
      componentType: 'button-link';
    })
  | (BulletPointMenuButtonProps & {
      componentType: 'menu';
    });

export type NestedRow =
  | (ErrorsTableProps & {
      componentType: 'errors-table';
    })
  | (Props & {
      componentType: 'expandible-errors-table';
    });

export type Column = {title: string};
export type Row = {
  fields: Field[];

  nestedRow?: NestedRow;
  isRowExpandible?: boolean;
};
export type Columns = Column[];
export type Rows = Row[];

export type Props = {
  columns: Columns;
  rows?: Rows;
  stickyFirstColumn?: boolean;
  stickyLastColumn?: boolean;
  columnWidth?: `${number}${'px' | '%'}`;
  ariaDescribedby?: string;
  lastField?: LastField;
  isNestedTable?: boolean;
};

export type ExpandState = {[key: number]: boolean};
