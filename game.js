function Game() {
    const gameBoard = document.getElementById('gameBoard');
    const mine = document.getElementById('mine');
    const rows = [];

    const initGame = (width, height, numberOfMines) => {
        const button = document.getElementById('restart-btn');
        button.addEventListener('click', function() {
            return history.go(0);
        });
        mine.textContent = numberOfMines;

        for (let i = 0; i < height; i++) {
            const row = [];
            const rowDom = document.createElement('div');
            gameBoard.appendChild(rowDom);
            rows.push(row);

            rowDom.className = 'row';
            for(let j=0; j < width; j++) {
                const dom = document.createElement('div');
                dom.className = 'cell';
                rowDom.appendChild(dom);

                dom.addEventListener('click', function() {
                    if (cell.clicked || cell.marked) return;

                    if (cell.isMine) return gameOver(false);

                    const neighbors = getNeighbors(cell);
                    cell.dom.textContent = neighbors.filter(neighbor => neighbor.isMine === true).length;

                    cell.clicked = true;
                });

                dom.addEventListener('contextmenu', function() {
                    cell.marked = true;
                    cell.dom.textContent = '🏁';
                    mine.textContent = numberOfMines - 1;
                    numberOfMines = numberOfMines -1;
                });

                const isMine = false;
                const cell = {
                    dom,
                    x: j,
                    y: i,
                    clicked: false,
                    marked: false,
                    isMine: 0.3 > Math.random()
                }
                row.push(cell);
            }
        }
    }

    let widthString = prompt('너비를 입력해주세요', '10');
    let heightString = prompt('높이를 입력해주세요', '10');
    let numOfMinesString = prompt('지뢰 개수를 입력해주세요', '10');

    let width = parseInt(widthString);
    let height = parseInt(heightString);
    let numOfMines = parseInt(numOfMinesString);
    initGame( width, height,  numOfMines);

    const gameOver = (isWin) => {
        if (!isWin) {
            alert('지뢰! 게임 종료');
            history.go(0);
        }
    }

    const getNeighbors = (cell) => {
        const x = cell.x;
        const y = cell.y;
        const neighbors = [];
        for (let i = Math.max(0, y - 1); i <= Math.min(height - 1, y + 1) ;i++) {
            for (let j = Math.max(0, x - 1); j <= Math.min(width -1, x + 1); j++) {
                if (x === j && y === i) continue;
                neighbors.push(rows[i][j]);
            }
        }

        return neighbors;
    }
};

Game();