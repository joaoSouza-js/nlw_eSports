export function covertMinutesToHoursString(minutesAmount: number){
    const hours = Math.floor(minutesAmount / 60)
    const minutes = minutesAmount % 60 ;

    const hoursFormated = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`
    
    return hoursFormated
}