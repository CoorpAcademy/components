import React, {PropTypes} from 'react';
import find from 'lodash/fp/find';
import filter from 'lodash/fp/filter';
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
      isSettingsOpen: false
    };

    this.handleSettingsToggle = this.handleSettingsToggle.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleSettingsToggle() {
    this.setState(prevState => ({
      isSettingsOpen: !prevState.isSettingsOpen
    }));
  }

  render() {
    const {logo, themes, pages, settings, user, slider, links} = this.props;
    const {translate = identity} = this.context;

    let themesView = null;
    let pagesView = null;
    let linksView = null;

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

    const sliderView = slider ? (
      <div className={style.slider}>
        <Slider {...slider} />
      </div>
    ) : null;

    return (
      <div className={style.wrapper}>
        <div className={style.header}>
          <div className={style.logoWrapper}>
            <a className={style.logo}
              href={logo.href}
            >
              <img src={logo.src} />
            </a>
            {themesView}
          </div>
          <div className={style.menuWrapper}>
            {pagesView}
            {linksView}
            <div className={style.settings}>
              <div className={style.settingsToggle}
                onClick={this.handleSettingsToggle}
              />
              <div className={this.state.isSettingsOpen ? style.settingsWrapper : style.none}>
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
  settings: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.oneOf(['select', 'switch', 'link']),
    options: PropTypes.object,
    onClick: PropTypes.func
  })),
  slider: PropTypes.object
};
export default MoocHeader;
