import noop from 'lodash/fp/noop';
import {Template} from '../../../types/slides';
import {SlideFromAPI} from '../../../types/common';

export const selectTemplateSlide: SlideFromAPI = {
  id: 'sli_410xZQxrZ',
  universalRef: 'sli_410xZQxrZ',
  question: {
    type: 'template',
    header: 'sli_410xZQxrZ.header',
    explanation: 'sli_410xZQxrZ.explanation',
    content: {
      template: 'sli_410xZQxrZ.template',
      choices: [
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          _id: '5fdce726359bf4003ee66967',
          type: 'select',
          name: 'sel36665',
          items: [
            {
              _id: '5fdce726359bf4003ee66968',
              text: 'sli_410xZQxrZ.choice_4yeA4Z7lr~',
              value: 'sli_410xZQxrZ.choice_4yeA4Z7lr~'
            },
            {
              _id: '5fdce726359bf4003ee66969',
              text: 'sli_410xZQxrZ.choice_VJWCN~mgB~',
              value: 'sli_410xZQxrZ.choice_VJWCN~mgB~'
            },
            {
              _id: '5fdce726359bf4003ee6696a',
              text: 'sli_410xZQxrZ.choice_VkaH~XgBb',
              value: 'sli_410xZQxrZ.choice_VkaH~XgBb'
            },
            {
              _id: '5fdce726359bf4003ee6696b',
              text: 'sli_410xZQxrZ.choice_E1uUWXeBb',
              value: 'sli_410xZQxrZ.choice_E1uUWXeBb'
            }
          ]
        }
      ]
    }
  },
  clue: 'sli_410xZQxrZ.clue',
  klf: 'sli_410xZQxrZ.klf',
  tips: 'sli_410xZQxrZ.tips'
};

export const selectTemplateUISlide: Template = {
  type: 'template',
  template: 'sli_410xZQxrZ.template',
  answers: [
    {
      type: 'select',
      name: 'sel36665',
      onChange: noop,
      options: [
        {name: 'Select an answer', value: '', validOption: false, selected: true},
        {
          name: 'sli_410xZQxrZ.choice_4yeA4Z7lr~',
          value: 'sli_410xZQxrZ.choice_4yeA4Z7lr~',
          validOption: true,
          selected: false
        },
        {
          name: 'sli_410xZQxrZ.choice_VJWCN~mgB~',
          value: 'sli_410xZQxrZ.choice_VJWCN~mgB~',
          validOption: true,
          selected: false
        },
        {
          name: 'sli_410xZQxrZ.choice_VkaH~XgBb',
          value: 'sli_410xZQxrZ.choice_VkaH~XgBb',
          validOption: true,
          selected: false
        },
        {
          name: 'sli_410xZQxrZ.choice_E1uUWXeBb',
          value: 'sli_410xZQxrZ.choice_E1uUWXeBb',
          validOption: true,
          selected: false
        }
      ]
    }
  ]
};
