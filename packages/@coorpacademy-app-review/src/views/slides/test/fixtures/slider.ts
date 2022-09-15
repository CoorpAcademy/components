import noop from 'lodash/fp/noop';
import {UISlide} from '../..';
import {SlideFromAPI} from '../../../../types/common';

export const sliderSlide: SlideFromAPI = {
  question: {
    content: {
      min: 1,
      max: 15,
      unitLabel: 'an(s)'
    },
    type: 'slider',
    header:
      'En combien d’années la communauté de communes du Thouarsais est-elle passée de zéro à un tiers d’énergies renouvelables ?',
    explanation: 'Déplacez le curseur.'
  },
  klf: 'Dans le cadre d’un projet local, la communauté de communes du Thouarsais, dans le Poitou (ouest de la France), a développé un parc diversifié d’énergies renouvelables : éolien, biomasse, solaire… En sept ans seulement, entre 2007 et 2014, la part d’énergies renouvelables est passée de zéro à un tiers !',
  tips: 'En 2014, le Thouarsais a reçu la médaille de bronze du championnat européen des énergies renouvelables.',
  universalRef: 'sli_VkAzsCLKb',
  _id: 'sli_VkAzsCLKb',
  parentContentTitle: {
    title: 'Developing the review app',
    type: 'course'
  }
};

export const sliderUISlide: Partial<UISlide> = {
  questionText:
    'En combien d’années la communauté de communes du Thouarsais est-elle passée de zéro à un tiers d’énergies renouvelables ?',
  answerUI: {
    help: 'Déplacez le curseur.',
    model: {
      type: 'slider',
      placeholder: 'Déplacez le curseur.',
      minLabel: '1 an(s)',
      maxLabel: '15 an(s)',
      title: '1 an(s)',
      value: 0,
      onChange: noop,
      onSliderChange: noop
    }
  }
};
