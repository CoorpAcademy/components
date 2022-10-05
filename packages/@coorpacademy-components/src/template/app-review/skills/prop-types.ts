import PropTypes from 'prop-types';
import {ListSkillsPropTypes} from '../../../organism/review-skills/prop-types';

export const SkillPropsTypes = {
  title: PropTypes.string,
  info: PropTypes.string
};

export const ItemPropsTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    info: PropTypes.string,
    isExtraSpace: PropTypes.bool
  })
};

export const ListPropTypes = {
  skills: ListSkillsPropTypes.listSkills
};

export type SkillProps = {
  title: string;
  info: string;
};

export type ItemProps = {
  item: {title: string; info: string; isExtraSpace: boolean};
};

export type NoSkillsProps = {
  titleNoSkills: string;
  textNoSkills: string;
};

export type ListSkillsProps = {
  skillTitle: string;
  isCustom: boolean;
  'aria-label': string;
  skillAriaLabel: string;
  buttonLabel: string;
  buttonAriaLabel: string;
  reviseLabel: string;
  reviseAriaLabel: string;
  onClick: () => void;
};

export type SkillsProps = {
  title: string;
  listSkills: Array<ListSkillsProps>;
};
