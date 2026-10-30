import assignments from '../../../quick-access-card/test/fixtures/assignments';
import uploadUsers from '../../../quick-access-card/test/fixtures/upload-users';

export default {
  props: {
    list: [
      assignments.props,
      uploadUsers.props,
      {
        title: 'Learning priorities',
        description: 'Choose the learning priorities for your platform',
        feature: 'learning_priorities',
        href: '/brands/7steps/editorialization/learning-priorities'
      },
      {
        title: 'Edit dashboard',
        description: 'Customize your platform dashboard',
        feature: 'dashboard',
        href: '/brands/7steps/dashboard'
      },
      {
        title: 'Manage users',
        description: 'Manage the users on your learning platform',
        feature: 'manage_users',
        href: '/brands/7steps/users'
      }
    ],
    loading: false
  }
};
