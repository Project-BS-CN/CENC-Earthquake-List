import moment from 'moment'

export function unixToYYYYMMDDHHmmss(time: any) {
    time = Number(time)
    return moment.unix(time / 1000).utcOffset(8).format('YYYY/MM/DD HH:mm:ss')
}

export function calcMaxInt(calcMagnitude: any, calcDepth: any) {
    calcMagnitude = Number(calcMagnitude)
    calcDepth = Number(calcDepth)
    let a = 1.65 * calcMagnitude
    let b = calcDepth < 10 ? 1.21 * Math.log10(10) : 1.21 * Math.log10(calcDepth)
    let maxInt = Math.round(a / b)
    return (maxInt)
    // return Math.round(3.944 + 1.071 * calcMagnitude + 0 * calcMagnitude * calcMagnitude - 1.2355678010148 * Math.log(7 * (calcDepth + 25) / 40) + 0.2)
}

export function timeToStr(e: any) {
    e = Number(e)
    function a(e: any) {
        return e < 10 ? '0' + e : e
    }
    let time = new Date(e)
    let MM = a(time.getMonth() + 1)
    let DD = a(time.getDate())
    let HH = a(time.getHours())
    let mm = a(time.getMinutes())
    return `${MM}/${DD} ${HH}:${mm}`
}