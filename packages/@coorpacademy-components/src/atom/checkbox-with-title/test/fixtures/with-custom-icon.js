export default {
  props: {
    title: '<span style="color: #1D1D2B;">2</span><span>&nbsp;</span>items selected',
    checked: true,
    onChange: value => console.log(value),
    customStyle: {fontWeight: 600, color: '#515161', fontSize: '16px'},
    icon: {iconName: 'minus', iconColor: 'white', preset: 's'}
  }
};
