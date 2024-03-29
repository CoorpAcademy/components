import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash/fp';
import EmptySearchResult from '../../atom/empty-search-result';
import Search from '../../atom/input-search';
import ButtonLink from '../../atom/button-link';
import Chips from '../../atom/chips';
import Loader from '../../atom/loader';
import style from './style.css';

const buildResultView = (results, resultsAriaLabel, emptyMessages, isLoading) => {
  if (!isLoading && isEmpty(results)) {
    return <EmptySearchResult {...emptyMessages} />;
  }

  const items = results.map((result, index) => {
    return (
      <li className={style.result} key={`result-${index}`} data-name={`result-${index}`}>
        <Chips {...result} />
      </li>
    );
  });

  return <ul aria-label={resultsAriaLabel}>{items}</ul>;
};

const SearchAndChipsResults = props => {
  const {
    search,
    selectAllButton,
    results,
    emptyMessages,
    isLoading = false,
    'results-aria-label': resultsAriaLabel
  } = props;

  const {onClick, label, disabled = false, 'aria-label': ariaLabel} = selectAllButton;
  const resultView = buildResultView(results, resultsAriaLabel, emptyMessages, isLoading);
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
      <div className={style.resultContainer}>
        {isLoading ? (
          <div className={style.loaderContainer}>
            <Loader className={style.loader} theme="coorpmanager" />
          </div>
        ) : (
          resultView
        )}
      </div>
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
  isLoading: PropTypes.bool,
  search: PropTypes.shape(Search.PropTypes),
  results: PropTypes.arrayOf(PropTypes.shape(Chips.propTypes)),
  'results-aria-label': PropTypes.string,
  emptyMessages: PropTypes.shape({
    firstMessage: PropTypes.string,
    secondMessage: PropTypes.string
  })
};

export default SearchAndChipsResults;
