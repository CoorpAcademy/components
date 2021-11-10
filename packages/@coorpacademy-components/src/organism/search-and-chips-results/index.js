import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {concat, isEmpty, map} from 'lodash/fp';
import Search from '../../atom/cm-input-search';
import Link from '../../atom/link';
import Chips from '../../atom/chips';
import style from './style.css';

const buildResultView = (selectedResults, results) => {
  if (isEmpty(results)) {
    return <div>Nothing</div>;
  }

  const items = concat(
    map(s => {
      return (
        <li>
          <Chips {...s} selected />
        </li>
      );
    }, selectedResults),
    map(r => {
      return (
        <li>
          <Chips {...r} />
        </li>
      );
    }, results)
  );

  return <ul>{items}</ul>;
};

const SearchAndChipsResults = props => {
  const {search, selectAllButton, selected, results} = props;

  const {onClick} = selectAllButton;
  const handleClick = useMemo(() => () => onClick(), [onClick]);
  const resultView = buildResultView(selected, results);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Link onClick={handleClick} className={style.button}>
          {selectAllButton.label}
        </Link>
        <Search {...search} />
      </div>
      <div className={style.resultContainer}>{resultView}</div>
    </div>
  );
};

SearchAndChipsResults.propTypes = {
  selectAllButton: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  }),
  search: PropTypes.shape(Search.PropTypes),
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      information: PropTypes.string,
      onClick: PropTypes.func
    })
  ),
  results: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      information: PropTypes.string,
      onClick: PropTypes.func
    })
  )
};

export default SearchAndChipsResults;
