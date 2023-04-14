import mock from '../mock';

const notificationPanelDB = [
];

mock.onGet('/api/notification-panel/data').reply(config => {
	return [200, notificationPanelDB];
});
