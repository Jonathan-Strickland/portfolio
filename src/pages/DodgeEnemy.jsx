import { useEffect, useRef, useState } from 'react';
import './Dodge.css';

export default function DodgeTheEnemy() {
  const canvasRef = useRef(null);
  const [player, setPlayer] = useState({ x: 200, y: 450, size: 20 });
  const [enemies, setEnemies] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [health, setHealth] = useState(3);
  const [invincible, setInvincible] = useState(false);
  const keysPressed = useRef({});
  const damageCooldown = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lastEnemyTime = 0;
    const gameStart = performance.now();

    const handleKeyDown = (e) => {
      keysPressed.current[e.key] = true;
    };

    const handleKeyUp = (e) => {
      keysPressed.current[e.key] = false;
    };

    const spawnEnemyGroup = () => {
      const groupSize = 4 + Math.floor(Math.random() * 2); // 4-5 enemies
      const spacing = canvas.width / (groupSize + 1);
      const gapIndex = Math.floor(Math.random() * (groupSize + 1));
      const newEnemies = [];

      for (let i = 0; i <= groupSize; i++) {
        if (i === gapIndex) continue;
        const size = 15 + Math.random() * 2;
        const x = spacing * i + Math.random() * (spacing - size);
        newEnemies.push({ x, y: -size, size });
      }

      setEnemies((prev) => {
        if (prev.length < 25) {
          return [...prev, ...newEnemies];
        }
        return prev;
      });
    };

    const updateGame = (timestamp) => {
      if (gameOver || win) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Player movement
      setPlayer((prev) => {
        let newX = prev.x;
        if (keysPressed.current['ArrowLeft']) newX = Math.max(0, newX - 2);
        if (keysPressed.current['ArrowRight']) newX = Math.min(canvas.width - prev.size, newX + 2);
        return { ...prev, x: newX };
      });

      // Player
      ctx.fillStyle = invincible ? '#90e0ef' : '#4cc9f0';
      ctx.fillRect(player.x, player.y, player.size, player.size);

      // Enemies
      ctx.fillStyle = '#f94144';
      setEnemies((prev) => {
        return prev
          .map((enemy) => ({ ...enemy, y: enemy.y + 1 }))
          .filter((enemy) => {
            const collision =
              enemy.x < player.x + player.size &&
              enemy.x + enemy.size > player.x &&
              enemy.y < player.y + player.size &&
              enemy.y + enemy.size > player.y;

            if (collision && !invincible && !damageCooldown.current) {
              damageCooldown.current = true;
              setHealth((h) => {
                const newHealth = h - 1;
                if (newHealth <= 0) {
                  setGameOver(true);
                } else {
                  setInvincible(true);
                  setTimeout(() => {
                    setInvincible(false);
                    damageCooldown.current = false;
                  }, 5000);
                }
                return newHealth;
              });
            }
            return enemy.y < canvas.height;
          });
      });


      enemies.forEach((enemy) => {
        ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
      });

      if (!gameOver && !win) {
        setScore((prev) => prev + 1);
      }

      if (timestamp - gameStart >= 60000) {
        setWin(true);
        return;
      }

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    const gameLoop = (timestamp) => {
      if (!gameOver && !win) {
        if (timestamp - lastEnemyTime > 2000) {
          spawnEnemyGroup();
          lastEnemyTime = timestamp;
        }
        updateGame(timestamp);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    animationFrameId = requestAnimationFrame(gameLoop);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [player, enemies, gameOver, win, invincible]);

  const restartGame = () => {
    setPlayer({ x: 200, y: 450, size: 20 });
    setEnemies([]);
    setScore(0);
    setGameOver(false);
    setWin(false);
    setHealth(3);
    setInvincible(false);
  };

  return (
    <div className="dodge-wrapper">
      <h2>Dodge the Enemy</h2>
      <p>Use Arrow Keys Left & Right</p>
      <canvas ref={canvasRef} width={500} height={500}></canvas>
  
      <div className="hud">
        <p>Score: {score}</p>
        <p>Health: {health}</p>
      </div>
  
      {gameOver && <div className="game-over">💀 Game Over</div>}
      {win && <div className="game-win">🎉 You Win!</div>}
  
      {(gameOver || win) && (
        <button className="restart-btn" onClick={restartGame}>Play Again</button>
      )}
  
      {/* ✅ Mobile Controls Here */}
      {!gameOver && !win && (
        <div className="mobile-controls">
          <button
            onTouchStart={() => (keysPressed.current['ArrowLeft'] = true)}
            onTouchEnd={() => (keysPressed.current['ArrowLeft'] = false)}
          >
            ◀️
          </button>
          <button
            onTouchStart={() => (keysPressed.current['ArrowRight'] = true)}
            onTouchEnd={() => (keysPressed.current['ArrowRight'] = false)}
          >
            ▶️
          </button>
        </div>
      )}
    </div>
  );
  
}
