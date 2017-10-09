import React from 'react';
import PropTypes from 'prop-types';
import identity from 'lodash/fp/identity';
import Provider from '../provider';
import pushToHistory from '../../util/navigation';

class Link extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    this.props.onClick && this.props.onClick(e);

    if (!this.props.download) {
      const onClick = pushToHistory(this.context)(this.props);
      onClick(e);
    }
  }

  render() {
    const {history: {createHref = identity} = {}} = this.context;
    const _style = this.props.href || this.props.onClick
      ? null
      : {
          pointerEvents: 'none'
        };

    return (
      <a
        data-name="link"
        href={this.props.href ? createHref(this.props.href) : undefined}
        onClick={this.handleOnClick}
        className={this.props.className}
        style={{
          ..._style,
          ...this.props.style
        }}
        {...this.props}
      >
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  download: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};

Link.contextTypes = {
  skin: Provider.childContextTypes.skin,
  history: Provider.childContextTypes.history
};

export default Link;
