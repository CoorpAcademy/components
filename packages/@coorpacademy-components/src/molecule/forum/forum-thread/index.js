import React from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import threadShape from '../post-conditions';
import ForumPost from '../forum-post';
import style from './style.css';

const ForumThread = props => {
  const {answers = [], mainPost = false} = props;
  const answersView = answers.map((answerProps, index) => (
    <ForumThread key={index} {...answerProps} />
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
  ...threadShape
};
export default ForumThread;
