// 第三方接口
import axios from 'axios'

// 获取随机音乐
export const getMusicApi = () => axios.get('https://api.vvhan.com/api/rand.music?type=json&sort=热歌榜')