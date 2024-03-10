<template>
	<div>
		<div class="">
			<div class="rig">
				<el-button type="success" @click="dialogFormVisible2 = true" class="addbut">添加数据</el-button>
			</div>
		</div>
		<div class="">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column fixed prop="date" label="日期" width="150">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120">
				</el-table-column>
				<el-table-column prop="province" label="省份" width="120">
				</el-table-column>
				<el-table-column prop="city" label="市区" width="120">
				</el-table-column>
				<el-table-column prop="address" label="地址" width="300">
				</el-table-column>
				<el-table-column prop="zip" label="邮编" width="120">
				</el-table-column>
				<el-table-column label="操作" min-width="">
					<template slot-scope="scope">

						<el-button @click="LookRow(scope.$index,tableData)" type="primary" size="mini">查看</el-button>
						<el-button @click.native.prevent="OptionsRow(scope.$index,tableData)" type="warning"
							size="mini">编辑</el-button>
						<el-button @click="DelectRow(scope.$index,tableData)" type="danger" size="mini">删除</el-button>


						<!-- 查看 -->
						<el-dialog :append-to-body="true" title="地址" :visible.sync="dialogTableVisible">
				 		<el-table :data="tableData2">
								<el-table-column property="date" label="日期" width="150"></el-table-column>
								<el-table-column property="name" label="姓名" width="200"></el-table-column>
								<el-table-column property="province" label="省份"></el-table-column>
								<el-table-column property="city" label="市区"></el-table-column>
								<el-table-column property="address" label="地址"></el-table-column>
								<el-table-column property="zip" label="邮编"></el-table-column>
							</el-table>
						</el-dialog>

						<!-- 修改 -->
						<el-dialog :append-to-body="true" title="地址" :visible.sync="dialogFormVisible">
							<el-form :model="form">
								<el-form-item label="日期" :label-width="formLabelWidth">
									<el-input v-model="form.date" type="date" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item label="姓名" :label-width="formLabelWidth">
									<el-input v-model="form.name" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item label="省份" :label-width="formLabelWidth">
									<el-input v-model="form.province" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item label="市区" :label-width="formLabelWidth">
									<el-input v-model="form.city" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item label="地址" :label-width="formLabelWidth">
									<el-input v-model="form.address" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item label="邮编" :label-width="formLabelWidth">
								<el-input v-model="form.zip" autocomplete="off"></el-input>
								</el-form-item>
							</el-form>
							<div slot="footer" class="dialog-footer">
								<el-button type="primary" @click.native.prevent="OptionsRowOk()">确 定</el-button>
								<el-button @click="dialogFormVisible = false">取 消</el-button>
							</div>
						</el-dialog>

					</template>
				</el-table-column>
			</el-table>
			<!-- 添加 -->
			<el-dialog :append-to-body="true" title="地址" :visible.sync="dialogFormVisible2">
				<el-form :model="form1">
					<el-form-item label="日期" :label-width="formLabelWidth">
						<el-input v-model="form1.date" type="date"></el-input>
					</el-form-item>
					<el-form-item label="姓名" :label-width="formLabelWidth">
						<el-input v-model="form1.name"></el-input>
					</el-form-item>
					<el-form-item label="省份" :label-width="formLabelWidth">
						<el-input v-model="form1.province"></el-input>
					</el-form-item>
					<el-form-item label="市区" :label-width="formLabelWidth">
						<el-input v-model="form1.city"></el-input>
					</el-form-item>
					<el-form-item label="地址" :label-width="formLabelWidth">
						<el-input v-model="form1.address" ></el-input>
					</el-form-item>
					<el-form-item label="邮编" :label-width="formLabelWidth">
				<el-input v-model="form1.zip" ></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button type="primary" @click="adddetail()">添 加</el-button>
					<el-button @click="dialogFormVisible2 = false">取 消</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import Vue from "vue";
	export default {
		methods: {
			//查看
			LookRow(index,row) {
				//刚进去为空
				this.tableData2 = [];
				//JSON.stringify转换成json字符串
				//JSON.parse转换json对象
				this.tableData2.push(JSON.parse(JSON.stringify(this.tableData))[index]);
				this.dialogTableVisible = true;
			},
			//编辑打开弹窗，获取数据
			OptionsRow(index,row) {
				this.dialogFormVisible = true;
				this.selected = index;
				this.form = JSON.parse(JSON.stringify(this.tableData))[index];
			},
			//保存修改的数据
			OptionsRowOk(){
				//数组，key，value
				Vue.set(this.tableData,this.selected,this.form);
				this.dialogFormVisible = false;
			},
			// 删除
			DelectRow(index,rows) {
				this.$confirm('此操作将删除数据，','是否继续？','提示',{
					confirmButtonText:"确定",
					confirmButtonText:"取消",
					type:'warning'
				}).then(()=>{
					this.tableData.splice(index,1);
					this.$message({
						type:'success',
						message:'删除成功',
					})
				})
			},
			// 添加
			adddetail(){
				this.tableData.push({
					date:this.form1.date,
					name:this.form1.name,
					province:this.form1.province,
					city:this.form1.city,
					address:this.form1.address,
					zip:this.form1.zip,
				}),
				this.$message({
					type:'success',
					message:'添加成功',
				})
				this.dialogFormVisible2 =false;
			}

		},

		data() {
			return {
				form:{},
				form1:{},
				tableData2:[],
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1517 弄',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1519 弄',
					zip: 200333
				}, {
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1516 弄',
					zip: 200333
				}],
				dialogTableVisible: false,
				dialogFormVisible: false,
				dialogFormVisible2: false,
				formLabelWidth: '50px'
			}
		}
	}
</script>

<style>
	.rig {
		text-align: right;

	}
</style>
