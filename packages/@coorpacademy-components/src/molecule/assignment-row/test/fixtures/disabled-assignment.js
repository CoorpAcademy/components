import fixture, {publishedMenu} from './default';

// Under the Disabled tab: the tab says it, so the row has no tag (Q3, INFO).
export default {
  props: {
    ...fixture.props,
    title: 'Sales kick-off 2026',
    subtitle: 'Sales EMEA · 05 Jan 2026 – 31 Mar 2026 (GMT)',
    details: '2 modules',
    progress: {value: 87, label: '87% completed'},
    bulletPointMenuButton: {
      ...publishedMenu,
      buttons: publishedMenu.buttons.map(button =>
        button.label === 'Archive' ? {...button, label: 'Unarchive'} : button
      )
    }
  }
};
