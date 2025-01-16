import { useState } from "react";
import { Header } from "./components/Header";
import { Instructions } from "./components/Instructions";
import { Score } from "./components/Score";
import { Card } from "./components/Card";
import "./App.css";

function createRandomIds(n) {
    const newSet = new Set();

    while (newSet.size < n) {
        newSet.add(1 + Math.floor(Math.random() * 1000));
    }

    return Array.from(newSet);
}

function App() {
    const [pokemonIds, setPokemonIds] = useState(createRandomIds(12));
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    const incrementScores = () => {
        setCurrentScore((prevScore) => prevScore + 1);
        currentScore + 1 > bestScore
            ? setBestScore((prevBest) => prevBest + 1)
            : null;
    };

    const updateClickedCards = (id) => {
        setClickedCards((prevClickedCards) => {
            return [...prevClickedCards, id];
        });
    };

    const shuffleCards = () => {
        setPokemonIds((prevIdOrder) => {
            return prevIdOrder.sort(() => Math.random() - 0.5);
        });
    };

    const continueGame = (id) => {
        incrementScores();
        updateClickedCards(id);
        shuffleCards();
    };

    const resetGame = () => {
        setCurrentScore(0);
        setClickedCards([]);
    };

    const handleClickIntermediate = (id) => {
        clickedCards.includes(id) ? resetGame() : continueGame(id);
    };

    return (
        <>
            <Header></Header>
            <Instructions></Instructions>
            <Score currentScore={currentScore} bestScore={bestScore}></Score>
            <div className="cards">
                {pokemonIds.map((id) => {
                    const handleClick = () => handleClickIntermediate(id);
                    return (
                        <Card id={id} key={id} handleClick={handleClick}></Card>
                    );
                })}
            </div>
        </>
    );
}

export default App;
