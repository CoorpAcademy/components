import {ReviewSkillsProps} from '@coorpacademy/components/es/template/app-review/skills/prop-types';
import {StoreState} from '../../reducers';
import type {ConnectedOptions} from '../../types/common';

export const mapStateToSkillsProps = (
  state: StoreState,
  options: ConnectedOptions
): ReviewSkillsProps => {
  const {translate} = options;
  return {
    'aria-label': translate('list_aria_label'),
    title: translate('list_title'),
    isLoading: false,
    isLoadingAriaLabel: 'Review skills container is loading',
    listSkills: state.data.skills.map(skill => ({
      'aria-label': translate('card.aria_label'),
      isCustom: skill.custom,
      skillTitle: skill.name,
      skillAriaLabel: skill.name,
      buttonLabel: translate('card.button_text'),
      buttonAriaLabel: translate('card.button_text'),
      reviseLabel: translate('card.text', {total: `${skill.slidesToReview}`}),
      reviseAriaLabel: translate('card.text', {
        total: `${skill.slidesToReview}`
      }),
      // eslint-disable-next-line no-console
      onClick: () => console.log('@todo plug dispatcher select skill')
    })),
    titleNoSkills: translate('no_skills.title'),
    textNoSkills: translate('no_skills.text'),
    iconSkillAriaLabel: 'Image without information'
  };
};
