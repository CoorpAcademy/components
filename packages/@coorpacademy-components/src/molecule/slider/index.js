import React, {PropTypes} from 'react';
import Slide from '../../atom/slide';
import style from './style.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    };
    this.handleNextSlide = this.handleNextSlide.bind(this);
    this.handlePreviousSlide = this.handlePreviousSlide.bind(this);
  }

  handleNextSlide() {
    this.setState(prevState => {
      const totalSlide = this.props.slides.length;
      const nextSlide = prevState.currentSlide + 1;

      return {
        currentSlide: nextSlide >= totalSlide ? 0 : nextSlide
      };
    });
  }

  handlePreviousSlide() {
    this.setState(prevState => {
      const totalSlide = this.props.slides.length;
      const nextSlide = prevState.currentSlide - 1;

      return {
        currentSlide: nextSlide <= 0 ? (totalSlide - 1) : nextSlide
      };
    });
  }

  render() {
    const {
      slides
    } = this.props;

    const totalSlide = slides.length;

    const myslides = slides.map((slide, index) => {
      const isActive = this.state.currentSlide === index;

      return (
        <div key={index}
          className={isActive ? style.activeSlide : style.slide}
        >
          <Slide {...slide} />
        </div>
      );
    });

    const leftControl = totalSlide > 1 ? (
      <span className={style.leftControl}
        onClick={this.handlePreviousSlide}
      />
    ) : null;

    const rightControl = totalSlide > 1 ? (
      <span className={style.rightControl}
        onClick={this.handleNextSlide}
      />
    ) : null;

    return (
      <div className={style.slidesWrapper}>
        {myslides}
        {leftControl}
        {rightControl}
      </div>
    );
  }
}

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
