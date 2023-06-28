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
const num2Str = () => {
  let num = document.getElementById('num2str').value;
  let parsednum = Number(num)
  document.getElementById('numtostring').innerHTML = 'Converted value is "' + parsednum + '"'
}



// Write a JavaScript program to convert a string to the number.
const strToNum = () => {
  let stringtonumber = document.getElementById('str2num').value;
  let parsedstring = stringtonumber.slice(1, -1);
  let stringtoint = parseInt(parsedstring)
  document.getElementById('stringtonum').innerHTML = 'Converted value is ' + stringtoint;
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const checkType = () => {
  let inputData = document.getElementById('dataInput').value;
  let resultElement = document.getElementById('result');
  let dataType;

  if (inputData === 'true' || inputData === 'false') {
    dataType = 'Boolean';
  } else if (inputData === 'null') {
    dataType = 'Null';
  } else if (inputData === 'undefined') {
    dataType = 'Undefined';
  } else if (!isNaN(parseInt(inputData))) {
    dataType = 'Number';
  } else if (isNaN(parseInt(inputData))) {
    dataType = 'NaN';
  } else if (typeof inputData === 'string') {
    dataType = 'String';
  } else {
    dataType = 'Type not recognized.';
  }
  resultElement.textContent = inputData + ' is a ' + dataType + '.';
}
    
  

  
// Write a JavaScript program that adds 2 numbers together.

const sum = () => {
  let add1 = document.getElementById('value1').value;
  let add2 = document.getElementById('value2').value;
  let parsed1 = parseInt(add1)
  let parsed2 = parseInt(add2)
  let sum = parsed1 + parsed2
  
  document.getElementById("add").innerHTML = 'The sum is a ' + sum + '.';
}
// Write a JavaScript program that runs only when 2 things are true.

const twoTrue = () => {
  let thing1 = document.getElementById('bool1').value;
  let thing2 = document.getElementById('bool2').value;

  if (thing1 === 'true' && thing2 === 'true') {
    document.getElementById('both').innerHTML = 'Both are true'
  } else {
    document.getElementById('both').innerHTML = 'Something is false'
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrue = () => {
  let thing1 = document.getElementById('bool3').value;
  let thing2 = document.getElementById('bool4').value;

  if (thing1 === 'true' || thing2 === 'true') {
    document.getElementById('one').innerHTML = 'At least one is true'
  } else {
    document.getElementById('one').innerHTML = 'Both are false'
  }
}

// Write a JavaScript program that runs when both things are not true.  

const noTrue = () => {

  let thing1 = document.getElementById('bool5').value;
  let thing2 = document.getElementById('bool6').value;

  if (thing1 !== 'true' && thing2 !== 'true') {
    document.getElementById('none').innerHTML = 'nothing is true'
  } else {
    document.getElementById('none').innerHTML = 'At least one is true'
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
