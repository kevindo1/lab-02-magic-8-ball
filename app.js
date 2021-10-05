// import functions and grab DOM elements
const submitButton = document.getElementById('submit-button');
const outputAnswer = document.getElementById('output-answer');
const squidward = document.getElementById('squidward');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const conchAnswers = ['Maybe someday.', 'Never.', 'Neither.', 'I dont think so.', 'No.', 'Yes.', 'Try asking again.'];

// generate random response from array
// generate random number thats equal to length of the array

submitButton.addEventListener('click', ()=> {
    const getRandomNumber = (max)=> {
        return Math.floor(Math.random() * max);
    };

    const randomIndex = getRandomNumber(conchAnswers.length);
    const randomAnswer = conchAnswers[randomIndex];
    outputAnswer.textContent = randomAnswer;

    if (squidward.checked === true) {
        outputAnswer.textContent = 'No';
        document.getElementById('display-picture').src = './assets/squidward.jpeg';
    }

    if (outputAnswer.textContent === 'No.') {
        document.getElementById('display-picture').src = './assets/scary.jpeg';
    }
    if (outputAnswer.textContent === 'Yes.') {
        document.getElementById('display-picture').src = './assets/giggle.png';
    }
    if (outputAnswer.textContent === 'Never.') {
        document.getElementById('display-picture').src = './assets/squidward.jpeg';
    }
    if (outputAnswer.textContent === 'Maybe someday.') {
        document.getElementById('display-picture').src = './assets/squad.jpeg';
    }
    if (outputAnswer.textContent === 'Neither.') {
        document.getElementById('display-picture').src = './assets/pull.jpeg';
    }
    if (outputAnswer.textContent === 'Try asking again.') {
        document.getElementById('display-picture').src = './assets/yes.png';
    }
    if (outputAnswer.textContent === 'I dont think so.') {
        document.getElementById('display-picture').src = './assets/funny.jpeg';
    }
});

