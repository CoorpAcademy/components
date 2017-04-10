import React from 'react';
import addons from "@kadira/storybook-addons";
import {renderToString} from 'react-dom/server';
import {Provider} from '../../../src'

import createTranslate from '@coorpacademy/translate';
import en from '../../../locales/en/global';
import fr from '../../../locales/fr/global';
const locales = {
  en,
  fr
};

class Decorator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'en'
    };

    // A channel is explicitly passed in for testing
    if (this.props.channel) {
      this.channel = this.props.channel;
    } else {
      this.channel = addons.getChannel();
    }

    this.story = this.props.story();
    // console.log(getLocales(this.story));

    this.setLanguage = this.setLanguage.bind(this);
  }


  componentWillMount() {
    this.channel.on('language:set', this.setLanguage);
    this.channel.emit('language:init', {
      languages: Object.keys(locales),
      tokens: Array.from(getLocales(this.story).values())
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.story !== this.props.story) {
      this.story = nextProps.story();
    }
  }

  componentWillUnmount() {
    this.channel.removeListener('language:set', this.setLanguage);
  }

  setLanguage(language) {
    if (locales[language])
      this.setState(() => ({language}));
  }

  render() {
    const {language} = this.state;
    const translate = createTranslate(locales[language]);

    return (
      <Provider translate={translate}>
        {this.story}
      </Provider>
    );
  }
}

function getLocales(story) {
  const locales = new Set();
  const mockTranslate = token => {
    locales.add(token);
    return token;
  };

  renderToString(
    <Provider translate={mockTranslate}>
      {story}
    </Provider>
  );

  return locales;
}

export default story => (
  <Decorator story={story}/>
);