import React from 'react';
import PropTypes from 'prop-types';
import GridList from '../../../organism/grid-list';
import BrandCard from '../../../molecule/brand-card';
import BrandCardCreate from '../../../molecule/brand-card-create';
import Search from '../../../atom/input-search';
import Select from '../../../molecule/select-multiple';
import RadioGroup from '../../../atom/radio-group';
import Layout from '../layout';
import style from './style.css';

const BrandList = Layout(props => {
  const {brands = [], create, search: {select, ...search} = {}, filter} = props;

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
      {filter ? (
        <div className={style.filterBar}>
          <RadioGroup {...filter} />
        </div>
      ) : null}
      <div className={style.filters}>
        <div className={style.searchBar}>
          <Search {...search} theme="coorpmanager" />
        </div>
        {select ? (
          <div className={style.provider}>
            <Select {...select} theme="coorpmanager" />
          </div>
        ) : null}
      </div>
      <div className={style.wrapper}>
        <GridList>{brandCards}</GridList>
      </div>
    </div>
  );
});

BrandList.propTypes = {
  brands: PropTypes.arrayOf(PropTypes.shape(BrandCard.propTypes)),
  filter: PropTypes.shape(RadioGroup.propTypes),
  search: PropTypes.shape(Search.propTypes),
  create: PropTypes.shape(BrandCardCreate.propTypes)
};

export default BrandList;
