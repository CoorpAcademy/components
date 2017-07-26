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

    const primaryColor = get('common.primary', skin);

    if (hovered)
      return {
        backgroundColor: convert(`color(${primaryColor} blackness(+10%))`),
        borderColor: convert(`color(${primaryColor} blackness(+10%))`)
      };

    if (secondary)
      return {
        color: primaryColor,
        borderColor: primaryColor
      };

    if (light)
      return {
        color: primaryColor
      };

    return {
      borderColor: primaryColor,
      backgroundColor: primaryColor
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
