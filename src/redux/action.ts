export const twenty_five = () => {
    return { type: '25/5' };
};

export const fifty = () => {
    return { type: '50/10' };
}

export const oneSession = () => {
    return { type: 'oneHour' };
};

export const twoSession = () => {
    return { type: 'twoHours' };
};

export const fourSession = () => {
    return { type: 'fourHours' };
};

export const eightSession = () => {
    return { type: 'eightHours' };
};

export const dayHour = () => {
    let date = new Date();
    let hour = date.getHours()
    if (hour >= 1 && hour < 8) {
        return {type: 'DAYHOUR', payload: {moment: 'night', primary:'#1a1a28', secundary: '#22214e'}};
    } else if (hour >= 8 && hour < 13) {
        return {type: 'DAYHOUR', payload: {moment: 'morning', primary:'#9bdeff', secundary: '#3ad695'}};
    }  else if(hour >= 13 && hour < 17){
        return {type: 'DAYHOUR', payload: {moment: 'noon', primary:'#b6e6fe', secundary: '#27aafc'}};
    } else if (hour >= 17 && hour < 21) {
        return {type: 'DAYHOUR', payload: {moment: 'afternoon', primary:'#fabb21', secundary: '#7a2d59'}};
    } else {
        return {type: 'DAYHOUR', payload: {moment: 'prevnight', primary:'#201f41', secundary: '#9531c4'}};
    }
};
export const sessionTimer = () => {
    return {type: 'SESSION_TIMER'}
}; 
export const setBackground = () => {
    return {type: 'SETBACKGROUND'}
}

