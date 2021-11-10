import React from 'react';
import PropTypes from 'prop-types';
import GridList from '../../../organism/grid-list';
import BrandCard from '../../../molecule/brand-card';
import BrandCardCreate from '../../../molecule/brand-card-create';
import Search from '../../../atom/input-search';
import Layout from '../layout';
import style from './style.css';

const BrandList = Layout(props => {
  const {brands = [], create, search} = props;

  const brandCards = brands.map((brand, index) => {
    return (
      <div key={brand.title} className={style.brand}>
        <BrandCard {...brand} />
      </div>
    );
  });

  if (create) {
    brandCards.push(
      <div key="new" className={style.brand}>
        <BrandCardCreate {...create} />
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.searchBar}>
        <Search theme="coorpmanager" {...search} />
      </div>
      <div className={style.wrapper}>
        <GridList>{brandCards}</GridList>
      </div>
    </div>
  );
});

BrandList.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.shape(BrandCard.propTypes)),
  search: PropTypes.shape(Search.propTypes),
  create: PropTypes.shape(BrandCardCreate.propTypes)
};

export default BrandList;
