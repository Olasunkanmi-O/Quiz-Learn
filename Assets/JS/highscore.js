
const finalScore = document.getElementById('final-score')
const initials = document.getElementById('initials')
const highscore = document.getElementById('highscore')
const clearBtn = document.getElementById('clearBtn')
const submitBtn = document.getElementById('submit')


function displayScore(){
    // get the scorebord from local storage
    let UserHighscore = JSON.parse(localStorage.getItem('scoreBoard'))
    let html='';

    if(!UserHighscore){
        highscore.insertAdjacentHTML('beforeend',`No HighScore`)
    }else{        
    
    UserHighscore.forEach(item=>{
        html += `<li>Initial:${item.initials}, Score:${item.score}</li>`
    })}

    highscore.innerHTML=html
    
}

displayScore()

// add event listener to clear button

clearBtn.addEventListener(()=>{
    localStorage.clear()
})

