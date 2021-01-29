import {defaultsDeep} from 'lodash/fp';
import failClosed from './fail-closed';

export default defaultsDeep(failClosed, {
  props: {
    header: {
      corrections: [
        {
          answer:
            '<p align="right"> وضع النصوص بالتصص بالتصاميم ساميمص بالتصاميم س سواء كانت تصاميم مطبوعه</p>',
          isCorrect: false
        },
        {
          answer: '<p align="right"> وضع النصوص بالتصص بالتصامصاميم مطبوعه</p>',
          isCorrect: true
        },
        {
          answer: '<p align="right"> وضع النصوص بالتصص بالانت تصاميم مطبوعه</p>',
          isCorrect: true
        },
        {
          answer: '<p align="right"> وضع النصوص بالتصص بالتصاميم ساميمص باء كانت تصاميم مطبوعه</p>',
          isCorrect: false
        }
      ]
    },
    question: {
      header:
        'Par quel moyen les entreprises peuvent-elles connaître leur popularité sur les réseaux sociaux ?',
      answerPrefix: 'Bonne réponse:',
      answer:
        '<p align="right"> وضع النصوص بالتصاميم س سواء كانت تصاميم مطبوعه</p>, <p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه</p>,<p align="right"> وضع سواء كانت تصاميم مطبوعه</p>,<p align="right"> وضع النصوص بالتصص بالتصاميم سص بالتصاميم ساميم سواء كانت تصاميم مطبوعصص بالتصاميم سص بالتصاميم ساميم سواء كانت تصاميم مطبوعه</p>'
    },
    assistanceLink: {
      title: 'Signaler un problème avec cette question ?',
      onClick: () => console.log('test onClick')
    }
  }
});
