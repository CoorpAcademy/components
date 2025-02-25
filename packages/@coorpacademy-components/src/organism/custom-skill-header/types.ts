import {BulletPointMenuButtonProps} from '../../molecule/bullet-point-menu-button/types';

type TagProps = {
  label: 'Published' | 'Ongoing changes' | 'Draft' | 'Archived';
  type: 'success' | 'progress' | 'warning';
  size: string;
};

export type CustomSkillHeaderProps = {
  onQuitClick: () => void;
  title: string;
  tag: TagProps;
  saveStatus: 'Unsaved changes' | 'Saved';
  bulletPointMenuButton: BulletPointMenuButtonProps;
};
