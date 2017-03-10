import React, {PropTypes} from 'react';
import CatalogCTA from '../../../molecule/catalog-cta';
import DisciplineHeader from '../../../molecule/discipline-header';
import DisciplineScope from '../../../molecule/discipline-scope';
import DisciplinePartners from '../../../molecule/discipline-partners';
import CatalogCards from '../../../organism/catalog-cards';
import layout from '../layout.css';
import style from './style.css';

const ProductCourse = (props, context) => {
  const {translate} = context;
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
      <div className={style.header}>
        <DisciplineHeader
          image={image}
          video={video}
          title={title}
          description={description}
        />
      </div>
      <div className={style.cta}>
        <CatalogCTA
          linkBuy={linkBuy}
          linkTry={linkTry}
          rating={popularity}
          maxRating={maxPopularity}
        />
      </div>
      <div className={style.partners}>
        <DisciplinePartners
          authors={authors}
        />
      </div>
      <div className={style.content}>
        <DisciplineScope
          content={level}
          levels={levels}
          selected={selected}
          onClick={changeLevel}
        />
      </div>
      <div className={style.related}>
        <div className={`${layout.container}`}>
          <span className={layout.cardsTitle}>
            {cardsTitle}
          </span>
          <CatalogCards
            products={relatedDisciplines}
          />
        </div>
      </div>
    </div>
  );
};

ProductCourse.contextTypes = {
  translate: React.PropTypes.func
};

ProductCourse.propTypes = {
  image: DisciplineHeader.propTypes.image,
  video: DisciplineHeader.propTypes.video,
  title: DisciplineHeader.propTypes.title,
  description: DisciplineHeader.propTypes.description,

  linkBuy: CatalogCTA.propTypes.linkBuy,
  linkTry: CatalogCTA.propTypes.linkTry,
  popularity: CatalogCTA.propTypes.rating,
  maxPopularity: CatalogCTA.propTypes.maxRating,

  authors: DisciplinePartners.propTypes.authors,

  level: DisciplineScope.propTypes.content,
  levels: DisciplineScope.propTypes.levels,
  selected: DisciplineScope.propTypes.selected,
  changeLevel: DisciplineScope.propTypes.onClick,

  relatedDisciplines: CatalogCards.propTypes.products
};

export default ProductCourse;
