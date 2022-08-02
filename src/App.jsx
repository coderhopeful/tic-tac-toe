import './App.css';
import { useState } from "react"
import Board from "./components/Board"
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';
import { ToastContainer, toast,Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [xPlaying, setXPlaying] = useState(true)

  const [score, setScore] = useState({ xScore: 0, oScore: 0 })

  const [gameOver, setGameOver] = useState(false)

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const handleBoxClick = (bindex) => {

    const updatedBoard = board.map((value, index) => {

      if (bindex === index) {

        return xPlaying ? "X" : "O";

      } else {
        return value;
      }
    })

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner == "O") {
        let { oScore } = score;
        oScore++;
        setScore({ ...score, oScore })
        toast.info("O Wins!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000,theme: "colored" });
      } else {
        let { xScore } = score;
        xScore++;
        setScore({ ...score, xScore })
        toast.error("X Wins!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000,theme: "colored" });

      }
    }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);

  }

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] == board[y] && board[y] == board[z]) {
        setGameOver(true)
        return board[x];
      }

    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null))

  }


  return (
    <div className="App">
      <h1>tic tac toe</h1>
      <ToastContainer transition={Zoom}  />
      <ScoreBoard score={score} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
      
    </div>
  );
}

export default App;
