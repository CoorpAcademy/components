import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
import {createElement} from 'react';
import Provider from '@coorpacademy/components/es/atom/provider';
import Discussion from '@coorpacademy/components/es/organism/discussion';
import {
  updateDiscussionTextareaAction,
  resetDiscussionTextareaAction
} from '../actions/ui-discussion';
import {createThreadAction} from '../actions/api-create-thread';

const createMapStateToProps = ({api, channel}) => dispatch => state => {
  const threads = state.api.discussions.threads || [];

  return {
    title: 'Sandbox forum',
    threads,
    value: getOr('', 'ui.discussion.textarea.value', state),
    postDisabled: getOr(true, 'ui.discussion.textarea.postDisabled', state),
    onPost: async () => {
      await dispatch(
        createThreadAction({
          channel,
          message: getOr('', 'ui.discussion.textarea.value', state)
        })
      );
      await dispatch(resetDiscussionTextareaAction());
    },
    onChange: e => dispatch(updateDiscussionTextareaAction(e.target.value))
  };
};

const wrapInProvider = options => vNode => createElement(Provider, options, vNode);

export {createMapStateToProps};

export default options => dispatch => {
  const mapStateToProps = createMapStateToProps(options)(dispatch);

  return pipe(mapStateToProps, Discussion, wrapInProvider(options));
};
