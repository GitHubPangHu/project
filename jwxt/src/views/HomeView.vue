<template>
	<div class="con">
		<div class="header">
			<Header></Header>
		</div>
		<div class="menu">
			<Menu></Menu>
		</div>

		<div class="maincon">
			<div class="aside">
				<Aside @appset='homeappset'></Aside>
			</div>
			<div class="main">
				<Main></Main>
			</div>
		</div>
		<div class="footer">
			<Bottom></Bottom>
		</div>



		<!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->
		<!-- 弹窗 -->
		<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="活动名称" :label-width="formLabelWidth">
					<el-input v-model="form.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="活动区域" :label-width="formLabelWidth">
					<el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>



	</div>
</template>

<script>
	import Header from '../components/home/header.vue'
	import Menu from '../components/home/menu.vue'
	import Aside from '../components/home/aside.vue'
	import Main from '../components/home/main.vue'
	import Bottom from '../components/home/bottom'
	export default {
		data() {
			return {
				dialogFormVisible: false,
				form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			formLabelWidth: '120px'
			}
			
		},
		methods:{
			homeappset(){
				this.dialogFormVisible=true;
			}
		},
		components: {
			Header,
			Menu,
			Aside,
			Main,
      Bottom
		}
	}
</script>

<style>
	.con {
		background-color: #f3f3f3;
	}

	.maincon {
		display: flex;
		margin: 15px 55px;
		
		/* background-color: #f0f0f0; */
	}

	.aside {
		width: 400px;
		/* height: 450px; */
		/* border: 1px solid red; */
		margin-right: 5px;
	}

	.main {
		width: 100%;
		/* height: 600px; */
		/* border: 2px solid red; */
	}
</style>
