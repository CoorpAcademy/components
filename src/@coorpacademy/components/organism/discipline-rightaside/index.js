import style from './discipline-rightaside.css';

export default ({h}, options) => {
  const DisciplineRightaside = ({product}) => {
    return (
        <div className={style.col}>
          <div className={style.head}>
            <div className={style.price}>{product.price.value}</div>
            <div className={style[`popularity${product.popularity}`]}>
              <span className={style.pop1}>★</span>
              <span className={style.pop2}>★</span>
              <span className={style.pop3}>★</span>
              <span className={style.pop4}>★</span>
              <span className={style.pop5}>★</span>
            </div>
            <div className={style.category}>
              {product.category.value}
            </div>
          </div>
          <a href="https://store-staging.coorpacademy.com/checkout/cart/{product.sku}" className={style.buyall}>
            <span>acheter</span> ce cours
          </a>
          <a href="#" className={style.buysample}>
            obtenir un <span>essai</span> pour 1.99€
          </a>

          <div className={style.author}>
            auteur
          </div>
          <div className={style.title}>
            {product.author}
          </div>
        </div>
      );
  };

  return DisciplineRightaside;
};
