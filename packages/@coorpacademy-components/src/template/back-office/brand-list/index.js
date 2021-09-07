import React from 'react';
import PropTypes from 'prop-types';
import GridList from '../../../organism/grid-list';
import BrandCard from '../../../molecule/brand-card';
import BrandCardCreate from '../../../molecule/brand-card-create';
import Search from '../../../molecule/search';
import Header from '../../../organism/setup-header';
import style from './style.css';

const BrandList = props => {
  const {brands = [], create, header, search} = props;

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
      <div className={style.headerWrapper}>
        <Header {...header} />
      </div>
      <div className={style.searchBar}>
        <Search {...search} />
      </div>
      <div className={style.wrapper}>
        <GridList>{brandCards}</GridList>
      </div>
    </div>
  );
};

BrandList.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.shape(BrandCard.propTypes)),
  header: Header.propTypes,
  search: PropTypes.shape(Search.propTypes),
  create: PropTypes.shape(BrandCardCreate.propTypes)
};

export default BrandList;
