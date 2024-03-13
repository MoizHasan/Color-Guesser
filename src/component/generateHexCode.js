export const generateHexCode = () => {
    const charString = '0123456789abcdef';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += charString[Math.floor(Math.random() * charString.length)];
    }
    return hex;
}