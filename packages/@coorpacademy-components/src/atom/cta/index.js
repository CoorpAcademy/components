// @flow
import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Link from '../link';
import shallowCompare from '../../util/shallow-compare';
import {type LinkTarget} from '../../types';
import style from './style.css';

export type Props = {
  submitValue: string,
  name: string,
  href: string,
  target: LinkTarget,
  light: boolean,
  small: boolean,
  secondary: boolean
};

type State = {
  hovered: boolean
};

class CTA extends React.Component {
  state: State
  props: Props
  handleMouseEnter: Function
  handleMouseLeave: Function

  constructor(props: Props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  shouldComponentUpdate(nextProps: Props, nextState: State, nextContext: any) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleMouseEnter() {
    this.setState({
      hovered: true
    });
  }

  handleMouseLeave() {
    this.setState({
      hovered: false
    });
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

    const primarySkinColor: string = getOr('#00B0FF', 'common.primary', skin);

    const primaryColor: string = light ? '#fff' : primarySkinColor;
    const secondaryColor: string = light ? primarySkinColor : '#fff';

    const backgroundColor: string = secondary ? 'transparent' : primaryColor;
    const textColor: string = secondary ? primaryColor : secondaryColor;
    const borderColor: string = primaryColor;

    const hoverBackgroundColor: string = textColor;
    const hoverTextColor: string = secondary ? secondaryColor : backgroundColor;
    const hoverBorderColor: string = secondary ? textColor : secondaryColor;

    return (
      <div className={style.button}
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
  skin: PropTypes.object,
  translate: PropTypes.func
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
