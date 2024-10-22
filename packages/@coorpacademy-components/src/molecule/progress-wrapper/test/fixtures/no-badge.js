export default {
  props: {
    title: 'Your Progress',
    subtitle: 'To unlock your rewards, you need to complete this certification',
    completedCourses: 6,
    completedModules: 13,
    progression: 37,
    sections: [
      {
        type: 'diploma',
        onDownload: () => console.log('click on download diploma')
      },
      {
        type: 'stars',
        stars: 250
      }
    ]
  }
};
