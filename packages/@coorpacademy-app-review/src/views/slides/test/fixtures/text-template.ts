import noop from 'lodash/fp/noop';
import {SlideFromAPI, UISlide} from '../../../../types/common';

export const textTemplateSlide: SlideFromAPI = {
  question: {
    content: {
      media: {
        src: [],
        posters: [],
        subtitles: []
      },
      template: 'Un   {{inp58402}}   model.',
      choices: [
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          items: [],
          _id: '62433c2c58920f02c4950de0',
          type: 'text',
          name: 'inp58402',
          id: '62433c2c58920f02c4950de0'
        }
      ]
    },
    type: 'template',
    header: 'Comment le protégé doit-il percevoir son mentor ?',
    explanation: 'Saisissez votre réponse (en anglais).'
  },
  klf: "Le mentoré voit dans son mentor un <i>role model</i>, c'est-à-dire un exemple inspirant qui lui permet de se projeter dans un poste à responsabilité.",
  tips: "L'origine de l'expression <i>role model</i> est attribué au sociologue Robert K. Merton.",
  universalRef: 'sli_VJKQonm2g',
  hasClue: true,
  id: 'sli_VJKQonm2g',
  parentContentTitle: {
    title: 'Some chapter',
    type: 'chapter'
  }
};

export const textTemplateUISlide: Partial<UISlide> = {
  questionText: 'Comment le protégé doit-il percevoir son mentor ?',
  answerUI: {
    help: 'Saisissez votre réponse (en anglais).',
    model: {
      type: 'template',
      template: 'Un   {{inp58402}}   model.',
      answers: [
        {
          type: 'text',
          name: 'inp58402',
          placeholder: 'Type here',
          value: undefined,
          onChange: noop
        }
      ]
    }
  }
};
