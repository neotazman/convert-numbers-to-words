// Your code here
const isNumber = input => typeof input === 'number' //makes sure the input is a number
const successArray = []

const onesDigitString = (input) => {
    if(input === '1') {
        successArray.push('one')
    } else if(input === '2') {
        successArray.push('two')
    } else if(input === '3') {
        successArray.push('three') 
    } else if(input === '4') {
        successArray.push('four')
    } else if(input === '5') {
        successArray.push('five')
    } else if(input === '6') {
        successArray.push('six')
    } else if(input === '7') {
        successArray.push('seven')
    } else if(input === '8') {
        successArray.push('eight')
    } else if(input === '9') {
        successArray.push('nine')
    }
}

const tensDigitString = (input) => {
    if(input === '1') {
        successArray.push('ten')
    }
}

const teensString = (input) => {
    if(input === 10) {
        
    }
}

const numbersToWords = (input) => {
    if(!isNumber(input)) { //returns null is input is not a number
        return null
    }

    if(input < 20 && input > 9) {

    }
    let strNum = JSON.stringify(input) //turns the number into a string
    let digitArray = strNum.split('') //splits the string into an array
    //the conditionals for how many digits
    
    let numArr = JSON.stringify(input).split('').map((num) => {
        return parseInt(num)
    })
    console.log(numArr)
    if(digitArray.length === 1) {
        onesDigitString(digitArray[0])
    } else if(digitArray.length === 2) {
        if(parseInt(digitArray.join('')) > 20) {

        }
    } else if(digitArray.length === 3) {

    }
}