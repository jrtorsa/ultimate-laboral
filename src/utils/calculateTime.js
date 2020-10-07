import { differenceInCalendarDays } from 'date-fns'

export const calculateTime = (first, second)=>{
    const result = differenceInCalendarDays(first, second)

    return result
}
