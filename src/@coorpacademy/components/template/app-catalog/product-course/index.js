import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import { checker, createValidate } from '../../../util/validation';
import layout from '../layout.css';
import createDisciplineHeader from '../../../molecule/discipline-header';
import createDisciplineScope from '../../../molecule/discipline-scope';
import createDisciplineRightaside from '../../../organism/discipline-rightaside';

const getOrBlank = getOr('');

const conditions = checker.shape({
  props: checker.shape({
    product: checker.object,
    onClick: checker.func,
    selected: checker.number,
    levels: checker.arrayOf(checker.object)
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const DisciplineHeader = createDisciplineHeader(treant, options);
  const DisciplineScope = createDisciplineScope(treant, options);
  const DisciplineRightaside = createDisciplineRightaside(treant, options);

  const ProductCourse = (props, children) => {
    const {selected, product, levels, changeLevel} = props;

    const image = get('images.discipline_full_retina.url.https', product);
    const title = getOrBlank('title', product);
    const author = getOrBlank('author', product);
    const description = getOrBlank('description', product);

    const linkBuy = get('linkBuy', levels[selected]);
    const rating = getOr(0, 'popularity', levels[selected]);
    const maxRating = getOr(0, 'maxPopularity', levels[selected]);

    return (
      <div className={layout.wrapper}>
        <div className={layout.container}>
          <DisciplineHeader
            image={image}
            title={title}
            description={description}
          />
        </div>
        <div className={layout.colContainer}>
          <DisciplineRightaside
            linkBuy={linkBuy}
            author={author}
            rating={rating}
            maxRating={maxRating}
          />
        </div>
        <div className={layout.container}>
          <DisciplineScope
            title={title}
            product={product}
            selected={selected}
            onClick={changeLevel}
          />
        </div>
      </div>
    );
  };

  ProductCourse.validate = createValidate(conditions);
  return ProductCourse;
};

