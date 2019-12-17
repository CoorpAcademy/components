import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';
import {
  NovaCompositionNavigationArrowDown as ArrowDown,
  NovaCompositionCoorpacademyFunnel as FunnelIcon,
  NovaSolidContentEditionPencil1 as PencilIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import Checkbox from '../../atom/checkbox';
import Link from '../../atom/link';
import style from './style.css';
// import { NovaSolidDraft } from '@coorpacademy/nova-icons';
// import { NovaSolidValidate } from '@coorpacademy/nova-icons';

const createOptionsView = (_options, hasOptions) => {
  const optionsView = _options.map((option, oIndex) => {
    const {onChange, selected} = option;

    return (
      <div key={oIndex} className={selected ? style.selected : style.option}>
        <button onClick={onChange}>{option.title}</button>
      </div>
    );
  });

  return hasOptions ? <div className={style.options}>{optionsView}</div> : null;
};

const Table = (props, context) => {
  const {rows = [], columns = [], editable = true, theme} = props;
  const {skin} = context;

  const mediumColor = get('common.medium', skin);

  const headerView = columns.map((column, cIndex) => {
    const {title, filtered, info = '', options = []} = column;

    const hasOptions = options.length > 0;

    const OptionsIcon = (hasOptions && (filtered ? FunnelIcon : ArrowDown)) || null;

    return (
      <th title={info} key={cIndex}>
        <div className={hasOptions ? style.toggle : style.noOptions}>
          <Checkbox id={title} name={title} checked className={style.checkbox} />
          <label htmlFor={title}>{title}</label>
          {options.length > 0 ? createOptionsView(options, hasOptions) : null}
          <div className={style.optionsIconWrapper}>
            {hasOptions ? (
              <OptionsIcon
                color={mediumColor}
                height={16}
                width={16}
                className={style.optionsIcon}
              />
            ) : null}
          </div>
        </div>
      </th>
    );
  });

  const mainClass = classnames(theme ? style.cockpit : style.wrapper);

  if (editable) {
    headerView.unshift(
      <th key="header">
        <div className={style.noOptions} />
      </th>
    );
  }

  const bodyView = rows.map((row, index) => {
    const {fields = [], editHref} = row;
    const trClasses = classnames({[style.highlighted]: row.highlighted});

    const tableRows = fields.map((field, fIndex) => {
      // if (field === 'icon-draft') {
      //   return <td key={fIndex}><img className="icon" src={NovaSolidDraft} /></td>;
      // }
      // if (field === 'icon-validated') {
      //   return <td key={fIndex}><img className="icon" src={NovaSolidValidate} /></td>;
      // }
      return <td key={fIndex}><img src={field} /></td>;
    });

    if (editable) {
      tableRows.unshift(
        // TODO restore dropped support of hoverColor={brandColor}
        <td key="header">
          <Link href={editHref}>
            <PencilIcon color={mediumColor} height={16} width={16} />
          </Link>
        </td>
      );
    }

    return (
      <tr className={trClasses} key={index}>
        {tableRows}
      </tr>
    );
  });

  return (
    <div className={mainClass}>
      <table className={classnames(style.table, {[style.readonly]: !editable})}>
        <thead>
          <tr>{headerView}</tr>
        </thead>
        <tbody>{bodyView}</tbody>
      </table>
    </div>
  );
};

Table.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Table.propTypes = {
  editable: PropTypes.bool,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.arrayOf(PropTypes.string),
      editHref: PropTypes.string,
      highlighted: PropTypes.bool
    })
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      info: PropTypes.string,
      filtered: PropTypes.bool,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          onChange: PropTypes.func.isRequired,
          selected: PropTypes.bool.isRequired
        })
      )
    })
  ),
  theme: PropTypes.string
};

export default Table;
