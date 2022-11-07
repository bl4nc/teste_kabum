import { format,addDays,subDays,addHours,subHours } from 'date-fns'

export const now = () => {
    return format(new Date(), `YYYY-MM-DD HH:mm:ss`)
}

export const now_increase_interval = (interval : number) => {
    return addDays(new Date(),interval)
}

export const last_month_day = () => {
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth()+1, 0);
}

export const month_now = () =>{
    const today = new Date
    return today.getMonth() + 1
}

export const year_now = () =>{
    const today = new Date
    return today.getFullYear()
}

export const now_increase_hour = (interval: number) =>{
    return addHours(new Date(),interval)
}

export const now_decrease_hour = (interval: number) =>{
    return subHours(new Date(),interval)
}

export const now_decrease_interval = (interval : number) => {
    return subDays(new Date(),interval)
}



