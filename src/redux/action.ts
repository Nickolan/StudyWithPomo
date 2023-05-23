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

export const selectColor = (bgcolor: string, textColor: string) =>{
    return { type: 'selectColor', payload: {bgcolor, textColor}};
}

