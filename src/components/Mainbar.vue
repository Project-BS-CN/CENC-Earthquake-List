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

<style>
#mainBar {
	position: relative;
	top: 0px;
	left: 0px;
	height: 98px;
	width: 350px;
	color: white;
}

#mainLeft {
	position: absolute;
	top: 0px;
	left: 0px;
	height: 98px;
	width: 248px;
	background-color: #333333;
	border-radius: 10px;
	border: 3px solid white;
	box-sizing: border-box;
}

#mainMaxInt {
	position: absolute;
	height: 98px;
	width: 98px;
	right: 0px;
	background-color: #444444;
	border-radius: 10px;
	line-height: 98px;
	font-size: 72px;
	font-family: OPPOSans-H !important;
	text-align: center;
	text-shadow: 0px 4px 10px rgba(0,0,0,0.3);
	border: 3px solid white;
	box-sizing: border-box;
}

#mainTime {
	position: relative;
	top: 2px;
	left: 4px;
	font-size: 16px;
}

#mainEpicenter {
	position: relative;
	top: 2px;
	left: 4px;
	font-size: 20px;
	line-height: 22px;
	width: 237px;
}

#mainDepth {
	position: absolute;
	bottom: 0px;
	left: 4px;
	font-size: 25px;
}

#mainMagnitude {
	position: absolute;
	bottom: 0px;
	right: 4px;
	font-size: 25px;
}
</style>