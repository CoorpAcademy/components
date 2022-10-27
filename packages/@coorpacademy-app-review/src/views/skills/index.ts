import {ReviewSkillsProps} from '@coorpacademy/components/es/organism/review-skills/prop-types';
import {StoreState} from '../../reducers';

export const mapStateToSkillsProps = (state: StoreState): ReviewSkillsProps => {
  return {
    'aria-label': '',
    title: '@todo title',
    isLoading: false,
    isLoadingAriaLabel: '@todo loading',
    listSkills: state.data.skills.map(skill => ({
      'aria-label': '',
      isCustom: skill.custom,
      skillTitle: skill.name,
      skillAriaLabel: '@todo skill aria label',
      buttonLabel: '@todo button',
      buttonAriaLabel: '@todo button aria label',
      reviseLabel: '@todo revise',
      reviseAriaLabel: '@todo revise aria label',
      // eslint-disable-next-line no-console
      onClick: () => console.log('@todo plug dispatcher select skill')
    })),
    titleNoSkills: '@todo title no skills',
    textNoSkills: '@todo text no skills',
    iconSkillAriaLabel: '@todo iconSkillAriaLabel'
  };
};
