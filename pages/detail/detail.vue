<template>
	<view class="detail">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			
			<view   class="scroll-view-item">
				<view class="item-title" @click="toogle(1)">
					<text class="span">合同基本信息</text>
					<view class="icon">
						<image class="image" v-if="item1" src="../../static/images/up.png"></image>
						<image class="image" v-else="!item1" src="../../static/images/down.png"></image>
					</view>
				</view>
				<view class="item-content" v-show='item1'>
					<view class="item-content-row">
						<view class="item-content-row-left">承租人：</view>
						<view class="item-content-row-right">蓝帆医疗回租项目蓝帆医疗回租项目蓝帆医疗回租项目 </view>
					</view>
					<view class="item-content-row">
						<view class="item-content-row-left">承租人：</view>
						<view class="item-content-row-right">蓝帆医疗回租项目蓝帆医疗回租项目蓝帆医疗回租项目 </view>
					</view>
					<view class="item-content-row">
						<view class="item-content-row-left">承租人：</view>
						<view class="item-content-row-right">蓝帆医疗回租项目蓝帆医疗回租项目蓝帆医疗回租项目 </view>
					</view>
					<view class="item-content-row">
						<view class="item-content-row-left">承租人：</view>
						<view class="item-content-row-right">蓝帆医疗回租项目蓝帆医疗回租项目蓝帆医疗回租项目 </view>
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
				item1:true,
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
				// title: options.skuId,
			});
		},
		methods: {
			toogle(num){
				this.item1 = !this.item1
			}
			}
	}
</script>

<style lang="scss">
	page {
		background-color: #F6F8FB;
		height: 100%;
		overflow: hidden;
	}
	.detail {
		height: 100%;
		.scroll-Y {
			
			margin: 30rpx ;
			
			height: calc(100% - 30rpx);
		
			.scroll-view-item {
				width: 690rpx;
				box-sizing: border-box;
				background: #FFFFFF;
				border-radius: 14px;
				padding:18rpx 28rpx;
				margin-bottom: 18rpx;

				.item-title {
					height: 79rpx;
					display: flex;
					margin-top: -10rpx;
					display: flex;
					justify-content: space-between;
					.span{
						font-size: 30rpx;
						color: #1A1B24;
						letter-spacing: 0;
						font-weight: 500;
						line-height: 79rpx;
					}
					.icon{
						.image{
							height: 30rpx;
							width: 30rpx;
						}
					}
				}

				.item-content {
					box-sizing: border-box;
					width: 634rpx;
					.item-content-row{
						margin-bottom: 4rpx;
						display: flex;
						justify-content: space-between;
						.item-content-row-left{
							font-size: 28rpx;
							color: #1A1B24;
							letter-spacing: 0;
							font-weight: 400;
							line-height: 40rpx;
						}
						.item-content-row-right{
							text-align: right;
							font-size: 28rpx;
							color: #666666;
							letter-spacing: 0;
							text-align: right;
							line-height: 40rpx;
							width: 400rpx;
						}
					}
				}
			}
		}
	}
</style>