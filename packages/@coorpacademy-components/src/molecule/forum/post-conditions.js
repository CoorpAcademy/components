import PropTypes from 'prop-types';
import * as CostumPropTypes from '../../util/proptypes';

export default {
  author: PropTypes.string,
  date: PropTypes.string,
  message: PropTypes.string,
  avatar: CostumPropTypes.url,
  answerAvatar: CostumPropTypes.url,
  answer: PropTypes.string,
  edition: PropTypes.string,
  showAnswerBox: PropTypes.bool,
  showEditBox: PropTypes.bool,
  onAnswer: PropTypes.func,
  onEdit: PropTypes.func,
  onPostAnswer: PropTypes.func,
  onPostEdition: PropTypes.func,
  onChangeAnswer: PropTypes.func,
  onChangeEdition: PropTypes.func,
  onModerate: PropTypes.func,
  onDelete: PropTypes.func
};
