/* eslint-disable css-modules/no-unused-class */
import React, {useState} from 'react';
import classnames from 'classnames';
import {get, isString} from 'lodash/fp';
import ButtonLinkIconOnly from '../../atom/button-link-icon-only';
import StatusItem from '../../atom/status-item';
import {WebContextValues} from '../../atom/provider/web-context';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import BulletPointMenuButton from '../bullet-point-menu-button';
import ExpandableErrorsTable from '../expandible-errors-table';
import style from './style.css';
import {ExpandState, Props, propTypes} from './types';

const ActionableExpandableErrorsTable = (props: Props, legacyContext: WebContextValues) => {
  const {columns = [], rows = [], ariaDescribedby, bulletPointMenuButton} = props;
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
  const handleExpandRow = (index: number) => {
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

  const headerRow = columns.map((column, cIndex) => {
    const {title} = column;
    return (
      <th className={style.header} key={`${title}-${cIndex + 1}`} role="columnheader">
        <div>{title}</div>
      </th>
    );
  });

  headerRow.push(
    <th className={style[`header-last`]} key="action-header">
      <div> {''}</div>
    </th>
  );
  const headerView = [
    <th className={style[`header-0`]} key="expand-header">
      <div> {''}</div>
    </th>
  ].concat(headerRow);

  const bodyView = rows.map((row, index) => {
    const {fields = []} = row;

    const bodyRow = fields.map((field, fIndex) => {
      return (
        <td className={style.col} key={`${field}-${fIndex}`}>
          {isString(field) ? (
            field
          ) : (
            <StatusItem icon={get('icon', field)} value={get('value', field)} />
          )}
        </td>
      );
    });

    bodyRow.unshift(
      <td className={classnames(style[`col-0`], style.col)} key="header">
        <div className={style.upDownIcon}>
          <ButtonLinkIconOnly
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => handleExpandRow(index)}
            data-name="arrowUp-button"
            icon="down"
            className={expandState[index] ? 'bulkArrowUp' : 'bulkArrowDown'}
            aria-label={translate('bulk_import.show_errors')}
          />
        </div>
      </td>
    );
    bodyRow.push(
      <td className={style[`col-last`]} key="actionHeader">
        <BulletPointMenuButton {...bulletPointMenuButton} />
      </td>
    );

    const errorRow =
      get('expandible-errors-table', row) && expandedRows.includes(index) ? (
        <tr key={`line-${index}-error`}>
          <td className={style.errorRow} colSpan={fields.length + 2}>
            <ExpandableErrorsTable
              rows={get('expandible-errors-table.rows', row)}
              columns={get('expandible-errors-table.columns', row)}
            />
          </td>
        </tr>
      ) : null;

    return errorRow
      ? [<tr key={`line-${index}`}>{bodyRow}</tr>, errorRow]
      : [<tr key={`line-${index}`}>{bodyRow}</tr>];
  });

  return (
    <div className={style.wrapper}>
      <table
        {...(ariaDescribedby ? {'aria-describedby': ariaDescribedby} : {})}
        className={style.table}
      >
        <thead className={style.thead}>
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
