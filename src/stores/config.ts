// 全局配置相关信息
import { defineStore } from "pinia";
import { getMusicApi } from "@/api/others";

// 枚举
export enum Theme {
	DARK = 'dark',
	LIGHT = 'light'
}

export interface MusicInfoInterface {
	auther: string,
	readonly id: string | number,
	mp3url: string,
	name: string,
	picurl: string
}

export const useConfigStore = defineStore('config', {
	state: () => {
		return {
			theme: window.localStorage.getItem('theme') || 'light',
			music: {
				auther: '',
				id: '',
				mp3url: '',
				name: '',
				picUrl: ''
			},
			isPlaying: 0,
		}
	},
	actions: {
		changeTheme(theme: Theme): void {
			this.theme = theme
			window.localStorage.setItem('theme', theme)
		},
		async musicPlay(): Promise<void> {
			const res = await getMusicApi()
			console.log(res);
			const str = res.data.info.mp3url.slice(-3)
			if (str !== 'mp3') {
				return this.musicPlay()
			}
			this.music = res.data.info
			this.isPlaying ++
		}
	}
})