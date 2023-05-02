/**
 * 
 * @param {string} string 
 * @returns {string}
 */


export function toCapitalize(string) {
    let newString = string.split('')
    newString[0] = newString[0].toUpperCase()
    
    return newString.join('')
}