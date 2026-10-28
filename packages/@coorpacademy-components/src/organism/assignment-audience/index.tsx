import React, {useCallback, useMemo} from 'react';
import uniqueId from 'lodash/fp/uniqueId';
import InputSwitch from '../../atom/input-switch';
import SelectMultiple from '../../molecule/select-multiple';
import Banner from '../../molecule/banner';
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
  team,
  invalidTargets,
  invalidLabel,
  error,
  disabled = false,
  populations,
  upload,
  individuals,
  total
}: AssignmentAudienceProps) => {
  const sourcesDisabled = disabled || Boolean(everyone?.value);
  const loading = upload?.status === 'loading';
  const onEveryoneChange = everyone?.onChange;
  const handleEveryoneChange = useCallback(
    (nextValue: boolean) => {
      if (!disabled) onEveryoneChange?.(nextValue);
    },
    [disabled, onEveryoneChange]
  );
  const populationOptions = populations?.options;
  const onPopulationsChange = populations?.onChange;
  const onUpload = upload?.onUpload;
  const onRemoveFile = upload?.onRemove;
  const value = individuals?.value || '';
  const suggestions = individuals?.suggestions;
  const selected = individuals?.selected;
  const onSearch = individuals?.onSearch;
  const onAdd = individuals?.onAdd;
  const onRemove = individuals?.onRemove;
  const explanationId = useMemo(() => uniqueId('assignment-audience-explanation-'), []);
  const handlePopulations = useCallback(
    (choices: PopulationOption[]) =>
      !sourcesDisabled &&
      onPopulationsChange?.(
        (populationOptions || [])
          .filter(option => choices.some(choice => choice.value === option.value))
          .map(option => ({...option, selected: true}))
      ),
    [sourcesDisabled, populationOptions, onPopulationsChange]
  );
  const selectedPopulations = useMemo(
    () => (populationOptions || []).filter(option => option.selected),
    [populationOptions]
  );
  const handleRemovePopulation = useCallback(
    (populationValue: string) => () =>
      !sourcesDisabled &&
      onPopulationsChange?.(selectedPopulations.filter(option => option.value !== populationValue)),
    [sourcesDisabled, selectedPopulations, onPopulationsChange]
  );

  // The native input receives both a browse and a drop, and fires change for each.
  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
      if (sourcesDisabled || loading || !file) return;
      onUpload?.(file);
    },
    [sourcesDisabled, loading, onUpload]
  );

  // The loader's cross cancels the check: the file is dropped, as with Remove.
  const handleCancelCheck = useCallback(() => {
    if (!sourcesDisabled) onRemoveFile?.();
  }, [sourcesDisabled, onRemoveFile]);

  const availableSuggestions = useMemo(
    () =>
      sourcesDisabled
        ? []
        : (suggestions || []).filter(
            suggestion => !selected?.some(learner => learner.id === suggestion.id)
          ),
    [sourcesDisabled, suggestions, selected]
  );
  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      !sourcesDisabled && onSearch?.(event.target.value),
    [sourcesDisabled, onSearch]
  );
  const handleAdd = useCallback(
    ({suggestion}: {suggestion: {value: string}}) => {
      const learner = availableSuggestions.find(item => item.id === suggestion.value);
      if (!sourcesDisabled && learner) onAdd?.(learner);
    },
    [sourcesDisabled, availableSuggestions, onAdd]
  );
  const handleRemove = useCallback(
    (id: string) => () => {
      if (!sourcesDisabled) onRemove?.(id);
    },
    [sourcesDisabled, onRemove]
  );

  return (
    <section className={style.container} data-name="assignment-audience" aria-label={title}>
      <Title
        type="form-group"
        titleSize="xl-strong"
        title={title}
        subtitle={subtitle}
        headingLevel={2}
      />
      {error ? (
        <div role="alert">
          <Banner type="error" message={error} />
        </div>
      ) : null}
      {team ? (
        <Block name="team">
          <Chip text={team.label} subText={team.name} customIcon="none" />
        </Block>
      ) : null}
      {invalidTargets?.length ? (
        <fieldset disabled={disabled} className={style.sources} data-name="invalid-targets">
          {invalidTargets.map(target => (
            <div key={target.ref} data-target-ref={target.ref}>
              <Banner
                type="error"
                message={invalidLabel ? `${target.label}: ${invalidLabel}` : target.label}
                cta={[
                  {
                    type: 'button',
                    label: 'Remove',
                    action: () => {
                      if (!disabled) target.onRemove();
                    }
                  }
                ]}
              />
            </div>
          ))}
        </fieldset>
      ) : null}
      {everyone ? (
        <Block name="everyone" title={everyone.title}>
          <InputSwitch
            title={everyone.label}
            value={everyone.value}
            disabled={disabled}
            onChange={handleEveryoneChange}
            theme="coorpmanager"
            data-name="assignment-everyone"
            aria-label={everyone.label}
          />
          {everyone.value ? (
            <p id={explanationId} className={style.explanation}>
              {disabledExplanation}
            </p>
          ) : null}
        </Block>
      ) : null}
      <fieldset
        disabled={sourcesDisabled}
        aria-describedby={everyone?.value && disabledExplanation ? explanationId : undefined}
        className={style.sources}
        data-name="audience-sources"
      >
        {populations ? (
          <Block name="populations" title={populations.title} subtitle={populations.subtitle}>
            <SelectMultiple
              title={populations.label}
              options={populations.options}
              multiple
              theme="coorpmanager"
              disabled={sourcesDisabled}
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
                    customIcon={sourcesDisabled ? 'none' : 'times'}
                    ariaLabel={
                      sourcesDisabled ? undefined : chipLabel(populations.removeLabel, option.name)
                    }
                    onClick={sourcesDisabled ? undefined : handleRemovePopulation(option.value)}
                  />
                ))}
              </div>
            ) : null}
          </Block>
        ) : null}
        {upload ? (
          <Block
            name="upload"
            title={upload.title}
            subtitle={upload.subtitle}
            button={
              upload.templateLink
                ? {
                    type: 'text',
                    label: upload.templateLink.label,
                    link: sourcesDisabled
                      ? undefined
                      : {href: upload.templateLink.href, download: true},
                    disabled: sourcesDisabled,
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
                  <UploadResult
                    {...upload}
                    onRemove={upload.onRemove ? handleCancelCheck : undefined}
                    report={
                      upload.report
                        ? {
                            ...upload.report,
                            onDownload: () => {
                              if (!sourcesDisabled) upload.report?.onDownload();
                            }
                          }
                        : undefined
                    }
                  />
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
                    disabled={sourcesDisabled}
                    error={upload.status === 'error' ? upload.error : ''}
                    onChange={handleFileChange}
                    onReset={handleCancelCheck}
                  />
                )}
              </div>
            </div>
          </Block>
        ) : null}
        {individuals ? (
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
            {(selected?.length || 0) > 0 ? (
              <div className={style.chips}>
                {selected?.map((learner: Learner) => (
                  <Chip
                    key={learner.id}
                    text={learner.label}
                    subText={learner.login}
                    selected
                    customIcon={sourcesDisabled ? 'none' : 'times'}
                    ariaLabel={
                      sourcesDisabled
                        ? undefined
                        : chipLabel(individuals.removeLabel, learner.label)
                    }
                    onClick={sourcesDisabled ? undefined : handleRemove(learner.id)}
                  />
                ))}
              </div>
            ) : null}
          </Block>
        ) : null}
      </fieldset>
      {total ? (
        <div className={style.total} data-name="estimated-audience" aria-live="polite">
          <span className={style.totalLabel}>{total.label}</span>
          {total.detail ? <span className={style.muted}>{total.detail}</span> : null}
        </div>
      ) : null}
    </section>
  );
};

AssignmentAudience.propTypes = AssignmentAudiencePropTypes;

export default AssignmentAudience;
