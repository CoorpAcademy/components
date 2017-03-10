import React, {PropTypes} from 'react';
import * as CustomPropTypes from '../../../util/proptypes';
import DisciplineHeader from '../../../molecule/discipline-header';
import DisciplinePartners from '../../../molecule/discipline-partners';
import CatalogCards from '../../../organism/catalog-cards';
import layout from '../layout.css';
import style from './style.css';

const conditions = PropTypes.shape({
  props: PropTypes.shape({

  })
});

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
    <div className={layout.wrapper}>
      <div className={layout.container}>
        <DisciplineHeader
          image={image}
          title={title}
          description={description}
        />
      </div>
      <div className={layout.colContainer}>
        <DisciplinePartners
          authors={authors}
          authorTitle={translate('Informations')}
        />
      </div>
      <div className={style.container}>
        <span className={layout.cardsTitle}>
          {cardsTitle}
        </span>
        <CatalogCards
          products={disciplines}
        />
      </div>
    </div>
  );
};

Author.contextTypes = {
  translate: React.PropTypes.func
};

Author.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({
    '1x': CustomPropTypes.url,
    '2x': CustomPropTypes.url
  }),
  information: PropTypes.shape({
    href: PropTypes.string.isRequired,
    socialLinks: PropTypes.array
  }),
  disciplines: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object)
  ])
};
export default Author;
