//import getOr from 'lodash/fp/getOr';
import style from './catalogue-cards.css';
import createCatalogueCard from '../catalogue-cards';

export default (engine, options) => {
  const {h} = engine;
  
  const CatalogueCard = createCatalogueCard(engine, options);

  const CatalogueCard = (props, children) => (
    
        // <ul className={style.category-list}>
        // <li className={style.products-list-item}>
        // <div className={style.item-img}>
        // <a href="#">
        // <img src="https://commercecdn.com/982563378880840279/bfc0cfcb-f445-4d29-9b64-4527b6067cf6.jpeg" />
        // </a>
        // </div>
        // <div className={style.item-desc}>
        <div className={style.item-desc-title}>Cursus Stratégie Digitale</div>
      //   <div className={style.item-author}>by Coorpacademy</div>
      //   <div className={style.item-desc-misc}>
      //   <div className={style.item-popularity item-popularity-4}> <span className={style.pop1}>★</span> <span className={style.pop2}>★</span> <span className={style.pop3}>★</span> <span className={style.pop4}>★</span> <span className={style.pop5}>★</span></div>
      //   <div className={style.item-desc-price}>€24.99</div>
      //   </div>
      //   </div>
      //   </li>
      // </ul>
    );

  return CatalogueCard;
  
};