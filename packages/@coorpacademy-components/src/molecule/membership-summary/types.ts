import PropTypes from 'prop-types';

// All words, separators and display values are prepared and localized by App.
export type SummaryRow = {
  id: string;
  prefix?: string;
  field: string;
  comparison: string;
  values: {id: string; label: string; prefix?: string}[];
  note?: string;
};

export type SummaryGroup = {id: string; rows: SummaryRow[]};

export type MembershipSummaryProps = {
  groups: SummaryGroup[];
  labels: {and: string; or: string; emptyTitle: string; emptyMessage: string};
};

export const summaryPropTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      rows: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          prefix: PropTypes.string,
          field: PropTypes.string.isRequired,
          comparison: PropTypes.string.isRequired,
          values: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              label: PropTypes.string.isRequired,
              prefix: PropTypes.string
            }).isRequired
          ).isRequired,
          note: PropTypes.string
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired,
  labels: PropTypes.shape({
    and: PropTypes.string.isRequired,
    or: PropTypes.string.isRequired,
    emptyTitle: PropTypes.string.isRequired,
    emptyMessage: PropTypes.string.isRequired
  }).isRequired
};
