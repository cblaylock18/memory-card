function Score({ currentScore, bestScore }) {
    return (
        <div className="scores">
            <div className="current-score score">
                Current Score: {currentScore}
            </div>
            <div className="best-score score">Best Score: {bestScore}</div>
        </div>
    );
}

export { Score };
