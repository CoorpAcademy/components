export default {
  props: {
    mainText: 'You have not yet imported any external content',
    subText: 'This page is used to import external content (notably Scorms) in bulk. ',
    imageUrl: 'https://static.coorpacademy.com/coorpmanager/bulk-empty-home.svg',
    buttonLink: {
      type: 'primary',
      label: 'Import Files',
      ariaLabel: 'aria button',
      dataName: 'default-button',
      icon: {
        position: 'left',
        type: 'upload'
      },
      onClick: () => console.log('click')
    }
  }
};
