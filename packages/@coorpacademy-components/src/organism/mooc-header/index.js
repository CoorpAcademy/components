import React, {PropTypes} from 'react';
import find from 'lodash/fp/find';
import filter from 'lodash/fp/filter';
import getOr from 'lodash/fp/getOr';
import map from 'lodash/fp/map';
import identity from 'lodash/fp/identity';
import shallowCompare from '../../util/shallow-compare';
import Slider from '../../molecule/slider';
import Cta from '../../atom/cta';
import style from './style.css';

class MoocHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSettingsOpen: false,
      isMenuOpen: true
    };

    this.handleSettingsToggle = this.handleSettingsToggle.bind(this);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleSettingsToggle() {
    this.setState(prevState => ({
      isSettingsOpen: !prevState.isSettingsOpen
    }));
  }

  handleMenuToggle() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  render() {
    const {logo, themes, pages, settings, user, slider, links} = this.props;
    const {translate = identity, skin} = this.context;

    let themesView = null;
    let pagesView = null;
    let linksView = null;
    let userView = null;

    const primaryColor = getOr('#00B0FF', 'common.primary', skin);

    if (themes) {
      const currentTheme = find({selected: true}, themes);

      const optionsView = filter({selected: false}, themes).map((theme, index) => (
        <div
          key={index}
          onClick={theme.handleClick}
          className={style.option}
        >
          {theme.title}
        </div>
      ));

      themesView = (
        <div className={style.themes}>
          <div className={style.currentOption}>{currentTheme.title}<span className={style.caret} /></div>
          <div className={style.optionsGroup}>
            {optionsView}
          </div>
        </div>
      );
    }

    if (pages) {
      const displayedPages = pages.displayed.map((page, index) => (
        <a key={index}
          href={page.href}
          className={page.selected ? style.activePage : style.page}
        >
          {page.title}<span className={style.bar} />
        </a>
      ));

      const optionsView = pages.more.map((page, index) => (
        <a href={page.href}
          key={index}
          className={style.option}
        >
          {page.title}
        </a>
      ));

      pagesView = (
        <div className={style.pages}>
          {displayedPages}
          <div className={style.more}>
            <div className={style.currentOption}>More<span className={style.caret} /></div>
            <div className={style.optionsGroup}>
              {optionsView}
            </div>
          </div>
        </div>
      );
    }

    if (links) {
      const ctas = links.map((cta, index) => {
        return (
          <Cta key={index}
            {...cta}
          />
        );
      });

      linksView = (
        <div className={style.links}>
          {ctas}
        </div>
      );
    }

    if (user) {
      userView = (
        <div className={style.user}>
          <div className={style.stats}>
            <a className={style.stat}
              href={user.stats.stars.href}
            >
              <div className={style.stars}
                style={{
                  backgroundColor: primaryColor
                }}
              />
              <div className={style.label}>
                {user.stats.stars.label}
              </div>
            </a>
            <a className={style.stat}
              href={user.stats.ranking.href}
            >
              <div className={style.ranking}
                style={{
                  backgroundColor: primaryColor
                }}
              />
              <div className={style.label}>
                {user.stats.ranking.label}
              </div>
            </a>
            <a className={style.stat}
              href={user.stats.badge.href}
            >
              <div className={style.badge}
                style={{
                  backgroundColor: primaryColor
                }}
              />
              <div className={style.label}>
                {user.stats.badge.label}
              </div>
            </a>
          </div>
          <div className={style.avatar}>
            <a href={user.link}>
              <img src={user.picture} />
            </a>
          </div>
          <div className={style.notifications}
            style={{
              backgroundColor: primaryColor
            }}
          >
            {user.notifications}
          </div>
        </div>
      );
    }

    const sliderView = slider ? (
      <div className={style.slider}>
        <Slider {...slider} />
      </div>
    ) : null;

    return (
      <div className={style.wrapper}>
        <div className={this.state.isMenuOpen ? style.open : style.header}>
          <div className={style.logoWrapper}>
            <div className={style.logoMobile}
              onClick={this.handleMenuToggle}
            >
              <img src={logo.srcMobile} />
              <div className={this.state.isMenuOpen ? style.caretUp : style.caret} />
            </div>
            <a className={style.logo}
              href={logo.href}
            >
              <img src={logo.src} />
            </a>
            {themesView}
          </div>
          <div className={style.menuWrapper}>
            {pagesView}
            {userView || linksView}
            <div className={style.settings}>
              <div className={style.settingsToggle}
                onClick={this.handleSettingsToggle}
              />
              <div className={this.state.isSettingsOpen ? style.settingsWrapper : style.settingsWrapperHidden}>
                <div className={style.settingsGroup}>
                  <div className={style.setting}>
                    <div className={style.label}>Langue</div>
                  </div>
                </div>
                <div className={style.closeSettings}
                  onClick={this.handleSettingsToggle}
                >
                  Fermer
                </div>
              </div>
            </div>
          </div>
        </div>
        {sliderView}
      </div>
    );
  }
}

MoocHeader.contextTypes = {
  skin: React.PropTypes.object,
  translate: React.PropTypes.func
};

MoocHeader.propTypes = {
  logo: PropTypes.shape({
    src: PropTypes.string,
    href: PropTypes.string
  }),
  themes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    handleClick: PropTypes.func,
    selected: PropTypes.bool
  })),
  pages: PropTypes.shape({
    displayed: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      selected: PropTypes.bool
    })),
    more: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      selected: PropTypes.bool
    }))
  }),
  links: PropTypes.array,
  user: PropTypes.shape({
    picture: PropTypes.string,
    link: PropTypes.string,
    notifications: PropTypes.number,
    stats: PropTypes.shape({
      stars: PropTypes.shape({
        href: PropTypes.string,
        label: PropTypes.string
      }),
      ranking: PropTypes.shape({
        href: PropTypes.string,
        label: PropTypes.string
      }),
      badge: PropTypes.shape({
        href: PropTypes.string,
        label: PropTypes.string
      })
    })
  }),
  settings: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.oneOf(['select', 'switch', 'link']),
    options: PropTypes.object,
    onClick: PropTypes.func
  })),
  slider: PropTypes.object
};
export default MoocHeader;
