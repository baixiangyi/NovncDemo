<template>
	<view class="Admin_index">
		<!-- 顶部导航栏 -->
		<u-navbar :is-back="false" title="管理中心" title-color="#ffffff" :background="background"></u-navbar>

		<view class="content">

			<view class="title">
				<text>我的管理</text>
			</view>

			<!-- 设备管理 -->
			<view class="eqBox Box" @click="Arrive_eq">
				<view class="BoxLeft">
					<view class="BoxName">
						<text>设备管理</text>
					</view>

					<view class="BoxInt">
						<text>设备、用户</text>
					</view>

					<view class="BoxNum">
						<text>{{eqNum}} 项功能</text>
					</view>
				</view>

				<view class="BoxRight">
					<view class="iconBox"></view>
				</view>

			</view>

			<!-- 用户管理 -->
			<view class="userBox Box" @click="Arrive_user">
				<view class="BoxLeft">
					<view class="BoxName">
						<text>用户管理</text>
					</view>

					<view class="BoxInt">
						<text>添加新用户以及修改备注</text>
					</view>

					<view class="BoxNum">
						<text>{{userNum}} 项功能</text>
					</view>
				</view>

				<view class="BoxRight">
					<view class="iconBox"></view>
				</view>
			</view>

			<!-- 物联网卡管理 -->
			<view class="inteBox Box" @click="Arrive_inte">
				<view class="BoxLeft">
					<view class="BoxName">
						<text>物联网卡管理</text>
					</view>

					<view class="BoxInt">
						<text>查看状态与流量</text>
					</view>

					<view class="BoxNum">
						<text>{{inteNum}} 项功能</text>
					</view>
				</view>

				<view class="BoxRight">
					<view class="iconBox"></view>
				</view>
			</view>

			<!-- 远程服务 -->
			<view class="serviceBox Box" @click="Arrive_service">
				<view class="BoxLeft">
					<view class="BoxName">
						<text>远程服务</text>
					</view>

					<view class="BoxInt">
						<text>管理与添加群组</text>
					</view>

					<view class="BoxNum">
						<text>{{serviceNum}} 项功能</text>
					</view>
				</view>

				<view class="BoxRight">
					<view class="iconBox"></view>
				</view>
			</view>
			
		</view>
		

	</view>
</template>

<script>
	export default {
		name: "Admin_index",
		data() {
			return {
				background:{
					backgroundImage: 'linear-gradient(to right, #2e81fd, #3f9bce)'
				},
				eqNum: "1",
				userNum: "1",
				inteNum: "1",
				serviceNum: "1",
			}
		},
		mounted(){},
		methods: {
			Arrive_eq(){
				uni.navigateTo({
					// url: 'test?id=1&name=uniapp'
					url:"./Equipment/index",
				});
			}, 
			Arrive_user(){
				uni.navigateTo({
					url:"./User/index",
				});
			}, 
			Arrive_inte(){
				uni.navigateTo({
					url:"./Inte/index",
				});
			}, 
			Arrive_service(){
				uni.navigateTo({
					url:"./Service/index",
				});
			},
		}
	}
</script>

<style>
	
</style>

<style scoped>
	.content {
		padding: 40upx 30upx 0 30upx;
		box-sizing: border-box;
		padding-bottom: var(--window-bottom);
	}

	.title {
		letter-spacing: 2upx;
		margin-bottom: 20upx;
		font-size: 32upx;
	}
	
	.Box{
		width: 100%;
		height: 200upx;
		margin-bottom: 20upx;
		display: flex;
		flex-wrap: nowrap;
		padding: 30upx 30upx 10upx 40upx;
		box-sizing: border-box;
	}
	
	.eqBox {
		background: url(../../static/eq.png) no-repeat center;
		background-size: 100% 100%;
	}

	.userBox {
		background: url(../../static/user.png) no-repeat center;
		background-size: 100% 100%;
	}

	.inteBox {
		background: url(../../static/Inte.png) no-repeat center;
		background-size: 100% 100%;
	}

	.serviceBox {
		background: url(../../static/service.png) no-repeat center;
		background-size: 100% 100%;
	}

	.BoxLeft {
		flex: 1;
	}
	.BoxLeft text{
		font-size: 24upx;
		color: #FFFFFF;
	}
	.BoxLeft .BoxName text{
		font-size: 30upx;
	}
	.BoxName {}

	.BoxInt {	}

	.BoxNum {
		margin-top: 40upx;
	}

	.BoxRight {
		width: 40%;
		position: relative;
	}

	.iconBox {
		position: absolute;
		top: 50upx;
		right: 80upx;
		display: inline-block;
		width: 90upx;
		height: 90upx;
		
	}
	.eqBox .iconBox{
		background: url(../../static/eq_icon.png) no-repeat center;
		background-size: 100% 100%;
	}
	.userBox .iconBox{
		background: url(../../static/user_icon.png) no-repeat center;
		background-size: 100% 100%;
	} 
	.inteBox .iconBox{
		background: url(../../static/Inte_icon.png) no-repeat center;
		background-size: 100% 100%;
	} 
	.serviceBox .iconBox{
		background: url(../../static/service_icon.png) no-repeat center;
		background-size: 100% 100%;
	}
</style>
