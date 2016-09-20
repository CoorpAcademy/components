import video from '../../../video-iframe/test/fixtures/default';
const {type, id} = video.props;

/* eslint-disable max-len */

export default {
  props: {
    title: 'Les nouveaux business',
    description: 'La révolution numérique a tout accéléré : les communications, la récupération des données, la propagation de l’information et des innovations… On peut presque tout savoir instantanément : les bonnes pratiques d’une entreprise comme les mauvaises ; les goûts et les comportements de ses clients… Pour ne pas rater le coche, il faut être au fait des tendances et des changements qui se profilent. C’est ce que propose cette discipline nourrie d’exemples concrets.',
    video: {
      type,
      id
    }
  }
};
