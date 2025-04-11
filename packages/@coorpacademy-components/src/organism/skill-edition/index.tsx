import React from 'react';
import {includes, isEmpty, keys, map} from 'lodash/fp';
import BrandFormGroup from '../../molecule/brand-form-group';
import ListItems from '../list-items';
import Title from '../../atom/title';
import TitleAndInput from '../title-and-input';
import {COLORS} from '../../variables/colors';
import propTypes, {SkillEditionPropsType, TranslationPropsType} from './types';
import style from './style.css';

// @ts-expect-error convert is not recognized by the types
const uncappedMap = map.convert({cap: false});

const Translations = ({
  title,
  subtitle,
  items,
  button: {label, onClick},
  localesOptions,
  emptyResult
}: TranslationPropsType) => {
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

  const button = {
    type: 'primary',
    label,
    'aria-label': label,
    'data-name': `button-${label}`,
    onClick,
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
  };

  const translationMenuAction = {
    button,
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
      ...(!isEmpty(emptyResult) && {emptyResult: {...emptyResult, button}}),
      items: uncappedMap(buildTranslationItems, items),
      type: 'list'
    },
    buttonMenuAction: translationMenuAction
  };

  return <ListItems {...translationProps} />;
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
      <div className={style.contentContainer}>
        <Title {...content.title} />
        <ListItems {...content.listContent} />
      </div>
    </div>
  );
};

SkillEdition.propTypes = propTypes;

export default SkillEdition;
