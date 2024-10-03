let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    function makeMove(cell) {
      const index = Array.from(cell.parentNode.children).indexOf(cell);
      if (gameBoard[index] === '' && !checkWinner()) {
        gameBoard[index] = currentPlayer;
        cell.innerText = currentPlayer;
        cell.style.backgroundColor = '#121212'; // Sötét témához illő háttérszín
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('message').innerText = `Következő játékos: ${currentPlayer}`;
        checkWinner();
      }
    }

    function checkWinner() {
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          document.getElementById('message').innerText = `${gameBoard[a]} győzött!`;
          return true;
        }
      }
      if (gameBoard.every((cell) => cell !== '')) {
        document.getElementById('message').innerText = 'Döntetlen!';
        return true;
      }
      return false;
    }

    function newGame() {
      gameBoard = ['', '', '', '', '', '', '', '', ''];
      currentPlayer = 'X';
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => {
        cell.innerText = '';
        cell.style.backgroundColor = '#333';
      });
      document.getElementById('message').innerText = 'Következő játékos: X';
    }