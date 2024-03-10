<template>
	<div class="aside">
		<div class="titlecon">
			<div class="titletext">
				我的应用
			</div>
			<div class="titleicon">
				<i class="el-icon-s-tools" @click="appset"></i>
			</div>
		</div>


		<el-row>
		  <el-col :span="8" v-if="myapps.length>0" class="cols"  v-for="(myapp,index) in myapps" :key="index" >
			  <div  class="cursor" @click="gotourl(myapps[index].desurl)">
				 <div>
				  <img :src="baseurl+myapps[index].imgurl" alt="">
				 </div>
				 <div>
				 	{{myapps[index].name}}
				 </div>
			  </div>
			  </el-col>
		</el-row>





		<!-- 第二种写法 -->
		<!-- <div class="" v-if="myapps.length>0">
			<el-row v-for="(myapp,index) in myapps" :key="index" v-if="index%3==0"> -->
				<!-- 判断内循环要从外循环开始位置循环且小于外循环的index+3 -->
				<!-- <el-col :span="8" v-for="(myap,indexs) in myapps" v-if="indexs<index+3 && indexs>=index">
					<div class="cursor" @click="gotourl(myapps[index].desurl)">
						<div>
							<img :src="baseurl+myapps[indexs].imgurl" alt="">
						</div>
						<div>
							{{myapps[indexs].name}}
						</div>
					</div>
				</el-col>
			</el-row>
		</div> -->
		
		
		
		
		

		<!-- <div v-if="myapps.length>0">
			<el-row v-for="(myapp,index) in myapps" :key="index" v-if="index%3==0">
				<el-col :span="8" v-if="index<myapps.length">
					
					<div class="cursor" @click="gotourl(myapps[index].desurl)">
						<div>
						 <img :src="baseurl+myapps[index].imgurl" alt="">
						</div>
						<div>
							{{myapps[index].name}}
						</div>
					</div>
				</el-col>
				
				<el-col :span="8" v-if="index+1<myapps.length">
					<div class="cursor" :id='index+1' @click="gotourl(myapps[index].desurl)">
						<div>
						 <img :src="baseurl+myapps[index+1].imgurl" alt="">
						</div>
						<div>
							{{myapps[index+1].name}}
						</div>
					</div>
				</el-col>
				
				<el-col :span="8" v-if="++index+1<myapps.length">
					<div class="cursor" @click="gotourl(myapps[index].desurl)">
						<div>
						 <img :src="baseurl+myapps[index+1].imgurl" alt="">
						</div>
						<div>
							{{myapps[index+1].name}}
						</div>
					</div>
				</el-col>

			</el-row>

		</div> -->


	</div>
</template>

<script>
	export default {
		data() {
			return {
				baseurl: this.$urlUtil.BASE_URL,
				myapps: []
			}
		},
		methods: {
			appset() {
				this.$emit('appset')
			},
			getMyApps() {
				var that = this;
				this.$axios({
					url: this.$urlUtil.MY_APP_URL,
					method: "get"
				}).then(function(resp) {
					// console.log(resp)
					that.myapps = resp.data
					// console.log(that.myapps)
				}).catch(function(e) {
					console.log(e)
				})
			},
			gotourl(url) {
				console.log(url)

				this.$router.push(url)
			}
		},
		created() {
			this.getMyApps()
		}
	}
</script>

<style scoped="scoped">
	.aside {
		background-color: white;
	}

	.titlecon {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 45px;

		border-bottom: solid 1px #f0f0f0;
		padding: 0 20px;
	}

	.titletext {
		font-size: 18px;
		font-weight: 600;
	}

	.titleicon {
		font-size: 25px;
	}

	.el-icon-s-tools:hover {
		cursor: pointer;
	}




	.myappcon {
		margin: 10px 5px;
	}

	.el-row {
		margin-top: 5px;
	}

	.cursor {
		cursor: pointer;
	}


	.cols {
		padding: 15px 0;
	}
</style>
