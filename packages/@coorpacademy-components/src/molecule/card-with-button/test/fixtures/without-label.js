export default {
  props: {
    username: 'User',
    courseName: 'courseName',
    secondaryButtonLabel: 'Review course',
    primaryButtonLabel: 'Start battle',
    onClickSecondaryButton: () => console.log('test onClickButtonCourse'),
    onClickPrimaryButton: () => console.log('test onClickButtonBattle'),
    backgroundImg: 'https://img.bfmtv.com/c/1256/708/c32/01a671c64243d70195cbe64a18f2a.jpg'
  }
};
