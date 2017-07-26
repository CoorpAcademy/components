import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import map from 'lodash/fp/map';
import Provider from '../../../atom/provider';
import CardsGrid from '../../../organism/cards-grid';
import SocialLink from '../../../atom/social-link';
import Link from '../../../atom/link';
import style from './style.css';

class Authors extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      fullDisplay: false
    };
    this.handleToggleDisplay = this.handleToggleDisplay.bind(this);
  }

  handleToggleDisplay() {
    this.setState(prevState => ({
      fullDisplay: !prevState.fullDisplay
    }));
  }

  render() {
    const {
      image,
      title,
      description,
      cards,
      cardsTitle,
      socialTitle,
      sociallinks,
      website,
      urlwebsite,
      urlcontent
    } = this.props;

    const {translate, skin} = this.context;
    const defaultColor = getOr('#00B0FF', 'common.primary', skin);
    const toggleLabel = this.state.fullDisplay ? translate('See less') : translate('Show more');

    const socialView = map.convert({cap: false})(
      (sociallink, i) =>
        <div key={i} data-name="link" className={style.link}>
          <SocialLink {...sociallink} />
        </div>,
      sociallinks
    );

    const authorSocial = socialView.length > 0
      ? <div className={style.links}>
          <span>{socialTitle}</span>{socialView}
        </div>
      : null;

    return (
      <div data-name="authors" className={style.wrapper}>
        <div className={style.authorsWrapper}>
          <div data-name="header" className={style.header}>
            <div data-name="image" className={style.imgWrapper}>
              <img src={image} />
            </div>
            <div className={style.descWrapper}>
              <div data-name="title" className={style.title}>
                {title}
              </div>
              <div className={style.linksWrapper}>
                <span>{website}</span>
                <Link
                  data-name="linkSite"
                  className={style.linksite}
                  style={{
                    color: defaultColor
                  }}
                  href={urlwebsite}
                  target={'_blank'}
                >
                  {urlcontent}
                </Link>
                {authorSocial}
              </div>
              <div
                data-name="description"
                className={this.state.fullDisplay ? style.desc : style.shortDesc}
              >
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: description
                  }}
                />
              </div>
              <div data-name="more" className={style.toggle} onClick={this.handleToggleDisplay}>
                {toggleLabel}
              </div>
            </div>
          </div>
          <div className={style.cardsTitle}>
            {cardsTitle}
          </div>
          <CardsGrid {...cards} />
        </div>
      </div>
    );
  }
}

Authors.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};
Authors.propTypes = {
  cards: PropTypes.shape(CardsGrid.propTypes),
  cardsTitle: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  website: PropTypes.string,
  urlcontent: PropTypes.string,
  urlwebsite: PropTypes.string,
  description: PropTypes.string,
  socialTitle: PropTypes.string,
  sociallinks: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      link: PropTypes.string
    })
  )
};

export default Authors;
