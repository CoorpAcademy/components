import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import ArrowDown from '@coorpacademy/nova-icons/composition/navigation/arrow-down';
import FunnelIcon from '@coorpacademy/nova-icons/composition/coorpacademy/funnel';
import PencilIcon from '@coorpacademy/nova-icons/solid/content-edition/pencil-1';
import Provider from '../../atom/provider';
import Checkbox from '../../atom/checkbox';
import Link from '../../atom/link';
import style from './style.css';

const Table = (props, context) => {
  const {rows = [], columns = []} = props;
  const {skin} = context;

  const mediumColor = get('common.medium', skin);
  const brandColor = get('common.brand', skin);

  const headerView = columns.map((column, cIndex) => {
    const {title, filtered, options = []} = column;

    const hasOptions = options.length > 0;

    const createOptionsView = _options => {
      const optionsView = _options.map((option, oIndex) => {
        const {onChange, selected} = option;

        return (
          <div key={oIndex} className={selected ? style.selected : style.option}>
            <button onClick={onChange}>{option.title}</button>
          </div>
        );
      });

      return hasOptions
        ? <div className={style.options}>
            {optionsView}
          </div>
        : null;
    };

    const OptionsIcon = (hasOptions && (filtered ? FunnelIcon : ArrowDown)) || null;

    return (
      <th key={cIndex}>
        <div className={hasOptions ? style.toggle : style.noOptions}>
          <Checkbox id={title} name={title} checked className={style.checkbox} />
          <label htmlFor={title}>
            {title}
          </label>
          {options.length > 0 ? createOptionsView(options) : null}
          <div className={style.optionsIconWrapper}>
            {hasOptions ? <OptionsIcon color={mediumColor} className={style.optionsIcon} /> : null}
          </div>
        </div>
      </th>
    );
  });

  headerView.unshift(
    <th key="header">
      <div className={style.noOptions} />
    </th>
  );

  const bodyView = rows.map((row, index) => {
    const {fields = [], editHref} = row;

    const tableRows = fields.map((field, fIndex) => {
      return <td key={fIndex}>{field}</td>;
    });

    tableRows.unshift(
      <td key="header">
        <Link className={style.editLink} href={editHref}>
          <PencilIcon color={mediumColor} hoverColor={brandColor} />
        </Link>
      </td>
    );

    return <tr key={index}>{tableRows}</tr>;
  });

  return (
    <div className={style.wrapper}>
      <table className={style.table}>
        <thead>
          <tr>
            {headerView}
          </tr>
        </thead>
        <tbody>
          {bodyView}
        </tbody>
      </table>
    </div>
  );
};

Table.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Table.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.arrayOf(PropTypes.string),
      editHref: PropTypes.string.isRequired
    })
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      filtered: PropTypes.bool,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          onChange: PropTypes.func.isRequired,
          selected: PropTypes.bool.isRequired
        })
      )
    })
  )
};

export default Table;
