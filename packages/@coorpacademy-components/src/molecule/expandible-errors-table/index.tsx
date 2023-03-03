import React, {useState} from 'react';
import classnames from 'classnames';
import {get, isString, some} from 'lodash/fp';
import ButtonLinkIconOnly from '../../atom/button-link-icon-only';
import StatusItem from '../../atom/status-item';
import ErrorsTable from '../errors-table';
import {WebContextValues} from '../../atom/provider/web-context';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import style from './style.css';
import {ExpandState, Props, propTypes} from './types';

const ExpandableErrorsTable = (props: Props, legacyContext: WebContextValues) => {
  const {columns, rows = [], ariaDescribedby, nested = false} = props;
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
    const isRowExpanded = expandedRows.includes(index);

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

  const isTableExpandible = some(row => some({icon: 'invalid'}, row.fields), rows);
  const renderIcon = (icon: 'valid' | 'invalid') => {
    switch (icon) {
      case 'valid':
      case 'invalid':
        return <StatusItem {...{icon}} />;
    }
  };

  const headerRow = columns.map((column, cIndex) => {
    const {title} = column;
    return (
      <th
        className={cIndex === 0 ? style.headerSecond : style[`header-${cIndex + 1}`]}
        key={`${title}-${cIndex + 1}`}
        role="columnheader"
      >
        {title}
      </th>
    );
  });

  const headerView = [
    <th
      className={isTableExpandible ? style.headerFirstExpandible : style.headerFirst}
      key="header"
    />
  ].concat(headerRow);

  const bodyView = rows.map((row, index) => {
    const {fields} = row;

    const bodyRow = fields.map((field: string | {icon: 'valid' | 'invalid'}, fIndex: number) => {
      return (
        <td className={style.col} key={`${field}-${fIndex}`}>
          {isString(field) ? field : renderIcon(get('icon', field))}
        </td>
      );
    });

    bodyRow.unshift(
      <td
        className={classnames(
          isTableExpandible ? style.columnFirstExpandible : style.columnFirst,
          style.col
        )}
        key="header"
      >
        {some((field: string | {icon: string}) => get('icon', field) === 'invalid')(fields) ? (
          <div className={style.upDownIcon}>
            <ButtonLinkIconOnly
              onClick={handleExpandRow(index)}
              data-name="arrowUp-button"
              icon="down"
              className={expandState[index] ? 'bulkArrowUp' : 'bulkArrowDown'}
              aria-label={translate('bulk_import.show_errors')}
            />
          </div>
        ) : null}
      </td>
    );

    const errorRow =
      get('errors-table', row) && expandedRows.includes(index) ? (
        <tr key={`line-${index}-error`}>
          <td className={style.errorRow} colSpan={fields.length + 1}>
            <ErrorsTable
              rows={get('errors-table.rows', row)}
              columns={get('errors-table.columns', row)}
            />
          </td>
        </tr>
      ) : null;

    return errorRow
      ? [<tr key={`line-${index}`}>{bodyRow}</tr>, errorRow]
      : [<tr key={`line-${index}`}>{bodyRow}</tr>];
  });

  return (
    <table
      {...(ariaDescribedby ? {'aria-describedby': ariaDescribedby} : {})}
      className={style.table}
    >
      <thead className={nested ? style.theadNested : style.thead}>
        <tr>{headerView}</tr>
      </thead>
      <tbody>{bodyView}</tbody>
    </table>
  );
};

ExpandableErrorsTable.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

ExpandableErrorsTable.propTypes = propTypes;

export default ExpandableErrorsTable;
