import React from 'react';
import findIndex from 'lodash/fp/findIndex';
import PropTypes from 'prop-types';
import ListItem from '../list-item';
import DraggableList from '../../molecule/draggable-list';
import Title from '../../atom/title';
import ButtonLink from '../../atom/button-link';
import SelectMultiple from '../../molecule/select-multiple';
import ExpandibleActionableTable from '../../molecule/expandible-actionable-table';
import style from './style.css';

const buildListItemsView = (content, ariaLabel, selectMultiple) => {
  const {items, itemType, onDrop, isDraggable = false} = content;
  const itemsView =
    findIndex({type: 'published'}, items[0]?.tags) !== -1 &&
    itemType === 'certification' &&
    isDraggable &&
    items.length > 1 ? (
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
  return (
    <ul
      className={!selectMultiple ? style.list : style.listWithSelectMultiple}
      aria-label={ariaLabel}
      data-name={'content-list'}
    >
      {itemsView}
    </ul>
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

const ListItems = ({title, buttonLink, selectMultiple, content, 'aria-label': ariaLabel}) => {
  const contentView = buildContentView(content, ariaLabel, selectMultiple);

  return (
    <div>
      <div className={style.header}>
        <div className={style.title}>
          <Title title={title} type={'form-group'} data-name={'list-title'} />
        </div>
        <div className={style.actionsWrapper}>
          {selectMultiple ? (
            <div className={style.selectMultiple}>
              <SelectMultiple {...selectMultiple} />
            </div>
          ) : null}

          <div className={style.buttonCreate}>
            <ButtonLink {...buttonLink} />
          </div>
        </div>
      </div>
      {contentView}
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
      isDraggable: PropTypes.bool
    }),
    PropTypes.shape({
      ...ExpandibleActionableTable.propTypes,
      type: PropTypes.oneOf(['expandible-actionable-table'])
    })
  ]),
  title: PropTypes.string
};

export default ListItems;
