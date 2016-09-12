<template>
	<header>
		<x-header :left-options="{showBack: false}">
			<a slot="left"><img src="assets/list.png"></a>
			<a slot="left" style="color:#fff;font-size:18px;">最美创意</a>
			<a slot="right"><img src="assets/rang.png" style="width:22px;height:26px;"></a>
			<a slot="right"><img src="assets/search.png" style='height:25px;width:25px;'></a>
		</x-header>
		<tab active-color='#fff' default-color='#fff' :line-width='4'>
	  		<tab-item :selected="demo1 === '所有'" @click="demo1 = '所有'" v-link="{path:'/all'}">所有</tab-item>
	  		<tab-item :selected="demo1 === '分类'" @click="demo1 = '分类'" v-link="{path:'/sort'}">分类</tab-item>
		</tab>
	</header>
	<router-view></router-view>
</template>

<script>
    import all from './components/all'
    import sort from './components/sort'
    import {XHeader,Icon,Tab,TabItem,SassLoader} from 'vux'
    export default {
    	components:{XHeader,Icon,Tab,TabItem},
    	data () {
    		return {
      			demo1: '所有',
    		}
  		}
    }

</script>

<style scoped>
	@import '~vux/dist/vux.css';
  	*{margin:0 auto;padding:0 auto;}
  	li{list-style: none;}
  	img{
  		display:block;
  	}
	header{
		background-color:#4dd299;
		width:100%;
		position:fixed;
		z-index:3;
	}
	div.vux-header{
		background-color:#4dd299;
	}
	.vux-header img{
		height:26px;
		width:26px;
		margin-top:-4px;
	}
	.vux-header a[slot="right"]{
		margin-right:4px;
	}
	div.vux-tab{
		background-color:#4dd299;
	}
</style>