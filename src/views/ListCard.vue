<template>
	<div class="list_box">
		<div v-for="item in cardlist" :key="item.id" :class="{ list_item: true, active: isChecked === item.id }" @mouseover="handleCheck(item.id)" @mouseout="handleCancel">
			<div class="card_title">{{ item.title }}</div>
			<div class="card_content_text">{{ item.content }}</div>
			<div :class="{ card_copy_btn: true, active: isChecked === item.id }" @click="handleCopy(item.link)">复制链接</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { showToast } from 'vant';
import 'vant/es/toast/style';

const cardlist = ref([
	{ id: 1, title: '加速器&电报', link: `链接: https://caiyun.139.com/m/i?105Cq235Zq5sH 
复制本段信息，打开「中国移动云盘APP」获取。人人不限速，移动用户免流量！`, content: '里面有两个加速器和Telegram，复制链接打开中国移动云盘' },
	{ id: 2, title: '标题2', link: '', content: '内容2' }
])
const isChecked = ref<number>(0)

const handleCheck = (id: number) => {
	isChecked.value = id
}
const handleCancel = () => {
	isChecked.value = 0
}
const handleCopy = (link: string) => {
	if (link) {
		const input = document.createElement('input')
		input.value = link
		document.body.appendChild(input)
		input.select()
		if (document.execCommand('copy')) {
			document.execCommand('copy')
			showToast({
				message: '复制成功'
			})
		}
		document.body.removeChild(input)
	}
}
</script>

<style scoped>
	.list_box {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: 100%;
		background-color: transparent;
		justify-content: space-around;
		border-radius: 10px;
		padding: 10px 5px;
	}

	.list_item {
		width: 48%;
		height: 200px;
		margin-bottom: 20px;
		border-radius: 5px;
		/* background-color: var(--home-cell-bg-color); */
		color: #fff;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
		transition: all 0.3s;
		overflow: hidden;
		cursor: pointer;
		background-image: url('@/images/list_bg1.png');
		&:hover {
			box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
		}
		&.active {
			box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
			border-radius: 20px;
		}
	}

	.card_title {
		height: 40px;
		line-height: 40px;
		padding: 0 10px;
		font-size: 16px;
		font-weight: bold;
	}

	.card_content_text {
		height: 100px;
		padding: 0 10px;
		font-size: 14px;
		overflow: auto;
		--webkit-scrollbar {
			display: none;
		}
	}

	.card_copy_btn {
		height: 40px;
		width: 70px;
		line-height: 40px;
		padding: 0 10px;
		font-size: 12px;
		text-align: right;
		cursor: pointer;
		text-align: center;
		transition: all 0.3s;
		transform: translateX(200px);
		background-color: #04BEA8;
		border-radius: 5px;
		&.active {
			transform: translateX(100px);
		}
	}

	@media screen and (min-width: 768px) {
		.card_title {
			font-size: 24px;
		}
		.card_content_text {
			font-size: 20px;
		}
		.card_copy_btn {
			font-size: 16px;
			width: 100px;
			transform: translateX(500px);
			&.active {
				transform: translateX(400px);
			}
		}
	}

</style>