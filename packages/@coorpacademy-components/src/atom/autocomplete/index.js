import React, {useCallback, useMemo} from 'react';
import Autosuggest from 'react-autosuggest';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {noop, isNil, isEmpty, keys} from 'lodash/fp';
import {
  NovaSolidStatusClose as ErrorIcon,
  NovaCompositionCoorpacademyInformationIcon as InfoIcon
} from '@coorpacademy/nova-icons';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const THEME_STYLE = {
  coorpmanager: style.coorpmanager,
  default: style.default
};

const renderSuggestion = suggestion => <span>{suggestion.name}</span>;

const Autocomplete = props => {
  const {
    placeholder = '',
    value,
    description,
    required,
    modified = false,
    error = false,
    errorMessage,
    suggestions = [],
    onInput = noop,
    onFetch = noop,
    onClear = noop,
    onBlur = noop,
    onSuggestionSelected = noop,
    title: propsTitle,
    theme = 'default'
  } = props;

  const mainClass = THEME_STYLE[theme];
  const title = useMemo(() => `${propsTitle}${required ? '*' : ''}`, [propsTitle, required]);
  const className = useMemo(
    () => getClassState(style.default, style.modified, style.error, modified, error),
    [modified, error]
  );

  const handleInput = useCallback(
    e => {
      onInput(e);
    },
    [onInput]
  );
  const handleBlur = useCallback(
    (e, selectedSuggestion) => onBlur(e, selectedSuggestion),
    [onBlur]
  );
  const handleSuggestionsFetchRequested = useCallback(e => onFetch(e), [onFetch]);
  const handleSuggestionsClearRequested = useCallback(e => onClear(e), [onClear]);
  const handleSuggestionsSelected = useCallback(
    (e, data) => onSuggestionSelected(data),
    [onSuggestionSelected]
  );

  const inputProps = {
    placeholder,
    value,
    onChange: noop,
    onBlur: handleBlur,
    onInput: handleInput,
    'data-testid': 'autocomplete-input'
  };

  const descriptionView =
    description && theme !== 'coorpmanager' ? (
      <div className={style.description}>{description}</div>
    ) : null;

  const toolTipView =
    description && theme === 'coorpmanager' ? (
      <div className={style.infoIconWrapper}>
        <InfoIcon className={style.infoIcon} />
        <div className={style.descriptionLabel}>{description}</div>
      </div>
    ) : null;

  const errorIconView =
    theme === 'coorpmanager' && error ? <ErrorIcon className={style.leftIcon} /> : null;

  const errorText =
    theme === 'coorpmanager' && error ? (
      <div
        className={style.errorText}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: errorMessage}}
      />
    ) : null;
  return (
    <div className={classnames(mainClass, className, isNil(propsTitle) && style.isNoTitle)}>
      <label>
        <span className={classnames(style.title, isEmpty(value) && style.noValue)}>
          {title}
          {toolTipView}
        </span>
        <div className={style.inputContainer}>
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
          {errorIconView}
          {errorText}
        </div>
      </label>
      {descriptionView}
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
  errorMessage: PropTypes.string,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  theme: PropTypes.oneOf(keys(THEME_STYLE)),
  onInput: PropTypes.func,
  onFetch: PropTypes.func,
  onClear: PropTypes.func,
  onBlur: PropTypes.func,
  onSuggestionSelected: PropTypes.func
};

export default Autocomplete;
