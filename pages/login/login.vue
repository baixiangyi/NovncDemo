<template>
	<view class="login">

		<!-- logo区域 -->
		<view class="logo">
			<image src="../../static/logo.png" mode="aspectFit"></image>
		</view>

		<!-- 输入框区域 -->
		<view class="content">

			<view class="end-title">
				<text @tap="TapChange(0)" :class="{btna:btnnum == 0}">用户</text>
				<text @tap="TapChange(1)" :class="{btna:btnnum == 1}">管理员</text>
			</view>

			<!-- 用户 -->
			<view class="end-cont" :class="{dis:btnnum == 0}">

				<form @submit="formSubmit">

					<view class="uni-form-item">
						<input class="uni-input" name="groupName" placeholder="群组名称" />
					</view>

					<view class="uni-form-item">
						<input class="uni-input" name="userName" placeholder="用户名" />
					</view>

					<view class="uni-form-item">
						<input class="uni-input" name="passWord" placeholder="密码" />
					</view>

					<view class="policy">
						<checkbox-group @change="policy_change">
							<label>
								<checkbox value="隐私政策" />我已阅读同意
							</label>
							<text class="policy_but" @click="policy_click">《EdgeAccess隐私政策》</text>
						</checkbox-group>
					</view>

					<view class="uni-btn-v">
						<button type="primary" form-type="submit">立 即 登 录</button>
					</view>

					<view class="re">
						<text class="Register" @click="reach_Register">注册</text>
						<text class="retrieve" @click="reach_Retrieve">忘记密码？</text>
					</view>

				</form>

			</view>

			<!-- 管理员 -->
			<view class="end-cont" :class="{dis:btnnum == 1}">
				　
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				btnnum: 0,
			}
		},
		methods: {
			//tab 改变事件
			TapChange(e) {
				this.btnnum = e;
			},

			//跳转政策页面
			policy_click() {
				uni.navigateTo({
					url: '../index/index',
				});
			},
			//隐私政策 选中或取消选中
			policy_change(event) {
				console.log(event.detail.value[0]); //隐私政策 
			},


			//点击“登录”按钮
			formSubmit: function(e) {
				// console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value));

				var formData = e.detail.value;
				console.log(formData)
				if (formData) {

					uni.request({
						url: '',
						// header: {
						// 	'custom-header': 'hello' //自定义请求头信息
						// }
						method: 'POST',
						timeout: 20000,
						data: {
							groupName: formData.groupName,
							userName: formData.userName,
							passWord: formData.passWord,
						},
						success: (res) => {
							console.log(res.data);
							this.text = 'request success';
						},
						fail: (err) => {
							uni.showToast({
								title: "登陆发生错误！！！",
								icon: "none"
							});
						},
						complete: (com) => {
							console.log("接口调用结束的回调函数（调用成功、失败都会执行）");
						},
					});

				} else {
					// 账号密码填入错误 显示提示
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
			},

			//跳转到 "注册" 页面
			reach_Register() {
				uni.navigateTo({
					url: '',
				});
			},
			//跳转到 "找回密码" 页面
			reach_Retrieve() {
				uni.navigateTo({
					url: '',
				});
			},

		}
	}
</script>


<style scoped>
	.login {
		height: 100%;
	}

	/* logo区域 */
	.logo {
		height: 200upx;
		margin-top: 180upx;
		margin-bottom: 80upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.logo>image {
		width: 100%;
		height: 70%;
	}

	/* 输入内容区域 */
	.content {
		padding: 0 60upx;
		box-sizing: border-box;
	}

	.end-title {
		margin-bottom: 50upx;
	}

	.end-title text {
		display: inline-block;
		width: 18%;
		font-weight: 550;
		font-size: 32upx;
		color: #888888;
	}

	.end-cont {
		display: none;
	}

	.end-title text.btna {
		color: #00A0FF;
	}

	.dis {
		display: block;
	}

	.uni-form-item {
		margin: 20upx 0;
		box-sizing: border-box;
		/* border: 1px solid #C0C0C0; */
		height: 80upx;
		border-radius: 80upx;
	}

	.uni-input {
		line-height: 80upx;
		height: 80upx;
		padding: 0 20upx;
		box-sizing: border-box;
		background-color: #DCDCDC;
		border-radius: 10upx;
	}

	.policy {
		margin: 20upx 0;
	}

	.uni-label-pointer {
		display: inline;
		font-size: 30upx;
	}

	.policy_but {
		color: #00A0FF;
		font-size: 30upx;
	}

	.uni-btn-v>button {
		font-size: 30upx;
		line-height: 3;
	}


	.re {
		margin-top: 20upx;
	}

	.Register {
		display: inline-block;
		width: 50%;
		text-align: left;
		font-size: 26upx;
	}

	.retrieve {
		display: inline-block;
		width: 50%;
		text-align: right;
		font-size: 26upx;
	}
</style>
