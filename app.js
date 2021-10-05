// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const conchAnswers = ['Maybe someday.', 'Nothing.', 'Neither.', 'I dont think so.', 'No.', 'Yes.', 'Try asking again.'];

const getRandomNumber = (max)=> {
    return Math.floor(Math.random() * max);
};

const randomIndex = getRandomNumber(conchAnswers.length);
console.log(randomIndex);
console.log(conchAnswers[randomIndex]);

// generate random response from array
// generate random number thats equal to length of the array


