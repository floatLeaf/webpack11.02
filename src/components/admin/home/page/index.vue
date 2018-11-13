<template>
	<div :class="Styles.pageWrap">
		<h1 :class="Styles.text">{{text}}</h1>
	</div>
</template>

<script>
	import Styles from './index.scss';
	export default{
		data() {
			return {
				Styles,
				text: '是一个好人是一个好人是一个好人'
			}
		}
	}
</script>

<style type="text/css" lang="scss"> 
	div {
		color: #444;
		h1 {
			font-size: 25px;
		}
	}
</style>