/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import classnames from 'classnames';
import style from './style.css';
import {Props, propTypes} from './types';

const ErrorsTable = (props: Props) => {
  const {columns = [], rows = [], ariaDescribedby} = props;

  const headerRow = columns.map((column, cIndex) => {
    const {title} = column;
    return (
      <th key={`${title}-${cIndex + 1}`} role="columnheader">
        <div>{title}</div>
      </th>
    );
  });

  const headerView = [
    <th key="header">
      <div> {''}</div>
    </th>
  ].concat(headerRow);

  const bodyView = rows.map((row, index) => {
    const {fields = []} = row;

    const bodyRow = fields.map((field: string, fIndex: number) => {
      return (
        <td className={classnames(style[`col-${fIndex + 1}`])} key={`${field}-${fIndex}`}>
          {field || ''}
        </td>
      );
    });
    bodyRow.unshift(
      <td className={classnames(style[`col-0`])} key="header">
        {index + 1}
      </td>
    );

    return <tr key={`line-${index}`}>{bodyRow}</tr>;
  });

  return (
    <table
      {...(ariaDescribedby ? {'aria-describedby': ariaDescribedby} : {})}
      className={style.table}
    >
      <thead>
        <tr>{headerView}</tr>
      </thead>
      <tbody>{bodyView}</tbody>
    </table>
  );
};

ErrorsTable.propTypes = propTypes;

export default ErrorsTable;
