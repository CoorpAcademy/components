import React, {useCallback, useMemo} from 'react';
import uniqueId from 'lodash/fp/uniqueId';
import InputSwitch from '../../atom/input-switch';
import SelectMultiple from '../../molecule/select-multiple';
import InputFileDraggable from '../../atom/input-file-draggable';
import Autocomplete from '../../atom/autocomplete';
import Title from '../../atom/title';
import Chip from '../../atom/chip';
import UploadResult from './upload-result';
import AssignmentAudiencePropTypes, {
  AssignmentAudienceProps,
  Learner,
  PopulationOption
} from './types';
import style from './style.css';

// ButtonLink is full width by default: in the Title row it would squeeze the title column.
const FIT_CONTENT = {width: 'fit-content'};

// csv, xls and xlsx, as the types FilesPropType knows
const ACCEPTED_FILES = [
  'text/csv',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
].join(',');

type BlockProps = {
  name: string;
  title?: string;
  subtitle?: string;
  // The Title's right-hand ButtonLink
  button?: Record<string, unknown>;
  children?: React.ReactNode;
};

const Block = ({name, title, subtitle, button, children}: BlockProps) => (
  <section data-name={name} className={style.block}>
    {title ? (
      <div className={style.blockHead}>
        <Title
          type="form-group"
          titleSize="medium"
          title={title}
          subtitle={subtitle}
          button={button}
          headingLevel={3}
        />
      </div>
    ) : null}
    {children}
  </section>
);

// A sample of the file to upload: its one column, a header and two example logins.
const TemplatePreview = ({header, rows = []}: {header: string; rows?: string[]}) => (
  <div className={style.templatePreview} data-name="upload-template-preview">
    <div className={style.templateHeader}>{header}</div>
    <ul className={style.templateRows}>
      {rows.map(row => (
        <li key={row}>{row}</li>
      ))}
    </ul>
  </div>
);

// A removable chip says what a click does, e.g. « Remove Camille Durand »; no label, its text.
const chipLabel = (removeLabel: string | undefined, name: string) =>
  removeLabel ? `${removeLabel} ${name}` : undefined;

const AssignmentAudience = ({
  title,
  subtitle,
  disabledExplanation,
  everyone,
  populations,
  upload,
  individuals,
  total
}: AssignmentAudienceProps) => {
  const disabled = everyone.value;
  const loading = upload.status === 'loading';
  const {onChange: onEveryoneChange} = everyone;
  const {options: populationOptions, onChange: onPopulationsChange} = populations;
  const {onUpload, onRemove: onRemoveFile} = upload;
  const {value = '', suggestions = [], selected = [], onSearch, onAdd, onRemove} = individuals;
  const explanationId = useMemo(() => uniqueId('assignment-audience-explanation-'), []);
  const handlePopulations = useCallback(
    (choices: PopulationOption[]) =>
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
    (populationValue: string) => () =>
      onPopulationsChange(selectedPopulations.filter(option => option.value !== populationValue)),
    [selectedPopulations, onPopulationsChange]
  );

  // The native input receives both a browse and a drop, and fires change for each.
  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
      if (disabled || loading || !file) return;
      onUpload(file);
    },
    [disabled, loading, onUpload]
  );

  // The loader's cross cancels the check: the file is dropped, as with Remove.
  const handleCancelCheck = useCallback(() => {
    if (onRemoveFile) onRemoveFile();
  }, [onRemoveFile]);

  const availableSuggestions = useMemo(
    () => suggestions.filter(suggestion => !selected.some(learner => learner.id === suggestion.id)),
    [suggestions, selected]
  );
  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => onSearch(event.target.value),
    [onSearch]
  );
  const handleAdd = useCallback(
    ({suggestion}: {suggestion: {value: string}}) => {
      const learner = availableSuggestions.find(item => item.id === suggestion.value);
      if (learner) onAdd(learner);
    },
    [availableSuggestions, onAdd]
  );
  const handleRemove = useCallback((id: string) => () => onRemove(id), [onRemove]);

  return (
    <section className={style.container} data-name="assignment-audience" aria-label={title}>
      <Title
        type="form-group"
        titleSize="xl-strong"
        title={title}
        subtitle={subtitle}
        headingLevel={2}
      />
      <Block name="everyone" title={everyone.title}>
        <InputSwitch
          title={everyone.label}
          value={everyone.value}
          onChange={onEveryoneChange}
          theme="coorpmanager"
          data-name="assignment-everyone"
          aria-label={everyone.label}
        />
        {disabled ? (
          <p id={explanationId} className={style.explanation}>
            {disabledExplanation}
          </p>
        ) : null}
      </Block>
      <fieldset
        disabled={disabled}
        aria-describedby={disabled && disabledExplanation ? explanationId : undefined}
        className={style.sources}
        data-name="audience-sources"
      >
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
                  customIcon={disabled ? 'none' : 'times'}
                  ariaLabel={disabled ? undefined : chipLabel(populations.removeLabel, option.name)}
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
          button={
            upload.templateLink
              ? {
                  type: 'text',
                  label: upload.templateLink.label,
                  link: disabled ? undefined : {href: upload.templateLink.href, download: true},
                  disabled,
                  'data-name': 'upload-template-link',
                  customStyle: FIT_CONTENT
                }
              : undefined
          }
        >
          <div className={style.upload}>
            {upload.templatePreview ? <TemplatePreview {...upload.templatePreview} /> : null}
            <div
              className={upload.status === 'done' ? style.uploadMain : style.dropzone}
              aria-busy={loading}
              aria-live="polite"
              data-name="upload-dropzone"
            >
              {upload.status === 'done' ? (
                <UploadResult {...upload} />
              ) : (
                <InputFileDraggable
                  name="assignment-audience-file"
                  filesTypes={ACCEPTED_FILES}
                  description={upload.dropzone?.description}
                  uploadLabel={upload.dropzone?.browse}
                  errorButtonLabel={upload.dropzone?.browse}
                  dragAndDropLabel={upload.dropzone?.dropLabel}
                  loadingLabel={upload.dropzone?.loadingLabel}
                  loading={loading}
                  disabled={disabled}
                  error={upload.status === 'error' ? upload.error : ''}
                  onChange={handleFileChange}
                  onReset={handleCancelCheck}
                />
              )}
            </div>
          </div>
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
              {selected.map((learner: Learner) => (
                <Chip
                  key={learner.id}
                  text={learner.label}
                  subText={learner.login}
                  selected
                  customIcon={disabled ? 'none' : 'times'}
                  ariaLabel={
                    disabled ? undefined : chipLabel(individuals.removeLabel, learner.label)
                  }
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

AssignmentAudience.propTypes = AssignmentAudiencePropTypes;

export default AssignmentAudience;
