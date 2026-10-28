import PropTypes from 'prop-types';
import {ButtonLinkProps} from '../../atom/button-link/types';

export const ContentSelectionListPropTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  button: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }).isRequired,
  list: PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        hidden: PropTypes.bool,
        hint: PropTypes.string,
        ref: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        tags: PropTypes.shape({
          label: PropTypes.string.isRequired,
          iconName: PropTypes.string.isRequired
        }).isRequired,
        checkbox: PropTypes.shape({
          checked: PropTypes.bool.isRequired,
          onChange: PropTypes.func.isRequired
        }).isRequired,
        deleteButton: PropTypes.shape({
          label: PropTypes.string,
          'aria-label': PropTypes.string,
          onClick: PropTypes.func
        })
      }).isRequired
    ),
    search: PropTypes.shape({
      value: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired
    }),
    emptyResult: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }),
    checkbox: PropTypes.shape({
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
      onChange: PropTypes.func.isRequired
    })
  }).isRequired,
  error: PropTypes.string,
  hiddenLabel: PropTypes.string,
  isFetching: PropTypes.bool,
  actionButtons: PropTypes.arrayOf(PropTypes.object),
  checkboxWithTitle: PropTypes.shape({
    title: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
  }),
  readOnly: PropTypes.bool
};

export type ContentListItemType = {
  hidden?: boolean;
  hint?: string;
  ref: string;
  title: string;
  subtitle: string;
  image: string;
  tags: {
    label: string;
    iconName: string;
  };
  checkbox: {
    checked: boolean;
    onChange: (value: boolean) => void;
  };
  deleteButton?: ButtonLinkProps;
};

export type CheckboxWithTitleProps = {
  title?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
};

export type ContentPropsType = {
  error?: string;
  hiddenLabel?: string;
  title: string;
  subtitle?: string;
  button: {
    label: string;
    onClick: () => void;
  };
  list: {
    title?: string;
    items?: ContentListItemType[];
    search?: {
      value: string;
      placeholder: string;
      onChange: (value: string) => void;
    };
    emptyResult?: {
      title: string;
      description: string;
    };
    checkbox?: {
      title: string;
      checked: boolean;
      onChange: (value: boolean) => void;
    };
  };
  actionButtons?: ButtonLinkProps[];
  checkboxWithTitle?: CheckboxWithTitleProps;
  isFetching?: boolean;
  readOnly?: boolean;
};
