const toggleCase = window.document.getElementById('toggle-case')
const toggleBall = window.document.querySelector('div.toggle-ball')
const chekBox = window.document.getElementById('chek')
const back = window.document.querySelector('body')
isChek = false
chekBox.addEventListener('change', toggleMove)
function toggleMove() {
    if(!isChek){
        toggleBall.style.transform='translateX(15px)'
        toggleCase.style.backgroundColor = 'rgb(7, 7, 53)'
        back.style.backgroundImage = 'url(./imagens/background-noite.png)'
    }
    else {
        toggleBall.style.transform='translateX(0px)'
        toggleCase.style.backgroundColor = 'rgb(219, 206, 13)'
        back.style.backgroundImage = 'url(./imagens/background-dia-4.png)'
    }
    isChek = !isChek
}