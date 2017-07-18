import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
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
    const {skin} = this.context;
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

    const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);

    const primaryColor = light ? '#fff' : primarySkinColor;
    const secondaryColor = light ? primarySkinColor : '#fff';

    const backgroundColor = secondary ? 'transparent' : primaryColor;
    const textColor = secondary ? primaryColor : secondaryColor;
    const borderColor = primaryColor;

    const hoverBackgroundColor = textColor;
    const hoverTextColor = secondary ? secondaryColor : backgroundColor;
    const hoverBorderColor = secondary ? textColor : secondaryColor;

    return (
      <Link
        href={href}
        onClick={onClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        target={target}
        className={classnames(style.button, this.props.className)}
        data-name={ctaName}
        style={{
          backgroundColor: this.state.hovered ? hoverBackgroundColor : backgroundColor,
          borderColor: this.state.hovered ? hoverBorderColor : borderColor,
          height: small ? '32px' : '42px',
          lineHeight: small ? '32px' : '42px',
          borderRadius: small ? '18px' : '23px',
          color: this.state.hovered ? hoverTextColor : textColor
        }}
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
  small: PropTypes.bool,
  secondary: PropTypes.bool
};

export default CTA;
