import fixture, {draftMenu} from './default';

// Under the Drafts tab: no Draft tag (Q3), no progress (never published, never synced).
// Delete is offered on a never-published draft only (A1.7 C6).
export default {
  props: {
    title: 'GDPR refresher 2027',
    subtitle: 'Everyone',
    details: '1 external',
    buttonLink: {...fixture.props.buttonLink, label: 'Edit', icon: undefined},
    bulletPointMenuButton: draftMenu,
    onClick: () => console.log('Open the edit page')
  }
};
