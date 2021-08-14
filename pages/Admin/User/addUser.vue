<template>
	<view class="eq_AddItem">
		
		<!-- 顶部导航栏 -->
		<u-navbar :is-back="true" back-icon-color="#ffffff" title="新增用户" title-color="#ffffff" :background="background">
			<view class="navbar-right" slot="right">
				<view class="message-box right-item">
					<text @click="commit()">完成</text>
				</view>
			</view>
		</u-navbar>
		
		<!-- 内容 -->
		<view class="content">
			
			<view class="content_box">
				
				<view class="input_box">
					<view class="text">
						用户名
					</view>
					<view class="input">
						<u-input v-model="UserName" type="text" placeholder="请输入用户名" />
					</view>
				</view>
				
				<view class="input_box">
					<view class="text">
						手机号
					</view>
					<view class="input">
						<u-input v-model="PhoneNum" type="text" placeholder="请输入手机号" />
					</view>
				</view>
				
				<view class="input_box">
					<view class="text">
						验证码
					</view>
					<view class="CodeInput">
						<u-input v-model="CodeNum" type="text" placeholder="请输入验证码" />
						<view class="CodeBut">
							<text v-if="CodeShow" @click="CodeNum_Get">获取验证码</text>
							<text v-else>{{CodeCount}} S</text>
						</view>
					</view>
				</view>
				
				<view class="input_box">
					<view class="text">
						密码
					</view>
					<view class="input">
						<u-input v-model="Password" type="password" placeholder="请输入密码" />
					</view>
				</view>
				
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		name: "eq_AddItem",
		data() {
			return {
				background: {
					backgroundImage: 'linear-gradient(to right, #2e81fd, #3f9bce)'
				},
				
				UserName:"",  
				PhoneNum:"",  
				CodeNum:"",  
				Password:"",
				
				CodeShow:true,
				CodeCount:60,
				
			}
		},
		mounted() {},
		methods: {
			commit(){},
			
			// 获取验证码
			CodeNum_Get(){
				this.CodeShow = false;
				let setTime = setInterval(()=>{
					this.CodeCount--;
					if(this.CodeCount == 0){
						clearInterval(setTime);
						this.CodeShow = true;
					}
				},1000)
			},
		}
	}
</script>

<style scoped>
	.eq_AddItem{
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}
	.right-item{
		padding-right: 40upx;
		font-size: 32upx;
		color: #FFFFFF;
	}
	.content{
		margin-top: 30upx;
	}
	.content_box{
		padding: 40upx 50upx;
		box-sizing: border-box;
		background-color: #FFFFFF;
	}
	.input_box{
		margin-bottom: 30upx;
	} 
	
	.CodeInput{
		position: relative;
	} 
	.CodeInput .u-input{
		padding:0 200upx 0 25upx !important ;
		box-sizing: border-box;
		background-color: #f7f7f7;
	}
	.CodeBut{
		width: 180upx;
		text-align: center;
		font-size: 24upx;
		position: absolute;
		top: 18upx;
		right: 0upx;
	}
	
	
	.text{
		font-size: 28upx;
		line-height: 70upx;
	} 
	.input .u-input{
		background-color: #f7f7f7;
		padding: 0 25upx !important;
		box-sizing: border-box;
	}
	
</style>
