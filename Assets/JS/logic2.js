

let i = 0
// variables partaining to browser dom
const start = document.getElementById('start')
const startScreen = document.getElementById('start-screen')
const choices = questions[i].choices
const getQuestions = document.getElementById('questions')
const choicesEl = document.getElementById('choices')
const correctSound = new Audio('./Assets/sfx/correct.wav')
const incorrectSound = new Audio('./Assets/sfx/incorrect.wav')
const endScrn = document.getElementById('end-screen')
const finalScore = document.getElementById('final-score')
const initials = document.getElementById('initials')
const highscore = document.getElementById('highscore')
const submitBtn = document.getElementById('submit')

const time = document.getElementById('time');
let timeleft
let timeInterval


function countDown() {
    // set time of the quiz
    timeleft = 60 
    time.innerText = timeleft
    timeInterval = setInterval(() => {
        // time countdown as soon as the quiz starts
        timeleft--
        time.innerText = timeleft
        if (timeleft <= 0) {
            // when time runs out, display time of zero
            timeleft = 0;
            endScreen()
        }
    }, 1000)
}

function endScreen() {
    // end the timer countdown and set time to zero
    clearInterval(timeInterval)
    time.innerText = 0;
    getQuestions.setAttribute('class', 'hide')
    choicesEl.setAttribute('class', 'hide')
    endScrn.classList.remove('hide')
    finalScore.append(timeleft)
}



function starter() {
    // Attaching event listener to the start button
    start.addEventListener('click', (event) => {
        startScreen.setAttribute('class', 'hide')
        countDown()
        questionDisplay()
        optionDisplay()
    })
}

function questionDisplay() {
    // grabbing the question header by creating an HTML element
    var questionItem = document.createElement('h3')
    // creating the question text for the created element(h3)
    var questionText = document.createTextNode(questions[i].title)
    // appending the text to the HTML element
    questionItem.appendChild(questionText)
    // appending the question header element(h3) to the body  
    getQuestions.append(questionItem)
    getQuestions.classList.remove('hide')

}

function optionDisplay() {
    // looping over the choices available
    for (j = 0; j < choices.length; j++) {
        // creating element (button) for each of the choices
        choicesEl.insertAdjacentHTML(
            'beforeend',
            `<button class="choiceOption">${questions[i].choices[j]}</button>`
        );

    }

    choicesEl.classList.remove('hide')
}


function answerCheck() {
    // adding event listener to the buttons of choice
    choicesEl.addEventListener('click', (event) => {
        var answer = questions[i].answer
        if (event.target.innerText !== answer) {
            // play sound for incorrect choice made
            incorrectSound.play()
            // deduct some time from the remaining time 
            timeleft -= 10

        } else {
            // play sound for correct choice made
            correctSound.play()
        }
        
        if (event.target.matches('.choiceOption')) {
            // Ensuring that only the click event on choice button causes the current question to fade
            getQuestions.innerHTML = '';
            choicesEl.innerHTML = '';
            if (i < questions.length - 1) {
                // increase the question index by one once the click event happens
                i++
                questionDisplay();
                optionDisplay()
            } else {
                endScreen()
            }
        }
    })
}
// function to store scores into the local storage
function storeScores() {
    let Userinitials = initials.value
    let Userscore = finalScore.innerText
    let userObj = {initials: Userinitials, score: Userscore }
    
    var storedScore = getScore()
    // include the new scoreboard object into the existing scoreboard array
    storedScore.push(userObj)
    // stores the score as an object into the local storage
    localStorage.setItem('scoreBoard', JSON.stringify(storedScore))

}

function getScore () {
    // get scores stored in local storage
    return JSON.parse(localStorage.getItem('scoreBoard')) || []
}

function confirmation() {
    // to hide the end screen after submit button is clicked
    endScreen.setAttribute('class', 'hide')
    document.append('Your score is saved')
}



submitBtn.addEventListener('click', () => {
    // adding event listener on submit button to store the scores in the local storage
    storeScores()
    confirmation() 
    
})




function init() {
    // function to initiate the app
    starter()
    answerCheck()
}

init()









