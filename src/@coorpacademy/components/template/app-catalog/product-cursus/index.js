import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import { checker, createValidate } from '../../../util/validation';
import layout from '../layout.css';

import createCursusHeader from '../../../molecule/cursus-header';
import createCursusRightaside from '../../../organism/cursus-rightaside';

const getOrBlank = getOr('');

const conditions = checker.shape({
  props: checker.shape({
    cursus: checker.object,
    linkBuy: checker.url
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const CursusHeader = createCursusHeader(treant, options);
  const CursusRightaside = createCursusRightaside(treant, options);

  const ProductCursus = (props, children) => {
    const {cursus, linkBuy} = props;

    const image = get('images.cursus_full_retina.url.https', cursus);
    const title = getOrBlank('title', cursus);
    const description = getOrBlank('description', cursus);

    const rating = getOr(0, 'popularity', cursus);

    return (
      <div className={layout.wrapper}>
        <div className={layout.container}>
          <CursusHeader
            image={image}
            title={title}
            description={description}
          />
        </div>
        <div className={layout.colContainer}>
          <CursusRightaside
            rating={rating}
            maxRating={5}
            linkBuy={linkBuy}
          />
        </div>
      </div>
    );
  };

  ProductCursus.validate = createValidate(conditions);
  return ProductCursus;
};
