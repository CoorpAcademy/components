import React, {useState} from 'react';
import classnames from 'classnames';
import {get, isString, size, includes} from 'lodash/fp';
import ButtonLinkIconOnly from '../../atom/button-link-icon-only';
import StatusItem from '../../atom/status-item';
import BulkProgressBar from '../bulk-progress-bar';
import {WebContextValues} from '../../atom/provider/web-context';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import BulletPointMenuButton from '../bullet-point-menu-button';
import ButtonLink from '../../atom/button-link';
import ErrorsTable from '../errors-table';
import style from './style.css';
import {ExpandState, Field, LastField, NestedRow, Props, propTypes} from './types';

const buildField = (field: Field) => {
  if (isString(field)) return field;
  const {componentType} = field;
  switch (componentType) {
    case 'status':
      return <StatusItem {...field} />;
    case 'progress-bar':
      return <BulkProgressBar {...field} />;
  }
};

const buildLastField = (lastField: LastField) => {
  const {componentType} = lastField;
  switch (componentType) {
    case 'menu':
      return <BulletPointMenuButton {...lastField} />;
    case 'button-link':
      return <ButtonLink {...lastField} />;
  }
};

const buildNestedRow = (row: NestedRow) => {
  const {componentType} = row;
  switch (componentType) {
    case 'errors-table':
      return <ErrorsTable {...row} />;
    case 'expandible-errors-table':
      return <ActionableExpandableErrorsTable {...row} />;
  }
};

const ActionableExpandableErrorsTable = (props: Props, legacyContext: WebContextValues) => {
  const {
    columns,
    rows = [],
    lastField,
    stickyFirstColumn = false,
    stickyLastColumn = false,
    ariaDescribedby,
    columnWidth = `${100 / size(columns)}%`,
    isNestedTable = false
  } = props;
  const translate = GetTranslateFromContext(legacyContext);

  /**
   * State variable to keep track of all the expanded rows
   * By default, nothing expanded. Hence initialized with empty array.
   */
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  /**
   * State variable to keep track which row is currently expanded.
   */
  const [expandState, setExpandState] = useState<ExpandState>({});

  /**
   * This function gets called when show/hide link is clicked.
   */
  const handleExpandRow = (index: number) => () => {
    const isRowExpanded = includes(index, expandedRows);

    /**
     * If the row is expanded, we are here to hide it. Hence remove
     * it from the state variable. Otherwise add to it.
     */
    const newExpandedRows = isRowExpanded
      ? expandedRows.filter(id => id !== index)
      : expandedRows.concat(index);

    setExpandedRows(newExpandedRows);

    /**
     * Create a new object to update the expanded state of all rows
     * Use the newExpandedRows array to set the state of all rows that are currently expanded
     */
    const expandedState: ExpandState = {};
    newExpandedRows.forEach(id => {
      expandedState[id] = true;
    });

    setExpandState(expandedState);
  };

  const headerRow = columns.map((column, cIndex) => {
    const {title} = column;
    return (
      <th
        className={
          cIndex === 0
            ? classnames(
                stickyFirstColumn ? style.headerFirstSticky : style.headerFirst,
                style.header
              )
            : style.header
        }
        key={`${title}-${cIndex}`}
        role="columnheader"
      >
        {title}
      </th>
    );
  });

  headerRow.push(
    <th
      className={stickyLastColumn ? style.headerLastSticky : style.headerLast}
      key="action-header"
    />
  );
  const headerView = [...headerRow];

  const bodyView = rows.map((row, index) => {
    const {fields, isRowExpandible = false} = row;
    const bodyRow = fields.map((field, fIndex) => {
      const cellContent =
        fIndex === 0 ? (
          <div className={style.columFirstWrapper}>
            <div className={style.expandButtonWrapper}>
              {isRowExpandible ? (
                <ButtonLinkIconOnly
                  onClick={handleExpandRow(index)}
                  data-name={`arrowUp-button-${index}`}
                  icon="down"
                  className={expandState[index] ? 'bulkArrowUp' : 'bulkArrowDown'}
                  aria-label={translate('bulk_import.show_errors')}
                />
              ) : null}
            </div>
            {buildField(field)}
          </div>
        ) : (
          buildField(field)
        );
      return (
        <td
          className={
            fIndex === 0
              ? classnames(
                  stickyFirstColumn ? style.columnFirstSticky : style.columnFirst,
                  style.col
                )
              : style.col
          }
          style={{width: columnWidth}}
          key={`${field}-${fIndex}`}
        >
          {cellContent}
        </td>
      );
    });

    bodyRow.push(
      <td
        className={stickyLastColumn ? style.columnLastSticky : style.columnLast}
        key="actionHeader"
      >
        {lastField ? (
          <div
            className={classnames({
              [style.inspectButton]: get('className', lastField) === 'bulkInspectButton'
            })}
          >
            {buildLastField(lastField)}
          </div>
        ) : null}
      </td>
    );
    const nestedRow = get('nestedRow', row);
    const nestedRowCellule =
      nestedRow && expandedRows.includes(index) ? (
        <tr key={`line-${index}-error`}>
          <td className={style.nestedRowCellule} colSpan={fields.length + 2}>
            {buildNestedRow(nestedRow)}
          </td>
        </tr>
      ) : null;

    return nestedRowCellule
      ? [<tr key={`line-${index}`}>{bodyRow}</tr>, nestedRowCellule]
      : [<tr key={`line-${index}`}>{bodyRow}</tr>];
  });

  return (
    <div className={style.wrapper}>
      <table
        {...(ariaDescribedby ? {'aria-describedby': ariaDescribedby} : {})}
        className={style.table}
        data-name="expandible-actionable-table"
      >
        <thead className={isNestedTable ? style.theadNested : style.thead}>
          <tr>{headerView}</tr>
        </thead>
        <tbody>{bodyView}</tbody>
      </table>
    </div>
  );
};

ActionableExpandableErrorsTable.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

ActionableExpandableErrorsTable.propTypes = propTypes;

export default ActionableExpandableErrorsTable;
