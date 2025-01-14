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

const pokemonIds = createRandomIds(12);

function App() {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    return (
        <>
            <Header></Header>
            <Instructions></Instructions>
            <Score currentScore={currentScore} bestScore={bestScore}></Score>
            <div className="cards">
                {pokemonIds.map((id) => {
                    return <Card id={id} key={id}></Card>;
                })}
            </div>
        </>
    );
}

export default App;
