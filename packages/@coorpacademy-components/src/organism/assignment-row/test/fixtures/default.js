// Active tab, sync up to date: no tag at all. Created/edited-by live in the tracking header.
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

// « Enable » reverses « Disable »: an archive under the hood, but the UI says Disable / Enable.
// Menu items take button-menu's left types, as in the Skills list rows, so their fixed-width
// icons line up in one column whatever the label lengths.
const action = (label, icon) => ({
  label,
  type: 'defaultLeft',
  icon: menuIcon(icon),
  onClick: () => console.log(label)
});

const sharedActions = [
  action('Tracking', 'chart-simple'),
  action('Edit', 'pen'),
  action('Duplicate', 'copy')
];

export const publishedMenu = {
  buttonAriaLabel: 'More actions',
  menuAriaLabel: 'Assignment actions',
  buttons: [...sharedActions, action('Disable', 'ban')]
};

export const disabledMenu = {
  ...publishedMenu,
  buttons: [...sharedActions, action('Enable', 'circle-check')]
};

// The certification draft row's menu (Skills and Certifications): Publish, and Delete in the
// danger style. Delete exists on a draft only: an assignment published once is never deleted.
export const draftMenu = {
  ...publishedMenu,
  buttons: [
    {
      'data-name': 'assignment-publish-button',
      label: 'Publish',
      type: 'defaultLeft',
      icon: menuIcon('paper-plane'),
      onClick: () => console.log('Publish')
    },
    {
      'data-name': 'assignment-delete-button',
      label: 'Delete',
      type: 'dangerousLeft',
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
