import noop from 'lodash/fp/noop';
import type {SlideFromAPI} from '@coorpacademy/review-services';
import {ReviewSlide} from '../..';

export const sliderSlide: SlideFromAPI = {
  question: {
    content: {
      min: 1,
      max: 15,
      unitLabel: 'an(s)',
      answers: [['7']]
    },
    type: 'slider',
    header:
      'En combien d’années la communauté de communes du Thouarsais est-elle passée de zéro à un tiers d’énergies renouvelables ?',
    explanation: 'Déplacez le curseur.',
    medias: [
      {
        type: 'img',
        src: [
          {
            _id: '6377c7f7c76a8a017fac4364',
            mimeType: 'image/jpeg',
            url: '//static.coorpacademy.com/content/CoorpAcademy/content/cockpit-partner-wedemain/default/shutterstock_181414391-1480431629586.jpg'
          }
        ]
      }
    ]
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

export const sliderUISlide: Partial<ReviewSlide> = {
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
    },
    media: {
      type: 'img',
      mimeType: 'image/jpeg',
      _id: '6377c7f7c76a8a017fac4364',
      url: '//static.coorpacademy.com/content/CoorpAcademy/content/cockpit-partner-wedemain/default/shutterstock_181414391-1480431629586.jpg'
    }
  }
};
