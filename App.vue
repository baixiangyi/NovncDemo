<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>


<style lang="scss">
@import "uview-ui/index.scss";
</style>

<style>
	/*每个页面公共css */
	page {
		width: 100%;
		height: 100%;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}

	uni-checkbox-group {
		width: 100% !important;
	}

	uni-checkbox-group uni-label {
		width: 100% !important;
		display: inline-flex;
	}
	uni-checkbox{
		vertical-align: middle!important;
	}
	uni-checkbox .uni-checkbox-wrapper{
		vertical-align: baseline!important;
	}
	/*checkbox 选项框大小  */
	uni-checkbox .uni-checkbox-input {
		width: 30upx !important;
		height: 30upx !important;
	}

	/*checkbox选中后样式  */
	uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
		background: #3D7EFF;
		border-color: #3D7EFF;
	}

	/*checkbox选中后图标样式  */
	uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked::before {
		width: 20upx;
		height: 20upx;
		line-height: 20upx;
		text-align: center;
		font-size: 20upx;
		color: #fff;
		background: transparent;
		/* transform: translate(-70%, -50%) scale(1);
		-webkit-transform: translate(-70%, -50%) scale(1); */
	}
</style>
