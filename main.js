// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let num = 420;
let string = num.toString()

console.log(num)
console.log(string)


// Write a JavaScript program to convert a string to the number.

let a = Number("100")
console.log(a)

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

const type = (data) => {
  console.log(typeof data);
}
  
// Write a JavaScript program that adds 2 numbers together.

const sum = (num1, num2) => {
  let value = num1 + num2;
    console.log(value)
}
// Write a JavaScript program that runs only when 2 things are true.

const tooTrue = (thing1, thing2) => {
  if (thing1 === true && thing2 === true) {
    console.log('Both things are true')
  } else {
    return
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrue = (thing1, thing2) => {
  if (thing1 === true || thing2 === true) {
    console.log('One thing is true')
  } else {
    return
  }
}

// Write a JavaScript program that runs when both things are not true.  

const noTrue = (thing1, thing2) => {
  if (thing1 !== true || thing2 !== true) {
    console.log('nothing is true')
  } else {
    return
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
