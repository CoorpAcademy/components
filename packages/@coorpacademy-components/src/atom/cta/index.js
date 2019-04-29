import React from 'react';
import {convert} from 'css-color-function';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import noop from 'lodash/fp/noop';
import classnames from 'classnames';
import Provider from '../provider';
import Link from '../link';
import style from './style.css';

class CTA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    return this.setState(prevState => ({
      hovered: true
    }));
  }

  handleMouseLeave() {
    return this.setState(prevState => ({
      hovered: false
    }));
  }

  getStyle() {
    const {skin} = this.context;
    const {hovered} = this.state;
    const {disabled = false, light = false, secondary = false} = this.props;
    const color = get('common.primary', skin);
    const grey = get('common.grey', skin);

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
      blueCoorp = false,
      onClick
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
          blueCoorp ? style.blueCoorpButton : null,
          this.props.className
        )}
        data-name={ctaName || 'cta'}
        style={this.getStyle()}
      >
        {submitValue}
      </Link>
    );
  }
}

CTA.contextTypes = {
  skin: Provider.childContextTypes.skin
};

CTA.propTypes = {
  submitValue: Link.propTypes.children,
  href: Link.propTypes.href,
  onClick: Link.propTypes.onClick,
  target: Link.propTypes.target,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  light: PropTypes.bool,
  blueCoorp: PropTypes.string,
  small: PropTypes.bool
};

export default CTA;
