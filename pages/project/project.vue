<template>
	<view class="project">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			<view class="input">
				<input class="project-input" focus placeholder="请输入项目名称/合同名称/主办客户经理" />
			</view>
			<view id="demo1" v-for="item in guessList" :key="item.id" class="scroll-view-item">
				<view class="item-title">
					<view class="item-image">
						<image class="image" src="../../static/images/project.png" mode=""></image>
					</view>

					<view class="item-title-two">
						<view class="title-first">
							<text class="">蓝帆医疗回租项目</text>
						</view>
						<view class="title-seconed">
							<text class="">PYHZ0220230022</text>
						</view>
					</view>
				</view>
				<view class="item-content">
					<view class="item-content-row">
						<text class="item-content-row-left">承租人：</text>
						<text class="item-content-row-right">山东蓝帆新材料有限公司 </text>
					</view>
					<view class="item-content-row">
						<text class="item-content-row-left">租赁类型：</text>
						<text class="item-content-row-right">山东蓝帆新材料有限公司 </text>
					</view>
					<view class="item-content-row">
						<text class="item-content-row-left">合同金额：</text>
						<text class="item-content-row-right">山东蓝帆新材料有限公司 </text>
					</view>
					<view class="item-content-row">
						<text class="item-content-row-left">主办客户经理：</text>
						<text class="item-content-row-right">山东蓝帆新材料有限公司 </text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				scrollTop: 0,
				guessList: [{
					id: 1,
					text: 111
				}, {
					id: 2,
					text: 222
				},{
					id: 3,
					text: 222
				},{
					id: 4,
					text: 222
				}]

			}
		},
		props: {
			skuId: {
				type: String
			}
		},
		components: {},

		onLoad: function(options) {
			console.log(options)
			uni.setNavigationBarTitle({
				title: options.skuId,
			});
		},
		methods: {


		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F6F8FB;
		height: 100%;
		overflow: hidden;
	}
	.project {
		height: 100%;
		.scroll-Y {
			
			margin: 30rpx;
			height: calc(100% - 30rpx);
			.input{
				width: 690rpx; 
				height: 78rpx;
			background: #FFFFFF;
			border-radius: 14rpx;
			margin-bottom: 20rpx;
			.project-input{
				padding-left: 68rpx;
				height: 78rpx;
				
				font-size: 28rpx;
				color: #B6B8BC;
				letter-spacing: 0;
				font-weight: 400;
				line-height: 78rpx;
			}
			}
			.scroll-view-item {
				height: 404rpx;
				width: 690rpx;
				box-sizing: border-box;
				background: #FFFFFF;
				border-radius: 14px;
				padding: 28rpx;
				margin-bottom: 20rpx;

				.item-title {
					height: 92rpx;
					margin-bottom: 20rpx;
					display: flex;

					.item-image {
						height: 92rpx;
						width: 92rpx;
						margin-right: 20rpx;

						.image {
							height: 92rpx;
							width: 92rpx;
						}
					}

					.item-title-two {
						.title-first {
							font-size: 32rpx;
							color: #2A303A;
							letter-spacing: 0;
							line-height: 44rpx;
							font-weight: 400;
						}

						.title-seconed {
							font-size: 26rpx;
							color: #AEB1B8;
							letter-spacing: 0;
							line-height: 36rpx;
							font-weight: 400;
							margin-top: 10rpx;
						}
					}

				}

				.item-content {
					box-sizing: border-box;
					width: 634rpx;
					height: 244rpx;
					padding: 28rpx;
					background: #F6F9FF;
					border-radius: 14rpx;
					.item-content-row{
						margin-bottom: 4rpx;
						.item-content-row-left{
							font-size: 28rpx;
							color: #ADB2B9;
							letter-spacing: 0;
							line-height: 44rpx;
							font-weight: 400;
						}
						.item-content-row-right{
							font-size: 26rpx;
							color: #2A303A;
							letter-spacing: 0;
							line-height: 44rpx;
							font-weight: 400;
						}
					}
				}
			}
		}
	}
</style>