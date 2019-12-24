export default {
  props: {
    type: 'maintenance',
    message: 'Cockpit will be offline for fixes.',
    closeLabel: 'Close',
    closeOnClick: () => console.log('Maintenance function'),
    acceptLabel: 'Know more',
    acceptHref: 'https://www.coorpacademy.com'
  }
};
