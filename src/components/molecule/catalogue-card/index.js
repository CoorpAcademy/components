import { checker, createValidate } from '../../../util/validation';
import style from './catalogue-card.css';

const conditions = checker.shape({
  props: checker.shape({
    product: checker.shape({
    })
  }),
  children: checker.none
});

export default (engine, options = {}) => {
  const CatalogueCard = (props, children) => {
    const {h} = engine;
    const {product} = props;

    return (
      <li>
        {product.title}
      </li>
    );
  };

  CatalogueCard.validate = createValidate(conditions);
  return CatalogueCard;
};
