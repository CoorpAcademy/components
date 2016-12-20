import React from 'react';
import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../../util/validation';
import DisciplineHeader from '../../../molecule/discipline-header';
import DisciplineRightaside from '../../../organism/discipline-rightaside';
import CatalogCards from '../../../organism/catalog-cards';
import layout from '../layout.css';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string.optional,
    description: checker.string.optional,
    image: checker.shape({
      '1x': checker.url.optional,
      '2x': checker.url.optional
    }).optional,
    information: checker.shape({
      href: checker.string,
      socialLinks: checker.array
    }).optional,
    disciplines: checker.oneOfType([checker.arrayOf(checker.object), checker.null]).optional
  }),
  children: checker.none
});

class Author extends React.Component {
  render() {
    const {translate} = this.context;
    const cardsTitle = translate('Their moocs:');
    const {
      disciplines = null,
      image,
      title = '',
      information = {name: '', socialLinks: []},
      description = ''
    } = this.props;

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
            author={information}
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
  }
};

Author.contextTypes = {
  translate: React.PropTypes.function
};

Author.validate = createValidate(conditions);
export default Author;
