
const finalScore = document.getElementById('final-score')
const initials = document.getElementById('initials')
const highscore = document.getElementById('highscore')
const clearBtn = document.getElementById('clearBtn')
const submitBtn = document.getElementById('submit')


function displayScore(){
    let UserHighscore = JSON.parse(localStorage.getItem('scoreBoard'))
    console.log(UserHighscore)
    endScrn.setAttribute('class', 'hide')

    let html='';
    UserHighscore.forEach(item=>{
        html += `<li>Initial:${item.initials}, Score:${item.score}</li>`
    })

    highscore.innerHTML=html
    
}

export default displayScore