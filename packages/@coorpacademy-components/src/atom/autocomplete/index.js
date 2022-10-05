import React, {useMemo} from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {noop, isNil} from 'lodash/fp';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const renderSuggestion = suggestion => <span>{suggestion.name}</span>;

const Autocomplete = props => {
  const {
    placeholder = '',
    value,
    description,
    required,
    modified = false,
    error = false,
    suggestions = [],
    onChange = noop,
    onFetch = noop,
    onClear = noop,
    onBlur = noop,
    onSuggestionSelected = noop,
    title: propsTitle
  } = props;

  const title = `${propsTitle}${required ? ' *' : ''}`;
  const className = getClassState(style.default, style.modified, style.error, modified, error);

  const handleChange = useMemo(() => e => onChange(e), [onChange]);
  const handleBlur = useMemo(
    () => (e, selectedSuggestion) => onBlur(e, selectedSuggestion),
    [onBlur]
  );
  const handleSuggestionsFetchRequested = useMemo(() => e => onFetch(e), [onFetch]);
  const handleSuggestionsClearRequested = useMemo(() => e => onClear(e), [onClear]);
  const handleSuggestionsSelected = useMemo(
    () => (e, data) => onSuggestionSelected(data),
    [onSuggestionSelected]
  );

  const inputProps = {
    placeholder,
    value,
    onChange: handleChange,
    onBlur: handleBlur
  };

  return (
    <div className={classnames(className, isNil(title) && style.isNoTitle)}>
      <label>
        <span className={style.title}>{title}</span>
        <div>
          <Autosuggest
            theme={{
              container: style.container,
              input: style.input,
              suggestionsContainer: style.suggestionsContainer,
              suggestionsContainerOpen: style.suggestionsContainerOpen,
              suggestionsList: style.suggestionsList,
              suggestion: style.suggestion,
              suggestionHighlighted: style.suggestionHighlighted
            }}
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
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
  required: PropTypes.bool,
  modified: PropTypes.bool,
  error: PropTypes.bool,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  onChange: PropTypes.func,
  onFetch: PropTypes.func,
  onClear: PropTypes.func,
  onBlur: PropTypes.func,
  onSuggestionSelected: PropTypes.func
};

export default Autocomplete;
