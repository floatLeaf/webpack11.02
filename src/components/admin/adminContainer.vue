<template>
	<div class="admin-container">
		<!-- <p>你好</p> -->
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	import { getCookie } from 'lib/common/util';

	export default {
		created() {
			let notNeedLogin = this.$route.meta.notNeedLogin;
			let token = getCookie('token');

			// if (!notNeedLogin) { 
			// 	if (!token) {
			// 		window.location.href = '/login';
			// 	} else {
			// 		this.checkLogin();
			// 	}
			// }
		},

		methods: {
			checkLogin() {

			}
		}
	}
</script>

<style type="text/css" scoped>
	
</style>

