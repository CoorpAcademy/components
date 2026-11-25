import {makeModel, ownerLabels} from '../../../../test/helpers/population-owners';

export default {props: {model: makeModel({query: 'Morgan', loading: true}), labels: ownerLabels}};
