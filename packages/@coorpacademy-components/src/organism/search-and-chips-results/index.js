import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty, map} from 'lodash/fp';
import Search from '../../atom/input-search';
import ButtonLink from '../../atom/button-link';
import Chips from '../../atom/chips';
import style from './style.css';

const buildResultView = results => {
  if (isEmpty(results)) {
    return <div>Nothing</div>;
  }

  const items = map(result => {
    return (
      <li>
        <Chips {...result} />
      </li>
    );
  }, results);

  return <ul>{items}</ul>;
};

const SearchAndChipsResults = props => {
  const {search, selectAllButton, results} = props;

  const {onClick, label, disabled = false, 'aria-label': ariaLabel} = selectAllButton;
  const resultView = buildResultView(results);
  const buttonProps = {
    type: 'secondary',
    label,
    'aria-label': ariaLabel,
    'data-name': `select-all-button`,
    icon: {
      position: 'right',
      type: 'add'
    },
    onClick,
    disabled
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.button}>
          <ButtonLink {...buttonProps} />
        </div>
        <div className={style.search}>
          <Search {...search} theme="coorpmanager" />
        </div>
      </div>
      <div className={style.resultContainer}>{resultView}</div>
    </div>
  );
};

SearchAndChipsResults.propTypes = {
  selectAllButton: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    'aria-label': PropTypes.string
  }),
  search: PropTypes.shape(Search.PropTypes),
  results: PropTypes.arrayOf(PropTypes.shape(Chips.propTypes))
};

export default SearchAndChipsResults;
