export default {
	props: {
		type: 'maintenance',
		message: 'Cockpit will be offline for fixes.',
		closeButton: {
			label: 'Close',
			onClick: () => {}
		},
		okButton: {
			label: 'Know more',
			onClick: () => {}
		}
	}
};