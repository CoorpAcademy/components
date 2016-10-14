import {checker} from '../../util/validation';

export default checker.shape({
  author: checker.string.optional,
  date: checker.string.optional,
  message: checker.string.optional,
  avatar: checker.url.optional,
  answerAvatar: checker.url.optional,
  answer: checker.string.optional,
  edition: checker.string.optional,
  onPostAnswer: checker.func.optional,
  onPostEdition: checker.func.optional,
  onChangeAnswer: checker.func.optional,
  onChangeEdition: checker.func.optional,
  onModerate: checker.func.optional,
  onDelete: checker.func.optional
}).optional;
