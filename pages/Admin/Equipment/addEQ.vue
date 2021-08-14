<template>
	<view class="eq_AddEQ">
		
		<!-- 顶部导航栏 -->
		<u-navbar :is-back="true" back-icon-color="#ffffff" title="新增设备" title-color="#ffffff" :background="background">
			<view class="navbar-right" slot="right">
				<view class="message-box right-item">
					<text @click="commit()">完成</text>
				</view>
			</view>
		</u-navbar>
		
		<!-- 内容 -->
		<view class="content">
			
			<view class="title">
				<text>注： 设备名、备注名为必填项！</text>
			</view>
			
			<view class="content_box">
				
				<view class="input_box">
					<view class="text">
						设备名（S / N）
					</view>
					<view class="input">
						<u-input v-model="hmi_name" type="text" placeholder="请输入设备名" />
					</view>
				</view>
				
				<view class="input_box">
					<view class="text">
						备注名
					</view>
					<view class="input">
						<u-input v-model="remarks" type="text" placeholder="请输入备注名" />
					</view>
				</view>
				
				<view class="input_box">
					<view class="text">
						型号
					</view>
					<view class="input">
						<u-input v-model="custom_field_three" type="text" placeholder="最多20个字符自出数字、字母、横线" />
					</view>
				</view>
				
				<view class="input_box">
					<view class="text">
						授权码
					</view>
					<view class="input">
						<u-input v-model="code" type="text" placeholder="请输入授权码" />
					</view>
				</view>
				
				
			</view>
			
		</view>
		
		
		
		
		
		
	</view>
</template>

<script>
	export default {
		name: "eq_AddEQ",
		data() {
			return {
				background: {
					backgroundImage: 'linear-gradient(to right, #2e81fd, #3f9bce)'
				},
				
				hmi_name:"", 
				remarks:"", 
				custom_field_three:"", 
				code:"",
				
			}
		},
		mounted() {},
		methods: {
			commit(){
				
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
	.title{
		text-align: center;
		color: red;
		padding: 20upx 0;
	}
	.content_box{
		padding: 40upx 50upx;
		box-sizing: border-box;
		background-color: #FFFFFF;
	}
	.input_box{
		margin-bottom: 30upx;
	} 
	.text{
		font-size: 28upx;
		line-height: 70upx;
	} 
	.input .u-input{
		background-color: #f7f7f7;
		padding: 0 20upx !important;
		box-sizing: border-box;
	}
	
</style>
