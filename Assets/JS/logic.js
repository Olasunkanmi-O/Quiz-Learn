


const questionDisplay = document.querySelector('.questions')
const feedback = document.querySelector('#feedback')
const correctSound = new Audio('./Assets/sfx/correct.wav')
const incorrectSound = new Audio('./Assets/sfx/incorrect.wav')

let currentQuestionindex = 5;
let currentQuestion = questions[currentQuestionindex]
let Title = questions[currentQuestionindex].title;
let choices = questions[currentQuestionindex].choices;
let answer = questions[currentQuestionindex].answer;
let button = document.querySelector('button')
let timeleft = 60;

let questionEl = document.createElement('h3')
let textEl = document.createTextNode(Title)
questionEl.appendChild(textEl)


console.log(Title)
console.log(choices)
console.log(answer)


function countdown() {

    let time = document.getElementById('time');


    time.innerText = timeleft;
    var timeInterval = setInterval(() => {
        timeleft--;
        time.innerText = timeleft
    }, 1000)
}


function questionShow() {

    document.body.append(questionEl)    
}


function answerCheck(event) {

    questionShow()
    
    for (i=0; i< choices.length; i++) {
        let buttonEl = document.createElement('button')        
        let buttonText = document.createTextNode(choices[i])    
        buttonEl.appendChild(buttonText)
        document.body.append(buttonEl)
        buttonEl.setAttribute('class','choices')
        buttonEl.addEventListener('click', (event)=>{
            let userChoice = event.target.innerText
            
            if(userChoice !== answer){
                incorrectSound.play()
                timeleft -= 15
                            

            }else{
                correctSound.play()
            }              
            
            currentQuestionindex++
            if(timeleft <= 0 || currentQuestionindex === questions.length){
                endScreen()
            }else{
                questionShow()
            }

        })

    }   

    
       
    
}


// function endScreen() {
//     var endScrn = document.querySelector('#end-screen')
//     endScrn.classList.remove('hide')
// }


function init() {

    var startScreen = document.querySelector('.start')
    questionDisplay.classList.remove('hide');
    startScreen.classList.add('hide');

    questionShow()
}

var startBtn = document.getElementById('start');
startBtn.addEventListener('click', init)


init()














