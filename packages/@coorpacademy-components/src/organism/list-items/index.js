import React from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/fp/isNil';
import map from 'lodash/fp/map';
import isEmpty from 'lodash/fp/isEmpty';
import ListItem from '../list-item';
import DraggableList from '../../molecule/draggable-list';
import Title from '../../atom/title';
import ButtonLink from '../../atom/button-link';
import SelectMultiple from '../../molecule/select-multiple';
import ExpandibleActionableTable from '../../molecule/expandible-actionable-table';
import Loader from '../../atom/loader';
import Search from '../../atom/input-search';
import CheckboxWithTitle from '../../atom/checkbox-with-title';
import ButtonMenuAction from '../../molecule/button-menu-action';
import style from './style.css';

const buildTitleView = title => {
  if (typeof title === 'string') {
    return (
      <Title
        title={title}
        type="form-group"
        titleSize="standard-light-weight"
        data-name="list-title"
      />
    );
  }
  return <Title {...title} />;
};

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
          <ListItem
            {...item}
            order={null}
            contentType={itemType}
            data-name={`list-item-${index}`}
          />
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

const buildEmptyResultView = emptyResult => {
  const {title, description, button} = emptyResult;

  return (
    <div className={style.emptySearchResultContainer}>
      <div className={style.emptySearchResultTitle}>{title}</div>
      <div className={style.emptySearchResultDescription}>{description}</div>
      <div className={style.emptySearchResultButton}>
        {button?.menu ? <ButtonMenuAction {...button} /> : <ButtonLink {...button} />}
      </div>
    </div>
  );
};

const buildContentView = (content, ariaLabel, selectMultiple) => {
  const {type} = content;

  if (type === 'list' && isEmpty(content.items) && content.emptyResult) {
    return buildEmptyResultView(content.emptyResult);
  }

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
  search,
  checkboxWithTitle,
  actionButtons,
  buttonMenuAction
}) => {
  const contentView = buildContentView(content, ariaLabel, selectMultiple);
  const titleView = buildTitleView(title);
  return (
    <div>
      <div className={style.header}>
        {checkboxWithTitle ? (
          <div className={style.checkboxAndActionsWrapper}>
            <CheckboxWithTitle {...checkboxWithTitle} title={checkboxWithTitle.title} />
            {actionButtons
              ? map.convert({cap: false})(
                  (action, index) => <ButtonLink {...action} key={`action-button-key-${index}`} />,
                  actionButtons
                )
              : null}
          </div>
        ) : (
          <div className={style.title}>{titleView}</div>
        )}
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
          {buttonMenuAction ? <ButtonMenuAction {...buttonMenuAction} /> : null}
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
      tableHeader: PropTypes.arrayOf(PropTypes.string),
      emptyResult: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        button: PropTypes.oneOfType([
          PropTypes.shape(ButtonLink.propTypes),
          PropTypes.shape(ButtonMenuAction.propTypes)
        ])
      })
    }),
    PropTypes.shape({
      ...ExpandibleActionableTable.propTypes,
      type: PropTypes.oneOf(['expandible-actionable-table'])
    })
  ]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.shape(Title.propTypes)]),
  isFetching: PropTypes.bool,
  search: PropTypes.shape(Search.propTypes),
  checkboxWithTitle: PropTypes.shape(CheckboxWithTitle.propTypes),
  actionButtons: PropTypes.arrayOf(PropTypes.shape(ButtonLink.propTypes)),
  buttonMenuAction: PropTypes.shape(ButtonMenuAction.propTypes)
};

export default ListItems;
