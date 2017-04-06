import React, {PropTypes} from 'react';
import map from 'lodash/fp/map';
import * as CustomPropTypes from '../../../util/proptypes';
import shallowCompare from '../../../util/shallow-compare';
import CardsGrid from '../../../organism/cards-grid';
import Picture from '../../../atom/picture';
import SocialLink from '../../../atom/social-link';
import Link from '../../../atom/link';
import style from './style.css';

class Authors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDisplay: false
    };
    this.handleToggleDisplay = this.handleToggleDisplay.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
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

    const {translate} = this.context;
    const toggleLabel = this.state.fullDisplay ? translate('See less') : translate('Show more');

    const socialView = map.convert({cap: false})((sociallink, i) => (
      <div
        key={i}
        className={style.link}
      >
        <SocialLink {...sociallink} />
      </div>
    ), sociallinks);

    const authorSocial = socialView.length > 0 ? (
      <div className={style.links}>
        <span>{socialTitle}</span>{socialView}
      </div>
    ) : null;

    return (
      <div className={style.wrapper}>
        <div className={style.authorsWrapper}>
          <div className={style.header}>
            <div className={style.imgWrapper}>
              <img src={image} />
            </div>
            <div className={style.descWrapper}>
              <div className={style.title}>
                {title}
              </div>
              <div className={style.linksWrapper}>
                <span>{website}</span>
                <Link
                  className={style.linksite}
                  href={urlwebsite}
                  target={'_blank'}
                >
                  {urlcontent}
                </Link>
                <div className={style.socialWrapper}>
                  {authorSocial}
                </div>
              </div>
              <div className={this.state.fullDisplay ? style.desc : style.shortDesc}>
                <div
                  dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
                    __html: description
                  }}
                />
              </div>
              <div className={style.toggle}
                onClick={this.handleToggleDisplay}
              >
                {toggleLabel}
              </div>
            </div>
          </div>
          <div className={style.cardsTitle}>
            {cardsTitle}
          </div>
          <div className={style.cardsWrapper}>
            <CardsGrid {...cards} />
          </div>
        </div>
      </div>
    );
  }
}

Authors.contextTypes = {
  translate: PropTypes.func.isRequired
};

Authors.propTypes = {
  cards: PropTypes.object,
  cardsTitle: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  website: PropTypes.string,
  urlcontent: PropTypes.string,
  urlwebsite: PropTypes.string,
  description: PropTypes.string,
  socialTitle: PropTypes.string,
  sociallinks: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    link: PropTypes.string
  }))
};

export default Authors;
