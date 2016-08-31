import take from 'lodash/fp/take';
import disciplineScope from '../../../../../molecule/discipline-scope/test/fixtures/default';
import catalogCards from '../../../../../organism/catalog-cards/test/fixtures/default';
const {content, levels} = disciplineScope.props;
const {products} = catalogCards.props;

/* eslint-disable max-len */

export default {
  props: {
    selected: 2,
    popularity: 4,
    maxPopularity: 5,
    title: 'Les nouveaux business',
    description: 'La révolution numérique a tout accéléré : les communications, la récupération des données, la propagation de l’information et des innovations… On peut presque tout savoir instantanément : les bonnes pratiques d’une entreprise comme les mauvaises ; les goûts et les comportements de ses clients… Pour ne pas rater le coche, il faut être au fait des tendances et des changements qui se profilent. C’est ce que propose cette discipline nourrie d’exemples concrets.',
    image: 'https://commercecdn.com/982563378880840279/40dd5939-4bf3-43bf-a788-273fba83d27e.png',
    author: 'Eléphant',
    linkBuy: '/buy',
    linkLearn: '/learn',
    changeLevel: () => true,
    relatedDisciplines: take(3, products),
    level: content,
    levels
  }
};
