import React from 'react';
import {isEmpty, map} from 'lodash/fp';
import ListItems from '../list-items';
import Title from '../../atom/title';
import Notification from '../../atom/notification';
import {COLORS} from '../../variables/colors';
import {contentContainer} from '../skill-edition/styles';
import {ContentPropsType, ContentListItemType, ContentSelectionListPropTypes} from './types';

export const buildButtonProps = (button: {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}) => ({
  ...button,
  type: 'primary',
  'aria-label': button.label,
  'data-name': `button-${button.label}`,
  hoverBackgroundColor: COLORS.primary_100,
  hoverColor: COLORS.cm_primary_blue,
  icon: {
    position: 'left',
    faIcon: {
      name: 'plus',
      color: COLORS.cm_primary_blue,
      size: 14,
      customStyle: {padding: 0}
    }
  },
  customStyle: {
    width: 'fit-content',
    backgroundColor: COLORS.cm_blue_50,
    color: COLORS.cm_primary_blue,
    borderRadius: '12px',
    fontWeight: 600
  }
});

const buildContentItem =
  (readOnly: boolean) =>
  ({
    ref,
    title,
    subtitle,
    image,
    tags: {label, iconName},
    checkbox,
    deleteButton,
    hidden,
    hint
  }: ContentListItemType) => {
    return {
      ...(readOnly
        ? {}
        : {
            secondButtonLink: {
              ...deleteButton,
              'data-name': `button-${deleteButton?.label}`,
              'aria-label': 'Delete',
              type: 'primary',
              customStyle: {
                width: 'fit-content',
                backgroundColor: 'transparent'
              },
              hoverBackgroundColor: COLORS.cm_grey_100,
              icon: {
                position: 'left',
                faIcon: {
                  name: 'trash',
                  color: COLORS.neutral_500,
                  size: 16
                }
              }
            }
          }),
      imageOverlay: hidden ? 'hidden' : undefined,
      contentBadge: hidden ? {category: 'hidden', label: 'Hidden'} : undefined,
      details: hint,
      id: ref,
      title,
      subtitle,
      image,
      tags: [
        {
          label,
          type: 'default',
          icon: {
            iconName,
            preset: 's',
            customStyle: {
              padding: 0
            },
            position: 'left'
          }
        }
      ],
      checkbox: readOnly ? undefined : checkbox
    };
  };

const ContentSelectionList = ({
  title,
  subtitle,
  button,
  list: {title: listTitle, checkbox, items, search, emptyResult},
  actionButtons,
  checkboxWithTitle: checkboxWithTitleProps,
  readOnly = false,
  isFetching = false,
  error
}: ContentPropsType) => {
  const buttonProps = buildButtonProps(button);

  const titleProps = {
    type: 'form-group',
    title,
    subtitle,
    button: !readOnly ? buttonProps : undefined,
    required: true
  };

  const listProps = {
    ...(!isEmpty(checkbox) && {
      ...checkbox,
      icon: {iconName: 'minus', iconColor: COLORS.white, preset: 's'},
      customStyle: {fontWeight: 600, color: COLORS.cm_grey_500, fontSize: '16px'}
    }),
    title: listTitle,
    'aria-label': 'content list items',
    content: {
      ...(!isEmpty(emptyResult) && {emptyResult: {...emptyResult, button: buttonProps}}),
      items: map(buildContentItem(readOnly), items),
      type: 'list'
    },
    search: search
      ? {
          ...search,
          theme: 'coorpmanager',
          // Keep search interactive even in readOnly mode
          disabled: false
        }
      : undefined,
    actionButtons: readOnly
      ? []
      : map(
          actionButton => ({
            ...actionButton,
            customStyle: {
              fontWeight: '600',
              borderRadius: '12px',
              width: 'auto'
            }
          }),
          actionButtons
        ),

    checkboxWithTitle: readOnly
      ? undefined
      : {
          ...checkboxWithTitleProps,
          name: checkboxWithTitleProps?.title,
          'aria-label': checkboxWithTitleProps?.title,
          'data-name': checkboxWithTitleProps?.title,
          customStyle: {fontWeight: 600, color: COLORS.neutral_500, fontSize: '16px'},
          icon: {iconName: 'minus', iconColor: 'white', preset: 's'}
        },
    isFetching
  };

  return (
    <div className={contentContainer}>
      <Title {...titleProps} />
      {error ? (
        <div role="alert">
          <Notification type="error" message={error} />
        </div>
      ) : null}
      <ListItems {...listProps} />
    </div>
  );
};

ContentSelectionList.propTypes = ContentSelectionListPropTypes;

export default ContentSelectionList;
