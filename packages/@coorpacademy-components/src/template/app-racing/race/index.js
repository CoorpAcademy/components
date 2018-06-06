import React, {Component} from 'react';
import Promise from 'bluebird';
import keys from 'lodash/fp/keys';
import fromPairs from 'lodash/fp/fromPairs';
import App from './app';

const IMAGES = {
  groundTile: {
    src: 'https://user-images.githubusercontent.com/1039076/37212428-64b2363c-23af-11e8-906b-cac5c7b98676.png',
    width: 32,
    height: 32
  },
  cloud: {
    src: 'https://user-images.githubusercontent.com/1039076/37212491-6e5e7a74-23af-11e8-95e9-c8ac7aee54d7.png',
    width: 32,
    height: 16
  },
  goalTile: {
    src: 'https://user-images.githubusercontent.com/1039076/37212493-6e8d5a24-23af-11e8-8413-97020f9d3ffb.png',
    width: 16,
    height: 16
  },
  block: {
    src: 'https://user-images.githubusercontent.com/1039076/37212426-645a5426-23af-11e8-886c-8048b4461754.png',
    width: 64,
    height: 64
  },
};

const loadImage = (name, content) => new Promise((resolve, reject) => {
  const {src, width, height} = content;
  const image = new window.Image(width, height);

  image.src = src;
  image.onload = () => resolve([name, {...content, image}]);
  image.onerror = () => reject(new Error(`Failed to load image "${name}" using src="${src}"`));
});

const loadAllImages = sources =>
  Promise.map(
    keys(sources),
    name => loadImage(name, sources[name])
  ).then(fromPairs);

class Race extends Component {
  state = {};

  componentDidMount() {
    loadAllImages(IMAGES).then(images => this.setState({images}));
  }

  render() {
    const {images} = this.state;

    return images ? (
      <App
        goal={20}
        width={window.innerWidth/2}
        height={window.innerWidth /3}
        teams={[
          {step: 5},
          {step: 10},
          {step: 2}
        ]}
        images={images}
      />
    ) : '';
  }
}

export default Race;
