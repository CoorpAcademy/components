import includes from 'lodash/fp/includes';
import {
  NovaCompositionCoorpacademyScorm as ScormIcon,
  NovaCompositionCoorpacademyArticle as ArticleIcon,
  NovaCompositionCoorpacademyVideo as VideoIcon,
  NovaCompositionCoorpacademyMicrophone as PodcastIcon
} from '@coorpacademy/nova-icons';

export const isExternalContent = type => includes(type, ['scorm', 'video', 'article', 'podcast']);

export const EXTERNAL_COURSE_TYPES = ['podcast', 'video', 'interactive', 'document'];

export const EXTERNAL_CONTENT_ICONS = {
  scorm: {icon: ScormIcon, color: '#FFB800'},
  article: {icon: ArticleIcon, color: '#365FCD'},
  video: {icon: VideoIcon, color: '#E8335E'},
  podcast: {icon: PodcastIcon, color: '#432ba7'}
};
