import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import find from 'lodash/fp/find';
import filter from 'lodash/fp/filter';
import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import identity from 'lodash/fp/identity';
import shallowCompare from '../../util/shallow-compare';
import Slider from '../../molecule/slider';
import Cta from '../../atom/cta';
import Select from '../../atom/select';
import InputSwitch from '../../atom/input-switch';
import Link from '../../atom/link';
import style from './style.css';

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleMouseEnter() {
    this.setState(prevState => ({
      hovered: true
    }));
  }

  handleMouseLeave() {
    this.setState(prevState => ({
      hovered: false
    }));
  }

  render() {
    const {selected, primaryColor, title, handleClick} = this.props;
    const activeColor = this.state.hovered || selected ? {
      color: primaryColor
    } : null;

    return (
      <div
        onClick={handleClick}
        className={style.option}
        style={{
          ...activeColor
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {title}
      </div>
    );
  }
}

class MoocHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSettingsOpen: false,
      isMenuOpen: false
    };

    this.handleSettingsToggle = this.handleSettingsToggle.bind(this);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this._checkOnClose = this._checkOnClose.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    if (this.state.isSettingsOpen) {
      document.addEventListener('click', this._checkOnClose);
      document.addEventListener('touchstart', this._checkOnClose);
    } else {
      document.removeEventListener('click', this._checkOnClose);
      document.removeEventListener('touchstart', this._checkOnClose);
    }
  }

  _checkOnClose(clickEvent) {
    const menu = findDOMNode(this._menuSettings);
    if (menu && !menu.contains(clickEvent.target)) {
      this.handleSettingsToggle();
    }
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
    let settingsView = null;
    let notificationsView = null;

    const primaryColor = getOr('#00B0FF', 'common.primary', skin);

    if (themes) {
      const currentTheme = find({selected: true}, themes);

      const optionsView = themes.map((theme, index) => {
        theme.primaryColor = primaryColor;

        return (
          <Theme key={index}
            {...theme}
          />
        );
      });

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
      const displayedPages = pages.displayed.map((page, index) => {
        const activeColor = page.selected ? {
          color: primaryColor
        } : null;

        return (
          <Link key={index}
            href={page.href}
            className={page.selected ? style.activePage : style.page}
            skinHover
            style={{
              ...activeColor
            }}
          >
            {page.title}
            <span className={style.bar}
              style={{
                backgroundColor: primaryColor
              }}
            />
          </Link>
        );
      });

      const optionsView = pages.more.map((page, index) => {
        const activeColor = page.selected ? {
          color: primaryColor
        } : null;

        return (
          <Link href={page.href}
            key={index}
            className={style.option}
            skinHover
            style={{
              ...activeColor
            }}
          >
            {page.title}
          </Link>
        );
      });

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
      notificationsView = (user.notifications > 0) ? (
        <div className={style.notifications}
          style={{
            backgroundColor: primaryColor
          }}
        >
          {user.notifications}
        </div>
      ) : null;

      userView = (
        <div className={style.user}>
          <div className={style.stats}>
            <Link className={style.stat}
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
            </Link>
            <Link className={style.stat}
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
            </Link>
            <Link className={style.stat}
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
            </Link>
          </div>
          <div className={style.avatarWrapper}>
            <div className={style.avatar}>
              <Link href={user.href}
                className={style.userLink}
              >
                <img src={user.picture} />
              </Link>
            </div>
            {notificationsView}
          </div>
        </div>
      );
    }

    if (settings) {
      settingsView = settings.map((setting, index) => {
        let settingView = null;
        const {options, type, title} = setting;

        switch (type) {
          case 'link': {
            settingView = (
              <div className={style.setting}
                key={index}
              >
                <Link className={style.link}
                  href={options.href}
                  skinHover
                  target={options.target || null}
                >
                  {title}
                </Link>
              </div>
            );
            break;
          }
          case 'select': {
            const selectProps = {};
            selectProps.options = options.values;
            selectProps.title = '';
            selectProps.theme = 'header';
            selectProps.onChange = options.onChange;

            settingView = (
              <div className={style.setting}
                key={index}
              >
                <span className={style.label}>
                  {title}
                </span>
                <Select {...selectProps} />
              </div>
            );
            break;
          }
          case 'switch': {
            const switchProps = {};
            switchProps.value = options.value;
            switchProps.onChange = options.onChange;

            settingView = (
              <div className={style.setting}
                key={index}
              >
                <span className={style.label}>
                  {title}
                </span>
                <InputSwitch {...switchProps} />
              </div>
            );
            break;
          }
        }

        return settingView;
      });
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
              <div className={style.notifWrapper}>
                <img src={logo.srcMobile} />
                {notificationsView}
              </div>
              <div className={this.state.isMenuOpen ? style.caretUp : style.caret} />
            </div>
            <Link className={style.logo}
              href={logo.href}
            >
              <img src={logo.src} />
            </Link>
            {themesView}
          </div>
          <div className={style.menuWrapper}>
            {pagesView}
            {userView || linksView}
            <div className={style.settings} // eslint-disable-next-line no-return-assign
              ref={div => this._menuSettings = div} // eslint-disable-line react/jsx-no-bind
            >
              <div className={style.settingsToggle}
                onClick={this.handleSettingsToggle}
              />
              <div className={this.state.isSettingsOpen ? style.settingsWrapper : style.settingsWrapperHidden}>
                <div className={style.settingsGroup}>
                  {settingsView}
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
      selected: PropTypes.bool,
      counter: PropTypes.number
    })),
    more: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      selected: PropTypes.bool,
      counter: PropTypes.number
    }))
  }),
  links: PropTypes.array,
  user: PropTypes.shape({
    picture: PropTypes.string,
    href: PropTypes.string,
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
    options: PropTypes.shape({
      href: PropTypes.string,
      onChange: PropTypes.func,
      value: PropTypes.bool,
      target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
      values: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        name: PropTypes.string,
        selected: PropTypes.bool
      }))
    })
  })),
  slider: PropTypes.object
};
export default MoocHeader;
