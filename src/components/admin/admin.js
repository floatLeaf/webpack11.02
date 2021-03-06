import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../../route/admin';
import 'assets/admin/style/base.scss';
Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
	  	if (savedPosition) {
	    	return savedPosition
	  	} else {
	    	return { x: 0, y: 0 }
	  	}
	}
});

new Vue({
	el: '#app',
	router
});
