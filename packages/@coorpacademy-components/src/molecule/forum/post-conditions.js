import PropTypes from 'prop-types';
import {UrlPropType} from '../../util/proptypes';

export default {
  author: PropTypes.string,
  date: PropTypes.string,
  message: PropTypes.string,
  avatar: UrlPropType,
  answerAvatar: UrlPropType,
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
