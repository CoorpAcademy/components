import _ from 'lodash';
import React from 'react';
import Form from '../Form';
import ControlGroup from '../ControlGroup';
import { TextInput, SubmitInput, ResetInput } from '../Input';

const PollForm = ({ poll, onChange = _.noop, legend, onSubmit = _.noop, onReset = _.noop, action, method }) => {
  const { title, options } = poll;

  const handleChangeTitle = (title) => {
    const newPoll = Object.assign({}, poll, {
      title
    });

    onChange(newPoll);
  };

  const handleChangeOption = (index) => (title) => {
    const options = [...poll.options];
    options[index] = Object.assign({}, options[index], { title });

    const newPoll = Object.assign({}, poll, {
      options
    });

    onChange(newPoll);
  };

  const handleSubmit = () => {
    onSubmit(poll);
  }

  return (
    <Form
      { ...{action, method, onReset} }
      title={ legend }
      onSubmit= { handleSubmit }
    >
      <ControlGroup>
        <TextInput placeholder="Enter your question" value={ title } onChange={ handleChangeTitle }/>
      </ControlGroup>
      <ControlGroup>
        { options.map((option, index) => (
          <TextInput placeholder={ `Option ${index + 1}` } key={ index } value={ option.title } onChange= { handleChangeOption(index) }/>
        )) }
      </ControlGroup>
      <ControlGroup>
        <SubmitInput value="Create"/>
        <ResetInput value="Reset"/>
      </ControlGroup>
    </Form>
  );
};

export default PollForm;
