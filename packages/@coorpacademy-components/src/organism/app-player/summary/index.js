import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Provider from '../../../atom/provider';
import Link from '../../../atom/link';
import Loader from '../../../atom/loader';
import CardsList from '../../../molecule/dashboard/cards-list';
import PopinHeader from '../../../molecule/app-player/popin/popin-header';
import style from './style.css';

const Header = props => <PopinHeader {...props} />;

const Cards = props => {
  if (props.cards) {
    return <CardsList {...props} />;
  } else {
    return <Loader />;
  }
};

const Footer = ({title, color, ...linkProps}) => (
  <Link
    style={{
      color
    }}
    className={style.footer}
    {...linkProps}
  >
    {title}
  </Link>
);

const PopinEnd = (props, context) => {
  const {header, recommendation, footer} = props;
  const {skin} = context;
  const primary = getOr('#f0f', 'common.primary', skin);

  return (
    <div className={style.wrapper}>
      <Header {...header} />
      <Cards {...recommendation} />
      <Footer color={primary} {...footer} />
    </div>
  );
};

PopinEnd.contextTypes = {
  skin: Provider.childContextTypes.skin
};

PopinEnd.propTypes = {
  header: PropTypes.shape(PopinHeader.propTypes),
  footer: PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.url,
    onClick: PropTypes.func
  }),
  recommendation: PropTypes.shape(CardsList.propTypes)
};

export default PopinEnd;
