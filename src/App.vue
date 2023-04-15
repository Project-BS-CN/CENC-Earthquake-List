<template>
    <div id="list" v-if="data != '' && data != undefined">
        <Mainbar
            :time="timeToStr(data[0].time) + (data[0].reportNum == 1 ? ' 正式测定' : ' 自动测定')"
            :epicenter="data[0].epicenter"
            :depth="data[0].depth"
            :magnitude="data[0].magnitude"
        />

        <Subbar
            v-for="(item, index) in data"
            v-show="index != 0 && item.reportNum == 1"
            :time="timeToStr(item.time) + (item.depth >= 150 ? ' 深源' : '')"
            :epicenter="item.epicenter"
            :depth="item.depth"
            :magnitude="item.magnitude"
            :id="index"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import TelegramParser from './telegramParser'
import { timeToStr } from './Functions'

import Mainbar from './components/Mainbar.vue';
import Subbar from './components/Subbar.vue';

import './css/framework.css'
import { clear } from 'console';

let data = ref('' as any)

let getData = () => {
    axios.get(`https://telegram.projectbs.cn/cenc?${Date.now()}`).then(res => {
        data.value = new TelegramParser(res.data).parseList()
        console.log(data.value)
    })
}

// document.onkeydown = e => {
//     if(e.key == 'r') {
//         location.reload()
//     }
// }

onMounted(() => {
    for(let i = 0; i < 10000; i++) {
        clearInterval(i)
    }
    getData()
    setInterval(() => {
        getData()
    }, 30000)
})
</script>