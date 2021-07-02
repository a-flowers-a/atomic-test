export const increment = () => {
    return {
        type: 'INCREMENT',
    }
};

export const decrement = () => {
    return {
        type: 'DECREMENT',
    };
};

export const setPhone = (phoneNumber) => {
    return {
        type: 'SET_PHONE',
        payload: phoneNumber
    }
};