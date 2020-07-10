import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash/fp';
import ForumPost from '../forum-post';
import style from './style.css';

const ForumThread = props => {
  const {answers = [], mainPost = false} = props;
  const answersView = answers.map(answerProps => (
    <ForumThread {...answerProps} key={answerProps.id} />
  ));

  return (
    <div className={mainPost ? style.mainPost : null}>
      <ForumPost {...props} mainPost={mainPost && !isEmpty(answers)} />
      <div data-name="forumAnswers" className={style.answers}>
        {answersView}
      </div>
    </div>
  );
};

ForumThread.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape(ForumThread.propTypes)),
  mainPost: PropTypes.bool
};
export default ForumThread;
