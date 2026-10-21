import React, {useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/fp/uniqueId';
import InputSwitch from '../../atom/input-switch';
import SelectMultiple from '../../molecule/select-multiple';
import BrandUploadBox from '../../molecule/brand-upload-box';
import Autocomplete from '../../atom/autocomplete';
import ButtonLink from '../../atom/button-link';
import Chip from '../../atom/chip';
import UploadResult from './upload-result';
import style from './style.css';

const ACCEPTED_FILES = '.xlsx,.xls,.csv';

const Block = ({name, title, subtitle, aside, children}) => (
  <section data-name={name} className={style.block}>
    {title ? (
      <div className={style.blockHead}>
        <div>
          <h3 className={style.blockTitle}>{title}</h3>
          {subtitle ? <p className={style.blockSubtitle}>{subtitle}</p> : null}
        </div>
        {aside}
      </div>
    ) : null}
    {children}
  </section>
);

Block.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  aside: PropTypes.node,
  children: PropTypes.node
};

const AssignmentAudience = ({
  title,
  subtitle,
  disabledExplanation,
  everyone,
  populations,
  upload,
  individuals,
  total
}) => {
  const disabled = everyone.value;
  const loading = upload.status === 'loading';
  const {onChange: onEveryoneChange} = everyone;
  const {options: populationOptions, onChange: onPopulationsChange} = populations;
  const {onUpload} = upload;
  const {value = '', suggestions = [], selected = [], onSearch, onAdd, onRemove} = individuals;
  const titleId = useMemo(() => uniqueId('assignment-audience-title-'), []);

  const handleEveryone = useCallback(newValue => onEveryoneChange(newValue), [onEveryoneChange]);
  const handlePopulations = useCallback(
    choices =>
      onPopulationsChange(
        populationOptions
          .filter(option => choices.some(choice => choice.value === option.value))
          .map(option => ({...option, selected: true}))
      ),
    [populationOptions, onPopulationsChange]
  );
  const selectedPopulations = useMemo(
    () => populationOptions.filter(option => option.selected),
    [populationOptions]
  );
  const handleRemovePopulation = useCallback(
    populationValue => () =>
      onPopulationsChange(selectedPopulations.filter(option => option.value !== populationValue)),
    [selectedPopulations, onPopulationsChange]
  );

  // The native input receives both a browse and a drop, and fires change for each.
  const handleFileChange = useCallback(
    event => {
      const file = event.target.files && event.target.files[0];
      if (disabled || loading || !file) return;
      onUpload(file);
    },
    [disabled, loading, onUpload]
  );

  const availableSuggestions = useMemo(
    () => suggestions.filter(suggestion => !selected.some(learner => learner.id === suggestion.id)),
    [suggestions, selected]
  );
  const handleSearch = useCallback(event => onSearch(event.target.value), [onSearch]);
  const handleAdd = useCallback(
    ({suggestion}) => {
      const learner = availableSuggestions.find(item => item.id === suggestion.value);
      if (learner) onAdd(learner);
    },
    [availableSuggestions, onAdd]
  );
  const handleRemove = useCallback(id => () => onRemove(id), [onRemove]);

  return (
    <section className={style.container} data-name="assignment-audience" aria-labelledby={titleId}>
      <div className={style.head}>
        <h2 id={titleId} className={style.title}>
          {title}
        </h2>
        {subtitle ? <p className={style.subtitle}>{subtitle}</p> : null}
      </div>
      <Block name="everyone" title={everyone.title}>
        <InputSwitch
          title={everyone.label}
          value={everyone.value}
          onChange={handleEveryone}
          theme="coorpmanager"
          data-name="assignment-everyone"
          aria-label={everyone.label}
        />
        {disabled ? <p className={style.explanation}>{disabledExplanation}</p> : null}
      </Block>
      <fieldset disabled={disabled} className={style.sources} data-name="audience-sources">
        <Block name="populations" title={populations.title} subtitle={populations.subtitle}>
          <SelectMultiple
            title={populations.label}
            options={populations.options}
            multiple
            theme="coorpmanager"
            disabled={disabled}
            onChange={handlePopulations}
          />
          {selectedPopulations.length > 0 ? (
            <div className={style.chips} data-name="population-chips">
              {selectedPopulations.map(option => (
                <Chip
                  key={option.value}
                  text={option.name}
                  subText={option.count === undefined ? undefined : `${option.count}`}
                  selected
                  customIcon="times"
                  onClick={disabled ? undefined : handleRemovePopulation(option.value)}
                />
              ))}
            </div>
          ) : null}
        </Block>
        <Block
          name="upload"
          title={upload.title}
          subtitle={upload.subtitle}
          aside={
            upload.templateLink ? (
              <ButtonLink
                type="text"
                label={upload.templateLink.label}
                link={disabled ? undefined : {href: upload.templateLink.href, download: true}}
                disabled={disabled}
                data-name="upload-template-link"
              />
            ) : null
          }
        >
          <div aria-busy={loading} data-name="upload-dropzone">
            {upload.status === 'done' ? (
              <UploadResult {...upload} />
            ) : (
              <BrandUploadBox
                name="assignment-audience-file"
                accept={ACCEPTED_FILES}
                description={upload.dropzone.description}
                browse={upload.dropzone.browse}
                status={loading ? 'loading' : 'default'}
                onLoad={handleFileChange}
              />
            )}
          </div>
          {loading && upload.file ? (
            <p className={style.muted} role="status">
              {upload.file.name} · {upload.file.detail}
            </p>
          ) : null}
          {upload.status === 'error' ? (
            <p className={style.error} role="alert">
              {upload.error}
            </p>
          ) : null}
        </Block>
        <Block name="individuals" title={individuals.title}>
          <Autocomplete
            title={individuals.placeholder}
            theme="coorpmanager"
            value={value}
            suggestions={availableSuggestions.map(learner => ({
              name: `${learner.label} · ${learner.login}`,
              value: learner.id
            }))}
            onInput={handleSearch}
            onSuggestionSelected={handleAdd}
          />
          {selected.length > 0 ? (
            <div className={style.chips}>
              {selected.map(learner => (
                <Chip
                  key={learner.id}
                  text={learner.label}
                  subText={learner.login}
                  selected
                  customIcon="times"
                  onClick={disabled ? undefined : handleRemove(learner.id)}
                />
              ))}
            </div>
          ) : null}
        </Block>
      </fieldset>
      <div className={style.total} data-name="estimated-audience" aria-live="polite">
        <span className={style.totalLabel}>{total.label}</span>
        {total.detail ? <span className={style.muted}>{total.detail}</span> : null}
      </div>
    </section>
  );
};

const learnerType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired
});

AssignmentAudience.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  disabledExplanation: PropTypes.string,
  everyone: PropTypes.shape({
    title: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    // Receives the new boolean
    onChange: PropTypes.func.isRequired
  }).isRequired,
  populations: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        selected: PropTypes.bool,
        // The population's learner count, formatted by the app, shown on its chip
        count: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      })
    ).isRequired,
    // Receives the selected options, with selected: true
    onChange: PropTypes.func.isRequired
  }).isRequired,
  upload: PropTypes.shape({
    // The file line and the result, once checked
    ...UploadResult.propTypes,
    // Also read here, for the line shown while the file is being checked
    file: UploadResult.propTypes.file,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    templateLink: PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string
    }),
    dropzone: PropTypes.shape({
      description: PropTypes.string,
      browse: PropTypes.string
    }),
    status: PropTypes.oneOf(['idle', 'loading', 'done', 'error']).isRequired,
    error: PropTypes.string,
    // Receives the first File. Parsing and login resolution belong to the consumer.
    onUpload: PropTypes.func.isRequired
  }).isRequired,
  individuals: PropTypes.shape({
    title: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    suggestions: PropTypes.arrayOf(learnerType),
    selected: PropTypes.arrayOf(learnerType),
    // Receives the query, searched by name or login
    onSearch: PropTypes.func.isRequired,
    // Receives the original {id, label, login} suggestion
    onAdd: PropTypes.func.isRequired,
    // Receives the learner id
    onRemove: PropTypes.func.isRequired
  }).isRequired,
  total: PropTypes.shape({
    label: PropTypes.string.isRequired,
    detail: PropTypes.string
  }).isRequired
};

export default AssignmentAudience;
