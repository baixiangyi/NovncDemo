<!-- 注册 -->
<template>
	<view class="Register">

		<view class="content">

			<view class="title">
				<text>账号注册</text>
			</view>

			<view class="from_box">

				<form @submit="formSubmit">

					<view class="uni-form-item">
						<input class="uni-input" name="cellPhone" placeholder="手机号" />
					</view>

					<view class="uni-form-item">
						<input class="uni-input CodeIpt" name="Code" placeholder="验证码" />
						<text class="CodeText" v-if="CodeShow" @click="GetCode">获取验证码</text>
						<text class="CodeText" v-else>{{CodeNum}}s</text>
					</view>

					<view class="uni-form-item">
						<input class="uni-input" placeholder="设置密码" name="passWord" :password="showPassword" />
						<uni-icons class="uni-icon" type="eye-filled" @click="changePassword" :color="!showPassword?'#007AFF':'#999999'" size="17" />
					</view>

					<view class="uni-form-item">
						<input class="uni-input" placeholder="再次确认密码" name="passWordCon" :password="showPassword2" />
						<uni-icons class="uni-icon" type="eye-filled" @click="changePassword2" :color="!showPassword2?'#007AFF':'#999999'" size="17" />
					</view>

					<view class="uni-btn-v">
						<button type="primary" form-type="submit">确 定</button>
					</view>
				</form>

				<view class="re">
					<text @click="BackLoginClick">返回登陆</text>
				</view>
				　
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				CodeNum: 60,
				CodeShow: true,
				showPassword: true,
				showPassword2: true,
			}
		},
		methods: {
			// 确认 按钮
			formSubmit: function(e) {
				var formData = e.detail.value;

				if (formData) {

					this.$request.post("", {

					}).then(res => {
						console.log(res)

						// let code = res.data.code;
						// let status = res.data.status;

						if (res.data.code == 302) {
							// 取消登录状态，返回登陆界面；
							return;
						}

						if (res.data.status == "S") {
							// 进行参数赋值
						} else if (res.data.status == "F") {
							// 出现错误，进行"警告"提示；
						}

					}).catch(error => {
						reject(error)
					})

				} else {
					// 账号密码填入错误 显示提示
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
			},

			// 获取验证码
			GetCode() {
				this.CodeShow = false;

				let codeNum = setInterval(() => {
					this.CodeNum--;
					if (this.CodeNum === 0) {
						clearInterval(codeNum);
						this.CodeShow = true;
					}
				}, 1000)

			},

			changePassword: function() {
				this.showPassword = !this.showPassword;
			},
			changePassword2: function() {
				this.showPassword2 = !this.showPassword2;
			},

			// 返回登录页
			BackLoginClick() {
				uni.navigateTo({
					url: '../login/login',
				});
			},


		}
	}
</script>


<style scoped>
	.content {
		padding: 280upx 60upx 0 60upx;
		box-sizing: border-box;
	}

	.title {
		margin-bottom: 50upx;
	}

	.title>text {
		width: 18%;
		font-weight: 550;
		font-size: 32upx;
	}


	.uni-form-item {
		margin: 20upx 0;
		box-sizing: border-box;
		height: 72upx;
		border-radius: 80upx;
		position: relative;
	}

	.uni-input {
		line-height: 72upx;
		height: 72upx;
		padding: 0 20upx;
		font-size: 28upx;
		box-sizing: border-box;
		background-color: #e8e6e6;
		border-radius: 8upx;
	}

	.CodeIpt {
		padding-right: 200upx;
		box-sizing: border-box;
	}

	.CodeText {
		position: absolute;
		top: 20upx;
		right: 30upx;
		font-size: 26upx;
		color: #8a888a;
	}


	.uni-btn-v {
		margin-top: 50upx;
	}

	.uni-btn-v>button {
		font-size: 28upx;
		line-height: 2.5;
	}

	.re {
		text-align: center;
		margin-top: 40upx;
	}

	.re>text {
		color: #a2a0a0;
		font-size: 30upx;
	}

	.uni-icon {
		font-family: uniicons;
		font-size: 30upx;
		font-weight: normal;
		font-style: normal;
		width: 30upx;
		height: 30upx;
		line-height: 30upx;
		position: absolute;
		top: 20upx;
		right: 30upx;
	}

</style>
