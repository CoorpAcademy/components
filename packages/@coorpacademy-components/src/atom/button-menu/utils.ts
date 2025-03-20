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
  publish: {name: 'cloud-arrow-up'},
  archive: {name: 'folder-open'},
  delete: {name: 'trash', color: COLORS.cm_negative_200}
};
