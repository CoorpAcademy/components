import React, {PropTypes} from 'react';
import getOr from 'lodash/fp/getOr';
import style from './style.css';

const ButtonHover = React.createClass({
    getInitialState: function () {
        return {hover: false};
    },

    mouseOver: function () {
        this.setState({hover: true});
    },

    mouseOut: function () {
        this.setState({hover: false});
    },

    render: function() {
      const textColor = this.state.hover ? '#fff' : getOr('#00b0ff', 'common.primary', this.props.skin);
      const bgColor = this.state.hover ? getOr('#00b0ff', 'common.primary', this.props.skin) : '#fff';
      return(
        <a href={this.props.cta.href} className={style.link}
          onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}
          style= {{
            color: textColor,
            backgroundColor: bgColor
          }}
        >
            {this.props.cta.title}
        </a>
      );
    }
  });

const Slide = (props, context) => {
  const skin = context;
  const {
    cover,
    title,
    subtitle,
    cta
  } = props;

  const imgCover = cover;
  const defaultColor = getOr('#fff', 'common.primary', skin);

  return (
    <div className={style.hero}
      style={{
        backgroundImage: imgCover,
        backgroundColor: defaultColor
      }}
    >
      <div className={style.content}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <ButtonHover cta={cta} skin={skin} />
      </div>
    </div>      
  );
};

Slide.contextTypes = {
  skin: React.PropTypes.object
};

Slide.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cta: PropTypes.shape({
    href: PropTypes.url,
    title: PropTypes.string
  })
};

export default Slide;
