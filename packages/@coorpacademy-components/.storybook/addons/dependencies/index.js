import React from 'react';
import addons from "@kadira/storybook-addons";
import {renderToString} from 'react-dom/server';
import {Provider} from '../../../src'

class Decorator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    if (this.props.api) {
      this.api = this.props.api;
    }

    this.story = this.props.story();

    this.setDependencies = this.setDependencies.bind(this);
  }


  componentWillMount() {
    this.channel.on('dependencies:set', this.setDependencies);
    this.channel.emit('dependencies:init', {});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.story !== this.props.story) {
      this.story = nextProps.story();
    }
  }

  componentWillUnmount() {
    this.channel.removeListener('dependencies:set', this.setDependencies);
  }

  setDependencies(dependencies) {
  }

  render() {
    return this.story;
  }
}

export default story => (
  <Decorator story={story}/>
);