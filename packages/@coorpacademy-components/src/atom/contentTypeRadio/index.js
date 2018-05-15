import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import style from './style.css';
import Item from './item';

const radioGroup = props => {
  const {listprops = []} = props;

  const radio = map(itemProps => {
    return (
      <div>
        <Item {...itemProps} />
      </div>
    );
  }, listprops);
  return <div className={style.container}>{radio}</div>;
};

radioGroup.propTypes = {
  listprops: PropTypes.arrayOf(PropTypes.shape(Item.PropTypes))
};

export default radioGroup;
