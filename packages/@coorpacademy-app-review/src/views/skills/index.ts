import {StoreState} from '../../reducers';

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

export const mapStateToSkillsProps = (state: StoreState): SkillsProps => {
  return {
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
