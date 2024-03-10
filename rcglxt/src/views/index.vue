<template>
	<div>
		<el-container>
			<el-aside class="left-menu">
				<el-menu router :default-openeds="['1']" 
				v-for="(item,index) in this.$router.options.routes"
					:key="index">
					<el-submenu :index="index+''">
						<template slot="title">
							{{item.name}}
						</template>
						<el-menu-item 
						v-for="(item1,index1) in item.children" 
						:key="index1" :index="item1.path">
							{{item1.name}}
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>

			<!-- 头部 -->
			<el-container>
				<el-header class="header-menu">
					<h2>信息统计</h2>
				</el-header>
				<!-- 中间主体部分 -->
				<el-main class="main-menu">
					<router-view> </router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>

	.left-menu {
		width: 200px;
		color: white;
		backdrop-filter: blur(10px);
		border: 1px solid #797979;
		border-radius: 5px;
		margin: 2px;
	}

	.header-menu {
		background-color: rgba(187, 187, 187, 0.5);
		backdrop-filter: blur(10px);
		border: 1px solid #797979;
		border-radius: 5px;
		margin-left: 2px;
		text-align: center;
		margin: 2px;
	}

	.main-menu {
		background-color: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(10px);
		border: 1px solid #797979;
		border-radius: 5px;
		margin-left: 2px;
		text-align: center;
		margin: 2px;
	}
</style>
