import {StoreState} from '../../reducers';
import type {ConnectedOptions} from '../../types/common';

type SkillCard = {
  'aria-label': string;
  skillTitle: string;
  skillAriaLabel: string;
  buttonLabel: string;
  buttonAriaLabel: string;
  reviseLabel: string;
  reviseAriaLabel: string;
  isCustom: boolean;
  onClick: () => void;
};

type NoSkillsProps = {
  titleNoSkills: string;
  textNoSkills: string;
  iconSkillAriaLabel: string;
};

type SkillsProps = NoSkillsProps & {
  'aria-label'?: string;
  title: string;
  isLoading?: boolean;
  isLoadingAriaLabel: string;
  listSkills: SkillCard[];
};

export {SkillsProps};

export const mapStateToSkillsProps = (
  state: StoreState,
  options: ConnectedOptions
): SkillsProps => {
  const {translate} = options;
  return {
    'aria-label': translate('Review Skills Container'),
    title: translate('Skills you can review'),
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
