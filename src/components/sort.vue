<template>
	<div class="s-content">
		<div class="hotWord">
			<div>
				<h3>今日热词</h3>
			</div>
			<ul>
				<li v-link="">科技</li>
				<li v-link="">爱情</li>
				<li v-link="">电影混剪</li>
				<li v-link="">旅游</li>
				<li v-link="">MATERIAL DESIGN</li>
				<li v-link="">游戏</li>
				<li v-link="">ANDREN HUANG</li>
				<li v-link="">舞蹈</li>
				<li v-link="">IPAD AIR</li>
			</ul>
		</div>	
		<div class="sort">
			<div>
				<h3>分类</h3>
			</div>
			<ul>
				<li v-link=""></li>
				<li v-link=""></li>
				<li v-link=""></li>
				<li v-link=""></li>
				<li v-link=""></li>
				<li v-link=""></li>
				<li v-link=""></li>
				<li v-link=""></li>
				<li v-link=""></li>
				<li v-link=""></li>
				<li v-link=""></li>
				<li v-link=""></li>
			</ul>
		</div>
	</div>
</template>


<style>
	.s-content{
		width:100%;
		overflow-y:auto;
		position:absolute;
		top:90px;
	}
</style>
