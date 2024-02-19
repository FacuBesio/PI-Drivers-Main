export const inputIsNumber = (input) => {
   return /^\d+$/.test(input);
};


export const inputIsUUID = (input) =>  {
    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return regex.test(input);
}