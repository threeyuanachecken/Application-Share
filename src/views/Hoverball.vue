<template>
	<div class="hoverbox">
		<div class="hoverball" v-if="configStore.isPlaying || configStore.music.picUrl" @dblclick="handleChangeMusic">
			<img :src="configStore.music.picUrl" alt="">
		</div>
		<div class="hoverball_name">{{ configStore.music.name }}</div>
		<span @dblclick="handleChangeMusic">双击切歌</span>
	</div>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()

const handleChangeMusic = () => {
	configStore.musicPlay()
}
</script>

<style scoped>
	.hoverbox {
		position: fixed;
		bottom: 50px;
		right: 0;
		width: 70px;
		height: 70px;
		background-color: transparent;
		z-index: 999;
		overflow: hidden;
		transition: all 0.5s;
		cursor: pointer;
		&:hover {
			height: 100px;
			span {
				pointer-events: auto;
				animation: opaTip 3s ease-in-out infinite;
			}
		}
	}
	.hoverball_name {
		height: 50px;
		line-height: 50px;
		position: absolute;
		top: 55px;
		width: 100%;
		overflow: hidden;
		margin: auto;
		text-align: center;
		font-size: 12px;
		color: var(--home-font-color-b);
		white-space: nowrap;
		transition: all 0.3s;
	}
	.hoverball {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: var(--van-home-bg-color);
		overflow: hidden;
		position: absolute;
		top: 10px;
		left: calc(50% - 25px);
		transition: all 0.3s;
		box-shadow: 0 0 10px rgba(17, 18, 18, 0.5);
		cursor: pointer;
		animation: rotate 10s linear infinite reverse;
		&:hover .hoverball_name {
			width: 100px;
		}
		img {
			width: 50px;
			height: 50px;
			object-fit: cover;
		}
	}

	span {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1000;
		line-height: 70px;
		text-align: center;
		font-size: 12px;
		width: 100%;
		color: #fff;
		transition: all 0.3s;
		opacity: 0;
		pointer-events: none;
	
	}
	
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes opaTip {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

</style>