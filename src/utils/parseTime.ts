import type { ReadableDateInfo } from "../types/types";

export default function parseTime(start:string,end:string):ReadableDateInfo {
    const startInfo = new Date(start)
    const readableDate = startInfo.toDateString()

    const readableStartTime = `${startInfo.getHours()}:${startInfo.getMinutes()<10?`0`:''}${startInfo.getMinutes()}${startInfo.getHours()>=12?`pm`:`am`}`

    const durationMinutes = ((new Date(end).getTime()) - startInfo.getTime()) /60000
    const durationHours = Math.floor(durationMinutes/60)
    const readableDuration = `${durationHours} hour${durationHours>1?`s`:``}${(durationMinutes%60)>0?` ${durationMinutes%60} mins`:``}`

    return {
        readableDate:readableDate,
        readableStartTime:readableStartTime,
        readableDuration:readableDuration
    }
}