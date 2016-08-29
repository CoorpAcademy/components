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
    const {cursus} = props;

    const image = get('images.cursus_full_retina.url.https', cursus);
    const title = getOrBlank('title', cursus);
    const description = getOrBlank('description', cursus);

    const badge = get('images.certification_full_retina.url.https', cursus);
    const assets = get('course_scope', cursus);
    const linkBuy = get('linkBuy', cursus);
    const rating = getOr(0, 'popularity', cursus);
    const maxRating = getOr(0, 'maxPopularity', cursus);

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
            badge={badge}
            assets={assets}
            rating={rating}
            maxRating={maxRating}
            linkBuy={linkBuy}
          />
        </div>
      </div>
    );
  };

  ProductCursus.validate = createValidate(conditions);
  return ProductCursus;
};
