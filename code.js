// Your code here
const isNumber = input => typeof input === 'number' //makes sure the input is a number

const numbersToWords = (input) => {
    if(!isNumber(input)) { //returns null is input is not a number
        return null
    }

    let successArray = []
    let strNum = JSON.stringify(input) //turns the number into a string
    let digitArray = strNum.split('') //splits the string into an array
    //the conditionals for how many digits
    if(digitArray.length === 1) {
        if(digitArray[0] === '0') {
            successArray.push('zero')
        } else if(digitArray[0] === '1') {
            successArray.push('one')
        } else if(digitArray[0] === '2') {
            successArray.push('two')
        } else if(digitArray[0] === '3') {
            successArray.push('three') 
        } else if(digitArray[0] === '4') {
            successArray.push('four')
        } else if(digitArray[0] === '5') {
            successArray.push('five')
        } else if(digitArray[0] === '6') {
            successArray.push('six')
        } else if(digitArray[0] === '7') {
            successArray.push('seven')
        } else if(digitArray[0] === '8') {
            successArray.push('eight')
        } else if(digitArray[0] === '9') {
            successArray.push('nine')
        }
    } else if(digitArray.length === 2) {

    } else if(digitArray.length === 3) {

    }
}