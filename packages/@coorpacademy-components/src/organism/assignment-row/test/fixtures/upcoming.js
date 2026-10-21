import fixture from './default';

export default {
  props: {
    ...fixture.props,
    title: 'New joiners — November',
    subtitle: 'New joiners · 02 Nov 2026 – 30 Nov 2026 (GMT)',
    details: '2 modules · 2 external · 1 chapter',
    progress: {value: 0, label: 'Starts on 02 Nov 2026'}
  }
};
