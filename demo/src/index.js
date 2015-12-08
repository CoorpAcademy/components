import _ from 'lodash';
import React from 'react';
import { render } from 'react-dom';
import List from './Component/List';
import PollForm from '../../src/Component/PollForm';

let defaultPoll = {title:'', options:[{title:''}, {title:''}, {title:''}]};

const renderPoll = (poll) => {
  const { options } = poll;
  if (!!_.last(options).title) {
    poll.options = [...options, { title: '' }];
  }

  const pollForm = (
    <List>
      <PollForm
        action="#"
        method="GET"
        legend="Create poll"
        poll={ poll }
        onChange={ renderPoll }
        onSubmit={ (poll) => console.log(poll) }
        onReset={ () => renderPoll(defaultPoll) }
      />
    </List>
  );

  render(pollForm, document.getElementById('app'));
};

renderPoll(defaultPoll);
