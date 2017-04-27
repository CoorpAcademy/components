import React from 'react';
import PropTypes from 'prop-types';
import * as CustomPropTypes from '../../../util/proptypes';
import DisciplineHeader from '../../../molecule/discipline-header';
import DisciplinePartners from '../../../molecule/discipline-partners';
import CatalogCards from '../../../organism/catalog-cards';
import style from './style.css';

const Author = (props, context) => {
  const {translate} = context;
  const cardsTitle = translate('Their moocs:');
  const {
    disciplines = null,
    image,
    title = '',
    information = {name: '', socialLinks: []},
    description = ''
  } = props;

  const authors = [information];

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <DisciplineHeader
          image={image}
          title={title}
          description={description}
        />
      </div>
      <div className={style.partners}>
        <DisciplinePartners
          authors={authors}
          authorTitle={translate('Informations')}
        />
      </div>
      <div className={style.content}>
        <div className={style.container}>
          <span className={style.cardsTitle}>
            {cardsTitle}
          </span>
          <CatalogCards
            products={disciplines}
          />
        </div>
      </div>
    </div>
  );
};

Author.contextTypes = {
  translate: PropTypes.func
};

Author.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({
    '1x': CustomPropTypes.url,
    '2x': CustomPropTypes.url
  }),
  information: PropTypes.shape({
    href: PropTypes.string,
    socialLinks: PropTypes.array
  }),
  disciplines: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object)
  ])
};
export default Author;
