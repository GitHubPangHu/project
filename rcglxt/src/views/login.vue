<template>
	<div>
		<div class="login">
			<h1>人才管理登录</h1>
			<el-form :model="DefFrom" :rules="rules" ref="DefFrom" label-width="100px">
				<el-form-item label="用户名" prop="user" style="color: red;">
					<el-input v-model="DefFrom.user"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pwd">
					<el-input type="password" v-model="DefFrom.pwd"></el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="submitForm('DefFrom')">登录</el-button>
					<el-button @click="resetForm('DefFrom')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				DefFrom: {
					user: '',
					pwd: '',
				},
				rules: {
					pwd: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 10,
							message: '请输入正确的密码格式',
							trigger: 'blur'
						},
					],
					user: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 10,
							message: '请输入正确的用户名格式',
							trigger: 'blur'
						},
					],
				}
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						if (this.DefFrom.user == "admin" && this.DefFrom.pwd == "1234") {
							this.$router.push('/index')
						}
					} else {
						this.$message.error("用户名或密码错误！")
						return false;
					}
				})
			}
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	}
</script>

<style>
	body {
		background-image: url(https://picsum.photos/1920/1080?random=1);
		background-size: 120%;
	}

	.login {
		background-color: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(10px);
		border-radius: 20px;
		border: 1px solid #797979;
		padding: 50px;
		width: 400px;
		z-index: 1;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.login>h1 {
		margin: auto;
		margin-bottom: 10px;
		text-align: center;
	}
</style>
