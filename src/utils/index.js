export const toCamelCase = (str) => {
    let newStr = str.split(' ').join('');
    let newStr0 = newStr[0].toLowerCase();
    newStr = newStr.substring(1);
    newStr = newStr0 + newStr;
    return newStr;
}