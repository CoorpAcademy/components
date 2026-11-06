import React, {useMemo, useRef, useState, useEffect, useCallback} from 'react';
import {createPortal} from 'react-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {get, isString, uniqueId} from 'lodash/fp';
import {
  NovaCompositionNavigationArrowDown as ArrowDown,
  NovaCompositionNavigationArrowTop as ArrowUp,
  NovaCompositionCoorpacademyFunnel as FunnelIcon,
  NovaSolidContentEditionPencil1 as PencilIcon,
  NovaCompositionCoorpacademyDraft as DraftIcon,
  NovaCompositionCoorpacademyValidate as ValidateIcon,
  NovaSolidVideosVideoSubtitle as VideoSubtitleIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import InputCheckbox from '../../atom/input-checkbox';
import Link from '../../atom/link';
import ButtonLink from '../../atom/button-link';
import {COLORS} from '../../variables/colors';
import AssignmentStatusTag from '../assignment-status-tag';
import style from './style.css';

const THEMES = {COCKPIT: 'cockpit'};

/**
 * The look of a row action, by variant: a discreet text link with a pictogram (Eric's review of
 * #3054), red with a bin to remove, blue with a back arrow to undo.
 */

export const ACTION_LOOKS = {
  danger: {className: style.dangerAction, color: COLORS.cm_negative_200, icon: 'trash'},
  neutral: {className: style.neutralAction, color: COLORS.cm_primary_blue, icon: 'rotate-left'}
};
// The link colour is static CSS (`dangerAction` / `neutralAction`); `color` only feeds the
// pictogram, which button-link colours through its `faIcon` prop.

const ARIA_SORT = {asc: 'ascending', desc: 'descending'};

// Sorting is a header chevron, as elsewhere on CM: one chevron on the sort column, a dimmed
// up/down pair on the others, so a sortable header never looks like a filter dropdown.
const SortIcon = ({order, color}) => {
  const icon = (Icon, testId, className) => (
    <Icon data-testid={testId} className={className} style={{color}} height={10} width={10} />
  );
  if (order === 'asc') return icon(ArrowUp, 'table-sort-asc', style.sortActive);
  if (order === 'desc') return icon(ArrowDown, 'table-sort-desc', style.sortActive);
  return (
    <span className={style.sortIdle}>
      {icon(ArrowUp, 'table-sort-none-up')}
      {icon(ArrowDown, 'table-sort-none-down')}
    </span>
  );
};

SortIcon.propTypes = {
  order: PropTypes.oneOf(['asc', 'desc', '']),
  color: PropTypes.string
};

const positionFilterPanel = (rect, panelHeight, viewport) => {
  const edge = 8;
  const width = Math.min(342, Math.max(0, viewport.innerWidth - 2 * edge));
  const belowTop = Math.max(edge, Math.min(rect.bottom + 1, viewport.innerHeight - edge));
  const below = Math.max(0, viewport.innerHeight - edge - belowTop);
  const aboveBottom = Math.max(edge, Math.min(rect.top - 1, viewport.innerHeight - edge));
  const above = Math.max(0, aboveBottom - edge);
  const flip = panelHeight > below && above > below;
  const maxHeight = flip ? above : below;
  return {
    width,
    left: Math.max(edge, Math.min(rect.left - 1, viewport.innerWidth - width - edge)),
    top: flip ? aboveBottom - Math.min(panelHeight, maxHeight) : belowTop,
    maxHeight,
    visibility: 'visible'
  };
};

const FilterHeader = ({title, filtered, options, mediumColor}) => {
  const prefix = useMemo(() => uniqueId('table-filter-'), []);
  const triggerId = `${prefix}-trigger`;
  const panelId = `${prefix}-panel`;
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(null);
  const focusedRef = useRef(false);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const OptionsIcon = filtered ? FunnelIcon : ArrowDown;
  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current.focus();
  }, []);
  const toggle = useCallback(() => {
    setPosition(null);
    setOpen(value => !value);
  }, []);
  const chooseOption = useCallback(
    event => {
      close();
      options[Number(event.currentTarget.dataset.optionIndex)].onChange(event);
    },
    [close, options]
  );
  const handleKeyDown = useCallback(
    event => {
      if (open && event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        close();
      }
    },
    [open, close]
  );

  useEffect(() => {
    if (!open) return;
    const viewport = triggerRef.current.ownerDocument.defaultView;
    const updatePosition = () => {
      const rect = triggerRef.current.closest('th').getBoundingClientRect();
      const panel = panelRef.current;
      // Measure wrapped options at the new width before deciding which side has room.
      panel.style.width = `${positionFilterPanel(rect, 0, viewport).width}px`;
      const height = Math.max(panel.scrollHeight + 2, panel.getBoundingClientRect().height);
      setPosition(positionFilterPanel(rect, height, viewport));
    };
    updatePosition();
    viewport.addEventListener('scroll', updatePosition, true);
    viewport.addEventListener('resize', updatePosition);
    return () => {
      viewport.removeEventListener('scroll', updatePosition, true);
      viewport.removeEventListener('resize', updatePosition);
    };
  }, [open, options]);

  useEffect(() => {
    if (open && position && !focusedRef.current) {
      panelRef.current.querySelector('button').focus({preventScroll: true});
      focusedRef.current = true;
    }
    if (!open) focusedRef.current = false;
  }, [open, position]);

  const panel = (
    <div
      id={panelId}
      ref={panelRef}
      className={style.options}
      role="group"
      aria-labelledby={triggerId}
      hidden={!open}
      style={open ? position || {visibility: 'hidden'} : undefined}
      onKeyDown={handleKeyDown}
    >
      {options.map((option, index) => (
        <div key={index} className={option.selected ? style.selected : style.option}>
          <button type="button" data-option-index={index} onClick={chooseOption}>
            {option.title}
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className={style.toggle}>
      <button
        type="button"
        id={triggerId}
        ref={triggerRef}
        className={style.filterButton}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
        onKeyDown={handleKeyDown}
      >
        {title}
      </button>
      <div className={style.optionsIconWrapper} aria-hidden="true">
        <OptionsIcon
          style={{color: mediumColor}}
          height={16}
          width={16}
          className={style.optionsIcon}
        />
      </div>
      {open ? createPortal(panel, triggerRef.current.ownerDocument.body) : panel}
    </div>
  );
};

FilterHeader.propTypes = {
  title: PropTypes.string.isRequired,
  filtered: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      selected: PropTypes.bool.isRequired
    })
  ).isRequired,
  mediumColor: PropTypes.string
};

const buildTableContext = (translate, theme, headerTitle) => {
  if (theme === THEMES.COCKPIT) {
    return (
      <div className={style.header}>
        <h1 className={style.title}>{headerTitle}</h1>
        <div className={style.legend}>
          <div className={style.icon}>
            <DraftIcon width={25} height={25} />
            <span className={style.label}>{translate('Draft')}</span>
          </div>
          <div className={style.icon}>
            <ValidateIcon width={25} height={25} />
            <span className={style.label}>{translate('Validated')}</span>
          </div>
          <div className={style.icon}>
            <span className={style.nostatus}>{'\u26A0️'}</span>
            <span className={style.label}>{translate('No status')}</span>
          </div>
        </div>
      </div>
    );
  }

  if (headerTitle) {
    return (
      <div className={style.header}>
        <h2 className={style.title}>{headerTitle}</h2>
      </div>
    );
  }
  return null;
};

const Table = (props, context) => {
  const {rows = [], columns = [], editable = true, theme, headerTitle = '', selectAll} = props;
  const {skin, translate} = context;

  const mediumColor = get('common.medium', skin);

  const headerView = columns.map((column, cIndex) => {
    const {title, filtered, info = '', options = [], order, onClick} = column;

    if (onClick) {
      return (
        <th title={info} key={cIndex} aria-sort={ARIA_SORT[order] || 'none'}>
          <button type="button" className={style.sortButton} onClick={onClick}>
            <span>{title}</span>
            <span className={style.sortArrow} aria-hidden="true">
              <SortIcon order={order} color={mediumColor} />
            </span>
          </button>
        </th>
      );
    }

    const hasOptions = options.length > 0;

    return (
      <th title={info} key={cIndex}>
        {hasOptions ? (
          <FilterHeader
            title={title}
            filtered={filtered}
            options={options}
            mediumColor={mediumColor}
          />
        ) : (
          <div className={style.noOptions}>
            <span className={style.plainHeader}>{title}</span>
            <div className={style.optionsIconWrapper} />
          </div>
        )}
      </th>
    );
  });

  const tableContext = buildTableContext(translate, theme, headerTitle);

  if (editable) {
    headerView.unshift(
      <th key="header">
        <div className={style.noOptions} />
      </th>
    );
  }

  const hasSelection = Boolean(selectAll || rows.some(row => row.select));
  const renderSelection = descriptor => {
    if (!descriptor) return null;
    const {onChange: handleChange} = descriptor;
    return (
      <div className={style.selectionControl}>
        <InputCheckbox
          title={descriptor.ariaLabel}
          checked={descriptor.checked}
          disabled={descriptor.disabled}
          onChange={handleChange}
          theme="coorpmanager"
          noLabelMargins
          hideTitle
        />
      </div>
    );
  };
  if (hasSelection) {
    headerView.unshift(
      <th key="selection" className={style.selectionCell}>
        {renderSelection(selectAll)}
      </th>
    );
  }

  const renderIcon = field => {
    switch (get('icon', field)) {
      case 'draft':
        return <DraftIcon width={25} height={25} />;
      case 'validate':
        return <ValidateIcon width={25} height={25} />;
      case 'nostatus':
        return <span className={style.nostatus}>{'\u26A0️'}</span>;
      case 'videosubtitle':
        return (
          <>
            <VideoSubtitleIcon className={style.videosubtitle} width={25} height={25} />
            {field.title}
          </>
        );
      default:
        null;
    }
  };

  const bodyView = rows.map((row, index) => {
    const {fields = [], editHref} = row;
    const trClasses = classnames({[style.highlighted]: row.highlighted});

    const tableRows = fields.map((field, fIndex) => {
      if (!field) return <td key={fIndex}>{''}</td>;
      if (isString(field) || field.icon) {
        return <td key={fIndex}>{isString(field) ? field : renderIcon(field)}</td>;
      }
      if (field.action) {
        const {label, onClick, variant} = field.action;
        const {className, color, icon} = ACTION_LOOKS[variant];
        return (
          <td key={fIndex} className={style.actionCell}>
            {field.text ? <span className={style.actionState}>{field.text}</span> : null}
            <ButtonLink
              type="text"
              label={label}
              onClick={onClick}
              className={className}
              icon={{position: 'left', faIcon: {name: icon, size: 14, color}}}
            />
          </td>
        );
      }
      return (
        <td key={fIndex}>
          <span className={style.cellContent}>
            {field.text}
            {(field.tags || []).map((tag, tagIndex) => (
              <AssignmentStatusTag {...tag} key={tagIndex} />
            ))}
          </span>
        </td>
      );
    });

    if (editable) {
      tableRows.unshift(
        // TODO restore dropped support of hoverColor={brandColor}
        <td key="header">
          <Link href={editHref}>
            <PencilIcon style={{color: mediumColor}} height={16} width={16} />
          </Link>
        </td>
      );
    }

    if (hasSelection) {
      tableRows.unshift(
        <td key="selection" className={style.selectionCell}>
          {renderSelection(row.select)}
        </td>
      );
    }

    return (
      <tr className={trClasses} key={index}>
        {tableRows}
      </tr>
    );
  });

  const mainClass = classnames(theme === THEMES.COCKPIT ? style.cockpit : style.wrapper);

  return (
    <div className={mainClass}>
      {tableContext}
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
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

const selectionPropType = PropTypes.shape({
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
});

Table.propTypes = {
  selectAll: selectionPropType,
  editable: PropTypes.bool,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      fields: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            action: PropTypes.shape({
              label: PropTypes.string.isRequired,
              onClick: PropTypes.func.isRequired,
              variant: PropTypes.oneOf(['danger', 'neutral']).isRequired
            }),
            icon: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
            tags: PropTypes.arrayOf(PropTypes.shape(AssignmentStatusTag.propTypes))
          })
        ])
      ),
      select: selectionPropType,
      editHref: PropTypes.string,
      highlighted: PropTypes.bool
    })
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      info: PropTypes.string,
      filtered: PropTypes.bool,
      // A sortable column: its header is a button showing ▲ (asc), ▼ (desc) or nothing ('')
      order: PropTypes.oneOf(['asc', 'desc', '']),
      onClick: PropTypes.func,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          onChange: PropTypes.func.isRequired,
          selected: PropTypes.bool.isRequired
        })
      )
    })
  ),
  theme: PropTypes.oneOf([THEMES.COCKPIT]),
  headerTitle: PropTypes.string
};

export default Table;
