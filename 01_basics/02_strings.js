const myName = new String("vijay rana")
console.log(typeof myName)

console.log(myName[3])

const newname = myName.substring(2,4);// on giving negative values starts from 0 index
console.log(newname)

console.log(myName.length)
const anothername = myName.slice(-10,4);
console.log(anothername)

const x = "he said that he wants"
const y = "yes-no-but-why"
console.log(x.split(' ')) // return array of string elements separated by space

console.log(y.split('-'))

console.log(myName.charAt(3))
console.log(myName.indexOf('v'))
console.log(`character at index 6 is ${myName.charAt(6)}`)
