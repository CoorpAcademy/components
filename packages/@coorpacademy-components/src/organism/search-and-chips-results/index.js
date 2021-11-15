import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {isEmpty, map} from 'lodash/fp';
import Search from '../../atom/cm-input-search';
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

  const {onClick} = selectAllButton;
  const handleClick = useMemo(() => () => onClick(), [onClick]);
  const resultView = buildResultView(results);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <ButtonLink onClick={handleClick} className={style.button}>
          {selectAllButton.label}
        </ButtonLink>
        <div className={style.search}>
          <Search {...search} />
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
    disabled: PropTypes.bool
  }),
  search: PropTypes.shape(Search.PropTypes),
  results: PropTypes.arrayOf(PropTypes.shape(Chips.propTypes))
};

export default SearchAndChipsResults;
