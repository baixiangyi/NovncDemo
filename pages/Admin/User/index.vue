<template>
	<view class="User_index">

		<!-- 顶部导航栏 -->
		<u-navbar :is-back="true" back-icon-color="#ffffff" title="用户管理" title-color="#ffffff" :background="background">
			<view class="navbar-right" slot="right">
				<view class="message-box right-item">
					<u-icon @click="addUser()" name="plus" color="white"></u-icon>
				</view>
			</view>
		</u-navbar>

		<!-- 搜索栏 -->
		<view class="query">
			<u-search placeholder="搜索项目" v-model="keyword" shape="square" :show-action="false"></u-search>
		</view>

		<!-- 内容 -->
		<view class="content">

			<!-- 数据 -->
			<view class="DataBox">

				<uni-swipe-action>
					<uni-swipe-action-item v-for="(item, index) in swipeList" :right-options="item.option"
						:key="item.id" @click="swipeClick($event, index)">
						<view class="content-box">

							<view class="content_title">
								<text class="content_icon">{{item.status}}</text>
								<text>{{item.user_name}}</text>
							</view>

							<view class="content_details">
								<view class="content_text">
									<text>备注 : {{item.remark}}</text>
								</view>

								<view class="content_text">
									<text>手机号 : {{item.phone}}</text>
								</view>

								<view class="content_text">
									<text>密码 : {{item.password}}</text>
								</view>

							</view>

						</view>
					</uni-swipe-action-item>
				</uni-swipe-action>

			</view>

		</view>


		<view>
			<u-popup v-model="show" mode="center" border-radius="10">
				<view>出淤泥而不染，濯清涟而不妖</view>
			</u-popup>
			<u-button @click="show = true">打开</u-button>
		</view>





	</view>
</template>

<script>
	export default {
		name: "User_index",
		data() {
			return {
				background: {
					backgroundImage: 'linear-gradient(to right, #2e81fd, #3f9bce)'
				},
				keyword: "",
				swipeList: [],
				
				show: false,

			}
		},
		mounted() {
			this.GetData();
		},
		methods: {
			GetData() {
				let options = [{
					text: "编辑",
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: "删除",
					style: {
						backgroundColor: '#dd524d'
					}
				}];

				this.swipeList = [{
					"id": 95,
					"user_name": "baixy",
					"password": "123456",
					"remark": "",
					"phone": "18600930137",
					"email": null,
					"cut_off": "0",
					"status": "已激活",
					"time": "1622711617",
					"status_en": "activated"
				}];

				this.swipeList.forEach(item => {
					item.option = options;
				})


			},

			swipeClick(event, index) {
				console.log("点击了:" + event.content.text);
			},


			addUser() {
				uni.navigateTo({
					url: 'addUser'
				});
			},
		}
	}
</script>

<style scoped>
	.User_index {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}

	.right-item {
		padding-right: 40upx;
		font-size: 42upx;
	}

	.query {
		padding: 30upx;
		box-sizing: border-box;
		width: 100%;
		height: 130upx;
		background-color: #FFFFFF;
		margin-bottom: 20upx;
	}

	.content {
		width: 100%;
		background-color: #FFFFFF;
	}


	.content-box {
		/* height: 400upx; */
		padding: 10upx 27upx 30upx 27upx;
		box-sizing: border-box;
		position: relative;
		background-color: #fff;
		border-bottom-color: #f5f5f5;
		border-bottom-width: 2;
		border-bottom-style: solid;
		overflow-x: hidden;
		overflow-y: auto;
	}

	.content_title {
		line-height: 68upx;
		font-size: 32upx;
		font-weight: bold;
	}

	.content_icon {
		margin-right: 35upx;
		padding: 8upx 10upx;
		box-sizing: border-box;
		font-size: 24upx;
		background-color: #19BE6B;
		color: #FFFFFF;
	}

	.content_text {
		line-height: 48upx;
		font-size: 28upx;
		color: #8a8a8a;
	}
</style>
