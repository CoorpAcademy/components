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
  publish: {
    iconName: 'cloud-arrow-up',
    iconColor: COLORS.cm_grey_500,
    backgroundColor: COLORS.gray,
    preset: 'xl'
  },
  archive: {
    iconName: 'circle-exclamation',
    iconColor: COLORS.yellow_700,
    backgroundColor: COLORS.yellow_100,
    preset: 'xl'
  },
  delete: {
    iconName: 'triangle-exclamation',
    iconColor: COLORS.red_700,
    backgroundColor: COLORS.red_100,
    preset: 'xl'
  }
};

export const POPIN_THEMES = {
  publish: {
    icon: ICON_PROPS.publish,
    actionButton: COMMUN_ACTION_BUTTON_PROPS
  },
  archive: {
    icon: ICON_PROPS.archive,
    actionButton: COMMUN_ACTION_BUTTON_PROPS
  },
  delete: {
    icon: ICON_PROPS.delete,
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
  }
};
