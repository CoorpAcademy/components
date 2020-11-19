import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SetupSection from '../setup-section';
import Loader from '../../atom/loader';
import style from './style.css';

const preventDefault = e => e.preventDefault();

class SetupSections extends React.Component {
  static propTypes = {
    sections: PropTypes.arrayOf(PropTypes.shape(SetupSection.propTypes)),
    loading: PropTypes.bool,
    onDrop: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      dragTo: null,
      dragFrom: null
    };
    this.handleDrag = this.dragHandler.bind(this);
    this.handleDrop = this.dropHandler.bind(this);
    this.handleDragOver = this.dragOverHandler.bind(this);
    this.handleDragLeave = this.dragLeaveHandler.bind(this);
  }

  dragHandler = id => e => {
    preventDefault(e);
    this.setState({
      dragFrom: id
    });
  };

  dropHandler = id => e => {
    preventDefault(e);
    const {onDrop} = this.props;
    const {dragFrom} = this.state;
    this.setState({
      dragTo: null,
      dragFrom: null
    });
    if (onDrop && dragFrom) onDrop(dragFrom, id);
  };

  dragOverHandler = id => e => {
    preventDefault(e);
    const {dragTo} = this.state;
    if (dragTo !== id) {
      this.setState({
        dragTo: id
      });
    }
  };

  dragLeaveHandler = _id => e => {
    preventDefault(e);
    this.setState({
      dragTo: null
    });
  };

  render() {
    const {dragTo} = this.state;
    const {sections, loading = false, onDrop} = this.props;
    const loadingView = (
      <div className={style.loading}>
        <Loader />
      </div>
    );
    const sectionsView = sections.map((section, index) => (
      <div
        key={section.id}
        className={classnames(
          dragTo === section.id ? style.dragging : null,
          style.section,
          style.draggable
        )}
        onDragStart={this.handleDrag(section.id)}
        onDragOver={this.handleDragOver(section.id)}
        onDragLeave={this.handleDragLeave(section.id)}
        onDrop={this.handleDrop(section.id)}
        draggable
      >
        <SetupSection
          {...section}
          key={section.id}
          onUp={index === 0 ? null : section.onUp}
          onDown={index === sections.length - 1 ? null : section.onDown}
          onDrop={onDrop}
        />
      </div>
    ));
    return <div>{loading ? loadingView : sectionsView}</div>;
  }
}

export default SetupSections;
