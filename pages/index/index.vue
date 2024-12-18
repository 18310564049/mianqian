<template>
	<view class="viewport">
		<CustomNavbar />
		<view class="content">
			<view class="content-borde">
				<view class="user">
					<image class="user-img"  src="../../static/images/user.png"></image><text class="user-span">账户</text>
				</view>
				<view class="user-input">
					<input class="uni-input" focus placeholder="请输入用户名" />
				</view>
				<view class="password">
					<image class="password-img"  src="../../static/images/password.png"></image>
					<text class="password-span">密码</text>
				</view>
				<view class="password-input">
					<input class="uni-input" focus placeholder="请输入密码" />
				</view>
				<view class="button">
					<button @click="login">登录</button>
				</view>
			</view>
			<view class="logo">
				<image class="image" src="../../static/images/logo.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getHomeBannerAPI
	} from '@/services/home'
	import CustomNavbar from './components/CustomNavbar.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				src:"https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg"
			}
		},
		components: {
			CustomNavbar
		},
		onLoad() {
			this.getHomeBannerData()
		},
		methods: {
			async getHomeBannerData() {
				const res = await getHomeBannerAPI()
				console.log("res", res)
			},
			login(){
				console.log(1111)
				uni.navigateTo({ url: `/pages/project/project?skuId=1111` })
			}
			
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f7f7f7;
		height: 100%;
		overflow: hidden;
	}

	.viewport {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.content {
		border-top-left-radius: 36rpx;
		border-top-right-radius: 36rpx;
		position: absolute;
		bottom: 0;
		height: calc(100% - 195px);
		z-index: 1000;
		background: #fff;
		width: 100%;

		.content-borde {
			display: flex;
			flex-direction: column;
			margin-top: 50rpx;
			justify-content: center;
			padding-left: 60rpx;
			padding-right: 60rpx;
			.user{
				.user-img{
					width: 36rpx;
					height: 36rpx;
					line-height: 44rpx;
					vertical-align: middle;
				}
				.user-span{
					margin-left: 10rpx;
					font-size: 32rpx;
					color: #111111;
					line-height: 44rpx;
					font-weight: 400;
					vertical-align: middle;
				}
				
			}
			.user-input{
					margin-top: 36rpx;
					font-size: 32rpx;
					color: #AEAEAE;
					line-height: 44rpx;
					font-weight: 400;
				}
			.password{
				margin-top: 69rpx;
				font-size: 32rpx;
				color: #111111;
				line-height: 44rpx;
				font-weight: 400;
			
				.password-img{
					width: 36rpx;
					height: 36rpx;
					vertical-align: middle;
					line-height: 44rpx;;
				}
				.password-span{
						vertical-align: middle;
						margin-left: 10rpx;
						font-size: 32rpx;
						color: #111111;
						line-height: 44rpx;
						font-weight: 400;
				}
			}
			.password-input{
				font-size: 32rpx;
				color: #AEAEAE;
				line-height: 44rpx;
				font-weight: 400;
				margin-top: 36rpx;
			}
				button{
					margin-top: 90rpx;
					background: #0078FF;
					border-radius: 12rpx;
					height: 90rpx;
					line-height: 90rpx;
					font-size: 32rpx;
					color: #FFFFFF;
					font-weight: 500;
				}
		}
		.logo{
			position: absolute;
			bottom: 86.4rpx;
			text-align: center;
			display: flex;
			width: 100%;
			justify-content: center;
			.image{
				width: 263rpx;
				height: 64.6rpx;
			}
		}
	}
</style>