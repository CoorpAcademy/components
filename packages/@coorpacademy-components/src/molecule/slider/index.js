import React, {PropTypes} from 'react';
import Slide from '../../atom/slide';
import style from './style.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countSlide: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState(prevState => ({
      countSlide: prevState.countSlide + 33
    }));
  }

  handleDecrement() {
    this.setState(prevState => ({
      countSlide: prevState.countSlide - 33
    }));
    if (this.state.countSlide <= 0) {
      this.replaceState(this.getInitialState());
    }
  }

  render() {
    const {
      slides
    } = this.props;

    const totalSlide = slides.length;

    const myslides = slides.map((slide, index) => {
      const isActive = this.state.countSlide === index;
      const activeSlide = isActive ? style.activeSlide : null;
      return (
        <li key={index}>
          <Slide {...slide} />
        </li>
      );
    });

    const viewCtrls = totalSlide === 1 ? null : (
      <div className={style.controls}>
        <span className={style.leftControl}
          onClick={this.handleDecrement}
        />
        <span className={style.rightControl}
          onClick={this.handleIncrement}
        />
      </div>
    );

    const nexstep = this.state.countSlide;

    const SlidesView = (
      <div className={style.slidesWrapper}>
        <ul className={style.slidecontent}>
          {myslides}
        </ul>
        {viewCtrls}
      </div>
    );

  const totalSlide = slides.length;
  const appWidth = window.innerWidth + 'px';

  const MoveSlide = React.createClass({
    getInitialState: function() {
      return {countSlide: 0};
    },

    reset: function() {
      this.replaceState(this.getInitialState());
    },

    handleIncrement: function() {
      this.setState((prevState) => ({
        countSlide: prevState.countSlide + 33
      }));
    },

    handleDecrement: function() {
      this.setState((prevState) => ({
        countSlide: prevState.countSlide - 33
      }));
      if (this.state.countSlide <= 0) {
        this.reset();
      }
    },

    render: function() {
      const myslides = slides.map((slide, index) => {
        const isActive = this.state.countSlide === index;
        const activeSlide = isActive ? style.activeSlide : null;
        return (
          <li>
            <Slide {...slide}
              key={index}
            />
          </li>
        );
      });

      const viewCtrls = totalSlide === 1 ? null : (
        <div className={style.controls}>
          <span className={style.leftControl}
            onClick={this.handleDecrement}
          />
          <span className={style.rightControl}
            onClick={this.handleIncrement}
          />
        </div>
      );

      const nexstep = this.state.countSlide;
      const slideWidth = appWidth;
      return (
        <div className={style.slidesWrapper}>
          <ul className={style.slidecontent}
            style={{
              width: slideWidth,
              animation: 'AutoSlide 15s steps(nexstep) infinite'
            }}
          >
            {myslides}
          </ul>
          {viewCtrls}
        </div>
      );
    }
  });

  const viewCtrls = totalSlide === 1 ? null : (<MoveSlide />);

  return (
    <div>
      <MoveSlide />
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    cover: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    cta: PropTypes.shape({
      href: PropTypes.url,
      title: PropTypes.string
    })
  }))
};

export default Slider;
