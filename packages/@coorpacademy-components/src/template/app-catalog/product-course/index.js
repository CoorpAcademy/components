import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import DisciplineHeader from '../../../molecule/discipline-header';
import DisciplineScope from '../../../molecule/discipline-scope';
import DisciplineRightaside from '../../../organism/discipline-rightaside';
import CatalogCards from '../../../organism/catalog-cards';
import layout from '../layout.css';
import style from './style.css';

const ProductCourse = (props, context) => {
  const {translate = identity} = context;
  const cardsTitle = translate('They also liked:');
  const {
    selected = 0,
    level,
    levels,
    changeLevel,
    linkBuy,
    linkTry,
    maxPopularity,
    relatedDisciplines = null,
    image,
    title = '',
    video,
    authors = [],
    description = '',
    popularity = 0
  } = props;

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <DisciplineHeader
          image={image}
          video={video}
          title={title}
          description={description}
        />
      </div>
      <div className={style.colContainer}>
        <DisciplineRightaside
          linkBuy={linkBuy}
          linkTry={linkTry}
          authors={authors}
          rating={popularity}
          maxRating={maxPopularity}
        />
      </div>
      <div
        className={style.contentContainer}
      >
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

ProductCourse.contextTypes = {
  translate: React.PropTypes.func
};

ProductCourse.propTypes = {
  popularity: PropTypes.number,
  maxPopularity: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({
    '1x': PropTypes.url,
    '2x': PropTypes.url
  }),
  video: PropTypes.shape({
    type: PropTypes.oneOf(['vimeo', 'youtube']).isRequired,
    id: PropTypes.string.isRequired
  }),
  linkBuy: PropTypes.string,
  linkTry: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    socialLinks: PropTypes.array.isRequired
  })),
  relatedDisciplines: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.null]),
  level: PropTypes.object,
  levels: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.number,
  changeLevel: PropTypes.func
};

export default ProductCourse;
