import createPollForm from './PollForm';
import createPollOption from './PollOption';


export default (React) => ({
  PollForm: createPollForm(React),
  PollOption: createPollOption(React)
});
