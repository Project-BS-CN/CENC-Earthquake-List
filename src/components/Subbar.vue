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

<style>
[id^="subBar"] {
	position: relative;
	left: 0px;
	height: 48px;
	width: 350px;
	color: white;
	margin-top: 4px;
}

[id^="subLeft"] {
	position:absolute;
	top: 0px;
	left: 0px;
	height: 48px;
	width: 298px;
	background-color: #333333;
	border-radius: 10px;
	border: 2px solid white;
	box-sizing: border-box;
}

[id^="subMaxInt"] {
	position: absolute;
	right: 0px;
	top: 0px;
	height: 48px;
	width: 48px;
	background-color: #444444;
	border-radius: 10px;
	line-height: 48px;
	font-size: 30px;
	font-family: OPPOSans-H !important;
	text-align: center;
	text-shadow: 0px 4px 10px rgba(0,0,0,0.3);
	border: 2px solid white;
	box-sizing: border-box;
}

[id^="subTime"] {
	position: relative;
	top: 0px;
	left: 4px;
	font-size: 15px;
}
[id^="subEpicenter"] {
	position: relative;
	top: -5px;
	left: 4px;
	font-size: 20px;
	display: flex;
	align-items: center;
	height: 25px;
}

[id^="subMagnitude"] {
	position:absolute;
	right: 4px;
	font-size: 21px;
	line-height: 44px;
	top: 0px;
}
</style>