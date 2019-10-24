import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';
import isEmpty from 'lodash/fp/isEmpty';
import {
  NovaCompositionNavigationArrowDown as ArrowDown,
  NovaCompositionCoorpacademyStar as StarIcon,
  NovaCompositionCoorpacademyCharts as ChartsIcon,
  NovaSolidVoteRewardsRewardsTrophy5 as TrophyIcon,
  NovaCompositionCoorpacademyCog as CogIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import Cta from '../../atom/cta';
import Select from '../../atom/select';
import Picture from '../../atom/picture';
import InputSwitch from '../../atom/input-switch';
import Link from '../../atom/link';
import Search from '../../molecule/search';
import SearchForm from '../../molecule/search-form';
import style from './style.css';

class MoocHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSettingsOpen: false,
      isMenuOpen: false,
      isFocus: false
    };

    this.handleSettingsToggle = this.handleSettingsToggle.bind(this);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this._checkOnClose = this._checkOnClose.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.setMenuSettings = this.setMenuSettings.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleResetSearch = this.handleResetSearch.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
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

  setMenuSettings(el) {
    this.menuSettings = el;
  }

  _checkOnClose(clickEvent) {
    if (this.state.isSettingsOpen) {
      const menu = this.menuSettings;
      if (menu && !menu.contains(clickEvent.target)) {
        this.handleSettingsToggle();
      }
    }
  }

  handleLinkClick() {
    this.state.isMenuOpen && this.handleMenuToggle();
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

  handleSubmitSearch() {
    if (this.props.onSubmitSearch) {
      this.props.onSubmitSearch();
    }
  }

  handleResetSearch() {
    if (this.props.onResetSearch) {
      this.props.onResetSearch();
    }
  }

  handleOnFocus() {
    this.setState(prevState => ({
      isFocus: true
    }));
  }

  handleOnBlur() {
    this.setState(prevState => ({
      isFocus: false
    }));
  }

  render() {
    const {logo = {}, pages, settings, user, slider, links, search} = this.props;
    if (isEmpty(this.props)) return null;
    const {translate, skin} = this.context;

    const logoUrl = get('src', logo) || get('images.logo', skin);
    const logoMobileUrl = get('srcMobile', logo) || getOr(logoUrl, 'images.logo-mobile', skin);

    let pagesView = null;
    let linksView = null;
    let userView = null;
    let settingsView = null;
    let notificationsView = null;
    let searchFormView = null;

    const moreLabel = translate('More');
    const closeLabel = translate('Close');
    const primaryColor = get('common.primary', skin);
    const mediumColor = get('common.medium', skin);
    const darkColor = get('common.dark', skin);
    const white = get('common.white', skin);
    const iconWrapperStyle = {backgroundColor: primaryColor};

    if (pages) {
      const displayedPages = pages.displayed.map((page, index) => {
        const activeColor = page.selected
          ? {
              color: primaryColor
            }
          : null;

        const battlesView =
          page.counter > 0 ? <div className={style.battlesCounter}>{page.counter}</div> : null;

        const {name: pageName = index} = page;

        return (
          <Link
            key={pageName}
            data-name={`page-${pageName}`}
            href={page.href}
            className={page.selected ? style.activePage : style.page}
            skinHover
            onClick={this.handleLinkClick}
            target={page.target || null}
            style={{
              ...activeColor
            }}
          >
            {page.title}
            {battlesView}
            <span
              className={style.bar}
              style={{
                backgroundColor: primaryColor
              }}
            />
          </Link>
        );
      });

      const optionsView = pages.more.map((page, index) => {
        const activeColor = page.selected
          ? {
              color: primaryColor
            }
          : null;

        const {name: pageName = index} = page;

        return (
          <Link
            href={page.href}
            key={pageName}
            className={style.option}
            data-name={`page-more-${pageName}`}
            target={page.target || null}
            onClick={this.handleLinkClick}
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
        <div
          className={this.props.search.value || this.state.isFocus ? style.noPages : style.pages}
        >
          {displayedPages}
          <div className={style.more}>
            <div className={style.currentOption} aria-haspopup="true" data-name="page-more">
              {moreLabel}
              <ArrowDown color={mediumColor} className={style.caret} />
            </div>
            <div className={style.optionsGroup}>{optionsView}</div>
          </div>
        </div>
      );
    }

    if (links) {
      const ctas = links.map((cta, index) => {
        return <Cta key={index} {...cta} />;
      });

      linksView = <div className={style.links}>{ctas}</div>;
    }

    if (user) {
      notificationsView =
        user.notifications && user.notifications.value > 0 ? (
          <Link
            href={user.notifications.href}
            data-name="user-notifications"
            className={style.notifications}
            style={{
              backgroundColor: primaryColor
            }}
          >
            {user.notifications.value}
          </Link>
        ) : null;

      userView = (
        <div className={style.user}>
          <div className={style.stats}>
            <Link
              className={style.stat}
              data-name="stat-stars"
              href={user.stats.stars.href}
              onClick={this.handleLinkClick}
            >
              <div className={style.iconWrapper} style={iconWrapperStyle}>
                <StarIcon className={style.stars} color={white} />
              </div>
              <div data-name="value" className={style.label}>
                {user.stats.stars.label}
              </div>
            </Link>
            <Link
              className={style.stat}
              data-name="stat-ranking"
              href={user.stats.ranking.href}
              onClick={this.handleLinkClick}
            >
              <div className={style.iconWrapper} style={iconWrapperStyle}>
                <ChartsIcon className={style.ranking} color={white} />
              </div>

              <div data-name="value" className={style.label}>
                {user.stats.ranking.label}
              </div>
            </Link>
            <Link
              className={style.stat}
              data-name="stat-badge"
              href={user.stats.badge.href}
              onClick={this.handleLinkClick}
            >
              <div className={style.iconWrapper} style={iconWrapperStyle}>
                <TrophyIcon className={style.badge} color={white} />
              </div>
              <div className={style.label}>{user.stats.badge.label}</div>
            </Link>
          </div>
          <div className={style.avatarWrapper}>
            <div className={style.avatar} data-name="user-avatar">
              <Link href={user.href} className={style.userLink} onClick={this.handleLinkClick}>
                <Picture src={user.picture} />
              </Link>
            </div>
            {notificationsView}
          </div>
        </div>
      );
    }

    if (settings) {
      const settingsElements = settings.map((setting, index) => {
        let settingView = null;
        const {options, type, title, name: settingName = index} = setting;

        switch (type) {
          case 'link': {
            settingView = (
              <div data-name={`setting-${settingName}`} className={style.setting} key={settingName}>
                <Link
                  className={style.link}
                  href={options.href}
                  skinHover
                  onClick={this.handleLinkClick}
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
              <div data-name={`setting-${settingName}`} className={style.setting} key={settingName}>
                <span className={style.label}>{title}</span>
                <Select {...selectProps} />
              </div>
            );
            break;
          }
          case 'switch': {
            const switchProps = {};
            switchProps.value = options.value;
            switchProps.id = `input-switch-${index}`;
            switchProps.onChange = options.onChange;

            settingView = (
              <div data-name={`setting-${settingName}`} className={style.setting} key={settingName}>
                <span className={style.label}>{title}</span>
                <InputSwitch {...switchProps} />
              </div>
            );
            break;
          }
        }

        return settingView;
      });

      settingsView = (
        <div className={style.settings} ref={this.setMenuSettings}>
          <CogIcon
            data-name="settings-toggle"
            color={darkColor}
            className={style.settingsToggle}
            onClick={this.handleSettingsToggle}
          />
          <div
            className={
              this.state.isSettingsOpen ? style.settingsWrapper : style.settingsWrapperHidden
            }
          >
            <div data-name="settings" className={style.settingsGroup}>
              {settingsElements}
            </div>
            <div className={style.closeSettings} onClick={this.handleSettingsToggle}>
              {closeLabel}
            </div>
          </div>
        </div>
      );
    }

    if (search) {
      searchFormView = (
        <SearchForm
          search={search}
          onSubmit={this.handleSubmitSearch}
          onReset={this.handleResetSearch}
          onSearchFocus={this.handleOnFocus}
          onSearchBlur={this.handleOnBlur}
        />
      );
    }

    return (
      <div className={style.wrapper}>
        <div
          data-name="moocHeader"
          data-open={this.state.isMenuOpen}
          className={this.state.isMenuOpen ? style.open : style.header}
        >
          <div className={style.logoWrapper}>
            <div
              className={style.logoMobile}
              data-name="logo-mobile"
              onClick={this.handleMenuToggle}
            >
              <Picture src={logoMobileUrl} />
              {notificationsView}
              <ArrowDown
                color={mediumColor}
                className={this.state.isMenuOpen ? style.caretUp : style.caret}
              />
            </div>
            <Link className={style.logo} data-name="logo" href={logo.href}>
              <Picture src={logoUrl} />
            </Link>
          </div>
          <div data-name="Search-Bar" className={style.searchBar}>
            {searchFormView}
          </div>
          <div className={style.menuWrapper}>
            {pagesView}
            {userView || linksView}
            {settingsView}
          </div>
        </div>
      </div>
    );
  }
}

MoocHeader.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

MoocHeader.propTypes = {
  logo: PropTypes.shape({
    src: PropTypes.string,
    srcMobile: PropTypes.string,
    href: PropTypes.string
  }),
  search: PropTypes.shape(Search.propTypes),
  onSubmitSearch: PropTypes.func,
  onResetSearch: PropTypes.func,
  pages: PropTypes.shape({
    displayed: PropTypes.arrayOf(
      PropTypes.shape({
        target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
        title: PropTypes.string,
        name: PropTypes.string,
        href: PropTypes.string,
        selected: PropTypes.bool,
        counter: PropTypes.number
      })
    ),
    more: PropTypes.arrayOf(
      PropTypes.shape({
        target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
        title: PropTypes.string,
        name: PropTypes.string,
        href: PropTypes.string,
        selected: PropTypes.bool,
        counter: PropTypes.number
      })
    )
  }),
  links: PropTypes.arrayOf(PropTypes.shape(Cta.propTypes)),
  user: PropTypes.shape({
    picture: PropTypes.string,
    href: PropTypes.string,
    notifications: PropTypes.shape({
      href: PropTypes.string,
      value: PropTypes.number
    }),
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
  settings: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.oneOf(['select', 'switch', 'link']),
      options: PropTypes.shape({
        href: PropTypes.string,
        onChange: PropTypes.func,
        value: PropTypes.bool,
        target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
        values: PropTypes.arrayOf(
          PropTypes.shape({
            value: PropTypes.string,
            name: PropTypes.string,
            selected: PropTypes.bool
          })
        )
      })
    })
  )
};
export default MoocHeader;
