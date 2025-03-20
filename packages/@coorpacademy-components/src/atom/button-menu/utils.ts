import {COLORS} from '../../variables/colors';

export const DEFAULT_ICON_STYLE = {
  position: 'left' as const,
  faIcon: {
    size: 14,
    color: COLORS.cm_grey_500,
    customStyle: {padding: 0}
  }
};

export const THEMES = {
  published: {name: 'cloud-arrow-up'},
  archived: {name: 'folder-open'},
  deleted: {name: 'trash', color: COLORS.cm_negative_200}
};
