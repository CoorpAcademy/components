import identity from 'lodash/fp/identity';
import get from 'lodash/fp/get';
import {checker, createValidate} from '../../../util/validation';
import createDisciplineHeader from '../../../molecule/discipline-header';
import createDisciplineRightaside from '../../../organism/discipline-rightaside';
import createCatalogCards from '../../../organism/catalog-cards';
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

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate = identity} = options;

  const DisciplineHeader = createDisciplineHeader(treant, options);
  const DisciplineRightaside = createDisciplineRightaside(treant, options);
  const CatalogCards = createCatalogCards(treant, options);
  const cardsTitle = translate('They also liked:');

  const Author = (props, children) => {
    const {
      disciplines = null,
      image,
      title = '',
      information = {name: '', socialLinks: []},
      description = ''
    } = props;

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
  };

  Author.validate = createValidate(conditions);
  return Author;
};
