//Add pre zero for number which is less than 10
const addPreZero = (num = 0) => {
    if(num < 10){
        return '0' + num
    }
    return '' + num
}

export const getTimeNum = (t = new Date()) => {
    return t.getFullYear() + '' +  addPreZero((t.getMonth()+1)) + addPreZero(t.getDate()) + addPreZero(t.getHours()) + addPreZero(t.getMinutes()) + addPreZero(t.getSeconds()) + t.getMilliseconds()
}