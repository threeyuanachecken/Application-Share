<template>
  <audio :src="configStore.music.mp3url" autoplay loop="false" style="position: absolute; top: -1000px;"
    ref="music_1"  @ended="configStore.musicPlay()"></audio>
  <van-config-provider :theme="(configStore.theme as Theme)">
    <RouterView />
    <Hoverball />
  </van-config-provider>

</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useConfigStore, Theme } from '@/stores/config'
import { onMounted, watch, ref } from 'vue';
import { showDialog } from 'vant';
import Hoverball from './views/Hoverball.vue';
import 'vant/es/dialog/style';

const configStore = useConfigStore()
const music_1 = ref<HTMLAudioElement | null>(null)
watch(() => configStore.isPlaying, (newVal, oldVal) => {
  if (newVal && music_1.value) {
    music_1.value.play()
  }
})

onMounted(() => {
  showDialog({
    message: '本页面资源使用中国移动云盘分享，复制链接后打开移动云盘APP即可下载'
  }).then(() => {
    configStore.musicPlay()
  })
})
</script>

<style scoped>
.van-config-provider {
  height: 100%;
  background-color: var(--van-home-bg-color);
  color: var(--van-field-label-color);
  position: relative;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
