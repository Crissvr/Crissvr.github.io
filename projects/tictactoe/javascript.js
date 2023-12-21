//Constantes//

const status_display = document.querySelector('game-notification'), 
    game_state = ['', '',],
    winnings = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    win_message = () => `El jugador ${currentPlayer} ha ganado`,
    draw_message = () => `El juego ha terminado en empate`,
    current_player_turn = () => `Turno del jugador ${currentPlayer}`

//Variables//

let gameActive = true, 
    currentPlayer = 'O'

//Funciones//

function main() {
    handleStatusDisplay(current_player_turn())
    listeners()
}

function handleStatusDisplay(message) {
    status_display.innerHTML = message
}

function listeners() {
    document.querySelector('.game-container').addEventListener('click', handleCellClick)
    document.querySelector('.game-restart').addEventListener('click', handleRestartGame)
}

function handleCellClick(clickedEvent) {
    const clickedCell = clickedEvent.target
    if(clickedCell.classList.contains('game-cell')) {
        const clickedCellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell)
        console.log(clickedCellIndex)
        if(game_state[clickedCellIndex] !=='' || !gameActive) {
            return
        }

        handleCellPlayed(clickedCell, clickedCellIndex)
    }
    console.log(clickedCell)
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    game_state[clickedCellIndex] = currentPlayer
    clickedCell.innerText = currentPlayer
}