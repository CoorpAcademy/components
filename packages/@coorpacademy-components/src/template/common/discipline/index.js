import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import DisciplineHeader from '../../../molecule/discipline-header';
import DisciplineScope from '../../../molecule/discipline-scope';
import DisciplineRightaside from '../../../organism/discipline-rightaside';
import CatalogCards from '../../../organism/catalog-cards';
import layout from '../layout.css';
import style from './style.css';

const Discipline = (props, context) => {
  const {translate = identity} = context;
  const cardsTitle = translate('They also liked:');
  const {
    selected = 0,
    level,
    levels,
    changeLevel,
    relatedDisciplines = null,
    image,
    title = '',
    video,
    author = {name: '', socialLinks: []},
    description = '',
    start,
    buy,
    startLabel,
    buyLabel
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
          type={'discipline'}
          start={start}
          buy={buy}
          startLabel={startLabel}
          buyLabel={buyLabel}
          author={author}
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

Discipline.contextTypes = {
  translate: React.PropTypes.func
};

Discipline.propTypes = {
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
  start: PropTypes.func,
  buy: PropTypes.func,
  startLabel: PropTypes.string,
  buyLabel: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    socialLinks: PropTypes.array.isRequired
  }),
  relatedDisciplines: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.null]),
  level: PropTypes.object,
  levels: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.number,
  changeLevel: PropTypes.func
};

export default Discipline;
