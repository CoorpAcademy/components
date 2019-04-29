export default {
  props: {
    name: 'User',
    borderColor: 'grey',
    courseName: 'courseName',
    submitReviewCourseValue: 'Review course',
    submitStartBattleValue: 'Start battle',
    levelName: 'Coach',
    /* levelColor: 'levelGreen',*/
    onClickButtonCourse: () => console.log('test onClickButtonCourse'),
    onClickButtonBattle: () => console.log('test onClickButtonBattle'),
    avatar: 'http://minecraft.fr/wp-content/uploads/2013/05/Pa8WZj1-235x300.jpg',
    urlImg: 'https://img.bfmtv.com/c/1256/708/c32/01a671c64243d70195cbe64a18f2a.jpg'
  }
};
