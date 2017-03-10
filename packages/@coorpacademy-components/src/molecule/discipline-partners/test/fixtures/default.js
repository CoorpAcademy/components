import head from 'lodash/fp/head';
import doubleAuthors from './double-authors';

const {props: {authors}} = doubleAuthors;

export default {
  props: {
    authors: [head(authors)]
  }
};
