// Your code here
const isNumber = input => typeof input === 'number' //makes sure the input is a number
let successArray = [] //array of words to be be written, needs to be let so it can be deleted every time it's called
const output = document.createElement('p')

const onesDigitString = (input) => { //the last digit regardless of length
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

const tensDigitString = (input) => { //the second to last digit
    if(input === '2') {
        successArray.push('twenty')
    } else if(input === '3') {
        successArray.push('thirty')
    } else if(input === '4') {
        successArray.push('fourty')
    } else if(input === '5') {
        successArray.push('fifty')
    } else if(input === '6') {
        successArray.push('sixty')
    } else if(input === '7') {
        successArray.push('seventy')
    } else if(input === '8') {
        successArray.push('eighty')
    } else if(input === '9') {
        successArray.push('ninety')
    }
}

const teensString = (input) => { //if it's between 9 and 20, it does it's own logic
    if(input === 10) {
        successArray.push('ten')
    } else if(input === 11) {
        successArray.push('eleven')
    } else if(input === 12) {
        successArray.push('twelve')
    } else if(input === 13) {
        successArray.push('thirteen')
    } else if(input === 14) {
        successArray.push('fourteen')
    } else if(input === 15) {
        successArray.push('fifteen')
    } else if(input === 16) {
        successArray.push('sixteen')
    } else if(input === 17) {
        successArray.push('seventeen')
    } else if(input === 18) {
        successArray.push('eighteen')
    } else if(input === 19) {
        successArray.push('nineteen')
    }
}

const numbersToWords = (input) => { //the main function that the input gets passed into
    if(!isNumber(input)) { //returns null is input is not a number
        return null
    }

    successArray = []

    if(input < 20 && input > 9) { //if it's ten to nineteen, completely different logic is rendered
        teensString(input)
        return successArray[0]
    }
    
    let numArr = JSON.stringify(input).split('').map((num) => { //a number can't be split so it need to be stringified and then turned back into a number
        return parseInt(num)
    })
    if(numArr.length === 1) {
        if(numArr[0] === 0) { //zero would only be added once
            successArray.push('zero')
        } else {
            onesDigitString(JSON.stringify(numArr[0]))
        }
    } else if(numArr.length === 2) { //needs to call tens and ones
        tensDigitString(JSON.stringify(numArr[0]))
        onesDigitString(JSON.stringify(numArr[1]))
    } else if(numArr.length === 3) { //the basic challenge only goes up to 100
        successArray.push('one-hundred')
    }

    return successArray.join('-') //joins the worded numbers with a dash
}

const outputArr = []; //creating an array to put the results so they can be joined 
for(let i = 0; i <= 100; i++) {
    outputArr.push(numbersToWords(i))
}

output.append(outputArr.join(', '))

document.body.append(output)