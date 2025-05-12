import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './sudoku.css';

export default function SudokuMenu() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [difficultyPicked, setDifficultyPicked] = useState('');

  const startGame = (difficulty) => {
    const level = Math.floor(Math.random() * 5);
    setDifficultyPicked(difficulty);
    setSelectedLevel(level);
    setTimeout(() => {
      navigate(`/sudoku/${difficulty}/${level}`);
    }, 1000);
  };

  return (
    <div className="sudoku-menu">
      <h2>Select Difficulty</h2>
      <div className="difficulty-buttons">
        <button onClick={() => startGame('easy')}>Easy</button>
        <button onClick={() => startGame('medium')}>Medium</button>
        <button onClick={() => startGame('hard')}>Hard</button>
      </div>
      {selectedLevel !== null && (
        <p>
          Loading {difficultyPicked.toUpperCase()} - Level {selectedLevel + 1}...
        </p>
      )}
    </div>
  );
}