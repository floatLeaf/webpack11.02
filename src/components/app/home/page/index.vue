<template>
	<section class="car-keyboard">
		<div class="search-wrap">
			<div class="content">
				<span class="icon" v-show="text.length >= 6">能源</span>
				<div class="text">{{text}}</div>
				<i class="cursor"></i>
			</div>

			<div class="btn">查询</div>
		</div>

		<!-- <x-keyboard></x-keyboard> -->
		<div class="keyboard" ref="keyboard">
			<div class="opt">
				<span>关闭</span>
			</div>

			<div class="content content1">
				<div class="key" v-for="n in nums" :key="n">{{n}}</div>
				<div class="key" v-for="letter in letters" :key="letter" :class="{disabled: disabled.indexOf(letter) >= 0}">{{letter}}</div>
				<div class="key-back" @click="cancelText"></div>
			</div>
		</div>

		<div class="hover-content" v-show="current != ''" :style="{top: coordinate.y + 'px', left: coordinate.x + 'px'}">{{current}}</div>
	</section>
</template>

<script>
	// import Keyboard from 'components/admin/common/keyboard.vue';

	export default{
		// components: {
		// 	'x-keyboard': Keyboard
		// },

		data() {
			return { 
				nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
				letters: ["Q","W","E","R","T","Y","U","O","P","A","S","D","F","G","H","J","K","L","X","Z","C","V","B","N","M","港","奥","学"],
				disabled: ["港","奥"],
				current: '',
				coordinate: {
					x: 0,
					y: 0
				},
				text: '',
			}
		},

		mounted() {
			this.keyboard = this.$refs['keyboard'];
			this.keyboard.querySelectorAll('.key').forEach(elem => {
				let text = elem.innerText;
				if (this.disabled.indexOf(text) >= 0) return;

				elem.addEventListener('touchstart', (e) =>{
					this.coordinate = {
						x: elem.offsetLeft + 15,
						y: this.keyboard.offsetTop + elem.offsetTop - 52,
					};
					this.current = text;
				});

				elem.addEventListener('touchend', (e) =>{
					this.current = '';

					if (this.text.length <= 8) {
						this.text += text; 
					}
				});
			});
		},

		methods: {
			cancelText() {
				if (this.text.length > 0) {
					this.text = this.text.slice(0, this.text.length - 1);
				} 
			}
		}
	}
</script>

<style type="text/css" lang="scss"> 
 /*@import './index.scss';*/
</style>