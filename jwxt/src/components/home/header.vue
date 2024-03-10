<template>
	<div class="con">
		<div class="titlecon">
			<div class="titleimg">
				<img src="../../assets/logo_jw_w.png" alt="">
			</div>
			<div class="titletext">
				江苏电子信息职业学院 教务系统
			</div>
		</div>
		<div class="userlogo">
			<img src="../../assets/user_logo.jpg" alt="">
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.con {
		display: flex;
		justify-content: space-between;
		height: 70px;
		background-color: #0483d4;
	}
	.titlecon {
		display: flex;
		align-items: center;
		font-size: 23px;
		margin-left: 30px;
		color: white;
	}
	
	.userlogo {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 70px;
		margin-right: 60px;
	}
	.userlogo img{
		height: 40px;
		width: 40px;
		border-radius: 50%;
	}
	.userlogo:hover {
		cursor: pointer;
		background-color: lightskyblue;
	}
</style>