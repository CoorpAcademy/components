// Active tab, sync up to date: no tag at all (S1, Q3, INFO). No created/edited-by (M0).
const menuIcon = (name, color = '#515161') => ({
  position: 'left',
  faIcon: {name, color, size: 14, customStyle: {padding: 0}}
});

export const trackingButton = {
  label: 'Tracking',
  type: 'secondary',
  icon: {position: 'left', faIcon: {name: 'chart-simple', color: '#515161', size: 14}},
  onClick: () => console.log('Open the tracking page')
};

export const publishedMenu = {
  buttonAriaLabel: 'More actions',
  menuAriaLabel: 'Assignment actions',
  buttons: [
    {label: 'Tracking', icon: menuIcon('chart-simple'), onClick: () => console.log('Tracking')},
    {label: 'Edit', icon: menuIcon('pen'), onClick: () => console.log('Edit')},
    {label: 'Duplicate', icon: menuIcon('copy'), onClick: () => console.log('Duplicate')},
    {label: 'Archive', icon: menuIcon('folder-open'), onClick: () => console.log('Archive')}
  ]
};

export const draftMenu = {
  ...publishedMenu,
  buttons: [
    {label: 'Edit', icon: menuIcon('pen'), onClick: () => console.log('Edit')},
    {label: 'Duplicate', icon: menuIcon('copy'), onClick: () => console.log('Duplicate')},
    {
      label: 'Delete',
      type: 'dangerous',
      icon: menuIcon('trash', '#991100'),
      onClick: () => console.log('Delete')
    }
  ]
};

export default {
  props: {
    title: 'Safety onboarding — managers Q4',
    subtitle: 'Managers FR, Managers DE · 02 Oct 2026 – 15 Dec 2026 (GMT)',
    details: '6 modules · 2 external · 2 chapters',
    progress: {value: 42, label: '42% completed'},
    buttonLink: trackingButton,
    bulletPointMenuButton: publishedMenu,
    onClick: () => console.log('Open the tracking page')
  }
};
