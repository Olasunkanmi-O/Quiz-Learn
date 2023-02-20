


const questionDisplay = document.querySelector('.questions')
const feedback = document.querySelector('#feedback')
const correctSound = new Audio('./Assets/sfx/correct.wav')
const incorrectSound = new Audio('./Assets/sfx/incorrect.wav')

let currentQuestionindex = 0;
let currentQuestion = questions[currentQuestionindex]
let Title = currentQuestion.title;
let choices = currentQuestion.choices;
let answer = currentQuestion.answer;
let button = document.querySelector('button')
let timeleft = 60;




function countdown() {

    let time = document.getElementById('time');


    time.innerText = timeleft;
    var timeInterval = setInterval(() => {
        timeleft--;
        time.innerText = timeleft
    }, 1000)
}


function questionShow() {

    var questionHeader = document.createElement('h3')
    var questionText = document.createTextNode(Title)
    questionHeader.appendChild(questionText)
    document.body.append(questionHeader)

    for (let i = 0; i < choices.length; i++) {
        let options = document.createElement('button')
        var optionText = document.createTextNode(choices[i])
        options.appendChild(optionText)
        document.body.appendChild(options)

        options.addEventListener('click', (event) => {
            if (event.target.innerText === answer) {
                correctSound.play()
            } 
            else {
                incorrectSound.play(),
                timeleft -= 10
            }            
        })
    }
}

function endScreen() {
    var endScrn = document.querySelector('#end-screen')
    endScrn.classList.remove('hide')
}





function init() {

    var startScreen = document.querySelector('.start')
    questionDisplay.classList.remove('hide');
    startScreen.classList.add('hide');

    countdown();
    questionShow();


}

var startBtn = document.getElementById('start');
startBtn.addEventListener('click', init)






