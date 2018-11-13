import AdminContainer from 'components/admin/adminContainer';
import Home from 'components/admin/home';
import User from 'components/admin/user';

import home from './home';
import user from './user';

export default [
	{ 
		path: '/admin', 
		component: AdminContainer,
		children: [
			{ path: 'home', component: Home, children: [...home] },
			{ path: 'user', component: User, children: [...user] }, 
		]
	}
];