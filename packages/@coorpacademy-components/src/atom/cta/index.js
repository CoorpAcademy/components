import React, {PropTypes} from 'react';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import Link from '../link';
import shallowCompare from '../../util/shallow-compare';
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

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
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
    const {translate = identity, skin} = this.context;
    const {
      submitValue = 'submit',
      href,
      target = '_blank',
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
    const hoverBorderColor = secondary ? textColor : primarySkinColor;

    return (
      <div className={style.button}
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
  skin: React.PropTypes.object,
  translate: React.PropTypes.func
};

CTA.propTypes = {
  submitValue: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  light: PropTypes.bool,
  small: PropTypes.bool,
  secondary: PropTypes.bool
};

export default CTA;
