import noop from 'lodash.noop';
import createForm from '../Form';
import createControlGroup from '../ControlGroup';
import { createTextInput, createSubmitInput, createResetInput } from '../Input';

export default (React) => {
  const Form = createForm(React);
  const ControlGroup = createControlGroup(React);
  const TextInput = createTextInput(React);
  const SubmitInput = createSubmitInput(React);
  const ResetInput = createResetInput(React);

  return ({ poll, onChange = noop, legend, onSubmit = noop, onReset = noop, action, method }) => {
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
};
