import _ from 'lodash';
import React from 'react';

import createList from './Component/List';
import createPollForm from '../../src/Component/PollForm';
import createPollOption from '../../src/Component/PollOption';

const List = createList(React);
const PollForm = createPollForm(React);
const PollOption = createPollOption(React);

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
    poll = _.assign({}, poll);

    if (!!_.last(poll.options).title) {
      poll.options = [].concat(poll.options, [{ id: poll.options.length, title: '', count: 1 }]);
    }

    this.setState(poll);
  },

  handleOption: function(index) {
    return (option) => {
      const poll = _.assign({}, this.state);
      poll.options[index] = _.assign({}, option, {
        active: !option.active
      });

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
