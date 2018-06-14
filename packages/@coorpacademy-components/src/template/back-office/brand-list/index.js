import React from 'react';
import PropTypes from 'prop-types';
import GridList from '../../../organism/grid-list';
import BrandCard from '../../../molecule/brand-card';
import BrandCardCreate from '../../../molecule/brand-card-create';
import Search from '../../../molecule/search';
import Layout from '../layout';
import style from './style.css';

const BrandList = Layout(props => {
  const {brands = [], create, search} = props;
  const filteredBrands = brandsToFilter =>
    brandsToFilter.filter(brand => brand.title.includes(search.value));

  const _brands = search.value ? filteredBrands(brands) : brands;

  const brandCards = _brands.map((brand, index) => {
    return (
      <div key={index} className={style.brand}>
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
        <Search {...search} />
      </div>
      <div className={style.wrapper}>
        <GridList>{brandCards}</GridList>
      </div>
    </div>
  );
});

BrandList.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      edit: PropTypes.string.isRequired,
      editHref: PropTypes.string.isRequired,
      see: PropTypes.string.isRequired,
      seeHref: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ),
  search: PropTypes.shape(Search.propTypes),
  create: PropTypes.shape({
    edit: PropTypes.string.isRequired,
    editHref: PropTypes.string.isRequired
  }).isRequired
};

export default BrandList;
