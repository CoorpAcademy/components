import {BulletPointMenuButtonProps} from '../../molecule/bullet-point-menu-button/types';

type TagProps = {
  label: string;
  type: 'success' | 'progress' | 'warning';
  size: string;
};
export type CustomSkillHeaderProps = {
  onQuitClick: () => void;
  title: string;
  tag: TagProps;
  bulletPointMenuButton: BulletPointMenuButtonProps;
};
