import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
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
      secondary = false
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
      <div
        className={style.button}
        data-name={ctaName}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={{
          backgroundColor: this.state.hovered ? hoverBackgroundColor : backgroundColor,
          borderColor: this.state.hovered ? hoverBorderColor : borderColor,
          height: small ? '36px' : '46px',
          borderRadius: small ? '18px' : '23px'
        }}
      >
        <Link
          href={href}
          target={target}
          style={{
            color: this.state.hovered ? hoverTextColor : textColor
          }}
        >
          {submitValue}
        </Link>
      </div>
    );
  }
}

CTA.contextTypes = {
  skin: PropTypes.object
};

CTA.propTypes = {
  submitValue: PropTypes.string,
  name: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  light: PropTypes.bool,
  small: PropTypes.bool,
  secondary: PropTypes.bool
};

export default CTA;
