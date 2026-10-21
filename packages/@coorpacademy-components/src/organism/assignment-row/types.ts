import PropTypes from 'prop-types';
import ListItem from '../list-item';
import {ButtonLinkProps} from '../../atom/button-link/types';
import {BulletPointMenuButtonProps} from '../../molecule/bullet-point-menu-button/types';

// Row tags appear only when they add information, in this order. There is no lifecycle tag (the
// list tab already says it) and no "up to date" sync tag (only syncing or a sync error shows).
export const ROW_TAG_KEYS = ['ongoingChanges', 'unavailable', 'processing', 'syncError'] as const;

export type RowTagKey = typeof ROW_TAG_KEYS[number];

const propTypes = {
  title: ListItem.propTypes.title,
  // The audience summary and the date range, e.g. "Managers FR · 02 Nov 2026 – 15 Dec 2026 (GMT)"
  subtitle: ListItem.propTypes.subtitle,
  // The contents line, e.g. "6 modules · 2 external · 2 chapters"
  details: ListItem.propTypes.details,
  // Completion (0 to 100) and its label; absent on a draft
  progress: ListItem.propTypes.progress,
  infoTags: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOf(ROW_TAG_KEYS).isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  // Defaults to the calendar-check icon
  leftIcon: ListItem.propTypes.leftIcon,
  // The « Tracking » button (or « Edit » on a draft)
  buttonLink: ListItem.propTypes.buttonLink,
  bulletPointMenuButton: ListItem.propTypes.bulletPointMenuButton,
  // A click on the row opens the tracking page
  onClick: PropTypes.func,
  id: PropTypes.string,
  'data-name': PropTypes.string
};

export default propTypes;

export type InfoTag = {key: RowTagKey; label: string};

export type AssignmentRowProps = {
  title: string;
  subtitle?: string;
  details?: string;
  progress?: {value: number; label: string};
  infoTags?: InfoTag[];
  leftIcon?: {iconName: string; iconColor?: string; preset?: string};
  buttonLink?: ButtonLinkProps;
  bulletPointMenuButton?: Omit<BulletPointMenuButtonProps, 'data-name'>;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  id?: string;
  'data-name'?: string;
};

export type AssignmentRowPropsFixture = {props: AssignmentRowProps};
