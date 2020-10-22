import React from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import DisciplineCTA from '../../../molecule/discipline-cta';
import DisciplineHeader from '../../../molecule/discipline-header';
import DisciplinePartners from '../../../molecule/discipline-partners';
import DisciplineScope from '../../../molecule/discipline-scope';
import style from './style.css';

const Discipline = (props, context) => {
  const {
    selected = 0,
    level,
    levels,
    changeLevel,
    image,
    title = '',
    video,
    authors = [],
    description = '',
    start,
    buy,
    startLabel,
    buyLabel
  } = props;

  const authorSection = isEmpty(authors) ? null : (
    <div className={style.partners}>
      <DisciplinePartners authors={authors} />
    </div>
  );

  return (
    <div>
      <div data-name="discipline" className={style.container}>
        <div className={style.leftSection}>
          <div className={style.header}>
            <DisciplineHeader image={image} video={video} title={title} description={description} />
          </div>
          <div className={style.mobileAuthorCtaSection}>
            <div className={style.cta}>
              <DisciplineCTA
                type={'discipline'}
                start={start}
                buy={buy}
                startLabel={startLabel}
                buyLabel={buyLabel}
              />
            </div>
            <div className={style.partners}>
              <DisciplinePartners authors={authors} />
            </div>
          </div>
          <div className={style.content}>
            <DisciplineScope
              content={level}
              levels={levels}
              selected={selected}
              onClick={changeLevel}
            />
          </div>
        </div>
        <div className={style.rightSection}>
          <div className={style.stickySection}>
            <div className={style.cta}>
              <DisciplineCTA
                type={'discipline'}
                start={start}
                buy={buy}
                startLabel={startLabel}
                buyLabel={buyLabel}
              />
            </div>
            {authorSection}
          </div>
        </div>
      </div>
    </div>
  );
};

Discipline.propTypes = {
  image: DisciplineHeader.propTypes.image,
  video: DisciplineHeader.propTypes.video,
  title: DisciplineHeader.propTypes.title,
  description: DisciplineHeader.propTypes.description,

  start: DisciplineCTA.propTypes.start,
  buy: DisciplineCTA.propTypes.buy,
  startLabel: DisciplineCTA.propTypes.startLabel,
  buyLabel: DisciplineCTA.propTypes.buyLabel,

  authors: DisciplinePartners.propTypes.authors,

  level: DisciplineScope.propTypes.content,
  levels: DisciplineScope.propTypes.levels,
  selected: DisciplineScope.propTypes.selected,
  changeLevel: DisciplineScope.propTypes.onClick
};

export default Discipline;
