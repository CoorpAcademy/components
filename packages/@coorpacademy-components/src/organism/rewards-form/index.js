import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TitleAndCheckBoxWrapper from '../../molecule/title-and-checkbox-wrapper';
import style from './style.css';

const RewardsForm = ({items}) => {
  const itemsView = items.map(({childType, ...item}, index) => {
    return (
      <li
        key={index}
        className={classnames(style.item, childType === 'input-text' && style.inputText)}
        data-name={`reward-${index}`}
      >
        <TitleAndCheckBoxWrapper {...item} />
      </li>
    );
  });
  return <ul className={style.list}>{itemsView}</ul>;
};

RewardsForm.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(TitleAndCheckBoxWrapper.propTypes))
};

export default RewardsForm;
