import last from 'lodash.last';
import React from 'react';

import createDemoComponents from './Component';
import createComponents from '../../src';

const { List } = createDemoComponents(React);
const { PollForm, PollOption } = createComponents(React);

export default React.createClass({
  getInitialState: function() {
    return {
    title: '',
      options: [{
        id: 0,
        title: 'A',
        count: 19
      }, {
        id: 1,
        title: 'B',
        count: 324,
        active: true
      }, {
        id: 2,
        title: '',
        count: 14
      }]
    };
  },

  handleChange: function(poll) {
    poll = { ...poll };

    if (!!last(poll.options).title) {
      poll.options = [...poll.options, { id: poll.options.length, title: '', count: 1 }];
    }

    this.setState(poll);
  },

  handleOption: function(index) {
    return (option) => {
      const poll = {...this.state};
      poll.options[index] = { ...option, active: !option.active };

      this.handleChange(poll);
    };
  },

  render: function() {
    const poll = this.state;

    return (
      <List>
      <PollForm
        action="#"
        method="GET"
        legend="Create poll"
        poll={ poll }
        onChange={ this.handleChange }
        onSubmit={ this.handleChange }
        onReset={ () => this.handleChange(this.getInitialState()) }
      />
      <PollOption
        option={ poll.options[0] }
        onClick={ this.handleOption(0) }
      />
      <PollOption
        option={ poll.options[1] }
        onClick={ this.handleOption(1) }
      />
      </List>
    );
  }
});
