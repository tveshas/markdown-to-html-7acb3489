const board = document.getElementById('board');
let squares = Array(9).fill(null);
let isXNext = true;

function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return;
    squares[index] = isXNext ? 'X' : 'O';
    isXNext = !isXNext;
    drawBoard();
}

function drawBoard() {
    board.innerHTML = squares.map((value, index) => `
        <div onclick="handleClick(${index})" class="w-16 h-16 flex items-center justify-center border border-gray-400 ${value === 'X' ? 'text-blue-600' : 'text-red-600'}">
            ${value ? value : ''}
        </div>
    `).join('');
}

function resetGame() {
    squares = Array(9).fill(null);
    isXNext = true;
    drawBoard();
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

drawBoard();