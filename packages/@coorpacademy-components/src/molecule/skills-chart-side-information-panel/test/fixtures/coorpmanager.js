export default {
  props: {
    theme: 'coorpmanager',
    sidePanelItems: [
      {
        icon: {iconName: 'book-open-cover', backgroundColor: '#D9F4F7'},
        title: 'Completed',
        value: '12',
        legend: 'including 2 late'
      },
      {
        icon: {iconName: 'book-open-cover', backgroundColor: '#D9F4F7'},
        title: 'In progress',
        value: '8'
      },
      {
        icon: {iconName: 'book-open-cover', backgroundColor: '#D9F4F7'},
        title: 'Not started',
        value: '4'
      },
      {
        icon: {iconName: 'clock', backgroundColor: '#FAD6DE'},
        title: 'Due soon',
        value: '0',
        legend: 'due within 7 days'
      },
      {
        icon: {iconName: 'clock', backgroundColor: '#FAD6DE'},
        title: 'Overdue',
        value: '12',
        legend: 'not completed by the due date'
      }
    ]
  }
};
