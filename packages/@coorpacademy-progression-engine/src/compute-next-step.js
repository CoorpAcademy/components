import _ from 'lodash/fp';

export default function computeNextStep(progression, slides, action) {
  return _.first(slides);
}
