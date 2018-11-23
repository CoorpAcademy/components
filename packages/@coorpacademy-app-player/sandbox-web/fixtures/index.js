import {findById as findSlideById, findByChapter as findSlideByChapter} from './slides';
import {getChapterRulesByContent} from './chapter-rules';
import {findById as findProgressionById, saveProgression} from './progressions';

export {
  getChapterRulesByContent,
  findProgressionById,
  findSlideByChapter,
  findSlideById,
  saveProgression
};
