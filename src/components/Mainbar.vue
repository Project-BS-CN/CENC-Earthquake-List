<template>
    <div id="mainBar">
        <div id="mainLeft">
            <div id="mainTime">
                {{ time }}
            </div>
            <div id="mainEpicenter">
                {{ epicenter }}
            </div>
            <div id="mainDepth">
                <span style="font-size: 18px;">深度:</span>{{ depth }}<span style="font-size: 18px;">&nbsp;km</span>
            </div>
            <div id="mainMagnitude">
                <span style="font-size: 18px;">M</span>{{ magnitude }}
            </div>
        </div>
        <div id="mainMaxInt" :style="{backgroundColor: maxIntColor}" style="font-family: OPPOSans-H !important;">
            <span style="position:relative; top:-2px;">{{ maxInt }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { calcMaxInt } from '../Functions'
import _ from '../resource/intColor.json'
import '../css/list.css'

let intColor: any = _

let props = defineProps<{
    time?: any,
    epicenter: any,
    depth: any,
    magnitude: any
}>()

let maxInt: any = computed(() => {
    return calcMaxInt(props.magnitude, props.depth)
})

let maxIntColor: any = computed(() => {
    return intColor[maxInt.value].bgcolor
})
</script>