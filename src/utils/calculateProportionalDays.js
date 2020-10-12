export const calculateProportionalDays = (daysWorked) =>{
    if(daysWorked < 365) return daysWorked
    if(daysWorked > 365){
        const integer = Math.abs(daysWorked / 365)
        const decimal = integer - Math.floor(integer)
        daysWorked = Math.round(decimal * 365 / 1)
        
    } return daysWorked
}