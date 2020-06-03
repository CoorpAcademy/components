import React from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {noop, isNil} from 'lodash/fp';
import getClassState from '../../util/get-class-state';
// eslint-disable-next-line css-modules/no-unused-class
import style from './style.css';

const renderSuggestion = suggestion => <span>{suggestion.name}</span>;

const Autocomplete = props => {
  const {
    placeholder = '',
    value,
    description,
    required,
    modified = false,
    error,
    suggestions = [],
    onChange = noop,
    onFetch = noop,
    onClear = noop,
    onSuggestionSelected = noop
  } = props;

  const title = `${props.title}${required ? '*' : ''}`;
  const className = getClassState(style.default, style.modified, style.error, modified, error);
  const handleChange = e => onChange(e);
  const handleSuggestionsFetchRequested = e => onFetch(e);
  const handleSuggestionsClearRequested = e => onClear(e);
  const handleSuggestionsSelected = (e, data) => onSuggestionSelected(data);

  const inputProps = {
    placeholder,
    value,
    onChange: handleChange
  };

  return (
    <div className={classnames(className, isNil(title) && style.isNoTitle)}>
      <label>
        <span className={style.title}>{title}</span>
        <div>
          <Autosuggest
            theme={style}
            suggestions={suggestions}
            onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
            onSuggestionsClearRequested={handleSuggestionsClearRequested}
            getSuggestionValue={noop}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            focusInputOnSuggestionClick={false}
            onSuggestionSelected={handleSuggestionsSelected}
          />
        </div>
      </label>
      <div className={style.description}>{description}</div>
    </div>
  );
};

Autocomplete.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
  required: PropTypes.bool,
  modified: PropTypes.bool,
  error: PropTypes.bool,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string
    })
  ),
  onChange: PropTypes.func,
  onFetch: PropTypes.func,
  onClear: PropTypes.func,
  onSuggestionSelected: PropTypes.func
};

export default Autocomplete;
