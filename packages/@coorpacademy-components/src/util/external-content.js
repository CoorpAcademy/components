import includes from 'lodash/fp/includes';
import {
  NovaCompositionCoorpacademyScorm as ScormIcon,
  NovaCompositionCoorpacademyArticle as ArticleIcon,
  NovaCompositionCoorpacademyVideo as VideoIcon
} from '@coorpacademy/nova-icons';

export const isExternalContent = type => includes(type, ['scorm', 'video', 'article']);

export const EXTERNAL_CONTENT_ICONS = {
  scorm: {icon: ScormIcon, color: '#FFB800'},
  article: {icon: ArticleIcon, color: '#365FCD'},
  video: {icon: VideoIcon, color: '#E8335E'}
};
