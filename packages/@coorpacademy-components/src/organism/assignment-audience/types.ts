import PropTypes from 'prop-types';

// Each file row resolves to one of four statuses. A never-connected account is `valid` and added
// with no warning; a deactivated account is `inactive`, skipped and reported.
export const STATUSES = ['valid', 'unknown', 'ambiguous', 'inactive'] as const;
export type UploadRowStatus = typeof STATUSES[number];

const labelsByStatus = PropTypes.shape({
  valid: PropTypes.string,
  unknown: PropTypes.string,
  ambiguous: PropTypes.string,
  inactive: PropTypes.string
});

const fileType = PropTypes.shape({
  name: PropTypes.string,
  detail: PropTypes.string
});

export const UploadResultPropTypes = {
  file: fileType,
  // The four count labels, formatted by the app, e.g. {valid: '201 valid', unknown: '6 unknown'}
  summary: labelsByStatus,
  keptLabel: PropTypes.string,
  // The logins not kept, with their reason, as a file the app builds: offered only when some are
  report: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onDownload: PropTypes.func.isRequired
  }),
  removeLabel: PropTypes.string,
  onRemove: PropTypes.func
};

const learnerType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired
});

const AssignmentAudiencePropTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  disabledExplanation: PropTypes.string,
  team: PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  invalidTargets: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onRemove: PropTypes.func.isRequired
    })
  ),
  invalidLabel: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  everyone: PropTypes.shape({
    title: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    // Receives the new boolean
    onChange: PropTypes.func.isRequired
  }),
  populations: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired,
        // The population's learner count, formatted by the app, shown on its chip
        count: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      })
    ).isRequired,
    // Prefixes a removable chip's accessible name, e.g. 'Remove' → « Remove Managers FR »
    removeLabel: PropTypes.string,
    // Receives the selected options, with selected: true
    onChange: PropTypes.func.isRequired
  }),
  upload: PropTypes.shape({
    // The file line and the result, once the file is checked
    ...UploadResultPropTypes,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    templateLink: PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string
    }),
    // A sample of the expected file, shown left of the upload: a header and example values
    templatePreview: PropTypes.shape({
      header: PropTypes.string.isRequired,
      rows: PropTypes.arrayOf(PropTypes.string)
    }),
    // The Coorpmanager uploader's texts: the hint, the button, the drop text, the loader text
    dropzone: PropTypes.shape({
      description: PropTypes.string,
      browse: PropTypes.string,
      dropLabel: PropTypes.string,
      loadingLabel: PropTypes.string
    }),
    status: PropTypes.oneOf(['idle', 'loading', 'done', 'error']).isRequired,
    error: PropTypes.string,
    // Receives the first File. Parsing and login resolution belong to the consumer.
    onUpload: PropTypes.func.isRequired
  }),
  individuals: PropTypes.shape({
    title: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    suggestions: PropTypes.arrayOf(learnerType),
    selected: PropTypes.arrayOf(learnerType),
    // Prefixes a removable chip's accessible name, e.g. 'Remove' → « Remove Camille Durand »
    removeLabel: PropTypes.string,
    // Receives the query, searched by name or login
    onSearch: PropTypes.func.isRequired,
    // Receives the original {id, label, login} suggestion
    onAdd: PropTypes.func.isRequired,
    // Receives the learner id
    onRemove: PropTypes.func.isRequired
  }),
  total: PropTypes.shape({
    label: PropTypes.string.isRequired,
    detail: PropTypes.string
  })
};

export default AssignmentAudiencePropTypes;

type LabelsByStatus = Partial<Record<UploadRowStatus, string>>;

export type UploadResultProps = {
  file?: {name?: string; detail?: string};
  summary?: LabelsByStatus;
  keptLabel?: string;
  report?: {label: string; onDownload: () => void};
  removeLabel?: string;
  onRemove?: () => void;
};

export type PopulationOption = {
  name: string;
  value: string;
  selected: boolean;
  count?: string | number;
};

export type Learner = {
  id: string;
  label: string;
  login: string;
};

export type AssignmentAudienceProps = {
  title: string;
  subtitle?: string;
  disabledExplanation?: string;
  team?: {label: string; name: string};
  invalidTargets?: Array<{ref: string; label: string; onRemove: () => void}>;
  invalidLabel?: string;
  error?: string;
  disabled?: boolean;
  everyone?: {
    title?: string;
    label: string;
    value: boolean;
    onChange: (value: boolean) => void;
  };
  populations?: {
    title?: string;
    subtitle?: string;
    label?: string;
    options: PopulationOption[];
    removeLabel?: string;
    onChange: (selected: PopulationOption[]) => void;
  };
  upload?: UploadResultProps & {
    title?: string;
    subtitle?: string;
    templateLink?: {label?: string; href?: string};
    templatePreview?: {header: string; rows?: string[]};
    dropzone?: {
      description?: string;
      browse?: string;
      dropLabel?: string;
      loadingLabel?: string;
    };
    status: 'idle' | 'loading' | 'done' | 'error';
    error?: string;
    onUpload: (file: File) => void;
  };
  individuals?: {
    title?: string;
    placeholder?: string;
    value?: string;
    suggestions?: Learner[];
    selected?: Learner[];
    removeLabel?: string;
    onSearch: (query: string) => void;
    onAdd: (learner: Learner) => void;
    onRemove: (id: string) => void;
  };
  total?: {label: string; detail?: string};
};

export type AssignmentAudiencePropsFixture = {props: AssignmentAudienceProps};
