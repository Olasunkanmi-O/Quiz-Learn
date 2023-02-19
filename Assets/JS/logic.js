


const questionDisplay = document.querySelector('.questions')
const feedback = document.querySelector('#feedback')
const correctSound = new Audio('./Assets/sfx/correct.wav')
const incorrectSound = new Audio('./Assets/sfx/incorrect.wav')

let questionindex = 0;
let Title = questions[questionindex].title;
let choices = questions[questionindex].choices;
let answer = questions[questionindex].answer;
let button  = document.querySelector('button')




function countdown() {

    let time = document.getElementById('time');
    let timeleft = 60;

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
    }
}

function endScreen() {
    var endScrn = document.querySelector('#end-screen')
    endScrn.classList.remove('hide')
}

function correctAnswer() {
    
    choices.addEventListener('click', (event) => { 
        console.log(event.target.innerText)       
        if (text == answer) {
            correctSound.play()

        } else {
            incorrectSound.play(),
                timeleft -= 10;
        }

        if (questionindex < questions.length) {
            questionindex++
        } else {
            endScreen()
        }
    })
}




function init() {


    var startScreen = document.querySelector('.start')
    questionDisplay.classList.remove('hide');
    startScreen.classList.add('hide');

    countdown();
    questionShow();
    correctAnswer()

}

var startBtn = document.getElementById('start');
startBtn.addEventListener('click', init)






