import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import pushToHistory from '../../util/navigation';
import shallowCompare from '../../util/shallow-compare';

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
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

  handleOnClick(e) {
    this.props.onClick && this.props.onClick(e);

    const onClick = pushToHistory(this.context)(this.props);
    onClick(e);
  }

  render() {
    const {skin, history: {createHref = identity} = {}} = this.context;
    const {skinHover, ...aProps} = this.props;
    const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);
    const _style = this.props.href ? null : {
      pointerEvents: 'none'
    };
    const _hoverStyle = skinHover && this.state.hovered ? {
      color: primarySkinColor
    } : null;

    return (
      <a
        {...aProps}
        href={this.props.href ? createHref(this.props.href) : undefined}
        onClick={this.handleOnClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={{
          ...this.props.style,
          ..._style,
          ..._hoverStyle
        }}
      >
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  skinHover: PropTypes.bool,
  onClick: PropTypes.func
};

Link.contextTypes = {
  skin: React.PropTypes.object,
  history: PropTypes.shape({
    createHref: PropTypes.func,
    push: PropTypes.func
  })
};

export default Link;
