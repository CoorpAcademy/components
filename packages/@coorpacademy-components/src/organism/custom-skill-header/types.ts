import {BulletPointMenuButtonProps} from '../../molecule/bullet-point-menu-button/types';

type TagProps = {
  label: 'Published' | 'Ongoing changes' | 'Draft' | 'Archived';
  type: 'success' | 'progress' | 'warning';
  size: string;
};

export type ActionButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  faIconName?: string;
};

type SaveStatusProps = {
  label: 'Unsaved changes' | 'Saved';
  display: boolean;
};

export type CustomSkillHeaderProps = {
  onQuitClick: () => void;
  title: string;
  tag: TagProps;
  saveStatus: SaveStatusProps;
  bulletPointMenuButton: BulletPointMenuButtonProps;
  saveButton: ActionButtonProps;
  publishButton: ActionButtonProps;
};
