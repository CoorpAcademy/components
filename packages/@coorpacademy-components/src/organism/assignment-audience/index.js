import React, {useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import InputSwitch from '../../atom/input-switch';
import SelectMultiple from '../../molecule/select-multiple';
import BrandUploadBox from '../../molecule/brand-upload-box';
import Autocomplete from '../../atom/autocomplete';
import ButtonLink from '../../atom/button-link';
import Chip from '../../atom/chip';
import Tag from '../../atom/tag';
import FaIcon from '../../atom/icon';
import {COLORS} from '../../variables/colors';
import style from './style.css';

// A file row resolves to one of four statuses, keyed on login (L4). A never-connected account is
// `valid` and added with no warning; a deactivated account is `inactive`, skipped and reported (AQ26).
const STATUS_TAG_TYPES = {
  valid: 'success',
  unknown: 'failure',
  ambiguous: 'warning',
  inactive: 'warning'
};
const STATUSES = ['valid', 'unknown', 'ambiguous', 'inactive'];
const ACCEPTED_FILES = '.xlsx,.xls,.csv';
const REMOVE_STYLE = {color: COLORS.cm_negative_200};

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

const UploadResult = ({upload}) => {
  const {
    file,
    summary = {},
    keptLabel,
    toggleLabel,
    expanded = false,
    onToggleRows,
    columns = {},
    statusLabels = {},
    rows = [],
    replaceLabel,
    removeLabel,
    onReplace,
    onRemove
  } = upload;
  return (
    <div className={style.result}>
      <div className={style.file} data-name="upload-file">
        <div>
          <div className={style.fileName}>{file.name}</div>
          {file.detail ? <div className={style.muted}>{file.detail}</div> : null}
        </div>
        <div className={style.fileActions}>
          <ButtonLink type="text" label={replaceLabel} onClick={onReplace} />
          <ButtonLink
            type="text"
            label={removeLabel}
            onClick={onRemove}
            customStyle={REMOVE_STYLE}
          />
        </div>
      </div>
      <div className={style.summary} data-name="upload-summary">
        {STATUSES.filter(status => summary[status]).map(status => (
          <div key={status}>
            <Tag type={STATUS_TAG_TYPES[status]} label={summary[status]} />
          </div>
        ))}
      </div>
      {keptLabel ? <p className={style.muted}>{keptLabel}</p> : null}
      {toggleLabel ? (
        <button
          type="button"
          className={style.toggle}
          aria-expanded={expanded}
          onClick={onToggleRows}
          data-name="upload-rows-toggle"
        >
          <FaIcon
            iconName={expanded ? 'chevron-down' : 'chevron-right'}
            size={{faSize: 12, wrapperSize: 12}}
          />
          {toggleLabel}
        </button>
      ) : null}
      {expanded ? (
        <table className={style.table} data-name="upload-rows">
          <thead>
            <tr>
              <th scope="col">{columns.login}</th>
              <th scope="col">{columns.status}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({login, status}) => (
              <tr key={login}>
                <td className={style.login}>{login}</td>
                <td>
                  <Tag type={STATUS_TAG_TYPES[status]} label={statusLabels[status]} size="S" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
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
  const {value = '', suggestions = [], selected = []} = individuals;

  const handleEveryone = useCallback(newValue => everyone.onChange(newValue), [everyone]);
  const handlePopulations = useCallback(
    choices =>
      populations.onChange(
        populations.options
          .filter(option => choices.some(choice => choice.value === option.value))
          .map(option => ({...option, selected: true}))
      ),
    [populations]
  );

  // The native input receives both a browse and a drop, and fires change for each.
  const handleFileChange = useCallback(
    event => {
      const file = event.target.files && event.target.files[0];
      if (disabled || loading || !file) return;
      upload.onUpload(file);
    },
    [disabled, loading, upload]
  );

  const availableSuggestions = useMemo(
    () => suggestions.filter(suggestion => !selected.some(learner => learner.id === suggestion.id)),
    [suggestions, selected]
  );
  const handleSearch = useCallback(
    event => individuals.onSearch(event.target.value),
    [individuals]
  );
  const handleAdd = useCallback(
    ({suggestion}) => {
      const learner = availableSuggestions.find(item => item.id === suggestion.value);
      if (learner) individuals.onAdd(learner);
    },
    [individuals, availableSuggestions]
  );
  const handleRemove = useCallback(id => () => individuals.onRemove(id), [individuals]);

  return (
    <section className={style.container} data-name="assignment-audience" aria-label={title}>
      <div className={style.head}>
        <h2 className={style.title}>{title}</h2>
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
              <UploadResult upload={upload} />
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
const statusLabelsType = PropTypes.shape({
  valid: PropTypes.string,
  unknown: PropTypes.string,
  ambiguous: PropTypes.string,
  inactive: PropTypes.string
});

const uploadResultShape = {
  file: PropTypes.shape({name: PropTypes.string, detail: PropTypes.string}),
  // The four count labels, e.g. {valid: '201 valid', unknown: '6 unknown'}
  summary: statusLabelsType,
  keptLabel: PropTypes.string,
  toggleLabel: PropTypes.string,
  expanded: PropTypes.bool,
  onToggleRows: PropTypes.func,
  columns: PropTypes.shape({login: PropTypes.string, status: PropTypes.string}),
  statusLabels: statusLabelsType,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      login: PropTypes.string.isRequired,
      status: PropTypes.oneOf(STATUSES).isRequired
    })
  ),
  replaceLabel: PropTypes.string,
  removeLabel: PropTypes.string,
  onReplace: PropTypes.func,
  onRemove: PropTypes.func
};

UploadResult.propTypes = {upload: PropTypes.shape(uploadResultShape)};

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
        selected: PropTypes.bool
      })
    ).isRequired,
    // Receives the selected options, with selected: true
    onChange: PropTypes.func.isRequired
  }).isRequired,
  upload: PropTypes.shape({
    ...uploadResultShape,
    // Also shown while the file is being checked
    file: uploadResultShape.file,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    templateLink: PropTypes.shape({label: PropTypes.string, href: PropTypes.string}),
    dropzone: PropTypes.shape({description: PropTypes.string, browse: PropTypes.string}),
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
