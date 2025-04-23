import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { puzzles } from '../data/puzzles';
import './sudoku.css';

export default function SudokuGame() {
  const { difficulty, level } = useParams();
  const navigate = useNavigate();

  const [initialBoard, setInitialBoard] = useState([]);
  const [board, setBoard] = useState([]);
  const [lives, setLives] = useState(3);
  const [win, setWin] = useState(false);

  useEffect(() => {
    const selected = puzzles[difficulty]?.[level];
    if (!selected) return;
    setInitialBoard(selected);
    setBoard(JSON.parse(JSON.stringify(selected)));
    setLives(3);
    setWin(false);
  }, [difficulty, level]);

  const handleChange = (row, col, value) => {
    if (initialBoard[row][col] !== null || lives <= 0 || win) return;
    const newValue = parseInt(value);
    if (!newValue || newValue < 1 || newValue > 9) return;

    const correct = checkSolution(row, col, newValue);
    const updatedBoard = board.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? newValue : c))
    );
    setBoard(updatedBoard);

    if (!correct) {
      setLives((prev) => prev - 1);
    } else {
      checkWin(updatedBoard);
    }
  };

  const checkSolution = (row, col, val) => {
    const rowValues = new Set(board[row]);
    const colValues = new Set(board.map(r => r[col]));
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    const boxValues = new Set();

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        boxValues.add(board[startRow + i][startCol + j]);
      }
    }

    return !rowValues.has(val) && !colValues.has(val) && !boxValues.has(val);
  };

  const checkWin = (newBoard) => {
    const filled = newBoard.every(row => row.every(cell => cell !== null));
    if (filled) {
      setWin(true);
    }
  };

  const newGame = () => {
    const randomLevel = Math.floor(Math.random() * 5);
    navigate(`/sudoku/${difficulty}/${randomLevel}`);
  };

  if (!board || board.length === 0) {
    return <div className="sudoku-wrapper"><p>Loading puzzle...</p></div>;
  }

  return (
    <div className="sudoku-wrapper">
      <div className="sudoku-header">
        <h2>{difficulty.toUpperCase()} - Level {parseInt(level) + 1}</h2>
        <p>Lives: {lives}</p>
        <div className="sudoku-controls">
          <button onClick={() => navigate('/sudokumenu')}>Return Home</button>
          <button onClick={newGame}>New Game</button>
        </div>
      </div>

      <div
        className="sudoku-grid"
        style={{ gridTemplateColumns: `repeat(${board.length}, 50px)` }}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              maxLength="1"
              value={cell || ''}
              onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
              className={initialBoard[rowIndex][colIndex] !== null ? 'fixed' : ''}
            />
          ))
        )}
      </div>

      {lives <= 0 && <div className="game-over">Game Over</div>}
      {win && <div className="game-win">🎉 You Win!</div>}
    </div>
  );
}
