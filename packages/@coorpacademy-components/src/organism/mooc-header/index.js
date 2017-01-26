import React, {PropTypes} from 'react';
import find from 'lodash/fp/find';
import filter from 'lodash/fp/filter';
import map from 'lodash/fp/map';
import identity from 'lodash/fp/identity';
import shallowCompare from '../../util/shallow-compare';
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
    const {logo, themes, pages, settings, user} = this.props;
    const {translate = identity} = this.context;

    let themesView = null;
    let pagesView = null;

    if (themes) {
      const currentTheme = find({selected: true}, themes);

      const optionsView = filter({selected: false}, themes).map((theme, index) => (
        <a href={theme.href}
          key={index}
          className={style.option}
        >
          {theme.title}
        </a>
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
        <div key={index}
          className={style.page}
        >
          {page.title}<span className={style.bar} />
        </div>
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
            <div className={style.links}>
              <div className={style.link}>Connexion<div className={style.fill} /></div>
              <div className={style.link}>Inscription<div className={style.fill} /></div>
            </div>
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
    href: PropTypes.string,
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
  settings: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.oneOf(['select', 'switch', 'link']),
    options: PropTypes.object,
    onClick: PropTypes.func
  }))
};
export default MoocHeader;
