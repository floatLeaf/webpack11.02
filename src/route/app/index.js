import AppContainer from 'components/app/appContainer';
import Home from 'components/app/home'; 

import home from './home'; 
export default [
	{ 
		path: '/app', 
		component: AppContainer,
		children: [
			{ path: 'home', component: Home, children: [...home] }
		]
	}
];