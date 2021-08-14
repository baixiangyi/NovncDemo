<template>
	<view class="login">

		<!-- logo区域 -->
		<view class="logo">
			<view class="logo_box">
				<image src="../../static/logo.png" mode="aspectFit"></image>
			</view>
		</view>

		<!-- 输入框区域 -->
		<view class="content">

			<view class="end-title">
				<text @tap="TapChange(0)" :class="{btna:btnnum == 0}">用户</text>
				<text @tap="TapChange(1)" :class="{btna:btnnum == 1}">管理员</text>
			</view>

			<!-- 用户 -->
			<view class="end-cont" :class="{dis:btnnum == 0}">

				<form @submit="formSubmit_User">

					<view class="uni-form-item">
						<input class="uni-input" name="groupName" placeholder="群组名称" />
					</view>

					<view class="uni-form-item">
						<input class="uni-input" name="userName" placeholder="用户名" />
					</view>

					<view class="uni-form-item">
						<input class="uni-input" placeholder="密码" name="passWord" :password="showPassword" />
						<uni-icons class="uni-icon" type="eye-filled" @click="changePassword"
							:color="!showPassword?'#007AFF':'#999999'" size="17" />
					</view>

					<view class="policy">
						<checkbox-group @change="policy_user">
							<label>
								<checkbox value="隐私政策" />我已阅读同意
							</label>
							<text class="policy_but" @click="policy_click">《EdgeAccess隐私政策》</text>
						</checkbox-group>
					</view>

					<view class="uni-btn-v">
						<button type="primary" form-type="submit">立 即 登 录</button>
					</view>

				</form>

			</view>

			<!-- 管理员 -->
			<view class="end-cont" :class="{dis:btnnum == 1}">

				<form @submit="formSubmit_Admin">

					<view class="uni-form-item">
						<input class="uni-input" name="userName" placeholder="用户名" />
					</view>

					<view class="uni-form-item">
						<input class="uni-input" placeholder="密码" name="passWord" :password="showPassword2" />
						<uni-icons class="uni-icon" type="eye-filled" @click="changePassword2"
							:color="!showPassword2?'#007AFF':'#999999'" size="17" />
					</view>

					<view class="policy">
						<checkbox-group @change="policy_admin">
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

		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				btnnum: 1,

				policyCheck_admin: "",
				policyCheck_user: "",

				msgType: "error",
				messageText: "111",

				showPassword: true,
				showPassword2: true,
			}
		},
		methods: {
			changePassword: function() {
				this.showPassword = !this.showPassword;
			},
			changePassword2: function() {
				this.showPassword2 = !this.showPassword2;
			},

			//tab 改变事件
			TapChange(e) {
				this.btnnum = e;
			},

			//跳转政策页面
			policy_click() {
				uni.navigateTo({
					url: '../policy/policy',
				});
			},

			//隐私政策 选中或取消选中
			policy_user(event) {
				// console.log(event.detail.value[0]); //隐私政策 
				this.policyCheck_user = event.detail.value[0];
			},
			policy_admin(event) {
				// console.log(event.detail.value[0]); //隐私政策 
				this.policyCheck_admin = event.detail.value[0];
			},


			// 管理员 点击“登录”按钮
			formSubmit_Admin: function(e) {
				var formData = e.detail.value;
				// console.log(formData);
			
				if (formData) {
					if (formData.userName == null || formData.userName == "") {
						uni.showToast({
							title: "用户名不得为空",
							icon: 'none',
							duration: 2000
						});
						return;
					}

					if (formData.passWord == null || formData.passWord == "") {
						uni.showToast({
							title: "密码不得为空",
							icon: 'none',
							duration: 2000
						});
						return;
					}

					if (this.policyCheck_admin == undefined || this.policyCheck_admin == "") {
						uni.showToast({
							title: "请勾选同意隐私政策",
							icon: 'none',
							duration: 2000
						});
						return;
					}

					this.$request.post('/admin/login', {
						user_name: formData.userName,
						password: formData.passWord,
						web: 1,
					}).then(res => {
						// console.log(res);

						if (res.data.code == 302) {
							// 取消登录状态，返回登陆界面；
							uni.showToast({
								title: res.data.message,
								icon: 'none',
								duration: 2000
							});
							uni.navigateTo({
								url: '../login/login',
							});
							return;
						}

						if (res.data.status == "S") {
							// 进行参数赋值
							uni.switchTab({
								url: '../Admin/index',
							});

							// uni.navigateTo({
							// 	url: '../Admin/Equipment/Eq_index',
							// });
							let localDomainId = [];
							let localDomainName = [];
							for (var i = 0; i < res.data.message.length; i++) {
								localDomainId.push(res.data.message[i].id);
								localDomainName.push(res.data.message[i].domain_name);
							}
							
							try {
								uni.setStorageSync('loginDomainId', JSON.stringify(localDomainId));
								uni.setStorageSync('loginDomainName', JSON.stringify(localDomainName));
								document.cookie = "status=";
							} catch (e) {
								// error
								uni.showToast({
									title: e,
									icon: 'none',
									duration: 2000
								});
							}

						} else if (res.data.status == "F") {
							// 出现错误，进行"警告"提示；
							uni.showToast({
								title: res.data.message,
								icon: 'none',
								duration: 2000
							});
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

			// 用户 点击“登录”按钮
			formSubmit_User: function(e) {
				var formData = e.detail.value;
				// console.log(formData);
				if (formData) {

					if (formData.groupName == null || formData.groupName == "") {
						uni.showToast({
							title: "群名不得为空",
							icon: 'none',
							duration: 2000
						});
						return;
					}

					if (formData.userName == null || formData.userName == "") {
						uni.showToast({
							title: "用户名不得为空",
							icon: 'none',
							duration: 2000
						});
						return;
					}

					if (formData.passWord == null || formData.passWord == "") {
						uni.showToast({
							title: "密码不得为空",
							icon: 'none',
							duration: 2000
						});
						return;
					}

					if (this.policyCheck_user == undefined || this.policyCheck_user == "") {
						uni.showToast({
							title: "请勾选同意隐私政策",
							icon: 'none',
							duration: 2000
						});
						return;
					}

					this.$request.post('/admin/userlogin', {
						groupName: formData.groupName,
						userName: formData.userName,
						passWord: formData.passWord,
					}).then(res => {
						console.log(res);

						if (res.data.code == 302) {
							// 取消登录状态，返回登陆界面；
							uni.showToast({
								title: res.data.message,
								icon: 'none',
								duration: 2000
							});
							uni.navigateTo({
								url: '../login/login',
							});
							return;
						}

						if (res.data.status == "S") {
							// 进行参数赋值
						} else if (res.data.status == "F") {
							// 出现错误，进行"警告"提示；
							uni.showToast({
								title: res.data.message,
								icon: 'none',
								duration: 2000
							});
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




			//跳转到 "注册" 页面
			reach_Register() {
				uni.navigateTo({
					url: '../Register/Register',
				});
			},

			//跳转到 "找回密码" 页面
			reach_Retrieve() {
				uni.navigateTo({
					url: '../Retrieve/Retrieve',
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
		width: 100%;
		height: 500upx;
		display: flex;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.logo .logo_box {
		width: 150upx;
		height: 150upx;
	}

	.logo .logo_box>image {
		width: 100%;
		height: 100%;
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

	.policy {
		margin: 20upx 0;
	}

	.uni-label-pointer {
		display: inline;
		font-size: 28upx;
	}

	.policy_but {
		color: #00A0FF;
		font-size: 30upx;
	}

	.uni-btn-v>button {
		font-size: 28upx;
		line-height: 2.5;
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
