import * as React from "react";
import addons from "@kadira/storybook-addons";

// const ADDON_ID = "storybook-addon-background";
// const PANEL_ID = `${ADDON_ID}/background-panel`;


export default class Panel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        tokens: [],
        languages: []
    };

    this.props.channel.on('language:init', ({languages, tokens}) => {
        this.setState({
            languages,
            tokens
        });

        const currentLanguage = this.props.api.getQueryParam('language');
        if (languages.includes(currentLanguage))
            this.props.channel.emit('language:set', currentLanguage);
    })

    // this.props.channel.on("background-set", backgrounds => {
    //   this.setState({ backgrounds });
    //   const currentBackground = this.props.api.getQueryParam("background");

    //   if (currentBackground) {
    //     this.setBackgroundInPreview(currentBackground);
    //   } else if (backgrounds.filter(x => x.default).length) {
    //     const defaultBgs = backgrounds.filter(x => x.default);
    //     this.setBackgroundInPreview(defaultBgs[0].value);
    //   }
    // });

    // this.props.channel.on("background-unset", backgrounds => {
    //   this.setState({ backgrounds: [] });
    //   this.props.api.setQueryParams({ background: null });
    // });
    this.handlerClick = this.handlerClick.bind(this);
  }

//   private setBackgroundInPreview = (background) => this.props.channel.emit("background", background);

//   private setBackgroundFromSwatch = (background) => {
//     this.setBackgroundInPreview(background);
//     this.props.api.setQueryParams({ background });
//   }
  handlerClick (e) {
      const language = e.target.innerHTML;
      this.props.channel.emit('language:set', language);
      this.props.api.setQueryParams({ language });
  }

  render () {
    // const backgrounds = [...this.state.backgrounds];

    // if (!backgrounds.length) return <Instructions />;

    // const hasDefault = backgrounds.filter(x => x.default).length;
    // if (!hasDefault) backgrounds.push(defaultBackground);

    /*return (
      <div style={{display: "inline-block", padding: "15px"}}>
        {backgrounds.map(({ value, name }, key) => (
          <div key={key} style={{display: "inline-block", padding: "5px"}}>
            <Swatch value={value} name={name} setBackground={this.setBackgroundFromSwatch} />
          </div>
        ))}
      </div>
    );*/

    const {languages, tokens} = this.state;

    return (
        <div>
            <div>
                {languages.map(language => 
                    <button key={language} onClick={this.handlerClick}>{language}</button>
                )}
            </div>
            <div>
                {tokens.map(token => 
                    <span key={token}>{token}</span>
                )}
            </div>
        </div>
    )
  }
};

addons.register('foo', api => {
  const channel = addons.getChannel();
  addons.addPanel('bar', {
    title: "Translate",
    render: () => (
      <Panel channel={channel} api={api}/>
    ),
  });
});
