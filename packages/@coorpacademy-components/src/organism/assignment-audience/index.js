import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import PropTypes from 'prop-types';
import InputSwitch from '../../atom/input-switch';
import SelectMultiple from '../../molecule/select-multiple';
import BrandUploadBox from '../../molecule/brand-upload-box';
import Autocomplete from '../../atom/autocomplete';
import Chip from '../../atom/chip';
import Tag from '../../atom/tag';
import style from './style.css';

const EVALUATION = {
  valid: {label: 'Valid', type: 'success'},
  inactive: {label: 'Inactive', type: 'warning'},
  invalid: {label: 'Invalid', type: 'failure'},
  notFound: {label: 'Not found', type: 'failure'},
  shared: {label: 'Shared', type: 'info'}
};
const SUMMARY_KEYS = ['valid', 'inactive', 'invalid', 'notFound', 'shared'];

const AssignmentAudience = ({
  everyone,
  populations,
  upload,
  individuals,
  total,
  disabledExplanation = 'Other audience selections are disabled while everyone is selected.'
}) => {
  const uploadRef = useRef(null);
  const disabled = everyone.value;
  const loading = upload.status === 'loading';
  const {options = []} = populations;
  const {value = '', suggestions = [], selected = []} = individuals;
  const {summary = {}, rows = []} = upload;

  // BrandUploadBox does not forward accept to its native input.
  useEffect(() => {
    const input = uploadRef.current && uploadRef.current.querySelector('input[type="file"]');
    if (input) input.accept = '.xlsx,.csv';
  }, [loading]);

  const handleEveryone = useCallback(
    newValue => {
      if (everyone.onChange) everyone.onChange(newValue);
    },
    [everyone]
  );
  const availableSuggestions = useMemo(
    () =>
      disabled
        ? []
        : suggestions.filter(suggestion => !selected.some(learner => learner.id === suggestion.id)),
    [disabled, suggestions, selected]
  );

  const handlePopulations = useCallback(
    choices => {
      if (disabled || !populations.onChange) return;
      populations.onChange(
        options
          .filter(option => choices.some(choice => choice.value === option.value))
          .map(option => ({...option, selected: true}))
      );
    },
    [disabled, options, populations]
  );

  const uploadFirst = useCallback(
    files => {
      if (disabled || loading || !files || !files[0] || !upload.onUpload) return;
      upload.onUpload(files[0]);
    },
    [disabled, loading, upload]
  );
  const handleFileChange = useCallback(event => uploadFirst(event.target.files), [uploadFirst]);
  const handleDragOver = useCallback(event => event.preventDefault(), []);
  const handleDrop = useCallback(
    event => {
      event.preventDefault();
      uploadFirst(event.dataTransfer && event.dataTransfer.files);
    },
    [uploadFirst]
  );

  const handleSearch = useCallback(
    event => {
      if (!disabled && individuals.onSearch) individuals.onSearch(event.target.value);
    },
    [disabled, individuals]
  );
  const handleAdd = useCallback(
    ({suggestion}) => {
      if (disabled || !individuals.onAdd) return;
      const learner = availableSuggestions.find(item => item.id === suggestion.value);
      if (learner) individuals.onAdd(learner);
    },
    [disabled, individuals, availableSuggestions]
  );
  const handleRemove = useCallback(
    id => () => {
      if (!disabled && individuals.onRemove) individuals.onRemove(id);
    },
    [disabled, individuals]
  );

  return (
    <div className={style.container} data-name="assignment-audience">
      <section data-name="everyone">
        <InputSwitch
          title={everyone.label}
          value={everyone.value}
          onChange={handleEveryone}
          theme="coorpmanager"
          data-name="assignment-everyone"
          aria-label={everyone.label}
        />
      </section>
      {disabled ? <p className={style.explanation}>{disabledExplanation}</p> : null}
      <fieldset disabled={disabled} className={style.sources}>
        <legend className={style.legend}>Audience sources</legend>
        <section data-name="populations" className={style.section}>
          <SelectMultiple
            title={populations.title}
            options={options}
            multiple
            theme="coorpmanager"
            disabled={disabled}
            onChange={handlePopulations}
          />
        </section>
        <section
          data-name="upload"
          className={style.section}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          aria-busy={loading}
        >
          <h3 className={style.title}>Upload learner emails</h3>
          <div ref={uploadRef}>
            <BrandUploadBox
              name="assignment-audience-file"
              description="Upload an xlsx or CSV file"
              browse="Choose a file or drop it here"
              status={loading ? 'loading' : 'default'}
              onLoad={handleFileChange}
            />
          </div>
          {upload.templateHref ? (
            <p>
              <a href={upload.templateHref} download>
                Download template
              </a>
            </p>
          ) : null}
          {loading ? <p role="status">Evaluating emails…</p> : null}
          {upload.status === 'error' ? <p role="alert">{upload.error || 'Upload failed'}</p> : null}
          {upload.status === 'done' ? (
            <div aria-live="polite">
              <ul
                data-name="upload-summary"
                className={style.summary}
                aria-label="Email evaluation summary"
              >
                {SUMMARY_KEYS.map(key => (
                  <li key={key}>
                    {EVALUATION[key].label}: {summary[key] === undefined ? 0 : summary[key]}
                  </li>
                ))}
              </ul>
              {rows.length > 0 ? (
                <div className={style.preview}>
                  <table data-name="upload-preview" className={style.table}>
                    <caption className={style.caption}>Evaluated learner emails</caption>
                    <thead>
                      <tr>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, index) => {
                        const status = SUMMARY_KEYS.includes(row.status)
                          ? EVALUATION[row.status]
                          : {
                              label: row.status,
                              type: 'default'
                            };
                        return (
                          <tr key={`${row.email}-${index}`}>
                            <td>{row.email}</td>
                            <td>
                              <Tag {...status} size="S" />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </div>
          ) : null}
        </section>
        <section data-name="individuals" className={style.section}>
          <Autocomplete
            title="Individual learners"
            placeholder="Search learners by name"
            theme="coorpmanager"
            value={value}
            suggestions={availableSuggestions.map(learner => ({
              name: learner.label,
              value: learner.id
            }))}
            onInput={handleSearch}
            onSuggestionSelected={handleAdd}
          />
          <div className={style.chips}>
            {selected.map(learner => (
              <Chip
                key={learner.id}
                text={learner.label}
                selected
                customIcon="times"
                onClick={disabled ? undefined : handleRemove(learner.id)}
              />
            ))}
          </div>
        </section>
      </fieldset>
      <p className={style.total} data-name="estimated-audience" aria-live="polite">
        {total.label}
      </p>
    </div>
  );
};

const learnerType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
});

AssignmentAudience.propTypes = {
  everyone: PropTypes.shape({
    value: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    // Receives a boolean.
    onChange: PropTypes.func
  }).isRequired,
  populations: PropTypes.shape({
    title: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        selected: PropTypes.bool
      })
    ),
    // Receives the selected original options with selected: true.
    onChange: PropTypes.func
  }).isRequired,
  upload: PropTypes.shape({
    // Receives the first File; parsing and evaluation belong to the consumer.
    onUpload: PropTypes.func,
    templateHref: PropTypes.string,
    status: PropTypes.oneOf(['idle', 'loading', 'done', 'error']).isRequired,
    summary: PropTypes.shape({
      valid: PropTypes.number,
      inactive: PropTypes.number,
      invalid: PropTypes.number,
      notFound: PropTypes.number,
      shared: PropTypes.number
    }),
    rows: PropTypes.arrayOf(
      PropTypes.shape({email: PropTypes.string.isRequired, status: PropTypes.string.isRequired})
    ),
    error: PropTypes.string
  }).isRequired,
  individuals: PropTypes.shape({
    value: PropTypes.string,
    suggestions: PropTypes.arrayOf(learnerType),
    selected: PropTypes.arrayOf(learnerType),
    // Receives the query string, including an empty string when clearing.
    onSearch: PropTypes.func,
    // Receives the original {id, label} suggestion.
    onAdd: PropTypes.func,
    // Receives the selected learner id.
    onRemove: PropTypes.func
  }).isRequired,
  total: PropTypes.shape({label: PropTypes.string.isRequired}).isRequired,
  disabledExplanation: PropTypes.string
};

export default AssignmentAudience;
