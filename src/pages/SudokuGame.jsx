// SudokuGame.jsx (updated with mobile-only number pad)
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { puzzles } from '../data/puzzles';
import './Sudoku.css';

export default function SudokuGame() {
  const { difficulty, level } = useParams();
  const navigate = useNavigate();

  const [initialBoard, setInitialBoard] = useState([]);
  const [board, setBoard] = useState([]);
  const [lives, setLives] = useState(3);
  const [win, setWin] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);

  useEffect(() => {
    const selected = puzzles[difficulty]?.[level];
    if (!selected) return;
    setInitialBoard(selected);
    setBoard(JSON.parse(JSON.stringify(selected)));
    setLives(3);
    setWin(false);
    setSelectedCell(null);
  }, [difficulty, level]);

  const checkSolution = (currentBoard, row, col, val) => {
    const size = currentBoard.length;
    const boxSize = Math.sqrt(size);
    for (let i = 0; i < size; i++) {
      if (i !== col && currentBoard[row][i] === val) return false;
      if (i !== row && currentBoard[i][col] === val) return false;
    }
    const startRow = Math.floor(row / boxSize) * boxSize;
    const startCol = Math.floor(col / boxSize) * boxSize;
    for (let i = 0; i < boxSize; i++) {
      for (let j = 0; j < boxSize; j++) {
        const r = startRow + i;
        const c = startCol + j;
        if ((r !== row || c !== col) && currentBoard[r][c] === val) return false;
      }
    }
    return true;
  };

  const checkWin = (newBoard) => {
    const filled = newBoard.every(row => row.every(cell => cell !== null));
    if (filled) {
      setWin(true);
    }
  };

  const handleChange = (row, col, value) => {
    if (initialBoard[row][col] !== null || lives <= 0 || win) return;
    if (value === '') {
      const clearedBoard = board.map((r, i) =>
        r.map((c, j) => (i === row && j === col ? null : c))
      );
      setBoard(clearedBoard);
      return;
    }
    const newValue = parseInt(value);
    if (!newValue || newValue < 1 || newValue > board.length) return;
    if (board[row][col] !== null) return;

    const updatedBoard = board.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? newValue : c))
    );
    setBoard(updatedBoard);

    const correct = checkSolution(updatedBoard, row, col, newValue);
    if (!correct) {
      setLives(prev => prev - 1);
    } else {
      checkWin(updatedBoard);
    }
  };

  const handlePadClick = (value) => {
    if (!selectedCell) return;
    const [row, col] = selectedCell;
    handleChange(row, col, value);
  };

  const newGame = () => {
    const randomLevel = Math.floor(Math.random() * (puzzles[difficulty]?.length || 1));
    navigate(`/sudoku/${difficulty}/${randomLevel}`);
  };

  const isMobile = window.innerWidth <= 768;

  if (!board || board.length === 0) return <div className="sudoku-wrapper"><p>Loading puzzle...</p></div>;

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
        style={{ gridTemplateColumns: `repeat(${board.length}, minmax(0, 1fr))` }}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              maxLength="1"
              value={cell || ''}
              onClick={() => setSelectedCell([rowIndex, colIndex])}
              onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
              className={initialBoard[rowIndex][colIndex] !== null ? 'fixed' : ''}
            />
          ))
        )}
      </div>

      {isMobile && (
        <div className="mobile-pad">
          {[...Array(board.length)].map((_, i) => (
            <button key={i + 1} onClick={() => handlePadClick(String(i + 1))}>{i + 1}</button>
          ))}
          <button className="erase" onClick={() => handlePadClick('')}>Erase</button>
        </div>
      )}

      {lives <= 0 && <div className="game-over">Game Over</div>}
      {win && <div className="game-win">🎉 You Win!</div>}
    </div>
  );
}
