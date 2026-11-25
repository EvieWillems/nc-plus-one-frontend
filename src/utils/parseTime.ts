import type { ReadableDateInfo } from "../types/types";

export function parseTime(start:string):ReadableDateInfo {
    const startInfo = new Date(start)
    const readableDate = startInfo.toDateString()

    const readableStartTime = `${startInfo.getHours()}:${startInfo.getMinutes()<10?`0`:''}${startInfo.getMinutes()}${startInfo.getHours()>=12?`pm`:`am`}`

    return {
        readableDate:readableDate,
        readableStartTime:readableStartTime,
    }
}

export function parseDuration(start:string,end:string) {
    const startInfo = new Date(start)
    const durationMinutes = ((new Date(end).getTime()) - startInfo.getTime()) /60000
    const durationHours = Math.floor(durationMinutes/60)
    const readableDuration = `${durationHours} hour${durationHours>1?`s`:``}${(durationMinutes%60)>0?` ${durationMinutes%60} mins`:``}`
    return readableDuration
}