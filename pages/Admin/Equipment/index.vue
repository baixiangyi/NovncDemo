<template>
	<view class="eq_index">

		<!-- 顶部导航栏 -->
		<u-navbar :is-back="true" back-icon-color="#ffffff" title="设备管理" title-color="#ffffff" :background="background">
			<view class="navbar-right" slot="right">
				<view class="message-box right-item">
					<u-icon @click="addItem()" name="plus" color="white"></u-icon>
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
							<!-- 
								// 备注名	 	hmi_name
								// 设备名称 	sncode
								// 设备型号 	custom_field_three
								// 虚拟ip   	virtual_address
								// 详细地址 	address
								// 到期时间 	time
							-->
							<view class="content_title">
								<text class="content_icon">已激活</text>
								<text>{{item.hmi_name}}</text>
							</view>

							<view class="content_details">
								<view class="content_text">
									<text>设备名称: {{item.sncode}}</text>
								</view>

								<view class="content_text">
									<text>设备型号: {{item.custom_field_three}}</text>
								</view>

								<view class="content_text">
									<text>虚拟ip: {{item.virtual_address}}</text>
								</view>

								<view class="content_text">
									<text>详细地址: {{item.address}}</text>
								</view>

								<view class="content_text">
									<text>到期时间: {{item.time}}</text>
								</view>

							</view>

						</view>
					</uni-swipe-action-item>
				</uni-swipe-action>

			</view>

		</view>

	</view>
</template>

<script>
	export default {
		name: "eq_index",
		data() {
			return {
				background: {
					backgroundImage: 'linear-gradient(to right, #2e81fd, #3f9bce)'
				},
				keyword: "", //搜索参数

				swipeList: [],


			}
		},
		mounted() {
			this.GetData();
		},
		methods: {
			// 进入页面获取数据
			GetData() {
				/*
				this.$request.post('/supply/supplyInfo', {
					limit: 10,
					page: 1,
					hmi_name: "",
				}).then(res => {
					console.log(res);

					if (res.data.code == 302) {
						// 取消登录状态，返回登陆界面；
						uni.showToast({
							title: res.data.data,
							icon: 'none',
							duration: 2000
						});
						uni.navigateTo({
							url: '../../login/login',
						});
						return;
					}

					if (res.data.status == "S") {
						// 成功 进行参数赋值
						this.swipeList.splice(0,this.swipeList.length);
						
						this.swipeList = res.data.data;
						
						let options = [
							{
								text: "定位",
								style: {
									backgroundColor: '#007aff'
								}
							},
							{
								text: "禁用",
								style: {
									backgroundColor: '#f0ad4e'
								}
							},
							{
								text: "删除",
								style: {
									backgroundColor: '#dd524d'
								}
							}
						];
						
						for(let i=0;i<this.swipeList.length;i++){
							this.swipeList[i].option = options;
						}
					} else if (res.data.status == "F") {
						// 出现错误，进行"警告"提示；
						uni.showToast({
							title: res.data.data,
							icon: 'none',
							duration: 2000
						});
					}
				}).catch(error => {
					console.log(error);
				})
				
				*/

				let options = [{
					text: "删除",
					style: {
						backgroundColor: '#dd524d'
					}
				}];

				this.swipeList = [{
					"id": 265,
					"auth_code": "",
					"sncode": "123123333333333",
					"virtual_address": "",
					"real_address": "",
					"custom_field_three": null,
					"cert_name": "vir_1235",
					"password": "",
					"time": "2021-03-19 13:58:49",
					"status": 0,
					"domain_id": 0,
					"cut_off": 0,
					"hmi_name": "123123",
					"hmi_status": "未激活",
					"uid": 71,
					"offline_time": null,
					"address": "上海市上海市浦东新区张江镇创新河桥;秋月路与盛夏路路口西南248米",
					"latitude": "31.207776",
					"longitude": "121.636014",
					"province": "上海市",
					"city": "上海市",
					"area": "浦东新区",
					"product_id": null,
					"position_status": 2,
					"real_ip_address": null,
					"template_id": 0,
					"group_id": 0,
					"imei": null,
					"iccid": null,
					"mcc": null,
					"mnc": null,
					"cell_id": null,
					"lac_id": null,
					"flag": null,
					"province_key": 310000,
					"city_key": 310000,
					"area_key": 310115,
					"province_er": null,
					"city_er": null,
					"template_name": "",
					"addresses": "张江镇创新河桥;秋月路与盛夏路路口西南248米",
					"end_time": "",
					"hmi_status_en": "Not activated"
				}, {
					"id": 266,
					"auth_code": "",
					"sncode": "123123133322111",
					"virtual_address": "",
					"real_address": "",
					"custom_field_three": null,
					"cert_name": "vir_1236",
					"password": "",
					"time": "2021-03-19 13:58:57",
					"status": 0,
					"domain_id": 0,
					"cut_off": 0,
					"hmi_name": "123123",
					"hmi_status": "未激活",
					"uid": 71,
					"offline_time": null,
					"address": "上海市上海市浦东新区秋月路26号",
					"latitude": "31.209639",
					"longitude": "121.632871",
					"province": "上海市",
					"city": "上海市",
					"area": "浦东新区",
					"product_id": null,
					"position_status": 2,
					"real_ip_address": null,
					"template_id": 0,
					"group_id": 0,
					"imei": null,
					"iccid": null,
					"mcc": null,
					"mnc": null,
					"cell_id": null,
					"lac_id": null,
					"flag": null,
					"province_key": 310000,
					"city_key": 310000,
					"area_key": 310115,
					"province_er": null,
					"city_er": null,
					"template_name": "",
					"addresses": "秋月路26号",
					"end_time": "",
					"hmi_status_en": "Not activated"
				}, ];

				this.swipeList.forEach(item => {
					item.option = options;
				})


			},

			// 点击 右滑出现的按钮
			swipeClick(e, index) {

				if (e.content.text === '定位') {
					console.log("点击了定位");
				} else if (e.content.text === '禁用') {
					console.log("点击了禁用");
				} else if (e.content.text === '删除') {
					console.log("点击了删除");

					// uni.showToast({
					// 	title: `点击了${e.content.text}按钮`,
					// 	icon: 'none'
					// });
				}
			},

			// 导航栏 右侧 添加
			addItem(){
				uni.navigateTo({
				  url: 'additem'
				});
			},




		}
	}
</script>

<style scoped>
	.eq_index {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}
	.right-item{
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
