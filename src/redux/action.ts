export const twenty_five = () => {
    return { type: '25/5' };
};

export const fifty = () => {
    return { type: '50/10' };
}

export const oneSession = () => {
    return { type: 'oneSession' };
};

export const twoSession = () => {
    return { type: 'twoSession' };
};

export const fourSession = () => {
    return { type: 'fourSession' };
};

export const eightSession = () => {
    return { type: 'eightSession' };
};

export const dayHour = () => {
    let date = new Date();
    let hour = date.getHours()
    if (hour >= 8 && hour < 13) {
        return { type: 'DAYHOUR', payload: {moment: 'morning', primary:'#a9d6ec', secundary: '#278efc'} };
    } else if (hour >= 13 && hour < 17) {
        return { type: 'DAYHOUR', payload: {moment: 'noon', primary:'#a9d6ec', secundary: '#278efc'} };
    }  else if(hour >= 17 && hour < 21){
        return { type: 'DAYHOUR', payload: {moment: 'afternoon', primary:'#a9d6ec', secundary: '#278efc'} };
    } else return { type: 'DAYHOUR', payload: {moment: 'night', primary:'#a9d6ec', secundary: '#278efc'} };
};

