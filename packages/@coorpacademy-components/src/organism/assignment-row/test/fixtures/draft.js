import {draftMenu} from './default';

// Under the Drafts tab, as a certification draft row: an « Edit » button and a « … » menu with
// « Publish » and « Delete ». No Draft tag (the tab says it, unlike the certification list) and
// no progress (never published, never synced).
export default {
  props: {
    title: 'GDPR refresher 2027',
    subtitle: 'Everyone',
    details: '1 external',
    buttonLink: {
      label: 'Edit',
      type: 'secondary',
      icon: {position: 'left', type: 'edit'},
      onClick: () => console.log('Open the edit page')
    },
    bulletPointMenuButton: draftMenu,
    onClick: () => console.log('Open the edit page')
  }
};
