import fixture, {disabledMenu} from './default';

// Under the Disabled tab: the tab says it, so the row has no tag. « Enable » reverses « Disable ».
export default {
  props: {
    ...fixture.props,
    title: 'Sales kick-off 2026',
    subtitle: 'Sales EMEA · 05 Jan 2026 – 31 Mar 2026 (GMT)',
    details: '2 modules',
    progress: {value: 87, label: '87% completed'},
    bulletPointMenuButton: disabledMenu
  }
};
