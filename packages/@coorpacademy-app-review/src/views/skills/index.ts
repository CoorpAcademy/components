import {ReviewSkillsProps} from '@coorpacademy/components/es/template/app-review/skills/prop-types';
import {StoreState} from '../../reducers';
import type {ConnectedOptions} from '../../types/common';

export const mapStateToSkillsProps = (
  state: StoreState,
  options: ConnectedOptions
): ReviewSkillsProps => {
  const {translate} = options;
  return {
    'aria-label': '@todo aria-label',
    title: '@todo title',
    isLoading: false,
    isLoadingAriaLabel: 'Review skills container is loading',
    listSkills: state.data.skills.map(skill => ({
      'aria-label': translate('Skill Card'),
      isCustom: skill.custom,
      skillTitle: skill.name,
      skillAriaLabel: skill.name,
      buttonLabel: translate('Review this skill'),
      buttonAriaLabel: translate('Review this skill'),
      reviseLabel: translate('{{count}} questions to review', {count: skill.slidesToReview}),
      reviseAriaLabel: translate('{{count}} questions to review', {count: skill.slidesToReview}),
      // eslint-disable-next-line no-console
      onClick: () => console.log('@todo plug dispatcher select skill')
    })),
    titleNoSkills: translate('No skill to revise'),
    textNoSkills: translate('Complete courses before revising'),
    iconSkillAriaLabel: 'Image without information'
  };
};
