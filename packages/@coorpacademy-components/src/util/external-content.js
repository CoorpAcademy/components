import includes from 'lodash/fp/includes';
import {
  NovaCompositionCoorpacademyScorm as ScormIcon,
  NovaCompositionCoorpacademyArticle as ArticleIcon,
  NovaCompositionCoorpacademyVideo as VideoIcon,
  NovaCompositionCoorpacademyMicrophone as PodcastIcon
} from '@coorpacademy/nova-icons';
import {COLORS} from '../variables/colors';

export const isExternalContent = type => includes(type, ['scorm', 'video', 'article', 'podcast']);

export const EXTERNAL_COURSE_TYPES = ['podcast', 'video', 'interactive', 'document'];

export const EXTERNAL_CONTENT_ICONS = {
  scorm: {icon: ScormIcon, color: COLORS.cm_yellow_scorm},
  article: {icon: ArticleIcon, color: COLORS.cm_bleu_article},
  video: {icon: VideoIcon, color: COLORS.cm_red_video},
  podcast: {icon: PodcastIcon, color: COLORS.cm_violet_podcast}
};

// should replace nova-icons with the new icons below
export const ICONS_TYPES = {
  scorm: {iconName: 'rectangle-history', iconColor: COLORS.cm_yellow_scorm}, // ok
  article: {iconName: 'file-lines', iconColor: COLORS.cm_bleu_article}, // ok animated resource
  video: {iconName: 'circle-play', iconColor: COLORS.cm_red_video}, // ok video
  podcast: {iconName: 'microphone-lines', iconColor: COLORS.cm_violet_podcast}, // ok
  chapter: {iconName: 'stopwatch', iconColor: COLORS.neutral_500} // ok
};
