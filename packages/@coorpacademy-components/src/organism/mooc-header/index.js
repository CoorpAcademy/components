import React from 'react';
import PropTypes from 'prop-types';
import {getOr, get, isEmpty} from 'lodash/fp';
import classnames from 'classnames';
import {
  NovaCompositionNavigationBurger as BurgerIcon,
  NovaCompositionNavigationClose as CloseIcon,
  NovaCompositionCoorpacademyPlacesHome24 as HomeIcon
} from '@coorpacademy/nova-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Provider from '../../atom/provider';
import Cta from '../../atom/cta';
import InputSelect from '../../atom/input-select';
import Picture from '../../atom/picture';
import InputSwitch from '../../atom/input-switch';
import Link from '../../atom/link';
import Search from '../../atom/input-search';
import SearchForm from '../../molecule/search-form';
import ButtonMenuAction from '../../molecule/button-menu-action';
import {COLORS} from '../../variables/colors';
import {isMobile as getIsMobile} from '../../util/check-is-mobile';
import style from './style.css';

class MoocHeader extends React.Component {
  static propTypes = {
    logo: PropTypes.shape({
      src: PropTypes.string,
      srcMobile: PropTypes.string,
      href: PropTypes.string,
      'aria-label': PropTypes.string,
      'button-aria-label': PropTypes.string,
      toolTipText: PropTypes.string,
      closeToolTipInformationTextAriaLabel: PropTypes.string
    }),
    search: PropTypes.shape(Search.propTypes),
    'search-reset-aria-label': PropTypes.string,
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
          disabled: PropTypes.bool,
          counter: PropTypes.number,
          'page-count-aria-label': PropTypes.string
        })
      ),
      more: PropTypes.arrayOf(
        PropTypes.shape({
          target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
          title: PropTypes.string,
          name: PropTypes.string,
          href: PropTypes.string,
          selected: PropTypes.bool,
          disabled: PropTypes.bool,
          counter: PropTypes.number
        })
      )
    }),
    links: PropTypes.arrayOf(PropTypes.shape(Cta.propTypes)),
    user: PropTypes.shape({
      picture: PropTypes.string,
      'picture-aria-label': PropTypes.string,
      profileAvatarAlt: PropTypes.string,
      href: PropTypes.string,
      notifications: PropTypes.shape({
        href: PropTypes.string,
        value: PropTypes.number,
        'aria-label': PropTypes.string
      }),
      stats: PropTypes.shape({
        stars: PropTypes.shape({
          href: PropTypes.string,
          label: PropTypes.string,
          'aria-label': PropTypes.string
        }),
        ranking: PropTypes.shape({
          href: PropTypes.string,
          label: PropTypes.string,
          'aria-label': PropTypes.string
        }),
        badge: PropTypes.shape({
          href: PropTypes.string,
          label: PropTypes.string,
          'aria-label': PropTypes.string
        }),
        myList: PropTypes.shape({
          href: PropTypes.string,
          label: PropTypes.string,
          'aria-label': PropTypes.string
        })
      })
    }),
    'settings-aria-label': PropTypes.string,
    'active-page-aria-label': PropTypes.string,
    'group-settings-aria-label': PropTypes.string,
    settings: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.oneOf(['select', 'switch', 'link', 'danger-link']),
        color: PropTypes.string,
        'aria-label': PropTypes.string,
        icon: PropTypes.string,
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
    ),
    onMenuOpen: PropTypes.func,
    onMenuClose: PropTypes.func,
    enableScroll: PropTypes.bool,
    searchIconAriaLabel: PropTypes.string
  };

  static contextTypes = {
    translate: Provider.childContextTypes.translate,
    skin: Provider.childContextTypes.skin
  };

  constructor(props) {
    super(props);
    this.isMobile = getIsMobile(navigator?.userAgent, true); // true = inclure les tablettes
    this.state = {
      isSettingsOpen: false,
      isMenuOpen: false,
      isFocus: false,
      isToolTipOpen: false,
      isClosing: false,
      isClosingStep2: false
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
    this.handleOnMenuOpen = this.handleOnMenuOpen.bind(this);
    this.handleOnMenuClose = this.handleOnMenuClose.bind(this);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSearchKeyDown = this.handleSearchKeyDown.bind(this);
    this.searchBarRef = null;
    this.searchInputRef = null;
    this.setSearchBarRef = this.setSearchBarRef.bind(this);
    this.setSearchInputRef = this.setSearchInputRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
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

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setSearchBarRef(ref) {
    this.searchBarRef = ref;
  }

  setSearchInputRef(ref) {
    this.searchInputRef = ref;
  }

  handleClickOutside(event) {
    const {isFocus} = this.state;
    if (isFocus) {
      if (event.target.getAttribute('data-name') === 'mobile-overlay') {
        return;
      }

      const resetButton =
        event.target.getAttribute('data-name') === 'search-form-reset' ||
        event.target.closest('[data-name="search-form-reset"]');

      if (resetButton) {
        return;
      }

      if (this.searchBarRef && this.searchBarRef.contains(event.target)) {
        return;
      }

      this.handleOnBlur();
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
    const {isMenuOpen} = this.state;
    isMenuOpen ? this.handleOnMenuClose() : this.handleOnMenuOpen();
  }

  handleSubmitSearch() {
    const {onSubmitSearch} = this.props;

    const searchInput = this.searchInputRef || document.querySelector('input[name="search"]');
    if (searchInput) {
      searchInput.blur();
    }

    this.setState({
      isFocus: false,
      isClosing: false,
      isClosingStep2: false
    });
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
    if (this.isMobile) {
      this.setState({
        isFocus: false
      });
    } else {
      this.setState(
        {
          isClosing: true
        },
        () => {
          requestAnimationFrame(() => {
            this.setState({
              isClosing: false,
              isClosingStep2: true
            });
          });
        }
      );
    }
  }

  handleTransitionEnd(event) {
    const {isClosingStep2} = this.state;
    if ((event.propertyName === 'max-width' || event.propertyName === 'width') && isClosingStep2) {
      this.setState({
        isFocus: false,
        isClosing: false,
        isClosingStep2: false
      });
    }
  }

  handleOnMenuOpen() {
    const {onMenuOpen} = this.props;
    if (onMenuOpen) {
      onMenuOpen();
    }
    this.setState(() => ({
      isMenuOpen: true
    }));
  }

  handleOnMenuClose() {
    const {onMenuClose} = this.props;
    if (onMenuClose) {
      onMenuClose();
    }
    this.setState(() => ({
      isMenuOpen: false
    }));
  }

  handleOnMouseOver() {
    this.setState(() => ({
      isToolTipOpen: true
    }));
  }

  handleOnMouseLeave() {
    this.setState(() => ({
      isToolTipOpen: false
    }));
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.setState(() => ({
        isToolTipOpen: true
      }));
    } else if (event.key === 'Tab' || event.key === 'Escape') {
      this.setState(() => ({
        isToolTipOpen: false
      }));
    }
  }

  handleSearchKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleSubmitSearch();
    }
  }

  createMenuButtons = (items, primaryColor) => {
    return items.map(item => ({
      label: item.title,
      disabled: item.disabled,
      type: 'defaultLeft',
      link: {href: item.href},
      'data-name': `item-more-${item.name}`,
      customStyle: {
        padding: '0 16px',
        ...(item.selected && {color: primaryColor})
      },
      customLabelClassName: style.buttonContentLabel
    }));
  };

  render() {
    if (isEmpty(this.props)) return null;

    const {
      logo = {},
      pages: items,
      settings,
      user,
      links,
      search,
      'search-reset-aria-label': searchResetAriaLabel,
      'settings-aria-label': settingsAriaLabel,
      'active-page-aria-label': activePageAriaLabel,
      'group-settings-aria-label': groupAriaLbale,
      searchIconAriaLabel
    } = this.props;
    const {isFocus, isSettingsOpen, isMenuOpen, isToolTipOpen, isClosing, isClosingStep2} =
      this.state;
    const {translate, skin} = this.context;
    const isMobile = this.isMobile;

    const {
      'aria-label': logoAriaLabel,
      closeMenuAriaLabel,
      openMenuAriaLabel,
      toolTipText,
      closeToolTipInformationTextAriaLabel
    } = logo;
    const logoUrl = get('src', logo) || get('images.logo', skin);
    const logoMobileUrl = get('srcMobile', logo) || getOr(logoUrl, 'images.logo-mobile', skin);
    let pagesView = null;
    let linksView = null;
    let userView = null;
    let settingsView = null;
    let notificationsView = null;
    let searchFormView = null;

    const moreAriaLabel = translate('More');
    const primaryColor = get('common.primary', skin);
    const mediumColor = get('common.medium', skin);

    if (items) {
      const displayedPages = items.displayed.map((item, index) => {
        const activeColor = item.selected
          ? {
              color: primaryColor
            }
          : null;
        const {'page-count-aria-label': pageCountAriaLabel} = item;
        const itemLabel = item.selected ? `${item.title}. ${activePageAriaLabel}` : item.title;
        const pageBadge =
          item.counter > 0 ? (
            <Link
              href={item.href}
              data-name="item-badge"
              disabled={item.disabled}
              className={classnames(
                style.itemBadge,
                item.selected && style.activePage,
                item.disabled && style.disabled
              )}
              aria-label={pageCountAriaLabel}
            >
              <span className={style.counter}>{item.counter > 99 ? '99+' : item.counter}</span>
            </Link>
          ) : null;

        const {name: itemName = index} = item;

        return (
          <Link
            key={itemName}
            data-name={`item-${itemName}`}
            href={item.href}
            disabled={item.disabled}
            className={classnames(
              style.item,
              item.disabled && item.selected && style.activePage,
              item.disabled && style.disabled
            )}
            hoverColor={item.disabled ? '' : getOr(COLORS.brand, 'common.primary', skin)}
            onClick={this.handleLinkClick}
            target={item.target || null}
            aria-label={itemLabel}
            style={{
              ...activeColor
            }}
          >
            {item.title}
            {pageBadge}
            <span
              className={style.bar}
              style={{
                backgroundColor: primaryColor
              }}
            />
          </Link>
        );
      });

      const optionsView = items.more.map((item, index) => {
        const activeColor = item.selected
          ? {
              color: primaryColor
            }
          : null;
        const itemLabel = item.selected ? `${item.title}. ${activePageAriaLabel}` : item.title;
        const {name: itemName = index} = item;
        return (
          <Link
            href={item.href}
            key={itemName}
            disabled={item.disabled}
            className={classnames(style.option, item.disabled && style.disabled)}
            data-name={`item-more-${itemName}`}
            target={item.target || null}
            aria-label={itemLabel}
            onClick={this.handleLinkClick}
            hoverColor={item.disabled ? '' : getOr(COLORS.brand, 'common.primary', skin)}
            style={{
              ...activeColor
            }}
          >
            {item.title}
            <span
              className={style.line}
              style={{
                backgroundColor: primaryColor
              }}
            />
          </Link>
        );
      });
      pagesView = (
        <div className={search.value || isFocus ? style.noItems : style.items}>
          {displayedPages}
          {items.more &&
            (isMobile ? (
              <div className={style.tabletOnlyMoreMenu}>
                <div className={style.optionsGroup}>{optionsView}</div>
              </div>
            ) : (
              <div className={style.desktopOnlyMoreMenu}>
                <ButtonMenuAction
                  button={{
                    label: moreAriaLabel,
                    'aria-label': moreAriaLabel,
                    'data-name': 'item-more'
                  }}
                  type="link"
                  primaryColor={primaryColor}
                  containerCustom={{alignItems: 'flex-start'}}
                  closeOnClick
                  enableScroll
                  menuWrapper={{
                    customStyle: {
                      top: '30px',
                      maxWidth: 360
                    }
                  }}
                  menu={{
                    buttons: this.createMenuButtons(items.more, primaryColor)
                  }}
                  showFade
                />
              </div>
            ))}
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
      const notificationsAriaLabel = getOr('', 'notifications.aria-label', user);

      notificationsView =
        nbNotifications > 0 ? (
          <Link
            href={user.notifications.href}
            data-name="user-notifications"
            className={style.notifications}
          >
            {nbNotifications > 99 ? '99+' : nbNotifications}
          </Link>
        ) : null;
      const notificationPageView = (
        <Link
          className={classnames(style.notification, nbNotifications > 0 ? style.active : null)}
          data-name="stat-notifications"
          href={user.notifications.href}
          aria-label={notificationsAriaLabel}
        >
          <FontAwesomeIcon
            icon="bell"
            style={{color: nbNotifications > 0 ? COLORS.negative_700 : COLORS.neutral_500}}
          />
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
              aria-label={user.stats.stars['aria-label']}
            >
              <div>
                <FontAwesomeIcon
                  icon="star"
                  style={{color: COLORS.yellow_500}}
                  className={style.stars}
                />
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
              aria-label={user.stats.ranking['aria-label']}
            >
              <div>
                <FontAwesomeIcon
                  icon="ranking-star"
                  className={style.ranking}
                  style={{color: primaryColor}}
                />
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
              aria-label={user.stats.badge['aria-label']}
            >
              <div>
                <FontAwesomeIcon
                  icon="trophy"
                  className={style.badge}
                  style={{color: COLORS.neutral_400}}
                />
              </div>
              <div className={style.label}>{user.stats.badge.label}</div>
            </Link>
            <Link
              className={style.stat}
              data-name="stat-my-list"
              href={user.stats.myList.href}
              onClick={this.handleLinkClick}
              aria-label={user.stats.myList['aria-label']}
            >
              <div>
                <FontAwesomeIcon
                  icon="list-check"
                  className={style.icon}
                  style={{color: COLORS.purple_500}}
                />
              </div>
              <div className={style.label}>{user.stats.myList.label}</div>
            </Link>
          </div>
          <div className={style.avatarWrapper}>{notificationPageView}</div>
        </div>
      );
    }
    if (settings) {
      const settingsElements = settings.map((setting, index) => {
        let settingView = null;
        const {
          options,
          type,
          title,
          name: settingName = index,
          'aria-label': ariaLabel,
          icon,
          disabled = false
        } = setting;

        switch (type) {
          case 'link':
          case 'danger-link': {
            const iconView =
              icon && !isMobile ? <FontAwesomeIcon icon={icon} className={style.linkIcon} /> : null;
            settingView = (
              <div
                data-name={`setting-${settingName}`}
                className={classnames(style.setting, disabled && style.disabled)}
                key={settingName}
              >
                <Link
                  className={style.settingLink}
                  href={options.href}
                  onClick={this.handleLinkClick}
                  target={options.target || null}
                  aria-label={ariaLabel || title}
                >
                  {iconView}
                  {title}
                </Link>
              </div>
            );
            break;
          }
          case 'select': {
            const selectProps = {
              options: options.values.map(opt => ({
                value: opt.value,
                label: opt.name,
                'data-name': `setting-${settingName}-option-${opt.value}`
              })),
              value: options.values.find(opt => opt.selected)?.value,
              onChange: options.onChange,
              placeholder: title,
              'aria-label': ariaLabel || title,
              'button-data-testid': `setting-${settingName}-button`
            };
            settingView = (
              <div
                data-name={`setting-${settingName}`}
                className={classnames(style.setting, style.selectBoxes)}
                key={settingName}
              >
                <InputSelect {...selectProps} />
              </div>
            );
            break;
          }
          case 'switch': {
            const switchProps = {
              value: options.value,
              id: `input-switch-${index}`,
              onChange: options.onChange,
              titlePosition: 'left',
              theme: 'newMooc',
              type: 'switch',
              title,
              icon
            };
            settingView = (
              <div
                data-name={`setting-${settingName}`}
                className={classnames(style.setting, disabled && style.disabled)}
                key={settingName}
                aria-label={ariaLabel || title}
              >
                <InputSwitch {...switchProps} aria-labelledby={`title-id-${settingName}`} />
              </div>
            );
            break;
          }
        }

        return settingView;
      });

      settingsView = (
        <div className={style.settings} ref={this.setMenuSettings}>
          <div
            data-name="user-avatar-wrapper"
            className={classnames(style.userAvatarWrapper, isSettingsOpen && style.userAvatarOpen)}
          >
            <Link
              className={classnames(style.userLinkAvatar)}
              onClick={this.handleSettingsToggle}
              aria-expanded={isSettingsOpen}
              aria-label={settingsAriaLabel}
              aria-haspopup="true"
              role="button"
            >
              <Picture
                className={style.avatar}
                src={user && user.picture}
                alt={user && user.profileAvatarAlt}
              />
            </Link>
          </div>
          <div className={isSettingsOpen ? style.settingsWrapper : style.settingsWrapperHidden}>
            <div
              data-name="settings"
              className={style.settingsGroup}
              role="group"
              aria-label={groupAriaLbale}
            >
              {settingsElements}
            </div>
          </div>
        </div>
      );
    }

    if (search) {
      searchFormView = (
        <div
          data-name="Search-Bar"
          className={isMenuOpen && !this.isMobile ? style.hiddenSearchBar : style.searchBar}
        >
          <SearchForm
            search={search}
            onSubmit={this.handleSubmitSearch}
            onReset={this.handleResetSearch}
            onSearchFocus={this.handleOnFocus}
            onSearchBlur={this.handleOnBlur}
            onSearchKeyDown={this.handleSearchKeyDown}
            inputRef={this.setSearchInputRef}
            search-reset-aria-label={searchResetAriaLabel}
            theme="mooc"
            searchIconAriaLabel={searchIconAriaLabel}
          />
        </div>
      );
    }

    return (
      <header className={style.wrapper}>
        <div
          data-name="moocHeader"
          data-open={isMenuOpen}
          className={isMenuOpen ? style.open : style.header}
        >
          <div
            className={classnames(
              style.logoWrapper,
              this.isMobile && isFocus && style.logoWrapperMobileHidden
            )}
            aria-label={toolTipText}
            onMouseOver={this.handleOnMouseOver}
            onMouseLeave={this.handleOnMouseLeave}
          >
            <div className={style.navMobile} data-name="nav-mobile">
              <BurgerIcon
                role="button"
                data-name="nav-mobile-open"
                style={{color: mediumColor}}
                className={isMenuOpen ? style.burgerHidden : style.burger}
                onClick={this.handleOnMenuOpen}
                aria-label={openMenuAriaLabel}
              />
              <CloseIcon
                data-name="nav-mobile-close"
                style={{color: mediumColor}}
                className={isMenuOpen ? style.close : style.closeHidden}
                onClick={this.handleOnMenuClose}
                aria-label={closeMenuAriaLabel}
              />
              <Link data-name="logo-mobile" href={logo.href}>
                <Picture src={logoMobileUrl} alt={logoAriaLabel} />
              </Link>
            </div>
            <Link
              className={style.logo}
              data-name="logo"
              id="logo"
              href={logo.href}
              onKeyDown={this.handleKeyPress}
              tabIndex={0}
              data-testid="brand-logo"
            >
              <Picture src={logoUrl} alt={logoAriaLabel} />
              {isToolTipOpen ? (
                <div aria-label={toolTipText} tabIndex={0} data-testid="home-tooltip">
                  <div
                    aria-label={`${toolTipText} ${closeToolTipInformationTextAriaLabel}`}
                    role="tooltip"
                    className={style.tooltipIconContainer}
                    tabIndex={0}
                  >
                    <HomeIcon className={style.homeIcon} style={{color: primaryColor}} />
                    <p
                      className={style.toolTipText}
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{__html: toolTipText}}
                      style={{color: primaryColor}}
                    />
                  </div>
                </div>
              ) : null}
            </Link>
          </div>
          {this.isMobile ? (
            <>
              <div
                className={isFocus ? style.mobileSearchContainerFocus : style.mobileSearchContainer}
                ref={this.setSearchBarRef}
              >
                {searchFormView}
              </div>
              {isFocus ? (
                <div
                  className={style.mobileSearchOverlay}
                  onClick={this.handleOnBlur}
                  data-name="mobile-overlay"
                />
              ) : null}
              <nav
                className={isMenuOpen ? style.menuWrapper : style.hiddenMenuWrapper}
                data-name="menu-wrapper"
              >
                {pagesView}
                {userView || linksView}
                {settingsView}
              </nav>
            </>
          ) : (
            <div
              className={classnames(
                {[style.rightZone]: !isFocus && !isClosing && !isClosingStep2},
                {[style.rightZoneFocus]: isFocus || isClosing || isClosingStep2},
                {[style.searchBarActive]: isFocus || isClosing || isClosingStep2}
              )}
            >
              <div
                className={classnames(style.floatingSearchBar, {
                  [style['floatingSearchBar--expanded']]: isFocus && !isClosing && !isClosingStep2,
                  [style['floatingSearchBar--closing']]: isClosing
                })}
                ref={this.setSearchBarRef}
                onTransitionEnd={this.handleTransitionEnd}
              >
                {searchFormView}
              </div>
              {isFocus || isClosing || isClosingStep2 ? (
                <div className={style.searchOverlay} onClick={this.handleOnBlur} />
              ) : null}
              <nav
                className={isMenuOpen ? style.menuWrapper : style.hiddenMenuWrapper}
                data-name="menu-wrapper"
              >
                {pagesView}
                {userView || linksView}
                {settingsView}
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default MoocHeader;
