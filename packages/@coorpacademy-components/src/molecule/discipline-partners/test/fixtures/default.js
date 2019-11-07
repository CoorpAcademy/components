import {head} from 'lodash/fp';
import doubleAuthors from './double-authors';

const {
  props: {authors}
} = doubleAuthors;

export default {
  props: {
    authors: [head(authors)]
  }
};
