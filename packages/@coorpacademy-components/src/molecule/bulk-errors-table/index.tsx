/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import classnames from 'classnames';
import style from './style.css';
import {Props, propTypes} from './types';

const BulkTableHeader = (props: Props) => {
  const {columns = [], rows = [], descriptionId} = props;

  const headerRow = columns.map((column, cIndex) => {
    const {title} = column;
    return (
      <th key={cIndex + 1} role="columnheader">
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
        <td className={classnames(style[`col-${fIndex + 1}`])} key={fIndex}>
          {field || ''}
        </td>
      );
    });
    bodyRow.unshift(
      <td className={classnames(style[`col-0`])} key="header">
        {index + 1}
      </td>
    );

    return <tr key={index}>{bodyRow}</tr>;
  });

  return (
    <table {...(descriptionId ? {'aria-describedby': descriptionId} : {})} className={style.table}>
      <thead>
        <tr>{headerView}</tr>
      </thead>
      <tbody>{bodyView}</tbody>
    </table>
  );
};

BulkTableHeader.propTypes = propTypes;

export default BulkTableHeader;
