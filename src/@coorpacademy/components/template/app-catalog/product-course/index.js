import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import {checker, createValidate} from '../../../util/validation';
import layout from '../layout.css';
import style from './style.css';
import createDisciplineHeader from '../../../molecule/discipline-header';
import createDisciplineScope from '../../../molecule/discipline-scope';
import createDisciplineRightaside from '../../../organism/discipline-rightaside';
import createCatalogCards from '../../../organism/catalog-cards';

const getOrBlank = getOr('');

const conditions = checker.shape({
  props: checker.shape({
    popularity: checker.number,
    maxPopularity: checker.number,
    title: checker.string,
    description: checker.string,
    image: checker.string,
    linkBuy: checker.string,
    linkLearn: checker.string,
    author: checker.shape({
      name: checker.string,
      socialLinks: checker.array
    }),
    relatedDisciplines: checker.array,
    level: checker.object,
    levels: checker.arrayOf(checker.string)
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate} = options;

  const t = stuff => {
    return translate ? translate(stuff) : stuff;
  };

  const DisciplineHeader = createDisciplineHeader(treant, options);
  const DisciplineScope = createDisciplineScope(treant, options);
  const DisciplineRightaside = createDisciplineRightaside(treant, options);
  const CatalogCards = createCatalogCards(treant, options);
  const cardsTitle = t('They also liked:');

  const ProductCourse = (props, children) => {
    const {
      selected,
      level,
      levels,
      changeLevel,
      linkBuy,
      linkTry,
      maxPopularity,
      relatedDisciplines
    } = props;

    const image = get('image', props);
    const title = getOrBlank('title', props);
    const author = getOrBlank('author', props);
    const description = getOrBlank('description', props);
    const rating = getOr(0, 'popularity', props);

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
            linkTry={linkTry}
            author={author}
            rating={rating}
            maxRating={maxPopularity}
          />
        </div>
        <div className={layout.container}>
          <DisciplineScope
            content={level}
            levels={levels}
            selected={selected}
            onClick={changeLevel}
          />
        </div>
        <div className={layout.container}>
          <span className={layout.cardsTitle}>
            {cardsTitle}
          </span>
          <CatalogCards
            products={relatedDisciplines}
          />
        </div>
      </div>
    );
  };

  ProductCourse.validate = createValidate(conditions);
  return ProductCourse;
};
