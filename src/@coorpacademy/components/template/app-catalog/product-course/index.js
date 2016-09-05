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
    popularity: checker.number.optional,
    maxPopularity: checker.number.optional,
    title: checker.string.optional,
    description: checker.string.optional,
    image: checker.string.optional,
    video: checker.shape({
      type: checker.oneOf(['vimeo', 'youtube']),
      id: checker.string
    }),
    linkBuy: checker.string.optional,
    linkTry: checker.string.optional,
    author: checker.shape({
      name: checker.string,
      socialLinks: checker.array
    }).optional,
    relatedDisciplines: checker.array.optional,
    level: checker.object.optional,
    levels: checker.arrayOf(checker.string).optional,
    selected: checker.number.optional,
    changeLevel: checker.func.optional
  }).strict,
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
      selected = 0,
      level,
      levels,
      changeLevel,
      linkBuy,
      linkTry,
      maxPopularity,
      relatedDisciplines,
      image = '',
      title = '',
      video,
      author = {name: '', socialLinks: []},
      description = '',
      popularity = 0
    } = props;

    return (
      <div className={layout.wrapper}>
        <div className={layout.container}>
          <DisciplineHeader
            image={image}
            video={video}
            title={title}
            description={description}
          />
        </div>
        <div className={layout.colContainer}>
          <DisciplineRightaside
            linkBuy={linkBuy}
            linkTry={linkTry}
            author={author}
            rating={popularity}
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
