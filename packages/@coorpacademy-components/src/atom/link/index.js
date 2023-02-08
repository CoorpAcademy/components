import React from 'react';
import PropTypes from 'prop-types';
import {identity, getOr, noop} from 'lodash/fp';
import Provider, {GetSkinFromContext} from '../provider';
import pushToHistory from '../../util/navigation';

class Link extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
    'data-name': PropTypes.string,
    'aria-label': PropTypes.string,
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
    skinHover: PropTypes.bool,
    hoverColor: PropTypes.string,
    download: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    style: PropTypes.shape({})
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin,
    history: Provider.childContextTypes.history
  };

  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  handleMouseEnter = () => {
    const {onMouseEnter = noop} = this.props;

    this.setState({
      hovered: true
    });

    onMouseEnter();
  };

  handleMouseLeave = () => {
    const {onMouseLeave = noop} = this.props;

    this.setState({
      hovered: false
    });

    onMouseLeave();
  };

  handleOnClick = e => {
    const {onClick = noop, download} = this.props;

    onClick(e);

    if (!download) {
      const navigate = pushToHistory(this.context)(this.props);
      navigate(e);
    }
  };

  render() {
    const {history: {createHref = identity} = {}} = this.context;
    const skin = GetSkinFromContext(this.context);
    const {
      skinHover,
      hoverColor = getOr('#00B0FF', 'common.primary', skin),
      'data-name': dataName = 'link',
      'aria-label': ariaLabel,
      ...aProps
    } = this.props;
    const {href, onClick, className, style: propsStyle, children} = this.props;
    const {hovered} = this.state;
    const _style =
      href || onClick
        ? null
        : {
            pointerEvents: 'none'
          };
    const _hoverStyle =
      skinHover && hovered
        ? {
            color: hoverColor
          }
        : null;

    return (
      <a
        {...aProps}
        data-name={dataName}
        aria-label={ariaLabel}
        href={href ? createHref(href) : undefined}
        onClick={this.handleOnClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={className}
        style={{
          ...propsStyle,
          ..._style,
          ..._hoverStyle
        }}
      >
        {children}
      </a>
    );
  }
}

export default Link;
