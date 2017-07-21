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
      onClick
    } = this.props;

    const primaryColor = getOr('#00B0FF', 'common.primary', skin);

    const inlineStyle = !(this.state.hovered ^ light)
      ? {
          backgroundColor: primaryColor,
          borderColor: primaryColor
        }
      : {
          borderColor: primaryColor,
          color: primaryColor
        };

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
          this.props.className
        )}
        data-name={ctaName}
        style={inlineStyle}
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
