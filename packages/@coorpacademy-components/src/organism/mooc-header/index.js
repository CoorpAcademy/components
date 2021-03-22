import React from 'react';
import PropTypes from 'prop-types';
import {getOr, get, isEmpty} from 'lodash/fp';
import classnames from 'classnames';
import {
  NovaCompositionNavigationArrowDown as ArrowDown,
  NovaCompositionCoorpacademyStar as StarIcon,
  NovaCompositionCoorpacademyCharts as ChartsIcon,
  NovaSolidVoteRewardsRewardsTrophy5 as TrophyIcon,
  NovaCompositionCoorpacademyCog as CogIcon,
  NovaSolidTimeAlarm as AlarmIcon
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
  static propTypes = {
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
        color: PropTypes.string,
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

  static contextTypes = {
    translate: Provider.childContextTypes.translate,
    skin: Provider.childContextTypes.skin
  };

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
    const {isSettingsOpen} = this.state;
    if (isSettingsOpen) {
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
    const {isSettingsOpen} = this.state;
    if (isSettingsOpen) {
      const menu = this.menuSettings;
      if (menu && !menu.contains(clickEvent.target)) {
        this.handleSettingsToggle();
      }
    }
  }

  handleLinkClick() {
    const {isMenuOpen} = this.state;
    isMenuOpen && this.handleMenuToggle();
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
    const {onSubmitSearch} = this.props;
    if (onSubmitSearch) {
      onSubmitSearch();
    }
  }

  handleResetSearch() {
    const {onResetSearch} = this.props;
    if (onResetSearch) {
      onResetSearch();
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
    if (isEmpty(this.props)) return null;
    const {logo = {}, pages, settings, user, links, search} = this.props;
    const {isFocus, isSettingsOpen, isMenuOpen} = this.state;
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
        <div className={search.value || isFocus ? style.noPages : style.pages}>
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
        return (
          <Cta {...cta} key={index} className={index + 1 === links.length ? null : style.ctaLink} />
        );
      });

      linksView = <div className={style.links}>{ctas}</div>;
    }

    if (user) {
      const nbNotifications = getOr(0, 'notifications.value', user);
      notificationsView =
        nbNotifications > 0 ? (
          <Link
            href={user.notifications.href}
            data-name="user-notifications"
            className={style.notifications}
          >
            {nbNotifications}
          </Link>
        ) : null;
      const notificationPageView = (
        <Link
          className={classnames(style.notification, nbNotifications > 0 ? style.active : null)}
          data-name="stat-notifications"
          href={user.notifications.href}
        >
          <div>
            <AlarmIcon width={16} height={16} />
          </div>
          {notificationsView}
        </Link>
      );
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
            {notificationPageView}
            <div className={style.avatar} data-name="user-avatar">
              <Link href={user.href} className={style.userLink} onClick={this.handleLinkClick}>
                <Picture src={user.picture} />
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (settings) {
      const settingsElements = settings.map((setting, index) => {
        let settingView = null;
        const {options, type, title, name: settingName = index, color, hoverColor} = setting;

        switch (type) {
          case 'link': {
            settingView = (
              <div data-name={`setting-${settingName}`} className={style.setting} key={settingName}>
                <Link
                  className={style.link}
                  href={options.href}
                  skinHover
                  hoverColor={hoverColor}
                  onClick={this.handleLinkClick}
                  target={options.target || null}
                  style={{
                    color
                  }}
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
          <div className={isSettingsOpen ? style.settingsWrapper : style.settingsWrapperHidden}>
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
        <div data-name="Search-Bar" className={style.searchBar}>
          <SearchForm
            search={search}
            onSubmit={this.handleSubmitSearch}
            onReset={this.handleResetSearch}
            onSearchFocus={this.handleOnFocus}
            onSearchBlur={this.handleOnBlur}
          />
        </div>
      );
    }

    return (
      <div className={style.wrapper}>
        <div
          data-name="moocHeader"
          data-open={isMenuOpen}
          className={isMenuOpen ? style.open : style.header}
        >
          <div className={style.logoWrapper}>
            <div
              className={style.logoMobile}
              data-name="logo-mobile"
              onClick={this.handleMenuToggle}
            >
              <Picture src={logoMobileUrl} />
              {notificationsView}
              <ArrowDown color={mediumColor} className={isMenuOpen ? style.caretUp : style.caret} />
            </div>
            <Link className={style.logo} data-name="logo" href={logo.href}>
              <Picture src={logoUrl} />
            </Link>
          </div>
          {searchFormView}
          <div className={style.menuWrapper} data-name="menu-wrapper">
            {pagesView}
            {userView || linksView}
            {settingsView}
          </div>
        </div>
      </div>
    );
  }
}

export default MoocHeader;
