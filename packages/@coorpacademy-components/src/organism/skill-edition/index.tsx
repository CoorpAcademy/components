import React from 'react';
import {includes, isEmpty, keys, map} from 'lodash/fp';
import BrandFormGroup from '../../molecule/brand-form-group';
import ListItems from '../list-items';
import Title from '../../atom/title';
import TitleAndInput from '../title-and-input';
import {COLORS} from '../../variables/colors';
import propTypes, {
  ContentPropsType,
  ContentListItemType,
  SkillEditionPropsType,
  TranslationPropsType
} from './types';
import style from './style.css';

// @ts-expect-error convert is not recognized by the types
const uncappedMap = map.convert({cap: false});

const buildButtonProps = (button: TranslationPropsType['button']) => ({
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
    paddingRight: '8px',
    paddingleft: '16px',
    fontWeight: 600
  }
});

const buildTranslationItems = (
  {
    title: itemTitle,
    onEditClick,
    onDeleteClick
  }: {title: string; onEditClick: () => void; onDeleteClick: () => void},
  index: number
) => ({
  id: index,
  title: itemTitle,
  buttonLink: {
    'aria-label': 'Edit',
    type: 'primary',
    customStyle: {
      width: 'fit-content',
      backgroundColor: 'transparent'
    },
    hoverBackgroundColor: COLORS.gray,
    icon: {
      position: 'left',
      faIcon: {
        name: 'edit',
        color: COLORS.cm_grey_500,
        size: 16
      }
    },
    onClick: onEditClick
  },
  secondButtonLink: {
    'aria-label': 'Delete',
    type: 'primary',
    customStyle: {
      width: 'fit-content',
      backgroundColor: 'transparent'
    },
    hoverBackgroundColor: COLORS.gray,
    icon: {
      position: 'left',
      faIcon: {
        name: 'trash',
        color: COLORS.cm_grey_500,
        size: 16
      }
    },
    onClick: onDeleteClick
  }
});

const Translations = ({
  title,
  subtitle,
  items,
  button,
  localesOptions,
  emptyResult
}: TranslationPropsType) => {
  const buttonProps = buildButtonProps(button);

  const translationMenuAction = {
    button: buttonProps,
    menu: {
      buttons: map(
        ({
          label: optionLabel,
          ref: optionRef,
          onClick: optionOnClick
        }: {
          label: string;
          ref: string;
          onClick: () => void;
        }) => ({
          type: 'defaultLeft',
          onClick: optionOnClick,
          customStyle: {width: '238px'},
          label: optionLabel,
          'data-name': optionLabel,
          // disable if current locale option is already in items list
          disabled: includes(optionRef, keys(items))
        }),
        localesOptions
      )
    },
    menuWrapper: {
      customStyle: {maxHeight: '252px'}
    }
  };

  const translationProps = {
    title: {
      title,
      type: 'form-group',
      subtitle,
      titleSize: 'xl-strong',
      subtitleSize: 'medium'
    },
    'aria-label': title,
    content: {
      ...(!isEmpty(emptyResult) && {emptyResult: {...emptyResult, button: translationMenuAction}}),
      items: uncappedMap(buildTranslationItems, items),
      type: 'list'
    },
    buttonMenuAction: translationMenuAction
  };

  return <ListItems {...translationProps} />;
};

const buildContentItem = ({
  ref,
  title,
  subtitle,
  image,
  tags: {label, iconName},
  checkbox
}: ContentListItemType) => ({
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
  checkbox
});

const Content = ({
  title,
  subtitle,
  button,
  list: {title: listTitle, checkbox, items, search, emptyResult}
}: ContentPropsType) => {
  const buttonProps = buildButtonProps(button);

  const titleProps = {
    type: 'form-group',
    title,
    subtitle,
    button: buttonProps,
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
      items: map(buildContentItem, items),
      type: 'list'
    },
    search: {
      ...search,
      theme: 'coorpmanager'
    }
  };

  return (
    <div className={style.contentContainer}>
      <Title {...titleProps} />
      <ListItems {...listProps} />
    </div>
  );
};

const SkillEdition = (props: SkillEditionPropsType) => {
  const {skillInformations, translations, content} = props;

  return (
    <div className={style.container}>
      <div className={style.skillInformationsContainer}>
        <BrandFormGroup {...skillInformations.form} />
        <div className={style.iconEditor}>
          <TitleAndInput {...skillInformations.iconEditor} />
        </div>
      </div>
      <Translations {...translations} />
      <Content {...content} />
    </div>
  );
};

SkillEdition.propTypes = propTypes;

export default SkillEdition;
