import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../list-item';
import Title from '../../atom/title';
import ButtonLink from '../../atom/button-link';
import ExpandibleActionableTable from '../../molecule/expandible-actionable-table';
import style from './style.css';

const buildListItemsView = (content, ariaLabel) => {
  const {items} = content;
  const itemsView = items.map((item, index) => (
    <li key={item.id} className={style.item} data-name={`content-${index}`}>
      <ListItem {...item} order={index} />
    </li>
  ));
  return (
    <ul className={style.list} aria-label={ariaLabel} data-name={'content-list'}>
      {itemsView}
    </ul>
  );
};
const buildContentView = (content, ariaLabel) => {
  const {type} = content;
  switch (type) {
    case 'list':
      return buildListItemsView(content, ariaLabel);
    case 'expandible-actionable-table':
      return <ExpandibleActionableTable {...content} />;
  }
};

const ListItems = ({title, buttonLink, content, 'aria-label': ariaLabel}) => {
  const contentView = buildContentView(content, ariaLabel);

  return (
    <div>
      <div className={style.header}>
        <div className={style.title}>
          <Title title={title} type={'form-group'} data-name={'list-title'} />
        </div>
        <div className={style.buttonCreate}>
          <ButtonLink {...buttonLink} />
        </div>
      </div>
      {contentView}
    </div>
  );
};

ListItems.propTypes = {
  'aria-label': PropTypes.string,
  buttonLink: PropTypes.shape(ButtonLink.propTypes),
  items: PropTypes.arrayOf(PropTypes.shape(ListItem.propTypes)),
  content: PropTypes.oneOfType([
    PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape(ListItem.propTypes)),
      type: PropTypes.oneOf(['list'])
    }),
    PropTypes.shape({
      ...ExpandibleActionableTable.propTypes,
      type: PropTypes.oneOf(['expandible-actionable-table'])
    })
  ]),
  title: PropTypes.string
};

export default ListItems;
