export function convertHourStringToMinute(hourSrtring: string){
    const [hours, minutes] = hourSrtring.split(':').map(Number)

    const minutesAmount = hours * 60 + minutes

    return minutesAmount
}