<template>
    <div :id="getId('Bar')">
        <div :id="getId('Left')">
            <div :id="getId('Time')">
                {{ time }}
            </div>
            <div :id="getId('Epicenter')" :style="{'font-size': fontSize}">
                {{ epicenter }}
            </div>
            <div :id="getId('Magnitude')">
                M{{ magnitude }}
            </div>
        </div>
        <div :id="getId('MaxInt')" :style="{backgroundColor: maxIntColor}">
            <span style="position:relative; top:-2px;">{{ maxInt }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { calcMaxInt } from '../Functions'
import _ from '../resource/intColor.json'
import '../css/list.css'

let props = defineProps<{
    time?: any,
    epicenter?: any,
    depth?: any,
    magnitude?: any,
    id?: any
}>()

let intColor: any = _

let maxInt: any = computed(() => {
    return calcMaxInt(props.magnitude, props.depth)
})

let maxIntColor: any = computed(() => {
    return intColor[maxInt.value].bgcolor
})

let fontSize = computed(() => {
    return getFontSize(props.epicenter.length)
})

function getFontSize(length: number) {
    if (length < 12) {
        return '20px'
    }else if (length >= 12 && length < 14){
        return '16px'
    }else if (length >= 14 && length <= 16){
        return '12px'
    }
}

function getId(type: any){
    return `sub${type}${props.id}`
}
</script>