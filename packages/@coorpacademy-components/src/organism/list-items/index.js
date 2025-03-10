import React from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/fp/isNil';
import isEmpty from 'lodash/fp/isEmpty';
import ListItem from '../list-item';
import DraggableList from '../../molecule/draggable-list';
import Title from '../../atom/title';
import ButtonLink from '../../atom/button-link';
import SelectMultiple from '../../molecule/select-multiple';
import ExpandibleActionableTable from '../../molecule/expandible-actionable-table';
import Loader from '../../atom/loader';
import Search from '../../atom/input-search';
import style from './style.css';

const buildListItemsView = (content, ariaLabel, selectMultiple) => {
  const {items, itemType, onDrop, isDraggable = false, tableHeader} = content;
  const itemsView =
    isDraggable && items.length > 1 ? (
      <DraggableList
        items={items.map(item => ({...item, contentType: itemType}))}
        itemType="list-item"
        onDrop={onDrop}
      />
    ) : (
      items.map((item, index) => (
        <li key={item.id} className={style.item} data-name={`content-${index}`}>
          <ListItem {...item} order={null} contentType={itemType} />
        </li>
      ))
    );
  const tableHeaderView =
    !isNil(tableHeader) && !isEmpty(tableHeader) ? (
      <div className={style.tableHeaderWrapper}>
        <div className={style.dataColumnsWrapper}>
          {tableHeader.map((tableHeaderItem, index) => (
            <div
              key={`tableHeadeColumn-key-${index}`}
              className={style.tableHeaderItem}
              data-name={`tableHeader-${index}`}
              style={
                index === 0
                  ? {flexGrow: 2, flexShrink: 0, flexBasis: 0}
                  : {flexGrow: 1, flexShrink: 0, flexBasis: 0}
              }
            >
              {tableHeaderItem}
            </div>
          ))}
        </div>
        <div className={style.settings}>{''}</div>
      </div>
    ) : null;
  return (
    <div>
      {tableHeaderView}
      <ul
        className={!selectMultiple ? style.list : style.listWithSelectMultiple}
        aria-label={ariaLabel}
        data-name={'content-list'}
      >
        {itemsView}
      </ul>
    </div>
  );
};

const buildContentView = (content, ariaLabel, selectMultiple) => {
  const {type} = content;
  switch (type) {
    case 'list':
      return buildListItemsView(content, ariaLabel, selectMultiple);
    case 'expandible-actionable-table':
      return <ExpandibleActionableTable {...content} />;
  }
};

const ListItems = ({
  title,
  buttonLink,
  selectMultiple,
  content,
  'aria-label': ariaLabel,
  isFetching,
  search
}) => {
  const contentView = buildContentView(content, ariaLabel, selectMultiple);
  return (
    <div>
      <div className={style.header}>
        <div className={style.title}>
          <Title
            title={title}
            type="form-group"
            titleSize="standard-light-weight"
            data-name="list-title"
          />
        </div>
        <div className={style.inputWrapper}>
          {!isEmpty(search) ? <Search {...search} /> : null}
          <div className={style.actionsWrapper}>
            {!isEmpty(selectMultiple) ? (
              <div className={style.selectMultiple}>
                <SelectMultiple {...selectMultiple} />
              </div>
            ) : null}
            {!isEmpty(buttonLink) ? <ButtonLink {...buttonLink} /> : null}
          </div>
        </div>
      </div>
      {isFetching ? (
        <div className={style.loaderContainer}>
          <Loader className={style.loader} theme="coorpmanager" />
        </div>
      ) : (
        contentView
      )}
    </div>
  );
};

ListItems.propTypes = {
  'aria-label': PropTypes.string,
  buttonLink: PropTypes.shape(ButtonLink.propTypes),
  selectMultiple: PropTypes.shape(SelectMultiple.propTypes),
  content: PropTypes.oneOfType([
    PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape(ListItem.propTypes)),
      type: PropTypes.oneOf(['list']),
      itemType: PropTypes.string,
      onDrop: PropTypes.func,
      isDraggable: PropTypes.bool,
      tableHeader: PropTypes.arrayOf(PropTypes.string)
    }),
    PropTypes.shape({
      ...ExpandibleActionableTable.propTypes,
      type: PropTypes.oneOf(['expandible-actionable-table'])
    })
  ]),
  title: PropTypes.string,
  isFetching: PropTypes.bool,
  search: PropTypes.shape(Search.propTypes)
};

export default ListItems;
