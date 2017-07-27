import React from 'react';
import {convert} from 'css-color-function';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
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
    const {light = false, secondary = false} = this.props;
    const color = get('common.primary', skin);

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
      light = false,
      small = false,
      secondary = false,
      onClick
    } = this.props;

    return (
      <Link
        href={href}
        onClick={onClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        target={target}
        className={classnames(
          style.button,
          small ? style.smallButton : null,
          light ? style.lightButton : null,
          secondary ? style.secondaryButton : null,
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
  light: PropTypes.bool,
  small: PropTypes.bool
};

export default CTA;
