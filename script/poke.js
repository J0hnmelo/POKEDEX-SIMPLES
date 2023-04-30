const pokeButton = window.document.getElementById('botao');
const pokeball = window.document.getElementById('poke');
const menu = window.document.getElementById('menu')
pokeButton.addEventListener('click', togglePokeball);

 isPokOpen = false

function togglePokeball() {
    if (isPokOpen) {
        pokeball.src = 'imagens/poke-fechada.png';
        menu.style.display = 'none'
    } else {
        pokeball.src = 'imagens/poke-aberto.png';
        menu.style.display = 'flex'
    }
    isPokOpen = !isPokOpen
}



