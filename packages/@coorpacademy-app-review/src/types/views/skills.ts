type SkillCard = {
  'aria-label': string;
  skillTitle: string;
  skillAriaLabel: string;
  buttonLabel: string;
  buttonAriaLabel: string;
  reviseLabel: string;
  reviseAriaLabel: string;
  isCustom: boolean;
  onClick: Function;
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
