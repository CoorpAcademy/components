import React from 'react';
import {convert} from 'css-color-function';
import PropTypes from 'prop-types';
import {get, noop} from 'lodash/fp';
import classnames from 'classnames';
import {NovaCompositionCoorpacademyLogout as LogoutIcon} from '@coorpacademy/nova-icons';
import Provider from '../provider';
import Link from '../link';
import style from './style.css';

class CTA extends React.Component {
  static propTypes = {
    submitValue: Link.propTypes.children,
    href: Link.propTypes.href,
    onClick: Link.propTypes.onClick,
    target: Link.propTypes.target,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    light: PropTypes.bool,
    secondary: PropTypes.bool,
    small: PropTypes.bool,
    className: PropTypes.string,
    logout: PropTypes.bool
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    return this.setState({
      hovered: true
    });
  }

  handleMouseLeave() {
    return this.setState({
      hovered: false
    });
  }

  getStyle() {
    const {skin} = this.context;
    const {hovered} = this.state;
    const {disabled = false, light = false, secondary = false, logout = false} = this.props;
    const color = get('common.primary', skin);
    const grey = get('common.grey', skin);

    if (logout)
      return;

    if (disabled) {
      return {
        backgroundColor: grey,
        borderColor: grey,
        opacity: '0.3'
      };
    }

    if (hovered) {
      const darkenColor = convert(`color(${color} blackness(+10%))`);
      return {
        backgroundColor: darkenColor,
        borderColor: darkenColor
      };
    }

    if (secondary)
      return {
        color,
        borderColor: color
      };

    if (light)
      return {
        color
      };

    return {
      borderColor: color,
      backgroundColor: color
    };
  }

  render() {
    const {
      submitValue = 'submit',
      name: ctaName,
      href,
      target,
      disabled = false,
      light = false,
      small = false,
      secondary = false,
      onClick,
      className,
      logout = false
    } = this.props;

    return (
      <Link
        href={href}
        onClick={disabled ? noop : onClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        target={target}
        className={classnames(
          style.button,
          disabled ? style.disabled : null,
          small ? style.smallButton : null,
          light ? style.lightButton : null,
          secondary ? style.secondaryButton : null,
          logout ? style.logoutButton : null,
          className
        )}
        data-name={ctaName || 'cta'}
        style={this.getStyle()}
      >
        {logout ? (
          <div className={style.logoutWrapper}>
            <LogoutIcon
              height={15}
              width={15}
              className={style.logoutIcon}
            />
            {submitValue}
          </div>
        ) : (
          submitValue
        )}
      </Link>
    );
  }
}

export default CTA;
