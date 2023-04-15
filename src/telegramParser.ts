export default class TelegramParser {
    private msg: string

    constructor(msg: string) {
        this.msg = msg
    }

    public parse(): any {
        const msg = this.msg
        const msgArray:any = msg.split(' ')
        msgArray.map((item: any | string, index: number) => {
            if(item == '//') msgArray[index] = null
        })
        
        return({
            updated: msgArray[0],
            title: msgArray[1],
            reportNum: msgArray[2],
            epicenter: msgArray[3],
            epicenterLat: msgArray[4],
            epicenterLng: msgArray[5],
            magnitude: msgArray[6],
            depth: msgArray[7],
            maxInt: msgArray[8],
            time: msgArray[9]
        })
    }

    public parseList(): any {
        let returnMsg: any = []
        const msg = this.msg
        const msgArray:any = msg.split(' /// ') //每条数据
        msgArray.map((item: any) => {
            item = item.split(' ') //每份数据
            if(item == '') return
            item.map((i: any | string, index: number) => {
                if(i == '//') item[index] = null
            })
            returnMsg.push({
                updated: item[0],
                title: item[1],
                reportNum: item[2],
                epicenter: item[3],
                epicenterLat: item[4],
                epicenterLng: item[5],
                magnitude: item[6],
                depth: item[7],
                maxInt: item[8],
                time: item[9]
            })
        })
        return returnMsg
    }
}