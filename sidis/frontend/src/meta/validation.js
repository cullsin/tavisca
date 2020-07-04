
export const validString = (value) => {
    if(!value) 
    return false;
    return value.trim().length > 0 ? true: false
}