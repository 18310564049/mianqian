<template>
	<view class="viewport">
		<CustomNavbar />
		<view class="content">
			<view class="content-borde">
				<view class="user">
					<image class="user-img"  src="../../static/images/user.png"></image><text class="user-span">账户</text>
				</view>
				<view class="user-input">
					<input class="input" focus placeholder="请输入用户名" v-model="account" />
				</view>
				<view class="password">
					<image class="password-img"  src="../../static/images/password.png"></image>
					<text class="password-span">密码</text>
				</view>
				<view class="password-input">
					<input class="input" focus placeholder="请输入密码" v-model="password" />
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
		loginApi
	} from '@/services/home'
	import CustomNavbar from './components/CustomNavbar.vue'
	export default {
		data() {
			return {
				password: '',
				password:""
			}
		},
		components: {
			CustomNavbar
		},
		onLoad() {
			this.login()
		},
		methods: {
			async login() {
				const res = await loginApi({
					appName:"cl2015",
					account:"puyin",
					password:"Puyin@20241219sql",
				})
				console.log("res", res)
			},
			login1(){
				var waitModule = uni.requireNativePlugin('WaitModule')
				const modal = uni.requireNativePlugin('modal');
				modal.toast({
					message: 1111,
					duration: 1.5
				});
				console.log(1111)
				let obj = {
					"loginIp":'cloud.anychat.cn',
					"loginPort":'8906',
					"loginAppId":'3E04F084-E529-4FC1-8BCC-DC4B26AF87CA',
					"sysID":'20',
					"appId":'3E04F084-E529-4FC1-8BCC-DC4B26AF87CA',
					"prodCode":'zhxfdk001',
					"prodName":'222',
					"productSubType":'1',
					"busType":'2',
					"busTypeName":'综合消费贷款_1',
					"busSerialNumber":'73aff778110941f399b165e3a9dd75b1',
					"busSerialNumberDesc":'消费贷款',
					"roomNo":"5141007",
					"cstMgrName":"信贷_超管",
					"cstMgrNo":"loan_super",
					"cstMgrOrg":"bairui",
					"cstMgrOrgName":"佰锐科技商户",
					"custName":"祖永园"
				}
				
				
				waitModule.testAsyncFunc(obj,
									(ret) => {
										modal.toast({
											message: ret,
											duration: 1.5
										});
									})
				// uni.navigateTo({ url: `/pages/project/project?skuId=1111` })
			}
			
		}
	}
</script>

<style lang="scss" >
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
					height: 66rpx;
					border-bottom: 1px solid #E7E7E7;;
					.input{
						font-size: 32rpx;
						color: #AEAEAE;
						line-height: 44rpx;
						font-weight: 400;
					}
					
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
				height: 66rpx;
				border-bottom: 1px solid #E7E7E7;;
				margin-top: 36rpx;
				.input{
					font-size: 32rpx;
					color: #AEAEAE;
					line-height: 44rpx;
					font-weight: 400;
				}
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