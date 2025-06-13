import {COLORS} from '../../../variables/colors';

const COMMUN_ACTION_BUTTON_PROPS = {
  icon: {
    position: 'left',
    faIcon: {
      name: 'circle-check',
      color: COLORS.white,
      size: 14,
      customStyle: {
        padding: 0,
        alignItems: 'baseline'
      }
    }
  },
  type: 'primary'
};

const ICON_PROPS = {
  published: {
    iconName: 'cloud-arrow-up',
    iconColor: COLORS.cm_grey_500,
    backgroundColor: COLORS.cm_grey_100,
    preset: 'xl'
  },
  archived: {
    iconName: 'circle-exclamation',
    iconColor: COLORS.yellow_700,
    backgroundColor: COLORS.yellow_100,
    preset: 'xl'
  },
  deleted: {
    iconName: 'triangle-exclamation',
    iconColor: COLORS.red_700,
    backgroundColor: COLORS.red_100,
    preset: 'xl'
  },
  draft: {
    iconName: 'circle-exclamation',
    iconColor: COLORS.yellow_700,
    backgroundColor: COLORS.yellow_100,
    preset: 'xl'
  }
};

export const POPIN_THEMES = {
  published: {
    icon: ICON_PROPS.published,
    actionButton: COMMUN_ACTION_BUTTON_PROPS
  },
  archived: {
    icon: ICON_PROPS.archived,
    actionButton: COMMUN_ACTION_BUTTON_PROPS
  },
  deleted: {
    icon: ICON_PROPS.deleted,
    actionButton: {
      icon: {
        position: 'left',
        faIcon: {
          ...COMMUN_ACTION_BUTTON_PROPS.icon.faIcon,
          name: 'trash'
        }
      },
      type: 'dangerous'
    }
  },
  draft: {
    icon: ICON_PROPS.draft,
    actionButton: {
      ...COMMUN_ACTION_BUTTON_PROPS,
      icon: {
        position: 'left',
        faIcon: {
          ...COMMUN_ACTION_BUTTON_PROPS.icon.faIcon,
          name: 'floppy-disk'
        }
      }
    }
  }
};
