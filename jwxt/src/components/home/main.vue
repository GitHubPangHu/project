<template>
	<div class="con">
		<el-row>
			<el-col :span="10">
				<div class="temp1">
					<div class="temp11-2">
						<div>
							<img class="temp11-2-1" src="../../assets/user_logo.jpg" alt="">
						</div>
						<div class="temp11-2-2">
							<h3>姓名</h3>
							<p>计算机与通信学院 xxxx班级</p>
						</div>
					</div>

				</div>
			</el-col>
			<el-col :span="14">
				<div class="temp1">
					<div class="temp1-1">
						<div class="temp1-1-1">
							通知
						</div>
						<div class="temp1-1-2">
							...更多
						</div>
					</div>
					<div class="temp1-2" v-for="(notice,index) in notices" :key="index" v-if="index<4">
						<div class="temp1-2-left">
							<span class="temp1-2-1" v-if="notice.istop">
								【置顶】
							</span>
							<span class="temp1-2-2">
								【通知】{{notice.tatle}}
							</span>
						</div>
						<div class="temp1-2-right">
							{{notice.date}}
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
				<div class="temp2">
					<el-table :data="file" style="width: 100%">
						<el-table-column 
						show-overflow-tooltip="true" 
						prop="tatle" 
						label="课表" 
						label-class-name="tabl"
						min-width>
						</el-table-column>
						<el-table-column 
						align="right" 
						prop="date" 
						label="...更多" 
						label-class-name="more"
						min-width="30">
						</el-table-column>
					</el-table>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="temp2">
					
						<div class="temp1-1">
							<div class="temp1-1-1">
								文件
							</div>
							<div class="temp1-1-2">
								...更多
							</div>
						</div>
						<div class="temp1-2" v-for="(notice,index) in file" :key="index" v-if="index<5">
							<div class="temp1-2-left">
								<span class="temp1-2-1" v-if="notice.istop=='true'">
									【置顶】
								</span>
								<span class="temp1-2-2">
									{{notice.tatle}}
								</span>
							</div>
							<div class="temp1-2-right">
								{{notice.date}}
							</div>
						</div>
					
				</div>
				
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
				<div class="temp2 temp2-h">
					<el-table :data="results" style="width: 100%">
						<el-table-column 
						show-overflow-tooltip="true" 
						label-class-name="tabl"
						prop="tatle" 
						label="消息" 
						
						min-width >
						</el-table-column>
						<el-table-column 
						align="right" 
						prop="result" 
						label="...更多" 
						label-class-name="more"
						min-width="30">
						</el-table-column>
					</el-table>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="temp2 temp2-h">
					<el-table :data="results" style="width: 100%">
						<el-table-column 
						show-overflow-tooltip="true" 
						prop="tatle" 
						label="成绩" 
						label-class-name="tabl"
						min-width>
						</el-table-column>
						<el-table-column 
						align="right" 
						prop="result" 
						label="...更多" 
						label-class-name="more"
						min-width="30">
						</el-table-column>
					</el-table>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				notices: [],
				file:[],
				results:[]
				
			}
		},
		methods: {
			getnotices() {
				var that = this
				this.$axios({
					url: this.$urlUtil.NOTICE_URL,
					method: "get"
				}).then(function(resp) {
					console.log(resp.data)
					that.notices = resp.data
				})
				//$axios.get(this.$urlUtil.NOTICE_URL).then(function(resp) {
        //	console.log(resp.data)
        //	that.notices = resp.data
        //})
              },

      getfile() {
                  var that = this
                  this.$axios({
                    url: this.$urlUtil.FILE_URL,
                    method: "get"
                  }).then(function(resp) {
                    console.log(resp.data)
                    that.file = resp.data
                  })

				this.$axios({
					url:this.$urlUtil.FILE,
					method:"get"
				}).then(function(resp){
					that.file=resp.data
				})
				
				this.$axios({
					url:this.$urlUtil.RESULTS,
					method:"get"
				}).then(function(resp){
					that.results=resp.data
				})
			}
		},
		created() {
			this.getnotices()
		}
	}
</script>

<style scoped>
	/* 给element UI组件里的class属性设置全局属性 */
	@import "../../common/main-el.css";
	
	* {
		margin: 0;
		padding: 0;
	}
	.con {
		/* background-color: #ffffff; */

	}
	
	.temp1 {
		height: 200px;
		/* border: 1px solid; */
		overflow: auto;
		margin: 0px 2px;
		margin-left: 5px;
		background-color: #ffffff;
	}

	.temp2 {
		height: 295px;
		/* border: 1px solid; */
		overflow: auto;
		margin: 5px;
		background-color: #ffffff;
	}
	.temp2-h {
		height: 275px;
	}

	.temp3 {
		height: 300px;
		background-color: #ffffff;
		/* border: 1px solid; */
	}
	
	.temp11-2 {
		display: flex;
		height: 200px;
		align-items: center;
		/* justify-content: space-between; */
	}
	.temp11-2-1 {
		border-radius: 50%;
		margin-left: 15px;
		align-items: center;
	}
	.temp11-2-2 {
		text-align: left;
		margin-top: -55px;
		margin-left: 15px;
	}
	.temp11-2-2 p {
		font-size: 14px;
		padding-top: 10px;
		color: #7a7a7a;
	}
	.temp1-1 {
		font-size: 16px;
		display: flex;
		justify-content: space-between;
		padding: 5px 10px;
	}

	.temp1-1-1 {
		font-weight: 800;
		color: #000000;
	}

	.temp1-1-2 {
		color: #337ab7;
	}

	.temp1-1-2:hover {
		cursor: pointer;
		color: #23527c;
		text-decoration: underline;
		/* border-bottom: #23527c solid 1px; */
	}

	.temp1-2 {
		padding: 12px 0px;
		/* border-top: 1px solid #606266; */
		display: flex;
		color: #606266;
		justify-content: space-between;
		text-align: left;
		margin-top: 5px;
		padding: 8px 10px;

	}

	.temp1-2 span {
		font-size: 14px;
	}

	/* .tem1_2:hover {
		background-color: #f0f0f0;
	} */

	.temp1-2-1 {
		color: red;
	}

	.temp1-2:hover {
		background-color: #f0f0f0;
		cursor: pointer;
	}
</style>
